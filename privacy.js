(() => {
  const CONSENT_KEY = 'matrafisc-media-consent';
  const isItalian = document.documentElement.lang.toLowerCase().startsWith('it');

  const copy = isItalian ? {
    title: 'Scelte sulla privacy',
    body: 'Usiamo solo archiviazione locale necessaria per ricordare lingua e preferenze. Video e contenuti esterni di YouTube, Vimeo e Instagram vengono caricati solo con il tuo consenso.',
    allow: 'Consenti contenuti esterni',
    reject: 'Solo necessari',
    settings: 'Scelte sulla privacy',
    blocked: 'Contenuto esterno bloccato per proteggere la tua privacy.',
    load: 'Consenti e visualizza',
    privacy: 'Informativa privacy',
    saved: 'Preferenza salvata.'
  } : {
    title: 'Privacy choices',
    body: 'We use only necessary local storage to remember language and privacy preferences. External YouTube, Vimeo and Instagram media loads only with your consent.',
    allow: 'Allow external media',
    reject: 'Necessary only',
    settings: 'Privacy choices',
    blocked: 'External media is blocked to protect your privacy.',
    load: 'Allow and view',
    privacy: 'Privacy policy',
    saved: 'Preference saved.'
  };

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (_) { return null; }
  }

  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (_) {}
  }

  function privacyPath() {
    return isItalian ? 'privacy.html' : 'privacy.html';
  }

  function activateMedia(root = document) {
    root.querySelectorAll('[data-media-src]').forEach(frame => {
      if (!frame.getAttribute('src')) {
        frame.setAttribute('src', frame.dataset.mediaSrc);
      }
      frame.closest('.media-consent-gate')?.setAttribute('data-media-loaded', 'true');
    });
  }

  function deactivateMedia() {
    document.querySelectorAll('[data-media-src]').forEach(frame => {
      frame.removeAttribute('src');
      frame.closest('.media-consent-gate')?.removeAttribute('data-media-loaded');
    });
  }

  function applyConsent(value) {
    if (value === 'accepted') activateMedia();
    else deactivateMedia();
  }

  function closeBanner() {
    document.querySelector('.privacy-banner')?.remove();
  }

  function saveConsent(value) {
    safeSet(CONSENT_KEY, value);
    applyConsent(value);
    closeBanner();
  }

  function showBanner(force = false) {
    if (!force && safeGet(CONSENT_KEY)) return;
    closeBanner();

    const banner = document.createElement('aside');
    banner.className = 'privacy-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', copy.title);

    const policyHref = isItalian ? 'privacy.html' : 'privacy.html';
    banner.innerHTML = `
      <div class="privacy-banner-copy">
        <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
        <div>
          <strong>${copy.title}</strong>
          <p>${copy.body} <a href="${policyHref}">${copy.privacy}</a>.</p>
        </div>
      </div>
      <div class="privacy-banner-actions">
        <button type="button" class="privacy-secondary" data-privacy-choice="rejected">${copy.reject}</button>
        <button type="button" class="privacy-primary" data-privacy-choice="accepted">${copy.allow}</button>
      </div>`;

    document.body.appendChild(banner);

    banner.querySelectorAll('[data-privacy-choice]').forEach(button => {
      button.addEventListener('click', () => saveConsent(button.dataset.privacyChoice));
    });
  }

  function bindMediaButtons(root = document) {
    root.querySelectorAll('[data-allow-media]').forEach(button => {
      if (button.dataset.bound === '1') return;
      button.dataset.bound = '1';
      button.addEventListener('click', () => saveConsent('accepted'));
    });
  }

  function initialize() {
    const consent = safeGet(CONSENT_KEY);
    applyConsent(consent);
    bindMediaButtons();

    if (!consent) showBanner();

    document.querySelectorAll('[data-privacy-settings]').forEach(button => {
      button.addEventListener('click', () => showBanner(true));
    });

    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (!(node instanceof Element)) return;
          bindMediaButtons(node);
          if (safeGet(CONSENT_KEY) === 'accepted') activateMedia(node);
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  window.MatrafiscPrivacy = {
    showSettings: () => showBanner(true),
    allowMedia: () => saveConsent('accepted'),
    necessaryOnly: () => saveConsent('rejected')
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})();