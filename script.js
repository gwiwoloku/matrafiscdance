const works = {
  bruise: {
    index: '01', title: 'Bruise', type: 'Dance theatre · duet', period: '2015 →', creators: 'Ina Colizza & Antonello Apicella',
    lead: 'Invisible bruises continue to live in the body — and choice remains possible.',
    story: 'Bruise emerged from a conversation between two people marked by turbulent histories. Fullness and emptiness, sweetness and bitterness, vulnerability and choice become physical material rather than explanation.',
    extra: 'The original archive credits production photography to Marco Gambardella. The new production page is designed to hold a full image gallery, film, credits, touring dates and technical information.',
    media: placeholder('Bruise', 'Production photography · Marco Gambardella')
  },
  jobs: {
    index: '02', title: 'Jobs', type: 'Dance theatre', period: 'Archive', creators: 'Matrafisc Dance',
    lead: 'Work becomes gesture. Gesture becomes identity.',
    story: 'Jobs studies the body language of three occupations — card dealer, music conductor and painter — and the emotional extremes attached to work: pleasure, passion, frustration, resistance and dissatisfaction.',
    extra: 'The original Matrafisc archive credits photography to Marco Gambardella and includes a production film.',
    media: youtube('qhCNeH44snI', 'Jobs by Matrafisc Dance')
  },
  souls: {
    index: '03', title: 'Soul’s Paths', type: 'Site-specific · live music', period: '2016', creators: 'Matrafisc Dance + Vonnegut Collective',
    lead: 'The journey starts the exact moment you step in.',
    story: 'Soul’s Paths is a site-specific performance built around an inner journey through friendship, love, fraternal bonds and sexuality. Dancers, live musicians and audiences share the same environment as the work moves from room to room.',
    extra: 'The project grew from an interest in life stories and was supported using public funding by Arts Council England. Photography in the original archive is credited to Kay Ohio Cleveland.',
    media: vimeo('242437807', 'Soul’s Paths — Matrafisc Dance with Vonnegut Collective')
  },
  periodo: {
    index: '04', title: 'Periodo Blu', type: 'Dance theatre · duet', period: '2017–18', creators: 'Ina Colizza & Antonello Apicella',
    lead: 'Two shades of blue. Two relationships with time.',
    story: 'Periodo Blu explores the human condition using blue as its starting point. One character looks toward possibility and the future; the other is anchored to the past and to a darker psychological landscape.',
    extra: 'A mannequin head becomes a symbol of lost contact with reality while the duet moves between creation and destruction, stillness and motion, connection and withdrawal. Photography is credited in the original archive to Rosa Sansone and Kay Ohio Cleveland.',
    media: youtube('JVxMB4HKDsk', 'Periodo Blu by Matrafisc Dance')
  },
  one: {
    index: '05', title: '1+1=1', type: 'Ensemble', period: '2019 →', creators: 'Ina Colizza & Antonello Apicella',
    lead: 'Identity is possible because difference exists.',
    story: '1+1=1 treats identity not as a fixed shape but as a relationship between self, difference and multiplicity — the many facets that can exist inside one person and one collective.',
    extra: 'The original archive credits Lucas Kao and Mario Gambardella for photography. The work became part of Matrafisc’s international development and touring repertoire.',
    media: youtube('OK08SJxaYAc', '1+1=1 by Matrafisc Dance')
  },
  listening: {
    index: '06', title: 'Is Someone Listening?', type: 'Ensemble', period: 'Archive', creators: 'Matrafisc Dance',
    lead: 'A work with two personalities: one deep, one light.',
    story: 'Four women first communicate through a shared rhythm, then become accomplices as the atmosphere shifts and the ensemble begins to dance together. The work moves between introspection and openness.',
    extra: 'This production was previously separated under “Events”. The redesign brings it into the same repertoire archive so the company’s artistic history reads as a whole.',
    media: placeholder('Is Someone Listening?', 'Gallery ready for original production photography and video')
  },
  europia: {
    index: '07', title: 'Europia', type: 'Tradition / contemporary', period: 'Archive', creators: 'Matrafisc Dance',
    lead: 'Tradition survives in gestures, rhythm and words.',
    story: 'Europia draws from the extraordinary variety of Italian folk song and dance, using inherited movement and cultural memory as material for a contemporary performance language.',
    extra: 'The work connects popular traditions of the past with bodies living in the present, treating folklore as an active testimony rather than a museum object.',
    media: placeholder('Europia', 'Gallery ready for production photography, sound and video')
  },
  restlessness: {
    index: '08', title: 'Restlessness', type: 'Commission · Bodiography', period: 'USA', creators: 'Matrafisc Dance / Bodiography collaboration',
    lead: 'External life continues while the inner life remains trapped in memory.',
    story: 'Inspired by Fernando Pessoa’s The Book of Disquiet, Restlessness follows characters who experience real life at a distance, carrying a past that prevents them from fully inhabiting the present.',
    extra: 'The work was commissioned for Pittsburgh-based Bodiography after the artists met in Salford. Original production photography is credited to Eric Rosé.',
    media: placeholder('Restlessness', 'Bodiography collaboration · photography by Eric Rosé')
  },
  midsummer: {
    index: '09', title: 'Midsummer Night’s Memory', type: 'Duet · collaboration', period: 'USA', creators: 'Maria Caruso & Antonello Apicella',
    lead: 'Memory becomes a meeting point between two choreographic histories.',
    story: 'The duet emerged from the meeting of Maria Caruso and Antonello Apicella, bringing the past work of both choreographers into an intense shared creation.',
    extra: 'The original Matrafisc archive credits photography to Eric Rosé.',
    media: placeholder('Midsummer Night’s Memory', 'Production gallery · photography by Eric Rosé')
  },
  october: {
    index: '10', title: 'October', type: 'Duet', period: '2020 →', creators: 'Matrafisc Dance',
    lead: 'A silent dialogue. An unexpected encounter. A memory that refuses to disappear.',
    story: 'Based on a true October story, the work sits on a subtle line between time and experience: a difficult crush, a faraway journey, friendship and a mistake whose meaning changes with distance.',
    extra: 'The first version premiered in Manchester in March 2020. The original archive credits photography to Agnieszka Konecka; a later 2025 programme listed Paula de la Puente and Andres Martinez as dancers.',
    media: instagram('DITKsFxoiwJ', 'October — Matrafisc Dance')
  },
  world: {
    index: '11', title: 'The World in My Body', type: 'Solo', period: '2025', creators: 'Matrafisc Dance',
    lead: 'Strength appears not as a return to before, but as discovery of a changed body.',
    story: 'The World in My Body explores a woman’s rediscovery of strength after giving birth: recovery, transformation, resilience and rebirth expressed through the body.',
    extra: 'The 2025 programme listed Alice Taylor as the dancer.',
    media: instagram('DIBpu89ojcM', 'The World in My Body — Matrafisc Dance')
  }
};

function youtube(id, title) {
  return `<iframe class="youtube-embed" src="https://www.youtube-nocookie.com/embed/${id}" title="${title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}
function vimeo(id, title) {
  return `<iframe src="https://player.vimeo.com/video/${id}?dnt=1" title="${title}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
}
function instagram(id, title) {
  return `<iframe src="https://www.instagram.com/p/${id}/embed" title="${title}" loading="lazy"></iframe>`;
}
function placeholder(title, note) {
  return `<div class="media-placeholder"><div><strong>${title}</strong><span>${note}</span></div></div>`;
}

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const dialog = document.getElementById('work-dialog');
const dialogContent = document.getElementById('dialog-content');
const dialogClose = document.querySelector('.dialog-close');

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 40);
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

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .08, rootMargin: '0px 0px -40px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

function renderWork(key) {
  const work = works[key];
  if (!work || !dialog || !dialogContent) return;
  dialogContent.innerHTML = `
    <section class="dialog-hero" data-index="${work.index}">
      <div><p class="eyebrow">${work.type} · ${work.period}</p><h2>${work.title}</h2></div>
    </section>
    <section class="dialog-body">
      <aside class="dialog-facts">
        <div><span>Work</span><span>${work.title}</span></div>
        <div><span>Format</span><span>${work.type}</span></div>
        <div><span>Period</span><span>${work.period}</span></div>
        <div><span>Created by</span><span>${work.creators}</span></div>
        <div><span>Enquiries</span><span><a href="mailto:matrafiscdance@gmail.com">Email company ↗</a></span></div>
      </aside>
      <div class="dialog-story"><p class="lead">${work.lead}</p><p>${work.story}</p><p>${work.extra}</p></div>
    </section>
    <section class="dialog-media"><h3>Pictures & video</h3><div class="embed-grid">${work.media}</div></section>`;
  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
    document.body.classList.add('dialog-open');
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
  }
});
