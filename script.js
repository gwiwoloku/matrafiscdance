const works = {
  bruise: {
    index: '01', title: 'Bruise', type: 'Dance theatre · duet', period: '2015 →', creators: 'Ina Colizza & Antonello Apicella', group: 'Production',
    lead: 'Invisible bruises continue to live in the body — and choice remains possible.',
    story: 'Bruise emerged from a conversation between two people marked by turbulent histories. Fullness and emptiness, sweetness and bitterness, vulnerability and choice become physical material rather than explanation.',
    extra: 'The scenic language is built around the possibility of choice and the way an audience can recognise fragments of its own emotional history in movement.',
    credit: 'Original archive photography: Marco Gambardella',
    mark: 'https://matrafiscdance.com/wp-content/uploads/2016/10/bruise_logo.png',
    media: placeholder('Bruise', 'Production gallery ready for the original high-resolution archive.')
  },
  jobs: {
    index: '02', title: 'Jobs', type: 'Dance theatre', period: 'Archive', creators: 'Matrafisc Dance', group: 'Production',
    lead: 'Work becomes gesture. Gesture becomes identity.',
    story: 'Jobs studies the body language of three occupations — card dealer, music conductor and painter — and the emotional extremes attached to work: pleasure, passion, frustration, resistance and dissatisfaction.',
    extra: 'The piece turns recognisable working gestures into a physical language about the psychological relationship between a person and what they do every day.',
    credit: 'Original archive photography: Marco Gambardella',
    mark: 'https://matrafiscdance.com/wp-content/uploads/2016/10/jobs_matra.png',
    media: youtube('qhCNeH44snI', 'Jobs by Matrafisc Dance')
  },
  souls: {
    index: '03', title: 'Soul’s Paths', type: 'Site-specific · live music', period: '2016–17', creators: 'Matrafisc Dance + Vonnegut Collective', group: 'Production',
    lead: 'The journey starts the exact moment you step in.',
    story: 'Soul’s Paths is a site-specific performance built around an inner journey through friendship, love, fraternal bonds and sexuality. Dancers, live musicians and audiences share the same environment as the work moves from room to room.',
    extra: 'The project grew from an interest in life stories and the complexity of ordinary human experience. It was supported using public funding by Arts Council England.',
    credit: 'Original archive photography: Kay Ohio Cleveland',
    mark: 'https://matrafiscdance.com/wp-content/uploads/2016/10/soul_paths_logo-1.png',
    media: vimeo('242437807', 'Soul’s Paths — Matrafisc Dance with Vonnegut Collective')
  },
  periodo: {
    index: '04', title: 'Periodo Blu', type: 'Dance theatre · duet', period: '2017–18', creators: 'Ina Colizza & Antonello Apicella', group: 'Production',
    lead: 'Two shades of blue. Two relationships with time.',
    story: 'Periodo Blu explores the human condition using blue as its starting point. One character looks toward possibility and the future; the other is anchored to the past and to a darker psychological landscape.',
    extra: 'A mannequin head becomes a symbol of lost contact with reality while the duet moves between creation and destruction, stillness and motion, connection and withdrawal.',
    credit: 'Original archive photography: Rosa Sansone & Kay Ohio Cleveland',
    mark: 'https://matrafiscdance.com/wp-content/uploads/2017/07/periodo_blu_logo.png',
    media: youtube('JVxMB4HKDsk', 'Periodo Blu by Matrafisc Dance')
  },
  one: {
    index: '05', title: '1+1=1', type: 'Ensemble', period: '2019 →', creators: 'Ina Colizza & Antonello Apicella', group: 'Production',
    lead: 'Identity is possible because difference exists.',
    story: '1+1=1 treats identity not as a fixed shape but as a relationship between self, difference and multiplicity — the many facets that can exist inside one person and one collective.',
    extra: 'The work became part of Matrafisc’s international development and touring repertoire, connecting individual identity with the larger structures to which people belong.',
    credit: 'Original archive photography: Lucas Kao & Mario Gambardella',
    mark: 'https://matrafiscdance.com/wp-content/uploads/2020/03/111_scritta.png',
    media: youtube('OK08SJxaYAc', '1+1=1 by Matrafisc Dance')
  },
  listening: {
    index: '06', title: 'Is Someone Listening?', type: 'Ensemble', period: 'Event work', creators: 'Matrafisc Dance', group: 'Event',
    lead: 'A work with two personalities: one deep, one light.',
    story: 'Four women first communicate through a shared rhythm, then become accomplices as the atmosphere shifts and the ensemble begins to dance together. The work moves between introspection and openness.',
    extra: 'The piece is structured in two parts, allowing the same bodies to move from individual dialogue into a more collective, playful relationship.',
    credit: 'Matrafisc Dance archive',
    media: placeholder('Is Someone Listening?', 'Production photography and film can be added here without changing the page structure.')
  },
  europia: {
    index: '07', title: 'Europia', type: 'Tradition / contemporary', period: 'Event work', creators: 'Matrafisc Dance', group: 'Event',
    lead: 'Tradition survives in gestures, rhythm and words.',
    story: 'Europia draws from the extraordinary variety of Italian folk song and dance, using inherited movement and cultural memory as material for a contemporary performance language.',
    extra: 'The work connects popular traditions of the past with bodies living in the present, treating folklore as an active testimony rather than a museum object.',
    credit: 'Matrafisc Dance archive',
    media: placeholder('Europia', 'Gallery ready for production photography, sound and video.')
  },
  thatplace: {
    index: '08', title: 'That Place Over There', type: 'Ensemble · education / performance', period: '2018–19', creators: 'Matrafisc Dance + University of Salford students', group: 'Collaboration',
    lead: 'A place where everybody could fit in — but not everybody belongs.',
    story: 'That Place Over There explores belonging through culture, gesture, memory and the objects that remind us of home. Developed with students at the University of Salford, the project used Matrafisc’s choreographic research to bring different personal movement languages into one ensemble work.',
    extra: 'The collaboration placed creative process and performance on the same continuum: students developed movement from their own identity while learning how individual material can converge inside a shared choreographic structure.',
    credit: 'Matrafisc Dance / University of Salford archive',
    images: [
      ['https://matrafiscdance.com/wp-content/uploads/2020/04/TPOT1-1.jpg', 'Ensemble performing That Place Over There'],
      ['https://matrafiscdance.com/wp-content/uploads/2020/04/TPOT2-1.jpg', 'Solo performer in That Place Over There'],
      ['https://matrafiscdance.com/wp-content/uploads/2020/04/TPOT3-1.jpeg', 'Dancer performing That Place Over There']
    ]
  },
  study: {
    index: '09', title: 'Study of Hands #2', type: 'Gallery / site-specific research', period: '2018–19', creators: 'Valeria Famularo + Matrafisc Dance', group: 'Collaboration',
    lead: 'The fragment can carry the expressive force of the whole body.',
    story: 'Study of Hands #2 develops research inspired by Auguste Rodin and his process of deconstructing and fragmenting the human form. The project focuses on the expressive resonance of the hand and on how a fragment can be reintegrated into a larger body.',
    extra: 'Following Valeria Famularo’s earlier solo research, a two-week R&D period with Ina Colizza at the University of Salford developed the idea toward a site-specific work for gallery spaces.',
    credit: 'Creative idea: Valeria Famularo · collaboration with Matrafisc Dance',
    mark: 'https://matrafiscdance.com/wp-content/uploads/2020/04/valeria-famularo.png',
    media: placeholder('Study of Hands #2', 'R&D and gallery documentation can be added to this production archive.')
  },
  monkey: {
    index: '10', title: 'Monkey & Leopard', type: 'Children / R&D', period: '2019', creators: 'Matrafisc Dance + Jo Lau', group: 'Collaboration',
    lead: 'A first Matrafisc project created directly for children.',
    story: 'Monkey & Leopard developed through Matrafisc’s artistic collaboration with Jo Lau and marked the company’s first project aimed specifically at children.',
    extra: 'The project was developed through an Arts Council England-funded research and development process, extending the company’s movement language into work for younger audiences.',
    credit: 'Matrafisc Dance archive',
    media: placeholder('Monkey & Leopard', 'Children’s project archive ready for R&D photography and film.')
  },
  restlessness: {
    index: '11', title: 'Restlessness', type: 'Commission · Bodiography', period: 'USA', creators: 'Matrafisc Dance / Bodiography collaboration', group: 'Collaboration',
    lead: 'External life continues while the inner life remains trapped in memory.',
    story: 'Inspired by Fernando Pessoa’s The Book of Disquiet, Restlessness follows characters who experience real life at a distance, carrying a past that prevents them from fully inhabiting the present.',
    extra: 'The work was commissioned for Pittsburgh-based Bodiography after the artists met in Salford and became part of the American company’s repertoire.',
    credit: 'Original archive photography: Eric Rosé',
    mark: 'https://matrafiscdance.com/wp-content/uploads/2020/04/rest.png',
    media: placeholder('Restlessness', 'Bodiography production photography and film archive.')
  },
  midsummer: {
    index: '12', title: 'Midsummer Night’s Memory', type: 'Duet · Bodiography collaboration', period: 'USA', creators: 'Maria Caruso & Antonello Apicella', group: 'Collaboration',
    lead: 'Memory becomes a meeting point between two choreographic histories.',
    story: 'The duet emerged from the meeting of Maria Caruso and Antonello Apicella, bringing the past work of both choreographers into an intense shared creation.',
    extra: 'The choreography is conceived as a four-handed collaboration, using memory as the connective tissue between two artistic histories.',
    credit: 'Original archive photography: Eric Rosé',
    mark: 'https://matrafiscdance.com/wp-content/uploads/2020/04/midsummer.png',
    media: placeholder('Midsummer Night’s Memory', 'Production gallery ready for original photography and video.')
  },
  tightrope: {
    index: '13', title: 'Tightrope Walkers', type: 'Choreographic research', period: 'Collaboration', creators: 'Matrafisc Dance + Akerusia Danza', group: 'Collaboration',
    lead: 'Balance becomes a dance suspended in the void.',
    story: 'Tightrope Walkers is a choreographic laboratory around balance, off-balance, slowness, suspension and lightness. The artists work with the edge of perception as though crossing a line suspended in space.',
    extra: 'The research treats fear, instability and control as physical material, asking how a walk can slowly become dance.',
    credit: 'Original archive photography: Fausta Scamardella',
    mark: 'https://matrafiscdance.com/wp-content/uploads/2020/04/akerusia.png',
    media: placeholder('Tightrope Walkers', 'Research photography and process documentation can live here.')
  },
  october: {
    index: '14', title: 'October', type: 'Duet', period: '2020 →', creators: 'Matrafisc Dance', group: 'Recent',
    lead: 'A silent dialogue. An unexpected encounter. A memory that refuses to disappear.',
    story: 'Based on a true October story, the work sits on a subtle line between time and experience: a difficult crush, a faraway journey, friendship and a mistake whose meaning changes with distance.',
    extra: 'The work premiered in Manchester in March 2020 and has continued to evolve through later presentations.',
    credit: 'Original archive photography: Agnieszka Konecka',
    mark: 'https://matrafiscdance.com/wp-content/uploads/2020/04/october.png',
    media: instagramPost('DITKsFxoiwJ', 'October — Matrafisc Dance')
  },
  world: {
    index: '15', title: 'The World in My Body', type: 'Solo', period: '2025', creators: 'Matrafisc Dance', group: 'Recent',
    lead: 'Strength appears not as a return to before, but as discovery of a changed body.',
    story: 'The World in My Body explores a woman’s rediscovery of strength after giving birth: recovery, transformation, resilience and rebirth expressed through the body.',
    extra: 'The 2025 programme listed Alice Taylor as the dancer.',
    credit: 'Matrafisc Dance · recent repertoire',
    media: instagramReel('DIBpu89ojcM', 'The World in My Body — Matrafisc Dance')
  }
};

function youtube(id, title) {
  return `<iframe class="media-embed" src="https://www.youtube-nocookie.com/embed/${id}" title="${title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}

function vimeo(id, title) {
  return `<iframe class="media-embed" src="https://player.vimeo.com/video/${id}?dnt=1" title="${title}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
}

function instagramPost(id, title) {
  return `<iframe class="instagram-embed" src="https://www.instagram.com/p/${id}/embed" title="${title}" loading="lazy"></iframe>`;
}

function instagramReel(id, title) {
  return `<iframe class="instagram-embed" src="https://www.instagram.com/reel/${id}/embed" title="${title}" loading="lazy"></iframe>`;
}

function placeholder(title, note) {
  return `<div class="media-placeholder" role="img" aria-label="${title} archive placeholder"><div><span class="placeholder-index">ARCHIVE</span><strong>${title}</strong><span>${note}</span></div></div>`;
}

function gallery(images) {
  return `<div class="dialog-gallery">${images.map(([src, alt], index) => `<figure class="dialog-gallery-item item-${index + 1}"><img src="${src}" alt="${alt}" loading="lazy" /></figure>`).join('')}</div>`;
}

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const dialog = document.getElementById('work-dialog');
const dialogContent = document.getElementById('dialog-content');
const dialogClose = document.querySelector('.dialog-close');
const filterButtons = [...document.querySelectorAll('.filter-button')];
const repertoireRows = [...document.querySelectorAll('.repertoire-row')];
const year = document.getElementById('year');

if (year) year.textContent = String(new Date().getFullYear());

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 32);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

menuToggle?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Open menu');
}));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .08, rootMargin: '0px 0px -36px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter || 'all';
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    repertoireRows.forEach(row => {
      const match = filter === 'all' || row.dataset.group === filter;
      row.hidden = !match;
    });
  });
});

function renderWork(key) {
  const work = works[key];
  if (!work || !dialog || !dialogContent) return;

  const visual = work.images?.length
    ? gallery(work.images)
    : work.media || placeholder(work.title, 'Media archive ready for photography and film.');

  dialogContent.innerHTML = `
    <section class="dialog-hero" data-index="${work.index}">
      <div class="dialog-hero-copy">
        <p class="eyebrow">${work.group} · ${work.type}</p>
        <h2 id="dialog-title">${work.title}</h2>
      </div>
      ${work.mark ? `<img class="dialog-mark" src="${work.mark}" alt="" aria-hidden="true" />` : '<span class="dialog-ghost" aria-hidden="true">M</span>'}
    </section>
    <section class="dialog-body">
      <aside class="dialog-facts">
        <div><span>Work</span><span>${work.title}</span></div>
        <div><span>Format</span><span>${work.type}</span></div>
        <div><span>Period</span><span>${work.period}</span></div>
        <div><span>Created by</span><span>${work.creators}</span></div>
        <div><span>Archive</span><span>${work.credit}</span></div>
      </aside>
      <div class="dialog-story">
        <p class="lead">${work.lead}</p>
        <p>${work.story}</p>
        <p>${work.extra}</p>
        <a class="dialog-enquire" href="mailto:matrafiscdance@gmail.com?subject=${encodeURIComponent(`Matrafisc Dance - ${work.title} enquiry`)}">Enquire about this work ↗</a>
      </div>
    </section>
    <section class="dialog-media">
      <div class="dialog-section-head"><p class="eyebrow">Media archive</p><h3>Pictures &amp; film</h3></div>
      <div class="embed-grid">${visual}</div>
    </section>`;

  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
    document.body.classList.add('dialog-open');
    dialogClose?.focus();
  }
}

function closeDialog() {
  if (dialog?.open) dialog.close();
  document.body.classList.remove('dialog-open');
}

document.querySelectorAll('[data-work]').forEach(el => {
  el.addEventListener('click', () => renderWork(el.dataset.work));
});

dialogClose?.addEventListener('click', closeDialog);
dialog?.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
dialog?.addEventListener('close', () => document.body.classList.remove('dialog-open'));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && document.body.classList.contains('menu-open')) {
    document.body.classList.remove('menu-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open menu');
  }
});
