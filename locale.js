(() => {
  const LANG_KEY = 'matrafisc-language';
  const COUNTRY_KEY = 'matrafisc-country';
  const PROMPT_KEY = 'matrafisc-language-prompted';
  const currentLanguage = document.documentElement.lang.toLowerCase().startsWith('it') ? 'it' : 'en';

  function safeGet(storage, key) {
    try { return storage.getItem(key); } catch (_) { return null; }
  }

  function safeSet(storage, key, value) {
    try { storage.setItem(key, value); } catch (_) {}
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

  function targetFor(language) {
    const link = document.querySelector(`[data-language-switch="${language}"]`);
    if (link?.href) return link.href;

    const root = language === 'it' ? '/it/' : '/';
    return new URL(root, window.location.origin).href;
  }

  function installLanguageSwitches() {
    document.querySelectorAll('[data-language-switch]').forEach(link => {
      link.addEventListener('click', () => {
        const language = link.dataset.languageSwitch === 'it' ? 'it' : 'en';
        safeSet(localStorage, LANG_KEY, language);
      });
    });
  }

  function showLanguageSuggestion(targetLanguage, reason = '') {
    if (targetLanguage === currentLanguage) return;
    if (safeGet(sessionStorage, PROMPT_KEY) === `${currentLanguage}:${targetLanguage}`) return;

    safeSet(sessionStorage, PROMPT_KEY, `${currentLanguage}:${targetLanguage}`);

    const italianTarget = targetLanguage === 'it';
    const prompt = document.createElement('aside');
    prompt.className = 'language-prompt';
    prompt.setAttribute('role', 'dialog');
    prompt.setAttribute('aria-label', italianTarget ? 'Scelta della lingua' : 'Language choice');

    const context = reason === 'saved'
      ? (italianTarget ? 'Hai scelto l’italiano in precedenza.' : 'You previously chose English.')
      : (italianTarget ? 'Il tuo browser o la tua posizione suggeriscono l’italiano.' : 'Your saved preference is English.');

    prompt.innerHTML = `
      <div>
        <i class="fa-solid fa-language" aria-hidden="true"></i>
        <p>
          <strong>${italianTarget ? 'Preferisci il sito in italiano?' : 'Prefer the English website?'}</strong>
          <span>${context}</span>
        </p>
      </div>
      <div class="language-prompt-actions">
        <a class="language-prompt-primary" href="${targetFor(targetLanguage)}" data-language-suggestion="${targetLanguage}">
          ${italianTarget ? 'Vai al sito italiano' : 'Go to English site'}
        </a>
        <button type="button" data-language-dismiss>
          ${italianTarget ? 'Resta in inglese' : 'Continua in italiano'}
        </button>
      </div>`;

    document.body.appendChild(prompt);

    prompt.querySelector('[data-language-suggestion]')?.addEventListener('click', event => {
      const language = event.currentTarget.dataset.languageSuggestion;
      safeSet(localStorage, LANG_KEY, language);
    });

    prompt.querySelector('[data-language-dismiss]')?.addEventListener('click', () => {
      safeSet(localStorage, LANG_KEY, currentLanguage);
      prompt.remove();
    });
  }

  async function recommendLanguage() {
    const preference = safeGet(localStorage, LANG_KEY);

    if (preference && preference !== currentLanguage) {
      showLanguageSuggestion(preference, 'saved');
      return;
    }

    if (currentLanguage !== 'en' || preference === 'en') return;

    if (browserPrefersItalian()) {
      showLanguageSuggestion('it', 'browser');
      return;
    }

    const country = await detectCountry();
    if (country === 'IT') showLanguageSuggestion('it', 'country');
  }

  window.MatrafiscLocale = {
    set(language) {
      const targetLanguage = language === 'it' ? 'it' : 'en';
      safeSet(localStorage, LANG_KEY, targetLanguage);
      window.location.assign(targetFor(targetLanguage));
    }
  };

  const initialize = () => {
    installLanguageSwitches();

    // Browser-language checks are cheap, while country detection can require a
    // network request. Run localisation after the critical rendering path so it
    // cannot compete with LCP resources.
    const runRecommendation = () => recommendLanguage();
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(runRecommendation, { timeout: 1800 });
    } else {
      window.setTimeout(runRecommendation, 700);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();