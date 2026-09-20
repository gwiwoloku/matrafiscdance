(() => {
  const isItalian = document.documentElement.lang.toLowerCase().startsWith('it');
  const form = document.getElementById('contact-form');
  const typeField = document.getElementById('contact-type');
  const workWrap = document.getElementById('contact-work-wrap');
  const workField = document.getElementById('contact-work');
  const messageField = document.getElementById('contact-message');
  const status = document.getElementById('contact-status');
  const dialog = document.getElementById('work-dialog');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuIcon = menuToggle?.querySelector('i');
  const submitButton = form?.querySelector('.contact-submit');
  const targetEmail = 'matrafiscdance@gmail.com';
  const formSubmitEndpoint = `https://formsubmit.co/ajax/${targetEmail}`;
  const defaultSubmitMarkup = submitButton?.innerHTML || (isItalian ? 'Invia richiesta' : 'Send enquiry');

  const copy = isItalian ? {
    ready: 'La tua richiesta verrà inviata direttamente a Matrafisc Dance.',
    sending: 'Invio della richiesta…',
    sent: 'Grazie — la tua richiesta è stata inviata a Matrafisc Dance.',
    invalid: 'Completa i campi obbligatori prima di inviare la richiesta.',
    failed: 'Non è stato possibile inviare la richiesta. Riprova oppure scrivi a',
    preparedWork: work => `Richiesta preparata per ${work}. Aggiungi i tuoi dati e il messaggio, poi invia.`,
    prepared: 'I dettagli della richiesta sono stati precompilati. Aggiungi i tuoi dati e il messaggio, poi invia.',
    sendingButton: 'Invio',
    enquireLink: 'Richiedi informazioni su quest’opera',
    workPrompt: work => work
      ? `Ciao Matrafisc Dance,\n\nsono interessato/a a ${work} e vorrei ricevere informazioni sulla possibilità di presentare o programmare questo lavoro, oppure saperne di più.\n\n`
      : 'Ciao Matrafisc Dance,\n\nvorrei ricevere informazioni su uno dei vostri lavori.\n\n',
    prompts: {
      'Touring / programming': 'Ciao Matrafisc Dance,\n\nvorrei parlare di una possibile programmazione o tournée della compagnia.\n\n',
      'Collaboration': 'Ciao Matrafisc Dance,\n\nvorrei parlare di una possibile collaborazione con la compagnia.\n\n',
      'Workshop / education': 'Ciao Matrafisc Dance,\n\nvorrei ricevere informazioni su workshop, progetti educativi o residenze.\n\n',
      'Press / media': 'Ciao Matrafisc Dance,\n\nvorrei fare una richiesta stampa o media.\n\n'
    },
    subjectType: {
      'Work enquiry': 'Richiesta opera',
      'Touring / programming': 'Tournée / programmazione',
      'Collaboration': 'Collaborazione',
      'Workshop / education': 'Workshop / formazione',
      'Press / media': 'Stampa / media',
      'General enquiry': 'Richiesta generale'
    }
  } : {
    ready: 'Your enquiry will be sent directly to Matrafisc Dance.',
    sending: 'Sending your enquiry…',
    sent: 'Thank you — your enquiry has been sent to Matrafisc Dance.',
    invalid: 'Please complete the required fields before sending your enquiry.',
    failed: 'The enquiry could not be sent. Please try again or email',
    preparedWork: work => `Enquiry prepared for ${work}. Add your details and message, then send.`,
    prepared: 'Enquiry details have been prefilled. Add your contact details and message, then send.',
    sendingButton: 'Sending',
    enquireLink: 'Enquire about this work',
    workPrompt: work => work
      ? `Hello Matrafisc Dance,\n\nI'm interested in ${work} and would like to enquire about presenting, programming or learning more about this work.\n\n`
      : `Hello Matrafisc Dance,\n\nI'd like to enquire about one of your works.\n\n`,
    prompts: {
      'Touring / programming': `Hello Matrafisc Dance,\n\nI'd like to discuss programming or touring opportunities with the company.\n\n`,
      'Collaboration': `Hello Matrafisc Dance,\n\nI'd like to discuss a potential collaboration with the company.\n\n`,
      'Workshop / education': `Hello Matrafisc Dance,\n\nI'd like to enquire about a workshop, educational project or residency.\n\n`,
      'Press / media': `Hello Matrafisc Dance,\n\nI'd like to make a press or media enquiry.\n\n`
    },
    subjectType: {}
  };

  if (form) {
    form.action = `https://formsubmit.co/${targetEmail}`;
    form.method = 'POST';
    form.removeAttribute('enctype');

    const honeypot = document.createElement('input');
    honeypot.type = 'text';
    honeypot.name = '_honey';
    honeypot.autocomplete = 'off';
    honeypot.tabIndex = -1;
    honeypot.setAttribute('aria-hidden', 'true');
    honeypot.style.position = 'absolute';
    honeypot.style.left = '-10000px';
    honeypot.style.width = '1px';
    honeypot.style.height = '1px';
    honeypot.style.opacity = '0';
    form.appendChild(honeypot);
  }

  if (status) status.textContent = copy.ready;

  function updateWorkField() {
    const isWork = typeField?.value === 'Work enquiry';
    if (workWrap) workWrap.hidden = !isWork;
    if (workField) workField.required = Boolean(isWork);
    if (!isWork && workField) workField.value = '';
  }

  function setSubmitting(isSubmitting) {
    if (!submitButton) return;
    submitButton.disabled = isSubmitting;
    submitButton.setAttribute('aria-busy', String(isSubmitting));
    submitButton.innerHTML = isSubmitting
      ? `${copy.sendingButton} <i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i>`
      : defaultSubmitMarkup;
  }

  function fillEnquiry(type, work = '') {
    if (!form || !typeField) return;

    const available = [...typeField.options].some(option => option.value === type);
    typeField.value = available ? type : 'General enquiry';
    updateWorkField();

    if (type === 'Work enquiry' && workField) {
      const workExists = [...workField.options].some(option => option.value === work);
      workField.value = workExists ? work : '';
      if (messageField && !messageField.value.trim()) messageField.value = copy.workPrompt(work);
    } else if (messageField && !messageField.value.trim()) {
      messageField.value = copy.prompts[type] || '';
    }

    if (status) {
      status.textContent = type === 'Work enquiry' && work ? copy.preparedWork(work) : copy.prepared;
      status.className = 'contact-status is-ready';
    }

    if (dialog?.open) dialog.close();
    document.body.classList.remove('dialog-open');

    requestAnimationFrame(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.setTimeout(() => document.getElementById('contact-name')?.focus({ preventScroll: true }), 450);
    });
  }

  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-enquiry]');
    if (!trigger) return;
    event.preventDefault();
    fillEnquiry(trigger.dataset.enquiry || 'General enquiry', trigger.dataset.workTitle || '');
  });

  typeField?.addEventListener('change', updateWorkField);
  updateWorkField();

  form?.addEventListener('submit', async event => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      if (status) {
        status.textContent = copy.invalid;
        status.className = 'contact-status is-error';
      }
      return;
    }

    const data = new FormData(form);
    if (String(data.get('_honey') || '').trim()) {
      form.reset();
      updateWorkField();
      return;
    }

    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const type = String(data.get('enquiryType') || 'General enquiry').trim();
    const work = String(data.get('work') || '').trim();
    const message = String(data.get('message') || '').trim();
    const subjectType = copy.subjectType[type] || type;
    const subject = work
      ? `Matrafisc Dance — ${subjectType} — ${work}`
      : `Matrafisc Dance — ${subjectType}`;

    const payload = {
      name,
      email,
      enquiryType: subjectType,
      message,
      _subject: subject,
      _template: 'table',
      _honey: '',
      _url: window.location.href
    };

    if (work) payload.work = work;

    setSubmitting(true);
    if (status) {
      status.textContent = copy.sending;
      status.className = 'contact-status';
    }

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => null);
      const success = result?.success === true || result?.success === 'true';

      if (!response.ok || !success) {
        console.error('FormSubmit rejected the enquiry:', {
          status: response.status,
          statusText: response.statusText,
          result
        });
        throw new Error(result?.message || `FormSubmit returned ${response.status}`);
      }

      form.reset();
      updateWorkField();

      if (status) {
        status.textContent = copy.sent;
        status.className = 'contact-status is-ready';
      }
    } catch (error) {
      console.error('Matrafisc contact form submission failed:', error);
      if (status) {
        status.innerHTML = `${copy.failed} <a href="mailto:${targetEmail}">${targetEmail}</a>.`;
        status.className = 'contact-status is-error';
      }
    } finally {
      setSubmitting(false);
    }
  });

  // Work enquiry links are rendered correctly by script.js in both languages.
  // Do not observe/rewrite dialog contents here: rewriting the link from inside a
  // childList MutationObserver creates a self-triggering mutation loop.
  
  menuToggle?.addEventListener('click', () => {
    requestAnimationFrame(() => {
      const open = document.body.classList.contains('menu-open');
      menuIcon?.classList.toggle('fa-bars', !open);
      menuIcon?.classList.toggle('fa-xmark', open);
    });
  });

  document.querySelectorAll('.site-nav a').forEach(link => link.addEventListener('click', () => {
    menuIcon?.classList.add('fa-bars');
    menuIcon?.classList.remove('fa-xmark');
  }));

  const params = new URLSearchParams(window.location.search);
  const queryType = params.get('enquiry');
  const queryWork = params.get('work');
  if (queryType) {
    const typeMap = {
      work: 'Work enquiry',
      touring: 'Touring / programming',
      collaboration: 'Collaboration',
      workshop: 'Workshop / education',
      press: 'Press / media',
      general: 'General enquiry'
    };
    fillEnquiry(typeMap[queryType.toLowerCase()] || 'General enquiry', queryWork || '');
  }
})();