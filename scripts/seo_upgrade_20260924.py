#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path
import html
import json
import re
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
TODAY = "2026-09-24"

PROJECTS = {
    "bruise": {
        "en_path": "bruise/index.html", "it_path": "it/progetti/bruise/index.html",
        "en_slug": "bruise", "it_slug": "bruise", "title": "Bruise",
        "en_desc": "Bruise is a contemporary dance theatre duet by Ina Colizza and Antonello Apicella exploring memory, vulnerability and the possibility of choice.",
        "it_desc": "Bruise è un duetto di danza teatro di Ina Colizza e Antonello Apicella che esplora memoria, vulnerabilità e possibilità di scelta.",
        "en_context": "Created in 2015 as Matrafisc Dance’s first production, Bruise established an autobiographical and psychologically driven strand within the company’s repertoire. The duet treats emotional history as physical material, allowing tension, tenderness and personal choice to emerge through the relationship between two bodies.",
        "it_context": "Creato nel 2015 come prima produzione di Matrafisc Dance, Bruise ha definito una linea autobiografica e psicologica nel repertorio della compagnia. Il duetto tratta la storia emotiva come materia fisica, facendo emergere tensione, tenerezza e scelta personale nella relazione tra due corpi.",
        "en_themes": ["memory", "vulnerability", "choice", "emotional history"],
        "it_themes": ["memoria", "vulnerabilità", "scelta", "storia emotiva"],
        "related": ["periodo", "october", "world"],
        "image": "assets/archive/optimized/bruise_logo.webp", "dims": (499, 222),
    },
    "jobs": {
        "en_path": "jobs/index.html", "it_path": "it/progetti/jobs/index.html",
        "en_slug": "jobs", "it_slug": "jobs", "title": "Jobs",
        "en_desc": "Jobs is a Matrafisc dance theatre work turning the gestures of three occupations into choreography about identity, passion and frustration.",
        "it_desc": "Jobs è un lavoro di danza teatro Matrafisc che trasforma i gesti di tre professioni in coreografia su identità, passione e frustrazione.",
        "en_context": "Jobs starts from the recognisable physical language of a card dealer, a music conductor and a painter. By separating everyday gestures from their practical purpose, the work exposes how occupation can shape posture, rhythm, identity and emotional experience.",
        "it_context": "Jobs parte dal linguaggio fisico riconoscibile di un croupier, un direttore d’orchestra e un pittore. Separando i gesti quotidiani dalla loro funzione pratica, il lavoro mostra come la professione possa modellare postura, ritmo, identità ed esperienza emotiva.",
        "en_themes": ["work", "identity", "gesture", "psychology"],
        "it_themes": ["lavoro", "identità", "gesto", "psicologia"],
        "related": ["europia", "listening", "one"],
        "image": "assets/archive/optimized/jobs_matra.webp", "dims": (500, 350),
        "video": "https://www.youtube.com/watch?v=qhCNeH44snI",
    },
    "souls": {
        "en_path": "souls-paths/index.html", "it_path": "it/progetti/souls-paths/index.html",
        "en_slug": "souls-paths", "it_slug": "souls-paths", "title": "Soul’s Paths",
        "en_desc": "Soul’s Paths is a site-specific Matrafisc Dance and Vonnegut Collective performance exploring love, friendship, sexuality and shared experience.",
        "it_desc": "Soul’s Paths è una performance site-specific di Matrafisc Dance e Vonnegut Collective su amore, amicizia, sessualità ed esperienza condivisa.",
        "en_context": "Developed in 2016–17 with Vonnegut Collective, Soul’s Paths places dancers, live musicians and audiences inside the same moving environment. The work grew from an interest in life stories and ordinary human complexity and was supported using public funding by Arts Council England.",
        "it_context": "Sviluppato nel 2016–17 con Vonnegut Collective, Soul’s Paths porta danzatori, musicisti dal vivo e pubblico nello stesso ambiente in movimento. Il lavoro nasce dall’interesse per le storie di vita e la complessità umana quotidiana ed è stato sostenuto con fondi pubblici di Arts Council England.",
        "en_themes": ["site-specific", "live music", "relationships", "audience journey"],
        "it_themes": ["site-specific", "musica dal vivo", "relazioni", "viaggio del pubblico"],
        "related": ["thatplace", "one", "tightrope"],
        "image": "assets/archive/optimized/soul_paths_logo-1.webp", "dims": (500, 111),
        "video": "https://vimeo.com/242437807",
    },
    "periodo": {
        "en_path": "periodo-blu/index.html", "it_path": "it/progetti/periodo-blu/index.html",
        "en_slug": "periodo-blu", "it_slug": "periodo-blu", "title": "Periodo Blu",
        "en_desc": "Periodo Blu is a contemporary dance theatre duet exploring memory, time and the human condition through two contrasting shades of blue.",
        "it_desc": "Periodo Blu è un duetto di danza teatro contemporanea che esplora memoria, tempo e condizione umana attraverso due diverse sfumature di blu.",
        "en_context": "Created during 2017–18, Periodo Blu uses two contrasting relationships with time to build its psychological world. One figure looks towards possibility while the other remains anchored to the past, with the duet moving between stillness and motion, connection and withdrawal.",
        "it_context": "Creato nel 2017–18, Periodo Blu costruisce il proprio mondo psicologico attraverso due rapporti opposti con il tempo. Una figura guarda alla possibilità mentre l’altra resta ancorata al passato, in un duetto tra immobilità e movimento, connessione e ritiro.",
        "en_themes": ["memory", "time", "human condition", "psychology"],
        "it_themes": ["memoria", "tempo", "condizione umana", "psicologia"],
        "related": ["bruise", "october", "one"],
        "image": "assets/archive/optimized/periodo_blu_logo.webp", "dims": (483, 83),
        "video": "https://www.youtube.com/watch?v=JVxMB4HKDsk",
    },
    "one": {
        "en_path": "111-2/index.html", "it_path": "it/progetti/1-plus-1-equals-1/index.html",
        "en_slug": "111-2", "it_slug": "1-plus-1-equals-1", "title": "1+1=1",
        "en_desc": "1+1=1 is a Matrafisc Dance ensemble work exploring identity, difference and multiplicity as parts of individual and collective experience.",
        "it_desc": "1+1=1 è un lavoro d’ensemble di Matrafisc Dance su identità, differenza e molteplicità nell’esperienza individuale e collettiva.",
        "en_context": "Developed from 2019, 1+1=1 treats identity as something relational rather than fixed. The work became part of Matrafisc’s international development and touring repertoire, connecting the many facets of an individual with the larger structures and communities to which people belong.",
        "it_context": "Sviluppato dal 2019, 1+1=1 considera l’identità come qualcosa di relazionale e non fisso. Il lavoro è entrato nel percorso di sviluppo e tournée internazionale di Matrafisc, collegando le molte sfaccettature dell’individuo alle strutture e comunità a cui appartiene.",
        "en_themes": ["identity", "difference", "multiplicity", "collective"],
        "it_themes": ["identità", "differenza", "molteplicità", "collettivo"],
        "related": ["thatplace", "souls", "world"],
        "image": "assets/archive/optimized/111_scritta.webp", "dims": (1870, 680),
        "video": "https://www.youtube.com/watch?v=OK08SJxaYAc",
    },
    "listening": {
        "en_path": "is-someone-listening/index.html", "it_path": "it/progetti/is-someone-listening/index.html",
        "en_slug": "is-someone-listening", "it_slug": "is-someone-listening", "title": "Is Someone Listening?",
        "en_desc": "Is Someone Listening? is a Matrafisc Dance ensemble work moving from introspection and shared rhythm towards collective, playful connection.",
        "it_desc": "Is Someone Listening? è un lavoro d’ensemble Matrafisc che passa dall’introspezione e dal ritmo condiviso a una connessione collettiva e giocosa.",
        "en_context": "Built in two contrasting parts, the work begins with four women communicating through shared rhythm before shifting towards complicity and group movement. The change in atmosphere lets the same ensemble move between private dialogue and collective openness.",
        "it_context": "Costruito in due parti contrastanti, il lavoro inizia con quattro donne che comunicano attraverso un ritmo condiviso e si sposta poi verso complicità e movimento di gruppo. Il cambio d’atmosfera porta lo stesso ensemble dal dialogo privato all’apertura collettiva.",
        "en_themes": ["rhythm", "communication", "ensemble", "connection"],
        "it_themes": ["ritmo", "comunicazione", "ensemble", "connessione"],
        "related": ["jobs", "europia", "thatplace"],
    },
    "europia": {
        "en_path": "europia/index.html", "it_path": "it/progetti/europia/index.html",
        "en_slug": "europia", "it_slug": "europia", "title": "Europia",
        "en_desc": "Europia is a Matrafisc contemporary dance work using Italian folk song, dance and cultural memory as material for present-day performance.",
        "it_desc": "Europia è un progetto Matrafisc che usa canto, danza popolare italiana e memoria culturale come materiale per una performance contemporanea.",
        "en_context": "Europia approaches folklore as a living source rather than a fixed museum object. Inherited rhythms, gestures and words are brought into contact with contemporary bodies, creating a dialogue between popular traditions of the past and the experience of the present.",
        "it_context": "Europia considera il folklore una fonte viva e non un oggetto da museo. Ritmi, gesti e parole ereditati incontrano corpi contemporanei, creando un dialogo tra le tradizioni popolari del passato e l’esperienza del presente.",
        "en_themes": ["Italian tradition", "folk culture", "memory", "contemporary dance"],
        "it_themes": ["tradizione italiana", "cultura popolare", "memoria", "danza contemporanea"],
        "related": ["jobs", "souls", "thatplace"],
    },
    "thatplace": {
        "en_path": "salford-university/index.html", "it_path": "it/progetti/that-place-over-there/index.html",
        "en_slug": "salford-university", "it_slug": "that-place-over-there", "title": "That Place Over There",
        "en_desc": "That Place Over There is a University of Salford collaboration exploring belonging, identity, memory and home through contemporary dance.",
        "it_desc": "That Place Over There è una collaborazione con University of Salford su appartenenza, identità, memoria e casa attraverso la danza contemporanea.",
        "en_context": "Developed with University of Salford students in 2018–19, the project joins performance and education in one creative process. Participants generated movement from personal identity, culture, memory and objects associated with home before bringing those individual languages into a shared ensemble structure.",
        "it_context": "Sviluppato con gli studenti della University of Salford nel 2018–19, il progetto unisce performance e formazione nello stesso processo creativo. I partecipanti hanno creato movimento da identità, cultura, memoria e oggetti legati alla casa, riunendo poi i linguaggi individuali in una struttura d’ensemble.",
        "en_themes": ["belonging", "identity", "education", "home"],
        "it_themes": ["appartenenza", "identità", "formazione", "casa"],
        "related": ["study", "monkey", "one"],
        "gallery": [
            ("assets/archive/optimized/TPOT1-1.webp", "Matrafisc dancers performing That Place Over There", 1920, 1280),
            ("assets/archive/optimized/TPOT2-1.webp", "Solo performer in That Place Over There", 960, 960),
            ("assets/archive/optimized/TPOT3-1.webp", "Dancer performing That Place Over There", 1107, 725),
        ],
    },
    "study": {
        "en_path": "valeria-famularo/index.html", "it_path": "it/progetti/study-of-hands-2/index.html",
        "en_slug": "valeria-famularo", "it_slug": "study-of-hands-2", "title": "Study of Hands #2",
        "en_desc": "Study of Hands #2 is a gallery and site-specific dance research project by Valeria Famularo and Matrafisc Dance inspired by Auguste Rodin.",
        "it_desc": "Study of Hands #2 è una ricerca di danza site-specific e per galleria di Valeria Famularo e Matrafisc Dance ispirata ad Auguste Rodin.",
        "en_context": "The collaboration extends Valeria Famularo’s earlier solo research into a two-week R&D period with Ina Colizza at the University of Salford. Inspired by Rodin’s fragmentation of the human form, the process asks how the expressive force of a hand can be isolated and then reintegrated into a larger moving body.",
        "it_context": "La collaborazione estende la precedente ricerca solista di Valeria Famularo in un periodo di due settimane di R&D con Ina Colizza alla University of Salford. Ispirato alla frammentazione della forma umana in Rodin, il processo indaga come la forza espressiva della mano possa essere isolata e poi reintegrata nel corpo in movimento.",
        "en_themes": ["Auguste Rodin", "hands", "gallery", "site-specific research"],
        "it_themes": ["Auguste Rodin", "mani", "galleria", "ricerca site-specific"],
        "related": ["thatplace", "tightrope", "monkey"],
        "image": "assets/archive/optimized/valeria-famularo.webp", "dims": (1920, 251),
    },
    "monkey": {
        "en_path": "jo-lau/index.html", "it_path": "it/progetti/monkey-and-leopard/index.html",
        "en_slug": "jo-lau", "it_slug": "monkey-and-leopard", "title": "Monkey & Leopard",
        "en_desc": "Monkey & Leopard is Matrafisc Dance’s first project created specifically for children, developed with Jo Lau through Arts Council England-funded R&D.",
        "it_desc": "Monkey & Leopard è il primo progetto Matrafisc creato per bambini, sviluppato con Jo Lau attraverso una fase R&D finanziata da Arts Council England.",
        "en_context": "Developed in 2019 with Jo Lau, Monkey & Leopard marked Matrafisc’s first project aimed directly at children. An Arts Council England-funded research and development process gave the company space to adapt its movement language and creative methods for younger audiences.",
        "it_context": "Sviluppato nel 2019 con Jo Lau, Monkey & Leopard ha segnato il primo progetto Matrafisc rivolto direttamente ai bambini. Una fase di ricerca e sviluppo finanziata da Arts Council England ha permesso alla compagnia di adattare linguaggio di movimento e metodi creativi a un pubblico più giovane.",
        "en_themes": ["children", "research and development", "movement", "younger audiences"],
        "it_themes": ["bambini", "ricerca e sviluppo", "movimento", "pubblico giovane"],
        "related": ["thatplace", "study", "world"],
    },
    "restlessness": {
        "en_path": "restlessness/index.html", "it_path": "it/progetti/restlessness/index.html",
        "en_slug": "restlessness", "it_slug": "restlessness", "title": "Restlessness",
        "en_desc": "Restlessness is a Bodiography commission inspired by Fernando Pessoa’s The Book of Disquiet, exploring memory, distance and the present.",
        "it_desc": "Restlessness è una commissione per Bodiography ispirata a Il libro dell’inquietudine di Fernando Pessoa, su memoria, distanza e presente.",
        "en_context": "Commissioned for Pittsburgh-based Bodiography after the artists met in Salford, Restlessness entered the American company’s repertoire. Inspired by Fernando Pessoa, the work looks at characters who experience life at a distance because memory keeps pulling them away from the present.",
        "it_context": "Commissionato dalla compagnia Bodiography di Pittsburgh dopo l’incontro degli artisti a Salford, Restlessness è entrato nel repertorio della compagnia americana. Ispirato a Fernando Pessoa, il lavoro osserva personaggi che vivono la realtà a distanza perché la memoria continua a richiamarli lontano dal presente.",
        "en_themes": ["Fernando Pessoa", "memory", "commission", "Bodiography"],
        "it_themes": ["Fernando Pessoa", "memoria", "commissione", "Bodiography"],
        "related": ["midsummer", "october", "bruise"],
        "image": "assets/archive/optimized/rest.webp", "dims": (1920, 497),
    },
    "midsummer": {
        "en_path": "midsummer-nights-memory/index.html", "it_path": "it/progetti/midsummer-nights-memory/index.html",
        "en_slug": "midsummer-nights-memory", "it_slug": "midsummer-nights-memory", "title": "Midsummer Night’s Memory",
        "en_desc": "Midsummer Night’s Memory is a duet by Maria Caruso and Antonello Apicella using memory to connect two choreographic histories.",
        "it_desc": "Midsummer Night’s Memory è un duetto di Maria Caruso e Antonello Apicella che usa la memoria per connettere due storie coreografiche.",
        "en_context": "The duet grew from the meeting of Maria Caruso and Antonello Apicella within Matrafisc’s collaboration with Bodiography. Conceived as a four-handed choreographic process, it uses memory as the meeting point between two artists, two histories and the material each carries into a shared creation.",
        "it_context": "Il duetto nasce dall’incontro tra Maria Caruso e Antonello Apicella nella collaborazione di Matrafisc con Bodiography. Concepito come processo coreografico a quattro mani, usa la memoria come punto d’incontro tra due artisti, due storie e il materiale che ciascuno porta nella creazione condivisa.",
        "en_themes": ["memory", "duet", "collaboration", "Bodiography"],
        "it_themes": ["memoria", "duetto", "collaborazione", "Bodiography"],
        "related": ["restlessness", "tightrope", "october"],
        "image": "assets/archive/optimized/midsummer.webp", "dims": (1920, 185),
    },
    "tightrope": {
        "en_path": "akerusia-danza/index.html", "it_path": "it/progetti/tightrope-walkers/index.html",
        "en_slug": "akerusia-danza", "it_slug": "tightrope-walkers", "title": "Tightrope Walkers",
        "en_desc": "Tightrope Walkers is a Matrafisc Dance and Akerusia Danza research project exploring balance, suspension, fear, instability and control.",
        "it_desc": "Tightrope Walkers è una ricerca di Matrafisc Dance e Akerusia Danza su equilibrio, sospensione, paura, instabilità e controllo.",
        "en_context": "Created as a choreographic laboratory with Akerusia Danza, Tightrope Walkers examines the point at which a walk becomes dance. Balance, off-balance, slowness and suspension are treated as physical tools, while fear and control become part of the perceptual experience of moving along an imagined line in space.",
        "it_context": "Creato come laboratorio coreografico con Akerusia Danza, Tightrope Walkers indaga il punto in cui un cammino diventa danza. Equilibrio, disequilibrio, lentezza e sospensione diventano strumenti fisici, mentre paura e controllo entrano nell’esperienza percettiva di una linea immaginaria nello spazio.",
        "en_themes": ["balance", "suspension", "fear", "choreographic research"],
        "it_themes": ["equilibrio", "sospensione", "paura", "ricerca coreografica"],
        "related": ["study", "midsummer", "souls"],
        "image": "assets/archive/optimized/akerusia.webp", "dims": (1920, 288),
    },
    "october": {
        "en_path": "october/index.html", "it_path": "it/progetti/october/index.html",
        "en_slug": "october", "it_slug": "october", "title": "October",
        "en_desc": "October is a Matrafisc Dance duet based on a true story, exploring memory, friendship, distance, encounter and the changing meaning of experience.",
        "it_desc": "October è un duetto Matrafisc basato su una storia vera, su memoria, amicizia, distanza, incontro e significati che cambiano nel tempo.",
        "en_context": "October premiered in Manchester in March 2020 and has continued to evolve through later presentations. Built from a true story, the duet sits between memory and experience: a difficult crush, a faraway journey, friendship and a mistake whose meaning changes as time creates distance.",
        "it_context": "October ha debuttato a Manchester nel marzo 2020 e ha continuato a evolversi nelle presentazioni successive. Nato da una storia vera, il duetto si colloca tra memoria ed esperienza: una cotta difficile, un viaggio lontano, amicizia e un errore il cui significato cambia con la distanza del tempo.",
        "en_themes": ["memory", "friendship", "distance", "true story"],
        "it_themes": ["memoria", "amicizia", "distanza", "storia vera"],
        "related": ["bruise", "periodo", "world"],
        "image": "assets/archive/optimized/october.webp", "dims": (1920, 614),
        "video": "https://www.instagram.com/p/DITKsFxoiwJ/",
    },
    "world": {
        "en_path": "the-world-in-my-body/index.html", "it_path": "it/progetti/the-world-in-my-body/index.html",
        "en_slug": "the-world-in-my-body", "it_slug": "the-world-in-my-body", "title": "The World in My Body",
        "en_desc": "The World in My Body is a 2025 Matrafisc Dance solo exploring recovery, transformation, resilience and rediscovered strength after giving birth.",
        "it_desc": "The World in My Body è un solo Matrafisc del 2025 su recupero, trasformazione, resilienza e riscoperta della forza dopo il parto.",
        "en_context": "This 2025 solo places bodily change at the centre of the choreography. Rather than treating strength as a return to a previous state, the work approaches recovery and resilience as the discovery of a transformed body. The 2025 programme listed Alice Taylor as the dancer.",
        "it_context": "Questo solo del 2025 mette il cambiamento del corpo al centro della coreografia. La forza non è trattata come un ritorno a uno stato precedente, ma come scoperta di un corpo trasformato attraverso recupero e resilienza. Il programma 2025 indicava Alice Taylor come interprete.",
        "en_themes": ["motherhood", "recovery", "transformation", "resilience"],
        "it_themes": ["maternità", "recupero", "trasformazione", "resilienza"],
        "related": ["october", "bruise", "one"],
        "video": "https://www.instagram.com/reel/DIBpu89ojcM/",
    },
}

# Fill lookup by key/title/slug.
BY_KEY = PROJECTS
for k, d in PROJECTS.items():
    d["key"] = k

H1_REPLACEMENTS = {
    "index.html": '<h1 id="hero-title"><span>Contemporary dance</span><span>where movement</span><span>becomes memory.</span></h1>',
    "it/index.html": '<h1 id="hero-title"><span>Danza contemporanea</span><span>dove il movimento</span><span>diventa memoria.</span></h1>',
    "projects/index.html": '<h1>Contemporary dance projects<br />shaped by lived experience.</h1>',
    "it/progetti/index.html": '<h1>Progetti di danza contemporanea<br />nati dall’esperienza.</h1>',
    "about-us/index.html": '<h1>Contemporary dance from Manchester.<br />Italian roots.</h1>',
    "it/compagnia/index.html": '<h1>Danza contemporanea da Manchester.<br />Radici italiane.</h1>',
    "touring/index.html": '<h1>Contemporary dance touring<br />shaped by place and context.</h1>',
    "it/tournee/index.html": '<h1>Tournée di danza contemporanea<br />tra luoghi e contesti.</h1>',
    "workshops-education/index.html": '<h1>Contemporary dance workshops<br />built around creative research.</h1>',
    "it/workshop-formazione/index.html": '<h1>Workshop di danza contemporanea<br />fondati sulla ricerca creativa.</h1>',
    "contact-us/index.html": '<h1>Contact Matrafisc for touring,<br />workshops and collaboration.</h1>',
    "it/contatti/index.html": '<h1>Contatta Matrafisc per tournée,<br />workshop e collaborazioni.</h1>',
}

LANDING_BREADCRUMBS = {
    "projects/index.html": ("Projects", "https://matrafiscdance.com/projects/"),
    "it/progetti/index.html": ("Progetti", "https://matrafiscdance.com/it/progetti/"),
    "about-us/index.html": ("Company", "https://matrafiscdance.com/about-us/"),
    "it/compagnia/index.html": ("Compagnia", "https://matrafiscdance.com/it/compagnia/"),
    "touring/index.html": ("Touring", "https://matrafiscdance.com/touring/"),
    "it/tournee/index.html": ("Tournée", "https://matrafiscdance.com/it/tournee/"),
    "workshops-education/index.html": ("Workshops & Education", "https://matrafiscdance.com/workshops-education/"),
    "it/workshop-formazione/index.html": ("Workshop e formazione", "https://matrafiscdance.com/it/workshop-formazione/"),
    "contact-us/index.html": ("Contact", "https://matrafiscdance.com/contact-us/"),
    "it/contatti/index.html": ("Contatti", "https://matrafiscdance.com/it/contatti/"),
}

def esc(s: str) -> str:
    return html.escape(s, quote=True)

def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")

def write(path: str, content: str) -> None:
    (ROOT / path).write_text(content, encoding="utf-8")

def replace_h1(path: str, text: str) -> str:
    if path not in H1_REPLACEMENTS:
        return text
    return re.sub(r'<h1\b[^>]*>[\s\S]*?</h1>', H1_REPLACEMENTS[path], text, count=1, flags=re.I)

def update_jsonld_blocks(text: str, transformer):
    pattern = re.compile(r'(<script\s+type="application/ld\+json">)([\s\S]*?)(</script>)', re.I)
    def repl(m):
        try:
            data = json.loads(m.group(2))
            data = transformer(data)
            return m.group(1) + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + m.group(3)
        except Exception:
            return m.group(0)
    return pattern.sub(repl, text)

def add_breadcrumb_schema(path: str, text: str) -> str:
    if path not in LANDING_BREADCRUMBS:
        return text
    name, url = LANDING_BREADCRUMBS[path]
    italian = path.startswith("it/")
    home_url = "https://matrafiscdance.com/it/" if italian else "https://matrafiscdance.com/"
    crumb = {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Matrafisc Dance", "item": home_url},
            {"@type": "ListItem", "position": 2, "name": name, "item": url},
        ],
    }
    def transform(data):
        if isinstance(data, dict) and "@graph" in data:
            graph = data["@graph"]
            if not any(isinstance(x, dict) and x.get("@type") == "BreadcrumbList" for x in graph):
                graph.append(crumb)
            return data
        if isinstance(data, dict):
            return {"@context": data.get("@context", "https://schema.org"), "@graph": [{k:v for k,v in data.items() if k != "@context"}, crumb]}
        return data
    return update_jsonld_blocks(text, transform)

def improve_org_schema(text: str) -> str:
    description = "Manchester-based contemporary dance company founded in 2015 by Italian choreographers Ina Colizza and Antonello Apicella."
    def transform(data):
        def visit(obj):
            if isinstance(obj, list):
                for x in obj: visit(x)
            elif isinstance(obj, dict):
                if obj.get("@type") == "PerformingGroup" and obj.get("name") == "Matrafisc Dance Company":
                    obj.setdefault("description", description)
                    obj.setdefault("address", {"@type": "PostalAddress", "addressLocality": "Manchester", "addressCountry": "GB"})
                    obj.setdefault("areaServed", [
                        {"@type": "Country", "name": "United Kingdom"},
                        {"@type": "Country", "name": "Italy"},
                    ])
                    obj.setdefault("contactPoint", [
                        {"@type": "ContactPoint", "contactType": "general enquiries", "email": "matrafiscdance@gmail.com", "telephone": "+447541986885", "availableLanguage": ["en", "it"]},
                        {"@type": "ContactPoint", "contactType": "general enquiries", "email": "matrafiscdance@gmail.com", "telephone": "+393318197870", "availableLanguage": ["it", "en"]},
                    ])
                    obj.setdefault("knowsAbout", ["Contemporary dance", "Dance theatre", "Choreography", "Site-specific performance", "Dance education"])
                for v in obj.values(): visit(v)
        visit(data)
        return data
    return update_jsonld_blocks(text, transform)

def project_url(d, italian=False):
    return f"https://matrafiscdance.com/it/progetti/{d['it_slug']}/" if italian else f"https://matrafiscdance.com/{d['en_slug']}/"

def project_href(d, italian=False):
    return f"../{d['it_slug']}/" if italian else f"../{d['en_slug']}/"

def project_context_html(d, italian: bool) -> str:
    context = d["it_context"] if italian else d["en_context"]
    themes = d["it_themes"] if italian else d["en_themes"]
    heading = "Contesto creativo" if italian else "Creative context"
    themes_label = "Temi" if italian else "Themes"
    touring = "../../tournee/" if italian else "../touring/"
    workshops = "../../workshop-formazione/" if italian else "../workshops-education/"
    links_heading = "Programmazione e formazione" if italian else "Programming and education"
    links_copy = (
        "Per informazioni su tournée, programmazione, workshop o sviluppo creativo, esplora le pagine dedicate della compagnia."
        if italian else
        "For touring, programming, workshops or creative-development enquiries, explore the company’s dedicated information pages."
    )
    touring_text = "Tournée e programmazione" if italian else "Touring & programming"
    workshop_text = "Workshop e formazione" if italian else "Workshops & education"
    chips = "".join(f'<li>{esc(t)}</li>' for t in themes)
    return f'''
      <section class="project-context-grid reveal" aria-label="{esc(heading)}">
        <div class="project-context-copy">
          <p class="eyebrow">{esc(heading)}</p>
          <h2>{esc(d["title"])}</h2>
          <p>{esc(context)}</p>
        </div>
        <aside class="project-context-aside">
          <p class="eyebrow">{esc(themes_label)}</p>
          <ul class="project-theme-list">{chips}</ul>
          <div class="project-context-links">
            <strong>{esc(links_heading)}</strong>
            <p>{esc(links_copy)}</p>
            <a href="{touring}">{esc(touring_text)}</a>
            <a href="{workshops}">{esc(workshop_text)}</a>
          </div>
        </aside>
      </section>'''

def related_html(d, italian: bool) -> str:
    heading = "Progetti correlati" if italian else "Related projects"
    intro = "Continua nel repertorio Matrafisc." if italian else "Continue through the Matrafisc repertoire."
    cards = []
    for key in d["related"]:
        r = BY_KEY[key]
        href = f"../{r['it_slug']}/" if italian else f"../{r['en_slug']}/"
        cards.append(f'<a href="{href}" class="related-project-card"><span>{esc(r["title"])}</span><span class="icon-glyph" aria-hidden="true">→</span></a>')
    return f'''
      <section class="related-projects reveal">
        <div><p class="eyebrow">{esc(heading)}</p><h2>{esc(intro)}</h2></div>
        <div class="related-project-grid">{''.join(cards)}</div>
      </section>'''

def gallery_html(d, italian: bool) -> str:
    if "gallery" not in d:
        return ""
    heading = "Fotografie di performance" if italian else "Performance photography"
    items = []
    for rel, alt_en, w, h in d["gallery"]:
        alt = alt_en
        if italian:
            alt = {
                "Matrafisc dancers performing That Place Over There": "Danzatori Matrafisc in That Place Over There",
                "Solo performer in That Place Over There": "Interprete solista in That Place Over There",
                "Dancer performing That Place Over There": "Danzatrice in That Place Over There",
            }.get(alt_en, alt_en)
        src = "../../../" + rel if italian else "../" + rel
        items.append(f'<figure><img src="{src}" alt="{esc(alt)}" width="{w}" height="{h}" loading="lazy" decoding="async" /></figure>')
    return f'''
      <section class="project-gallery reveal" aria-labelledby="project-gallery-title">
        <p class="eyebrow">{esc(heading)}</p>
        <h2 id="project-gallery-title">{esc(d["title"])}</h2>
        <div class="project-gallery-grid">{''.join(items)}</div>
      </section>'''

def update_project_page(d, italian: bool) -> None:
    path = d["it_path"] if italian else d["en_path"]
    text = read(path)
    desc = d["it_desc"] if italian else d["en_desc"]
    canonical = project_url(d, italian)

    text = re.sub(r'(<meta\s+name="description"\s+content=")[^"]*(")', lambda m: m.group(1)+esc(desc)+m.group(2), text, count=1)
    text = re.sub(r'(<meta\s+property="og:description"\s+content=")[^"]*(")', lambda m: m.group(1)+esc(desc)+m.group(2), text, count=1)
    text = re.sub(r'(<meta\s+name="twitter:description"\s+content=")[^"]*(")', lambda m: m.group(1)+esc(desc)+m.group(2), text, count=1)

    themes = d["it_themes"] if italian else d["en_themes"]
    collection = "https://matrafiscdance.com/it/progetti/" if italian else "https://matrafiscdance.com/projects/"
    def schema_transform(data):
        def visit(obj):
            if isinstance(obj, list):
                for x in obj: visit(x)
            elif isinstance(obj, dict):
                if obj.get("@type") == "CreativeWork":
                    obj["description"] = desc
                    obj["keywords"] = ", ".join(themes)
                    obj["mainEntityOfPage"] = canonical
                    obj["isPartOf"] = {"@type": "CollectionPage", "url": collection, "name": "Progetti" if italian else "Projects"}
                for v in obj.values(): visit(v)
        visit(data)
        return data
    text = update_jsonld_blocks(text, schema_transform)

    # Make project marks meaningful images and prevent layout shift.
    if d.get("image") and d.get("dims"):
        w, h = d["dims"]
        alt_text = (f'Logo del progetto {d["title"]} di Matrafisc Dance' if italian else f'{d["title"]} project logo by Matrafisc Dance')
        text = text.replace('<div class="project-detail-mark reveal" aria-hidden="true">', '<div class="project-detail-mark reveal">')
        text = re.sub(
            r'(<div class="project-detail-mark reveal">\s*)<img([^>]+)alt=""([^>]*)>',
            lambda m: m.group(1) + f'<img{m.group(2)}alt="{esc(alt_text)}" width="{w}" height="{h}"{m.group(3)}>',
            text,
            count=1,
            flags=re.S,
        )

    if "project-context-grid" not in text:
        body_match = re.search(r'(<section class="project-detail-body reveal">[\s\S]*?</section>)', text)
        if body_match:
            addition = project_context_html(d, italian) + gallery_html(d, italian)
            text = text[:body_match.end()] + addition + text[body_match.end():]

    if d.get("video") and "media-direct-link" not in text:
        label = "Guarda sulla piattaforma originale" if italian else "Watch on the original platform"
        text = re.sub(
            r'(</section>\s*\n\s*<nav class="project-pagination")',
            f'<p class="media-direct-link"><a href="{d["video"]}" target="_blank" rel="noopener">{esc(label)} <span class="icon-glyph" aria-hidden="true">↗</span></a></p>\n\n      \\1',
            text,
            count=1,
        )

    if "related-projects" not in text:
        text = text.replace('<nav class="project-pagination"', related_html(d, italian) + '\n\n      <nav class="project-pagination"', 1)

    write(path, text)

def update_major_pages():
    paths = list(H1_REPLACEMENTS)
    for path in paths:
        text = read(path)
        text = replace_h1(path, text)
        text = add_breadcrumb_schema(path, text)
        if path in ("index.html", "it/index.html", "about-us/index.html", "it/compagnia/index.html"):
            text = improve_org_schema(text)
        # Invalid type attribute on anchors.
        text = re.sub(r'(<a\b[^>]*?)\s+type="button"([^>]*>)', r'\1\2', text)

        if path == "projects/index.html" and "project-index-support" not in text:
            support = '''
<section class="editorial-content section-pad project-index-support">
  <div><h2>Productions, commissions and collaborations</h2><p>The Matrafisc archive brings together dance theatre, site-specific performance, educational projects, international commissions and recent solo work. Each page documents the artistic idea, creative team, context and available archive material for that project.</p></div>
  <div><h2>From repertoire to partnership</h2><p>Projects can connect with performance programming, research, education and creative exchange. Explore <a href="../touring/">touring and programming</a> or <a href="../workshops-education/">workshops and education</a> for ways to work with Matrafisc.</p></div>
</section>'''
            text = text.replace('</section></main>', '</section>' + support + '</main>', 1)
        elif path == "it/progetti/index.html" and "project-index-support" not in text:
            support = '''
<section class="editorial-content section-pad project-index-support">
  <div><h2>Produzioni, commissioni e collaborazioni</h2><p>L’archivio Matrafisc riunisce danza teatro, performance site-specific, progetti educativi, commissioni internazionali e lavori recenti. Ogni pagina documenta idea artistica, team creativo, contesto e materiali d’archivio disponibili.</p></div>
  <div><h2>Dal repertorio alla collaborazione</h2><p>I progetti possono incontrare programmazione, ricerca, formazione e scambio creativo. Scopri <a href="../tournee/">tournée e programmazione</a> oppure <a href="../workshop-formazione/">workshop e formazione</a> per lavorare con Matrafisc.</p></div>
</section>'''
            text = text.replace('</section></main>', '</section>' + support + '</main>', 1)

        if path == "touring/index.html" and "presenter-support" not in text:
            extra = '''
<section class="editorial-content section-pad presenter-support">
  <div><h2>For presenters and partners</h2><p>Conversations can begin around a specific production or around the needs of a venue, festival, university or cultural programme. Matrafisc can discuss artistic context, space, audience engagement and how a performance may connect with a residency or workshop.</p></div>
  <div><h2>Explore the work first</h2><p>Use the <a href="../projects/">project archive</a> to understand the company’s range before making an enquiry, or contact Matrafisc with the context of your programme and the project that interests you.</p></div>
</section>'''
            text = text.replace('</main>', extra + '</main>', 1)
        elif path == "it/tournee/index.html" and "presenter-support" not in text:
            extra = '''
<section class="editorial-content section-pad presenter-support">
  <div><h2>Per programmatori e partner</h2><p>Il confronto può partire da una produzione specifica oppure dalle esigenze di un teatro, festival, università o programma culturale. Matrafisc può discutere contesto artistico, spazio, coinvolgimento del pubblico e possibili connessioni con residenze o workshop.</p></div>
  <div><h2>Esplora prima il lavoro</h2><p>Consulta l’<a href="../progetti/">archivio dei progetti</a> per conoscere il repertorio e poi contatta Matrafisc indicando il contesto della programmazione e il progetto di interesse.</p></div>
</section>'''
            text = text.replace('</main>', extra + '</main>', 1)

        if path == "workshops-education/index.html" and "workshop-support" not in text:
            extra = '''
<section class="editorial-content section-pad workshop-support">
  <div><h2>What sessions can explore</h2><p>Workshop content can draw on contemporary technique, improvisation, composition, performance presence, movement research and the transformation of personal experience into choreographic material. The emphasis can shift according to participants and context.</p></div>
  <div><h2>Connected to performance</h2><p>Education can sit alongside the company’s <a href="../projects/">repertoire</a> or be developed independently as a research-led encounter for students, artists, universities and cultural organisations.</p></div>
</section>'''
            text = text.replace('</main>', extra + '</main>', 1)
        elif path == "it/workshop-formazione/index.html" and "workshop-support" not in text:
            extra = '''
<section class="editorial-content section-pad workshop-support">
  <div><h2>Cosa può esplorare una sessione</h2><p>I workshop possono lavorare su tecnica contemporanea, improvvisazione, composizione, presenza scenica, ricerca del movimento e trasformazione dell’esperienza personale in materiale coreografico. L’accento può cambiare in base ai partecipanti e al contesto.</p></div>
  <div><h2>In dialogo con la performance</h2><p>La formazione può affiancare il <a href="../progetti/">repertorio</a> della compagnia oppure svilupparsi in modo autonomo come incontro di ricerca per studenti, artisti, università e organizzazioni culturali.</p></div>
</section>'''
            text = text.replace('</main>', extra + '</main>', 1)

        write(path, text)

def fix_project_link_behaviour():
    path = "script.js"
    text = read(path)
    # Standard anchor navigation must remain standard. Only non-anchor data-work
    # controls should invoke the quick-view dialog.
    pattern = re.compile(
        r"document\.querySelectorAll\('\[data-work\]'\)\.forEach\(el => \{[\s\S]*?\n\}\);",
        re.M,
    )
    replacement = """document.querySelectorAll('[data-work]').forEach(el => {
  if (el.matches('a[href]')) return;
  el.addEventListener('click', () => renderWork(el.dataset.work));
});"""
    text, n = pattern.subn(replacement, text, count=1)
    if n == 0:
        print("WARN: project click handler pattern not found")
    write(path, text)

def remove_geojs_fallback():
    path = "locale.js"
    text = read(path)
    text = re.sub(r'\n\s*async function countryFromGeoJS\(\) \{[\s\S]*?\n\s*\}\n\n\s*async function detectCountry', '\n\n  async function detectCountry', text, count=1)
    text = text.replace(
        "    let country = await countryFromCloudflare();\n    if (!country) country = await countryFromGeoJS();\n",
        "    const country = await countryFromCloudflare();\n"
    )
    write(path, text)

ICON_MAP = {
    "fa-arrow-right": "→",
    "fa-arrow-up": "↑",
    "fa-arrow-down": "↓",
    "fa-arrow-up-right-from-square": "↗",
    "fa-globe": "◎",
    "fa-shield-halved": "✓",
    "fa-film": "▶",
    "fa-envelope": "✉",
    "fa-phone": "☎",
    "fa-paper-plane": "→",
    "fa-instagram": "IG",
    "fa-facebook-f": "f",
}

def localize_icons():
    # Replace icon-font markup with tiny text glyphs. This removes the 74KB
    # stylesheet and large icon-font downloads from every page.
    icon_tag = re.compile(r'<i\s+class="([^"]*\bfa-[^"]*)"\s+aria-hidden="true"></i>')
    menu_tag = re.compile(r'<i\s+class="fa-solid fa-bars"\s+aria-hidden="true"></i>')

    for path in list(ROOT.rglob("*.html")) + [ROOT / "script.js"]:
        text = path.read_text(encoding="utf-8")
        text = menu_tag.sub('<span class="menu-icon" aria-hidden="true"><span></span><span></span><span></span></span>', text)

        def repl(m):
            classes = m.group(1).split()
            for cls in classes:
                if cls in ICON_MAP:
                    glyph = ICON_MAP[cls]
                    extra = " social-short" if cls in {"fa-instagram", "fa-facebook-f"} else ""
                    return f'<span class="icon-glyph{extra}" aria-hidden="true">{glyph}</span>'
            return m.group(0)

        text = icon_tag.sub(repl, text)
        text = re.sub(r'\s*<link rel="stylesheet" href="[^"]*assets/vendor/fontawesome/css/all\.min\.css"\s*/>', '', text)
        path.write_text(text, encoding="utf-8")

    # The menu no longer needs class swapping on an <i>; CSS animates the bars.
    p = ROOT / "site-common.js"
    text = p.read_text(encoding="utf-8")
    text = re.sub(r'\n\s*const icon = menuToggle\.querySelector\(\'i\'\);\n\s*icon\?\.classList\.toggle\(\'fa-bars\', !open\);\n\s*icon\?\.classList\.toggle\(\'fa-xmark\', open\);', '', text)
    text = re.sub(r'\n\s*const icon = menuToggle\?\.querySelector\(\'i\'\);\n\s*icon\?\.classList\.add\(\'fa-bars\'\);\n\s*icon\?\.classList\.remove\(\'fa-xmark\'\);', '', text)
    p.write_text(text, encoding="utf-8")

    css_path = ROOT / "enhancements.css"
    css = css_path.read_text(encoding="utf-8")
    if "/* Lightweight inline icons */" not in css:
        css += r'''

/* Lightweight inline icons */
.icon-glyph{display:inline-block;min-width:.85em;font:600 1em/1 var(--body);text-align:center;vertical-align:baseline}
.social-short{font-size:10px;letter-spacing:.02em}
.menu-icon{width:22px;height:16px;display:flex;flex-direction:column;justify-content:space-between}
.menu-icon span{display:block;width:100%;height:1.5px;background:currentColor;transform-origin:center;transition:transform .25s ease,opacity .2s ease}
.menu-open .menu-icon span:nth-child(1){transform:translateY(7.25px) rotate(45deg)}
.menu-open .menu-icon span:nth-child(2){opacity:0}
.menu-open .menu-icon span:nth-child(3){transform:translateY(-7.25px) rotate(-45deg)}

.project-context-grid{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(260px,.65fr);gap:clamp(50px,9vw,140px);padding:clamp(30px,5vw,70px) clamp(24px,6vw,92px) clamp(75px,9vw,120px);border-top:1px solid var(--line)}
.project-context-copy h2,.related-projects h2,.project-gallery h2{margin:0 0 22px;font:500 clamp(34px,4vw,58px)/.95 var(--display);letter-spacing:-.045em}
.project-context-copy p:last-child,.project-context-links p{color:#4f5360;font-size:15px;line-height:1.85}
.project-context-aside{border-top:1px solid var(--line);padding-top:22px}
.project-theme-list{list-style:none;margin:16px 0 34px;padding:0;display:flex;flex-wrap:wrap;gap:8px}
.project-theme-list li{border:1px solid var(--line);padding:8px 10px;font-size:9px;letter-spacing:.08em;text-transform:uppercase}
.project-context-links{border-top:1px solid var(--line);padding-top:20px}
.project-context-links strong{font:500 18px/1.2 var(--display)}
.project-context-links a{display:inline-flex;margin:10px 16px 0 0;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase}
.project-gallery{margin:0 clamp(24px,6vw,92px);padding:clamp(55px,7vw,90px) 0;border-top:1px solid var(--line)}
.project-gallery-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:12px}
.project-gallery figure{margin:0;overflow:hidden;background:rgba(32,42,102,.05)}
.project-gallery img{display:block;width:100%;height:100%;min-height:260px;object-fit:cover}
.related-projects{margin:0 clamp(24px,6vw,92px);padding:clamp(55px,7vw,90px) 0;border-top:1px solid var(--line)}
.related-project-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid var(--line);margin-top:30px}
.related-project-card{min-height:110px;padding:20px 16px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);display:flex;align-items:flex-end;justify-content:space-between;gap:20px;text-decoration:none;font:500 clamp(17px,2vw,25px)/1.05 var(--display)}
.related-project-card:hover,.related-project-card:focus-visible{background:var(--blue);color:var(--white);outline:none}
.media-direct-link{margin:-42px clamp(24px,6vw,92px) 70px;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase}
.media-direct-link a{text-decoration:none}
@media(max-width:900px){.project-context-grid{grid-template-columns:1fr}.project-gallery-grid{grid-template-columns:1fr 1fr}.project-gallery-grid figure:first-child{grid-column:1/-1}.related-project-grid{grid-template-columns:1fr}}
'''
    css_path.write_text(css, encoding="utf-8")

def fix_redirects():
    ht = read(".htaccess")
    ht = ht.replace("Redirect 301 /news/ /\n", "")
    additions = [
        "Redirect 301 /contacts/ /contact-us/",
        "Redirect 301 /productions/ /projects/",
        "Redirect 301 /events/ /projects/",
        "Redirect 301 /artistic-collaborations/ /projects/",
        "Redirect gone /news/",
    ]
    for line in additions:
        if line not in ht:
            insert_at = ht.find("\n<IfModule mod_expires.c>")
            ht = ht[:insert_at] + "\n" + line + ht[insert_at:]
    write(".htaccess", ht)

    red = read("_redirects")
    red = re.sub(r'^/news/\s+/\s+301\s*$', '', red, flags=re.M)
    additions2 = [
        "/contacts/ /contact-us/ 301",
        "/productions/ /projects/ 301",
        "/events/ /projects/ 301",
        "/artistic-collaborations/ /projects/ 301",
        "/news/ /404.html 410",
    ]
    for line in additions2:
        if line not in red:
            red += "\n" + line
    write("_redirects", red.strip() + "\n")

def update_sitemap():
    path = ROOT / "sitemap.xml"
    ET.register_namespace("", "http://www.sitemaps.org/schemas/sitemap/0.9")
    ET.register_namespace("xhtml", "http://www.w3.org/1999/xhtml")
    ET.register_namespace("image", "http://www.google.com/schemas/sitemap-image/1.1")
    ns = {"sm":"http://www.sitemaps.org/schemas/sitemap/0.9", "image":"http://www.google.com/schemas/sitemap-image/1.1"}
    tree = ET.parse(path)
    root = tree.getroot()

    image_map = {
        "https://matrafiscdance.com/": [
            "https://matrafiscdance.com/assets/archive/optimized/TPOT1-1.webp",
            "https://matrafiscdance.com/assets/archive/optimized/TPOT2-1.webp",
            "https://matrafiscdance.com/assets/archive/optimized/TPOT3-1.webp",
        ],
        "https://matrafiscdance.com/it/": [
            "https://matrafiscdance.com/assets/archive/optimized/TPOT1-1.webp",
            "https://matrafiscdance.com/assets/archive/optimized/TPOT2-1.webp",
            "https://matrafiscdance.com/assets/archive/optimized/TPOT3-1.webp",
        ],
    }
    changed_urls = set(H1_REPLACEMENTS)
    for d in PROJECTS.values():
        if d.get("image"):
            image_url = "https://matrafiscdance.com/" + d["image"]
            image_map[project_url(d, False)] = [image_url]
            image_map[project_url(d, True)] = [image_url]
        if d.get("gallery"):
            urls = ["https://matrafiscdance.com/" + x[0] for x in d["gallery"]]
            image_map[project_url(d, False)] = urls
            image_map[project_url(d, True)] = urls

    changed_locs = {
        "https://matrafiscdance.com/",
        "https://matrafiscdance.com/it/",
        "https://matrafiscdance.com/projects/",
        "https://matrafiscdance.com/it/progetti/",
        "https://matrafiscdance.com/about-us/",
        "https://matrafiscdance.com/it/compagnia/",
        "https://matrafiscdance.com/touring/",
        "https://matrafiscdance.com/it/tournee/",
        "https://matrafiscdance.com/workshops-education/",
        "https://matrafiscdance.com/it/workshop-formazione/",
        "https://matrafiscdance.com/contact-us/",
        "https://matrafiscdance.com/it/contatti/",
    }
    for d in PROJECTS.values():
        changed_locs.add(project_url(d, False))
        changed_locs.add(project_url(d, True))

    for url in root.findall("sm:url", ns):
        loc_el = url.find("sm:loc", ns)
        if loc_el is None or not loc_el.text:
            continue
        loc = loc_el.text.strip()
        for child in list(url):
            local = child.tag.split("}")[-1]
            if local in {"changefreq", "priority"}:
                url.remove(child)
            if child.tag == "{http://www.google.com/schemas/sitemap-image/1.1}image":
                url.remove(child)
        if loc in changed_locs:
            lm = url.find("sm:lastmod", ns)
            if lm is None:
                lm = ET.SubElement(url, "{http://www.sitemaps.org/schemas/sitemap/0.9}lastmod")
            lm.text = TODAY
        for img in image_map.get(loc, []):
            im = ET.SubElement(url, "{http://www.google.com/schemas/sitemap-image/1.1}image")
            il = ET.SubElement(im, "{http://www.google.com/schemas/sitemap-image/1.1}loc")
            il.text = img

    tree.write(path, encoding="utf-8", xml_declaration=True)

def strengthen_seo_audit():
    path = ROOT / "scripts/seo_audit.py"
    text = path.read_text(encoding="utf-8")
    marker = 'robots = ROOT / "robots.txt"'
    if "SEO content-quality regression checks" not in text:
        block = r'''
# SEO content-quality regression checks
indexable_meta = {}
for page in pages:
    raw = page.read_text(encoding="utf-8")
    parser = PageParser()
    parser.feed(raw)
    if page.name == "404.html" or has_noindex(parser):
        continue
    rel = str(page.relative_to(ROOT))
    title = "".join(parser.title_text).strip()
    descriptions = [m.get("content", "").strip() for m in parser.meta if m.get("name", "").lower() == "description"]
    description = descriptions[0] if descriptions else ""
    if description and not (80 <= len(description) <= 170):
        errors.append(f"{rel}: meta description length should be 80-170 characters, found {len(description)}")
    if '<a ' in raw and re.search(r'<a\b[^>]*\btype=["\']button["\']', raw, re.I):
        errors.append(f"{rel}: anchor contains invalid type=button")
    if "assets/vendor/fontawesome/css/all.min.css" in raw:
        errors.append(f"{rel}: Font Awesome stylesheet is still loaded")
    if title:
        indexable_meta.setdefault(("title", title), []).append(rel)
    if description:
        indexable_meta.setdefault(("description", description), []).append(rel)

for (kind, value), owners in indexable_meta.items():
    if len(owners) > 1:
        errors.append(f"duplicate {kind}: {owners}")

for project_path in [
    "bruise/index.html","jobs/index.html","souls-paths/index.html","periodo-blu/index.html","111-2/index.html",
    "is-someone-listening/index.html","europia/index.html","salford-university/index.html","valeria-famularo/index.html",
    "jo-lau/index.html","restlessness/index.html","midsummer-nights-memory/index.html","akerusia-danza/index.html",
    "october/index.html","the-world-in-my-body/index.html"
]:
    raw = (ROOT / project_path).read_text(encoding="utf-8")
    visible = re.sub(r'<script[\s\S]*?</script>|<style[\s\S]*?</style>|<[^>]+>', ' ', raw, flags=re.I)
    words = len(re.findall(r"\b[\w’'-]+\b", visible))
    if words < 190:
        errors.append(f"{project_path}: project page is too thin ({words} visible words)")
    if "related-projects" not in raw or "project-context-grid" not in raw:
        errors.append(f"{project_path}: missing contextual/related project SEO sections")

sitemap_raw = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
if "<changefreq>" in sitemap_raw or "<priority>" in sitemap_raw:
    errors.append("sitemap.xml: contains ignored changefreq/priority values")
if "xmlns:image=" not in sitemap_raw:
    errors.append("sitemap.xml: image namespace missing")

htaccess_raw = (ROOT / ".htaccess").read_text(encoding="utf-8")
for required_redirect in (
    "Redirect 301 /contacts/ /contact-us/",
    "Redirect 301 /productions/ /projects/",
    "Redirect 301 /events/ /projects/",
    "Redirect 301 /artistic-collaborations/ /projects/",
    "Redirect gone /news/",
):
    if required_redirect not in htaccess_raw:
        errors.append(f".htaccess: missing migration rule {required_redirect}")

'''
        text = text.replace(marker, block + marker)
    path.write_text(text, encoding="utf-8")

def main():
    update_major_pages()
    for d in PROJECTS.values():
        update_project_page(d, False)
        update_project_page(d, True)
    fix_project_link_behaviour()
    remove_geojs_fallback()
    localize_icons()
    fix_redirects()
    update_sitemap()
    strengthen_seo_audit()
    print("SEO upgrade completed.")

if __name__ == "__main__":
    main()
