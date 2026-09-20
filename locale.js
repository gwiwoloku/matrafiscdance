(() => {
  const LANG_KEY = 'matrafisc-language';
  const COUNTRY_KEY = 'matrafisc-country';
  const PROMPT_KEY = 'matrafisc-auto-language-prompted';
  const currentLanguage = document.documentElement.lang.toLowerCase().startsWith('it') ? 'it' : 'en';

  function safeGet(storage, key) {
    try { return storage.getItem(key); } catch (_) { return null; }
  }

  function safeSet(storage, key, value) {
    try { storage.setItem(key, value); } catch (_) {}
  }

  function englishToItalian(pathname) {
    if (/\/it\//.test(pathname)) return pathname;
    if (/\/privacy\.html$/.test(pathname)) return pathname.replace(/privacy\.html$/, 'it/privacy.html');
    if (/\/terms\.html$/.test(pathname)) return pathname.replace(/terms\.html$/, 'it/terms.html');
    if (/\/index\.html$/.test(pathname)) return pathname.replace(/index\.html$/, 'it/');
    return pathname.endsWith('/') ? pathname + 'it/' : pathname.replace(/[^/]*$/, 'it/');
  }

  function italianToEnglish(pathname) {
    if (/\/it\/privacy\.html$/.test(pathname)) return pathname.replace(/it\/privacy\.html$/, 'privacy.html');
    if (/\/it\/terms\.html$/.test(pathname)) return pathname.replace(/it\/terms\.html$/, 'terms.html');
    if (/\/it\/index\.html$/.test(pathname)) return pathname.replace(/it\/index\.html$/, '');
    if (/\/it\/$/.test(pathname)) return pathname.replace(/it\/$/, '');
    return pathname.replace(/\/it\//, '/');
  }

  function navigateTo(language, automaticReason = '') {
    const url = new URL(window.location.href);
    url.pathname = language === 'it' ? englishToItalian(url.pathname) : italianToEnglish(url.pathname);
    url.searchParams.delete('auto');
    if (automaticReason) url.searchParams.set('auto', automaticReason);
    url.hash = '';
    window.location.replace(url.toString());
  }

  function browserPrefersItalian() {
    const languages = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ''];
    return languages.some(language => /^it(?:-|$)/i.test(language));
  }

  async function countryFromCloudflare() {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 1200);
    try {
      const response = await fetch('/cdn-cgi/trace', { cache: 'no-store', signal: controller.signal });
      if (!response.ok) return '';
      const text = await response.text();
      const match = text.match(/^loc=([A-Z]{2})$/m);
      return match?.[1] || '';
    } catch (_) {
      return '';
    } finally {
      window.clearTimeout(timer);
    }
  }

  async function countryFromGeoJS() {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 1800);
    try {
      const response = await fetch('https://get.geojs.io/v1/ip/country.json', {
        cache: 'no-store',
        signal: controller.signal
      });
      if (!response.ok) return '';
      const result = await response.json();
      return String(result.country || '').toUpperCase();
    } catch (_) {
      return '';
    } finally {
      window.clearTimeout(timer);
    }
  }

  async function detectCountry() {
    const cached = safeGet(sessionStorage, COUNTRY_KEY);
    if (cached) return cached;

    let country = await countryFromCloudflare();
    if (!country) country = await countryFromGeoJS();

    if (country) safeSet(sessionStorage, COUNTRY_KEY, country);
    return country;
  }

  function installLanguageSwitches() {
    document.querySelectorAll('[data-language-switch]').forEach(link => {
      link.addEventListener('click', () => {
        const language = link.dataset.languageSwitch === 'it' ? 'it' : 'en';
        safeSet(localStorage, LANG_KEY, language);
      });
    });
  }

  function showAutomaticItalianPrompt() {
    if (currentLanguage !== 'it') return;

    const params = new URLSearchParams(window.location.search);
    if (!params.get('auto')) return;
    if (safeGet(localStorage, LANG_KEY)) return;
    if (safeGet(sessionStorage, PROMPT_KEY)) return;

    safeSet(sessionStorage, PROMPT_KEY, '1');

    const prompt = document.createElement('aside');
    prompt.className = 'language-prompt';
    prompt.setAttribute('role', 'dialog');
    prompt.setAttribute('aria-label', 'Scelta della lingua');
    prompt.innerHTML = `
      <div>
        <i class="fa-solid fa-language" aria-hidden="true"></i>
        <p><strong>Abbiamo aperto il sito in italiano.</strong><span>Preferisci visitare il sito in inglese?</span></p>
      </div>
      <div class="language-prompt-actions">
        <button type="button" data-auto-language="en">English site</button>
        <button type="button" data-auto-language="it">Continua in italiano</button>
      </div>`;

    document.body.appendChild(prompt);

    prompt.querySelector('[data-auto-language="en"]')?.addEventListener('click', () => {
      safeSet(localStorage, LANG_KEY, 'en');
      navigateTo('en');
    });

    prompt.querySelector('[data-auto-language="it"]')?.addEventListener('click', () => {
      safeSet(localStorage, LANG_KEY, 'it');
      const url = new URL(window.location.href);
      url.searchParams.delete('auto');
      history.replaceState({}, '', url.pathname + url.search + url.hash);
      prompt.remove();
    });
  }

  async function autoSelectLanguage() {
    const preference = safeGet(localStorage, LANG_KEY);

    if (currentLanguage === 'it') {
      if (preference === 'en') navigateTo('en');
      return;
    }

    if (preference === 'it') {
      navigateTo('it');
      return;
    }
    if (preference === 'en') return;

    if (browserPrefersItalian()) {
      navigateTo('it', 'browser');
      return;
    }

    const country = await detectCountry();
    if (country === 'IT') navigateTo('it', 'country');
  }

  window.MatrafiscLocale = {
    set(language) {
      safeSet(localStorage, LANG_KEY, language === 'it' ? 'it' : 'en');
      navigateTo(language === 'it' ? 'it' : 'en');
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      installLanguageSwitches();
      showAutomaticItalianPrompt();
    });
  } else {
    installLanguageSwitches();
    showAutomaticItalianPrompt();
  }

  autoSelectLanguage();
})();