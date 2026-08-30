const works = {
  bruise: {
    index: '01',
    title: 'Bruise',
    type: 'Duet',
    period: '2015 — ongoing',
    creators: 'Ina Colizza & Antonello Apicella',
    lead: 'Sometimes the only thing you feel is the weight of the bruise you are carrying inside — but you still have to make a choice.',
    story: 'Bruise grew from a conversation between two people carrying turbulent histories. Fullness and emptiness, sweetness and bitterness, vulnerability and choice become physical material. The work is less interested in explaining pain than in showing how invisible marks continue to live in the body.',
    extra: 'The project uses scenic elements as symbols of choice, allowing the audience to recognise fragments of their own emotional experience in the dancers.',
    media: `<div class="media-placeholder"><div><strong>Production photography</strong><span>Gallery slot ready for Bruise images · Photo credit historically listed to Marco Gambardella</span></div></div>`
  },
  one: {
    index: '02',
    title: '1+1=1',
    type: 'Ensemble',
    period: '2019 — ongoing',
    creators: 'Ina Colizza & Antonello Apicella',
    lead: 'What makes you different — and what makes you the person you are from one day to the next?',
    story: '1+1=1 explores identity as a relationship between self and difference. Rather than reducing identity to a fixed shape, the choreography treats multiplicity as essential: the one contains many, and difference is what makes identity possible.',
    extra: 'The work has developed through international touring and has been presented in the UK, Italy, Mexico and the United States.',
    media: `<iframe class="youtube-embed" src="https://www.youtube-nocookie.com/embed/OK08SJxaYAc" title="1+1=1 by Matrafisc Dance" allowfullscreen></iframe>`
  },
  periodo: {
    index: '03',
    title: 'Periodo Blu',
    type: 'Duet',
    period: '2017–18',
    creators: 'Ina Colizza & Antonello Apicella',
    lead: 'A visual-art starting point became a duet about memory, residue and the emotional colour left by experience.',
    story: 'Periodo Blu began with research into the paintings of Dalí and Picasso and evolved into a work about memory. The piece was first developed through scratch-performance settings before travelling to stages in the UK and Italy.',
    extra: 'Its title becomes less a reference to a painterly period than a psychological atmosphere: a space where recollection and the present overlap.',
    media: `<div class="media-placeholder"><div><strong>Image + film archive</strong><span>Ready for Periodo Blu production photography and trailer</span></div></div>`
  },
  souls: {
    index: '04',
    title: 'Soul’s Paths',
    type: 'Site-specific performance',
    period: '2016–17',
    creators: 'Matrafisc Dance + Vonnegut Collective',
    lead: 'The journey starts the exact moment you step in.',
    story: 'Soul’s Paths is a site-specific work built around an inner journey through friendship, love, fraternal bonds and sexuality. Its format brought dancers, live music and audience members into a shared environment rather than separating performance from spectatorship.',
    extra: 'The project was supported using public funding by Arts Council England and included participatory research in which audience stories were translated into improvised movement.',
    media: `<div class="media-placeholder"><div><strong>Site-specific archive</strong><span>Ready for Wonder Inn imagery, performance stills and documentation video</span></div></div>`
  },
  world: {
    index: '05',
    title: 'The World in My Body',
    type: 'Solo',
    period: '2025',
    creators: 'Matrafisc Dance',
    lead: 'Recovery becomes transformation. Strength appears not as a return to before, but as the discovery of a body that has changed.',
    story: 'The World in My Body is a solo exploring a woman’s rediscovery of strength after giving birth. The work follows an awakening into a power she did not know she had — not simply recovery, but resilience and rebirth.',
    extra: 'The 2025 programme listed Alice Taylor as the dancer.',
    media: `<iframe src="https://www.instagram.com/reel/DIBpu89ojcM/embed" title="The World in My Body — Instagram reel" loading="lazy"></iframe>`
  },
  october: {
    index: '06',
    title: 'October',
    type: 'Duet',
    period: '2025',
    creators: 'Matrafisc Dance',
    lead: 'A silent dialogue. An unexpected encounter. A mistake made sweeter by distance and memory.',
    story: 'Based on a true “October” story, this duet sits on the line between time and experience: a crush difficult to overcome, a faraway journey full of friendship, and a name that keeps returning.',
    extra: 'The 2025 programme listed Paula de la Puente and Andres Martinez as dancers.',
    media: `<iframe src="https://www.instagram.com/p/DITKsFxoiwJ/embed" title="October — Instagram post" loading="lazy"></iframe>`
  }
};

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const dialog = document.getElementById('work-dialog');
const dialogContent = document.getElementById('dialog-content');
const dialogClose = document.querySelector('.dialog-close');
const glow = document.querySelector('.cursor-glow');

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

menuToggle?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12, rootMargin: '0px 0px -50px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

if (window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', e => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }, { passive: true });
} else {
  glow?.remove();
}

function renderWork(key) {
  const work = works[key];
  if (!work) return;
  dialogContent.innerHTML = `
    <section class="dialog-hero" data-index="${work.index}">
      <div>
        <p class="eyebrow">${work.type} · ${work.period}</p>
        <h2>${work.title}</h2>
      </div>
    </section>
    <section class="dialog-body">
      <aside class="dialog-facts">
        <div><span>Work</span><span>${work.title}</span></div>
        <div><span>Format</span><span>${work.type}</span></div>
        <div><span>Period</span><span>${work.period}</span></div>
        <div><span>Created by</span><span>${work.creators}</span></div>
        <div><span>Enquiries</span><span><a href="mailto:matrafiscdance@gmail.com">Email company ↗</a></span></div>
      </aside>
      <div class="dialog-story">
        <p class="lead">${work.lead}</p>
        <p>${work.story}</p>
        <p>${work.extra}</p>
      </div>
    </section>
    <section class="dialog-media">
      <h3>Pictures & video</h3>
      <div class="embed-grid">${work.media}</div>
    </section>`;

  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
    document.body.classList.add('dialog-open');
  }
}

function closeDialog() {
  dialog.close();
  document.body.classList.remove('dialog-open');
}

document.querySelectorAll('[data-work]').forEach(el => {
  const handler = event => {
    if (el.tagName === 'ARTICLE' && event.target.closest('button')) return;
    renderWork(el.dataset.work);
  };
  el.addEventListener('click', handler);
  if (el.tagName === 'ARTICLE') {
    el.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        renderWork(el.dataset.work);
      }
    });
    el.querySelector('.work-open')?.addEventListener('click', event => {
      event.stopPropagation();
      renderWork(el.dataset.work);
    });
  }
});

dialogClose?.addEventListener('click', closeDialog);
dialog?.addEventListener('click', event => {
  if (event.target === dialog) closeDialog();
});
dialog?.addEventListener('close', () => document.body.classList.remove('dialog-open'));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && document.body.classList.contains('menu-open')) {
    document.body.classList.remove('menu-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }
});
