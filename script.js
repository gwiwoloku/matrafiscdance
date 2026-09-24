const isItalian = document.documentElement.lang.toLowerCase().startsWith('it');

const works = {
  bruise: {
    index: '01', title: 'Bruise', type: 'Dance theatre · duet', period: '2015 →', creators: 'Ina Colizza & Antonello Apicella', group: 'Production',
    lead: 'Invisible bruises continue to live in the body — and choice remains possible.',
    story: 'Bruise emerged from a conversation between two people marked by turbulent histories. Fullness and emptiness, sweetness and bitterness, vulnerability and choice become physical material rather than explanation.',
    extra: 'The scenic language is built around the possibility of choice and the way an audience can recognise fragments of its own emotional history in movement.',
    credit: 'Original archive photography: Marco Gambardella',
    mark: '/assets/archive/optimized/bruise_logo.webp',
    media: placeholder('Bruise', 'Production gallery ready for the original high-resolution archive.')
  },
  jobs: {
    index: '02', title: 'Jobs', type: 'Dance theatre', period: 'Archive', creators: 'Matrafisc Dance', group: 'Production',
    lead: 'Work becomes gesture. Gesture becomes identity.',
    story: 'Jobs studies the body language of three occupations — card dealer, music conductor and painter — and the emotional extremes attached to work: pleasure, passion, frustration, resistance and dissatisfaction.',
    extra: 'The piece turns recognisable working gestures into a physical language about the psychological relationship between a person and what they do every day.',
    credit: 'Original archive photography: Marco Gambardella',
    mark: '/assets/archive/optimized/jobs_matra.webp',
    media: youtube('qhCNeH44snI', 'Jobs by Matrafisc Dance')
  },
  souls: {
    index: '03', title: 'Soul’s Paths', type: 'Site-specific · live music', period: '2016–17', creators: 'Matrafisc Dance + Vonnegut Collective', group: 'Production',
    lead: 'The journey starts the exact moment you step in.',
    story: 'Soul’s Paths is a site-specific performance built around an inner journey through friendship, love, fraternal bonds and sexuality. Dancers, live musicians and audiences share the same environment as the work moves from room to room.',
    extra: 'The project grew from an interest in life stories and the complexity of ordinary human experience. It was supported using public funding by Arts Council England.',
    credit: 'Original archive photography: Kay Ohio Cleveland',
    mark: '/assets/archive/optimized/soul_paths_logo-1.webp',
    media: vimeo('242437807', 'Soul’s Paths — Matrafisc Dance with Vonnegut Collective')
  },
  periodo: {
    index: '04', title: 'Periodo Blu', type: 'Dance theatre · duet', period: '2017–18', creators: 'Ina Colizza & Antonello Apicella', group: 'Production',
    lead: 'Two shades of blue. Two relationships with time.',
    story: 'Periodo Blu explores the human condition using blue as its starting point. One character looks toward possibility and the future; the other is anchored to the past and to a darker psychological landscape.',
    extra: 'A mannequin head becomes a symbol of lost contact with reality while the duet moves between creation and destruction, stillness and motion, connection and withdrawal.',
    credit: 'Original archive photography: Rosa Sansone & Kay Ohio Cleveland',
    mark: '/assets/archive/optimized/periodo_blu_logo.webp',
    media: youtube('JVxMB4HKDsk', 'Periodo Blu by Matrafisc Dance')
  },
  one: {
    index: '05', title: '1+1=1', type: 'Ensemble', period: '2019 →', creators: 'Ina Colizza & Antonello Apicella', group: 'Production',
    lead: 'Identity is possible because difference exists.',
    story: '1+1=1 treats identity not as a fixed shape but as a relationship between self, difference and multiplicity — the many facets that can exist inside one person and one collective.',
    extra: 'The work became part of Matrafisc’s international development and touring repertoire, connecting individual identity with the larger structures to which people belong.',
    credit: 'Original archive photography: Lucas Kao & Mario Gambardella',
    mark: '/assets/archive/optimized/111_scritta.webp',
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
      ['/assets/archive/optimized/TPOT1-1.webp', 'Ensemble performing That Place Over There'],
      ['/assets/archive/optimized/TPOT2-1.webp', 'Solo performer in That Place Over There'],
      ['/assets/archive/optimized/TPOT3-1.webp', 'Dancer performing That Place Over There']
    ]
  },
  study: {
    index: '09', title: 'Study of Hands #2', type: 'Gallery / site-specific research', period: '2018–19', creators: 'Valeria Famularo + Matrafisc Dance', group: 'Collaboration',
    lead: 'The fragment can carry the expressive force of the whole body.',
    story: 'Study of Hands #2 develops research inspired by Auguste Rodin and his process of deconstructing and fragmenting the human form. The project focuses on the expressive resonance of the hand and on how a fragment can be reintegrated into a larger body.',
    extra: 'Following Valeria Famularo’s earlier solo research, a two-week R&D period with Ina Colizza at the University of Salford developed the idea toward a site-specific work for gallery spaces.',
    credit: 'Creative idea: Valeria Famularo · collaboration with Matrafisc Dance',
    mark: '/assets/archive/optimized/valeria-famularo.webp',
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
    mark: '/assets/archive/optimized/rest.webp',
    media: placeholder('Restlessness', 'Bodiography production photography and film archive.')
  },
  midsummer: {
    index: '12', title: 'Midsummer Night’s Memory', type: 'Duet · Bodiography collaboration', period: 'USA', creators: 'Maria Caruso & Antonello Apicella', group: 'Collaboration',
    lead: 'Memory becomes a meeting point between two choreographic histories.',
    story: 'The duet emerged from the meeting of Maria Caruso and Antonello Apicella, bringing the past work of both choreographers into an intense shared creation.',
    extra: 'The choreography is conceived as a four-handed collaboration, using memory as the connective tissue between two artistic histories.',
    credit: 'Original archive photography: Eric Rosé',
    mark: '/assets/archive/optimized/midsummer.webp',
    media: placeholder('Midsummer Night’s Memory', 'Production gallery ready for original photography and video.')
  },
  tightrope: {
    index: '13', title: 'Tightrope Walkers', type: 'Choreographic research', period: 'Collaboration', creators: 'Matrafisc Dance + Akerusia Danza', group: 'Collaboration',
    lead: 'Balance becomes a dance suspended in the void.',
    story: 'Tightrope Walkers is a choreographic laboratory around balance, off-balance, slowness, suspension and lightness. The artists work with the edge of perception as though crossing a line suspended in space.',
    extra: 'The research treats fear, instability and control as physical material, asking how a walk can slowly become dance.',
    credit: 'Original archive photography: Fausta Scamardella',
    mark: '/assets/archive/optimized/akerusia.webp',
    media: placeholder('Tightrope Walkers', 'Research photography and process documentation can live here.')
  },
  october: {
    index: '14', title: 'October', type: 'Duet', period: '2020 →', creators: 'Matrafisc Dance', group: 'Recent',
    lead: 'A silent dialogue. An unexpected encounter. A memory that refuses to disappear.',
    story: 'Based on a true October story, the work sits on a subtle line between time and experience: a difficult crush, a faraway journey, friendship and a mistake whose meaning changes with distance.',
    extra: 'The work premiered in Manchester in March 2020 and has continued to evolve through later presentations.',
    credit: 'Original archive photography: Agnieszka Konecka',
    mark: '/assets/archive/optimized/october.webp',
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

function mediaGate(src, title, className, allow = '') {
  const blocked = isItalian
    ? 'Contenuto esterno bloccato per proteggere la tua privacy.'
    : 'External media is blocked to protect your privacy.';
  const load = isItalian ? 'Consenti e visualizza' : 'Allow and view';
  const allowAttribute = allow ? ` allow="${allow}"` : '';
  return `<div class="media-consent-gate">
    <iframe class="${className}" data-media-src="${src}" title="${title}" loading="lazy"${allowAttribute} allowfullscreen></iframe>
    <div class="media-consent-placeholder">
      <span class="icon-glyph" aria-hidden="true">✓</span>
      <p>${blocked}</p>
      <button type="button" data-allow-media>${load}</button>
    </div>
  </div>`;
}

function youtube(id, title) {
  return mediaGate(
    `https://www.youtube-nocookie.com/embed/${id}`,
    title,
    'media-embed',
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
  );
}

function vimeo(id, title) {
  return mediaGate(
    `https://player.vimeo.com/video/${id}?dnt=1`,
    title,
    'media-embed',
    'autoplay; fullscreen; picture-in-picture'
  );
}

function instagramPost(id, title) {
  return mediaGate(`https://www.instagram.com/p/${id}/embed`, title, 'instagram-embed');
}

function instagramReel(id, title) {
  return mediaGate(`https://www.instagram.com/reel/${id}/embed`, title, 'instagram-embed');
}

function placeholder(title, note) {
  const archive = isItalian ? 'ARCHIVIO' : 'ARCHIVE';
  const aria = isItalian ? `Segnaposto archivio ${title}` : `${title} archive placeholder`;
  return `<div class="media-placeholder" role="img" aria-label="${aria}"><div><span class="placeholder-index">${archive}</span><strong>${title}</strong><span>${note}</span></div></div>`;
}

function gallery(images) {
  return `<div class="dialog-gallery">${images.map(([src, alt], index) => `<figure class="dialog-gallery-item item-${index + 1}"><img src="${src}" alt="${alt}" loading="lazy" /></figure>`).join('')}</div>`;
}

const worksIt = {
  bruise: {
    type: 'Danza teatro · duetto', group: 'Produzione',
    lead: 'I lividi invisibili continuano a vivere nel corpo — e la possibilità di scegliere rimane.',
    story: 'Bruise nasce da una conversazione tra due persone segnate da storie turbolente. Pienezza e vuoto, dolcezza e amarezza, vulnerabilità e scelta diventano materia fisica più che spiegazione.',
    extra: 'Il linguaggio scenico si costruisce attorno alla possibilità di scegliere e al modo in cui il pubblico può riconoscere nel movimento frammenti della propria storia emotiva.',
    credit: 'Fotografia d’archivio originale: Marco Gambardella',
    media: placeholder('Bruise', 'Spazio pronto per la galleria originale ad alta risoluzione.')
  },
  jobs: {
    type: 'Danza teatro', period: 'Archivio', group: 'Produzione',
    lead: 'Il lavoro diventa gesto. Il gesto diventa identità.',
    story: 'Jobs osserva il linguaggio del corpo di tre professioni — croupier, direttore d’orchestra e pittore — e gli estremi emotivi legati al lavoro: piacere, passione, frustrazione, resistenza e insoddisfazione.',
    extra: 'La pièce trasforma gesti professionali riconoscibili in un linguaggio fisico sul rapporto psicologico tra una persona e ciò che fa ogni giorno.',
    credit: 'Fotografia d’archivio originale: Marco Gambardella',
    media: youtube('qhCNeH44snI', 'Jobs di Matrafisc Dance')
  },
  souls: {
    type: 'Site-specific · musica dal vivo', group: 'Produzione',
    lead: 'Il viaggio inizia esattamente nel momento in cui entri.',
    story: 'Soul’s Paths è una performance site-specific costruita come un viaggio interiore attraverso amicizia, amore, legami fraterni e sessualità. Danzatori, musicisti dal vivo e pubblico condividono lo stesso ambiente mentre il lavoro si sposta da una stanza all’altra.',
    extra: 'Il progetto nasce dall’interesse per le storie di vita e per la complessità dell’esperienza umana quotidiana. È stato sostenuto con fondi pubblici di Arts Council England.',
    credit: 'Fotografia d’archivio originale: Kay Ohio Cleveland',
    media: vimeo('242437807', 'Soul’s Paths — Matrafisc Dance con Vonnegut Collective')
  },
  periodo: {
    type: 'Danza teatro · duetto', group: 'Produzione',
    lead: 'Due sfumature di blu. Due rapporti con il tempo.',
    story: 'Periodo Blu esplora la condizione umana partendo dal colore blu. Un personaggio guarda alla possibilità e al futuro; l’altro rimane ancorato al passato e a un paesaggio psicologico più oscuro.',
    extra: 'La testa di un manichino diventa simbolo della perdita di contatto con la realtà mentre il duetto si muove tra creazione e distruzione, immobilità e movimento, connessione e ritiro.',
    credit: 'Fotografia d’archivio originale: Rosa Sansone e Kay Ohio Cleveland',
    media: youtube('JVxMB4HKDsk', 'Periodo Blu di Matrafisc Dance')
  },
  one: {
    type: 'Ensemble', group: 'Produzione',
    lead: 'L’identità è possibile perché esiste la differenza.',
    story: '1+1=1 considera l’identità non come una forma fissa, ma come una relazione tra sé, differenza e molteplicità — le molte sfaccettature che possono convivere in una persona e in un collettivo.',
    extra: 'Il lavoro è entrato nel percorso di sviluppo e tournée internazionale di Matrafisc, mettendo in relazione l’identità individuale con le strutture più ampie a cui apparteniamo.',
    credit: 'Fotografia d’archivio originale: Lucas Kao e Mario Gambardella',
    media: youtube('OK08SJxaYAc', '1+1=1 di Matrafisc Dance')
  },
  listening: {
    type: 'Ensemble', period: 'Lavoro per evento', group: 'Evento',
    lead: 'Un lavoro con due personalità: una profonda, una leggera.',
    story: 'Quattro donne comunicano prima attraverso un ritmo condiviso, poi diventano complici mentre l’atmosfera cambia e l’ensemble inizia a danzare insieme. Il lavoro si muove tra introspezione e apertura.',
    extra: 'La pièce è strutturata in due parti e permette agli stessi corpi di passare dal dialogo individuale a una relazione più collettiva e giocosa.',
    credit: 'Archivio Matrafisc Dance',
    media: placeholder('Is Someone Listening?', 'Fotografie e filmati della produzione possono essere aggiunti qui senza modificare la struttura della pagina.')
  },
  europia: {
    type: 'Tradizione / contemporaneo', period: 'Lavoro per evento', group: 'Evento',
    lead: 'La tradizione sopravvive nei gesti, nel ritmo e nelle parole.',
    story: 'Europia attinge alla straordinaria varietà del canto e della danza popolare italiana, usando movimento ereditato e memoria culturale come materiale per un linguaggio performativo contemporaneo.',
    extra: 'Il lavoro collega le tradizioni popolari del passato ai corpi del presente, trattando il folklore come testimonianza viva e non come oggetto da museo.',
    credit: 'Archivio Matrafisc Dance',
    media: placeholder('Europia', 'Spazio pronto per fotografie, suono e video della produzione.')
  },
  thatplace: {
    type: 'Ensemble · educazione / performance', creators: 'Matrafisc Dance + studenti della University of Salford', group: 'Collaborazione',
    lead: 'Un luogo in cui tutti potrebbero trovare spazio — ma non tutti sentono di appartenere.',
    story: 'That Place Over There esplora il senso di appartenenza attraverso cultura, gesto, memoria e oggetti che ricordano casa. Sviluppato con gli studenti della University of Salford, il progetto ha usato la ricerca coreografica di Matrafisc per riunire diversi linguaggi di movimento personali in un unico lavoro d’ensemble.',
    extra: 'La collaborazione ha posto processo creativo e performance sullo stesso continuum: gli studenti hanno sviluppato movimento a partire dalla propria identità imparando come il materiale individuale possa convergere in una struttura coreografica condivisa.',
    credit: 'Archivio Matrafisc Dance / University of Salford',
    images: [
      ['/assets/archive/optimized/TPOT1-1.webp', 'Ensemble in That Place Over There'],
      ['/assets/archive/optimized/TPOT2-1.webp', 'Interprete solista in That Place Over There'],
      ['/assets/archive/optimized/TPOT3-1.webp', 'Danzatrice in That Place Over There']
    ]
  },
  study: {
    type: 'Ricerca in galleria / site-specific', creators: 'Valeria Famularo + Matrafisc Dance', group: 'Collaborazione',
    lead: 'Il frammento può contenere la forza espressiva dell’intero corpo.',
    story: 'Study of Hands #2 sviluppa una ricerca ispirata ad Auguste Rodin e al suo processo di decostruzione e frammentazione della forma umana. Il progetto si concentra sulla risonanza espressiva della mano e su come un frammento possa essere reintegrato in un corpo più ampio.',
    extra: 'Dopo la precedente ricerca solista di Valeria Famularo, un periodo di due settimane di R&D con Ina Colizza alla University of Salford ha sviluppato l’idea verso un lavoro site-specific per spazi espositivi.',
    credit: 'Idea creativa: Valeria Famularo · collaborazione con Matrafisc Dance',
    media: placeholder('Study of Hands #2', 'Spazio pronto per documentazione di ricerca e materiali di galleria.')
  },
  monkey: {
    type: 'Bambini / R&D', creators: 'Matrafisc Dance + Jo Lau', group: 'Collaborazione',
    lead: 'Il primo progetto Matrafisc creato direttamente per i bambini.',
    story: 'Monkey & Leopard nasce dalla collaborazione artistica tra Matrafisc e Jo Lau e segna il primo progetto della compagnia pensato specificamente per un pubblico di bambini.',
    extra: 'Il progetto è stato sviluppato attraverso una fase di ricerca e sviluppo finanziata da Arts Council England, estendendo il linguaggio di movimento della compagnia verso il pubblico più giovane.',
    credit: 'Archivio Matrafisc Dance',
    media: placeholder('Monkey & Leopard', 'Spazio pronto per fotografie e filmati della fase di ricerca.')
  },
  restlessness: {
    type: 'Commissione · Bodiography', creators: 'Matrafisc Dance / collaborazione Bodiography', group: 'Collaborazione',
    lead: 'La vita esterna continua mentre quella interiore rimane intrappolata nella memoria.',
    story: 'Ispirato a Il libro dell’inquietudine di Fernando Pessoa, Restlessness segue personaggi che vivono la realtà a distanza, portando con sé un passato che impedisce loro di abitare pienamente il presente.',
    extra: 'Il lavoro è stato commissionato dalla compagnia Bodiography di Pittsburgh dopo l’incontro degli artisti a Salford ed è entrato nel repertorio della compagnia americana.',
    credit: 'Fotografia d’archivio originale: Eric Rosé',
    media: placeholder('Restlessness', 'Archivio pronto per fotografie e filmati della produzione Bodiography.')
  },
  midsummer: {
    type: 'Duetto · collaborazione Bodiography', creators: 'Maria Caruso e Antonello Apicella', group: 'Collaborazione',
    lead: 'La memoria diventa un punto d’incontro tra due storie coreografiche.',
    story: 'Il duetto nasce dall’incontro tra Maria Caruso e Antonello Apicella, portando il lavoro passato di entrambi i coreografi dentro una creazione condivisa e intensa.',
    extra: 'La coreografia è concepita a quattro mani, usando la memoria come tessuto connettivo tra due storie artistiche.',
    credit: 'Fotografia d’archivio originale: Eric Rosé',
    media: placeholder('Midsummer Night’s Memory', 'Spazio pronto per fotografie originali e video della produzione.')
  },
  tightrope: {
    type: 'Ricerca coreografica', period: 'Collaborazione', creators: 'Matrafisc Dance + Akerusia Danza', group: 'Collaborazione',
    lead: 'L’equilibrio diventa una danza sospesa nel vuoto.',
    story: 'Tightrope Walkers è un laboratorio coreografico su equilibrio, disequilibrio, lentezza, sospensione e leggerezza. Gli artisti lavorano sul limite della percezione come se attraversassero una linea sospesa nello spazio.',
    extra: 'La ricerca tratta paura, instabilità e controllo come materiale fisico, chiedendosi come un semplice cammino possa lentamente diventare danza.',
    credit: 'Fotografia d’archivio originale: Fausta Scamardella',
    media: placeholder('Tightrope Walkers', 'Qui possono vivere fotografie di ricerca e documentazione del processo.')
  },
  october: {
    type: 'Duetto', creators: 'Matrafisc Dance', group: 'Recente',
    lead: 'Un dialogo silenzioso. Un incontro inatteso. Un ricordo che non vuole scomparire.',
    story: 'Basato su una vera storia di ottobre, il lavoro si muove su una linea sottile tra tempo ed esperienza: una cotta difficile, un viaggio lontano, amicizia e un errore il cui significato cambia con la distanza.',
    extra: 'Il lavoro ha debuttato a Manchester nel marzo 2020 e ha continuato a evolversi attraverso presentazioni successive.',
    credit: 'Fotografia d’archivio originale: Agnieszka Konecka',
    media: instagramPost('DITKsFxoiwJ', 'October — Matrafisc Dance')
  },
  world: {
    type: 'Solo', creators: 'Matrafisc Dance', group: 'Recente',
    lead: 'La forza non appare come un ritorno a prima, ma come scoperta di un corpo cambiato.',
    story: 'The World in My Body esplora la riscoperta della forza di una donna dopo il parto: recupero, trasformazione, resilienza e rinascita espressi attraverso il corpo.',
    extra: 'Il programma 2025 indicava Alice Taylor come interprete.',
    credit: 'Matrafisc Dance · repertorio recente',
    media: instagramReel('DIBpu89ojcM', 'The World in My Body — Matrafisc Dance')
  }
};

const ui = isItalian ? {
  work: 'Progetto',
  format: 'Formato',
  period: 'Periodo',
  createdBy: 'Creato da',
  archive: 'Archivio',
  enquire: 'Richiedi informazioni su questo progetto',
  mediaArchive: 'Archivio media',
  picturesFilm: 'Foto e video',
  mediaFallback: 'Spazio pronto per fotografie e filmati.',
  closeMenu: 'Chiudi menu',
  openMenu: 'Apri menu'
} : {
  work: 'Work',
  format: 'Format',
  period: 'Period',
  createdBy: 'Created by',
  archive: 'Archive',
  enquire: 'Enquire about this work',
  mediaArchive: 'Media archive',
  picturesFilm: 'Pictures & film',
  mediaFallback: 'Media archive ready for photography and film.',
  closeMenu: 'Close menu',
  openMenu: 'Open menu'
};

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
  menuToggle.setAttribute('aria-label', open ? ui.closeMenu : ui.openMenu);
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', ui.openMenu);
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
  const baseWork = works[key];
  if (!baseWork || !dialog || !dialogContent) return;
  const work = isItalian ? { ...baseWork, ...(worksIt[key] || {}) } : baseWork;

  const visual = work.images?.length
    ? gallery(work.images)
    : work.media || placeholder(work.title, ui.mediaFallback);

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
        <div><span>${ui.work}</span><span>${work.title}</span></div>
        <div><span>${ui.format}</span><span>${work.type}</span></div>
        <div><span>${ui.period}</span><span>${work.period}</span></div>
        <div><span>${ui.createdBy}</span><span>${work.creators}</span></div>
        <div><span>${ui.archive}</span><span>${work.credit}</span></div>
      </aside>
      <div class="dialog-story">
        <p class="lead">${work.lead}</p>
        <p>${work.story}</p>
        <p>${work.extra}</p>
        <a class="dialog-enquire" href="#contact" data-enquiry="Work enquiry" data-work-title="${work.title}">${ui.enquire} <span class="icon-glyph" aria-hidden="true">→</span></a>
      </div>
    </section>
    <section class="dialog-media">
      <div class="dialog-section-head"><p class="eyebrow">${ui.mediaArchive}</p><h3>${ui.picturesFilm}</h3></div>
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
  if (el.matches('a[href]')) return;
  el.addEventListener('click', () => renderWork(el.dataset.work));
});

dialogClose?.addEventListener('click', closeDialog);
dialog?.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
dialog?.addEventListener('close', () => document.body.classList.remove('dialog-open'));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && document.body.classList.contains('menu-open')) {
    document.body.classList.remove('menu-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', ui.openMenu);
  }
});
