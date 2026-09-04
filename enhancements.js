(() => {
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
  const defaultSubmitMarkup = submitButton?.innerHTML || 'Send enquiry';

  // Progressive enhancement: the HTML form remains usable without JavaScript,
  // while JavaScript submissions use FormSubmit's documented JSON AJAX endpoint.
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

  if (status) {
    status.textContent = 'Your enquiry will be sent directly to Matrafisc Dance.';
  }

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
      ? 'Sending <i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i>'
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
      if (messageField && !messageField.value.trim()) {
        messageField.value = work
          ? `Hello Matrafisc Dance,\n\nI'm interested in ${work} and would like to enquire about presenting, programming or learning more about this work.\n\n`
          : `Hello Matrafisc Dance,\n\nI'd like to enquire about one of your works.\n\n`;
      }
    } else if (messageField && !messageField.value.trim()) {
      const prompts = {
        'Touring / programming': `Hello Matrafisc Dance,\n\nI'd like to discuss programming or touring opportunities with the company.\n\n`,
        'Collaboration': `Hello Matrafisc Dance,\n\nI'd like to discuss a potential collaboration with the company.\n\n`,
        'Workshop / education': `Hello Matrafisc Dance,\n\nI'd like to enquire about a workshop, educational project or residency.\n\n`,
        'Press / media': `Hello Matrafisc Dance,\n\nI'd like to make a press or media enquiry.\n\n`
      };
      messageField.value = prompts[type] || '';
    }

    if (status) {
      status.textContent = type === 'Work enquiry' && work
        ? `Enquiry prepared for ${work}. Add your details and message, then send.`
        : 'Enquiry details have been prefilled. Add your contact details and message, then send.';
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
        status.textContent = 'Please complete the required fields before sending your enquiry.';
        status.className = 'contact-status is-error';
      }
      return;
    }

    const data = new FormData(form);

    // Silently discard obvious bot submissions caught by the honeypot.
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
    const subject = work
      ? `Matrafisc Dance — ${type} — ${work}`
      : `Matrafisc Dance — ${type}`;

    // FormSubmit's fetch documentation expects JSON with an explicit JSON content type.
    const payload = {
      name,
      email,
      enquiryType: type,
      message,
      _subject: subject,
      _template: 'table',
      _honey: '',
      _url: window.location.href
    };

    if (work) payload.work = work;

    setSubmitting(true);
    if (status) {
      status.textContent = 'Sending your enquiry…';
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
        status.textContent = 'Thank you — your enquiry has been sent to Matrafisc Dance.';
        status.className = 'contact-status is-ready';
      }
    } catch (error) {
      console.error('Matrafisc contact form submission failed:', error);
      if (status) {
        status.innerHTML = 'The enquiry could not be sent. Please try again or email <a href="mailto:matrafiscdance@gmail.com">matrafiscdance@gmail.com</a>.';
        status.className = 'contact-status is-error';
      }
    } finally {
      setSubmitting(false);
    }
  });

  // Existing work dialogs are generated by script.js. Enhance their enquiry link after each render
  // so it uses the shared contact form and carries the correct work title.
  const dialogContent = document.getElementById('dialog-content');
  if (dialogContent && 'MutationObserver' in window) {
    const observer = new MutationObserver(() => {
      const enquiry = dialogContent.querySelector('.dialog-enquire');
      const title = dialogContent.querySelector('#dialog-title')?.textContent?.trim() || '';
      if (!enquiry) return;
      enquiry.href = '#contact';
      enquiry.dataset.enquiry = 'Work enquiry';
      enquiry.dataset.workTitle = title;
      enquiry.innerHTML = `Enquire about this work <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>`;
    });
    observer.observe(dialogContent, { childList: true, subtree: true });
  }

  // Keep the Font Awesome mobile menu icon in sync with the existing menu state.
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

  // Optional query-string prefill makes direct campaign links possible, e.g.
  // ?enquiry=work&work=Bruise#contact
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
