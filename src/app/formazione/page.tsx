"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  BookOpen, 
  CheckCircle, 
  ChevronDown, 
  Award,
  Users,
  Briefcase,
  Target,
  Search,
  Filter
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const courses = [
  {
    id: 1,
    title: "«LO SCHOOL TEAM APPROACH»",
    desc: "Laboratorio teorico/esperienziale per la formazione professionale dei Docenti per il miglioramento della comunicazione e della capacità relazionale tra Docenti e Docenti, tra Docenti e Alunni e tra Docenti e Genitori. Autorizzato dal Ministero della Pubblica Istruzione, con D.M. del 28 luglio 2000, prot. n. 7360 ai sensi della Direttiva 1 luglio 1996 n. 305.",
    category: "Scuola & Docenti"
  },
  {
    id: 2,
    title: "«LA DISPERSIONE SCOLASTICA E LA PREVENZIONE DALLE CONDOTTE A RISCHIO»",
    desc: "Le strategie e le tecniche per un intervento didattico e educativo realmente formativo.",
    category: "Scuola & Docenti"
  },
  {
    id: 3,
    title: "«LA GESTIONE DEL CASO DIFFICILE IN CLASSE»",
    desc: "Interventi, tecniche e strategie risolutive per una relazione realmente efficace con «l’alunno difficile».",
    category: "Scuola & Docenti"
  },
  {
    id: 4,
    title: "«L’HELPING PROFESSION»",
    desc: "Laboratorio teorico/esperienziale per diventare «professionista della relazione d’aiuto», ovvero dell’arte dell’incoraggiamento.",
    category: "Metodologia Rogersiana"
  },
  {
    id: 5,
    title: "«LA COMUNICAZIONE E LA RELAZIONE EFFICACE»",
    desc: "Come promuovere l’insegnamento/apprendimento desiderato dal Docente, dagli Alunni e dai Genitori. Autorizzato dal Ministero della Pubblica Istruzione, con D.M. del 28 luglio 2000, prot. n. 7360 ai sensi della Direttiva 1 luglio 1996 n. 305.",
    category: "Laboratori & Comunicazione"
  },
  {
    id: 6,
    title: "EFFICACIA E QUALITÀ DELLA RELAZIONE",
    desc: "Il miglioramento della comunicazione e della capacità relazionale. Come instaurare relazioni profonde e significative nell’interazione personale e professionale.",
    category: "Laboratori & Comunicazione"
  },
  {
    id: 7,
    title: "L’APPROCCIO PSICOLOGICO CENTRATO SULLA PERSONA DI CARL ROGERS",
    desc: "Ovvero, le strategie e le tecniche della psicologia umanistica applicate al mondo del lavoro.",
    category: "Metodologia Rogersiana"
  },
  {
    id: 8,
    title: "«L’APPROCCIO PSICOPEDAGOGICO CENTRATO SULLA PERSONA E SUL DISCENTE DI CARL ROGERS»",
    desc: "Ovvero, le strategie e le tecniche della psicologia umanistica applicate all’istruzione.",
    category: "Metodologia Rogersiana"
  },
  {
    id: 9,
    title: "«COME OSSERVARE – FACILITARE E MOTIVARE IL GRUPPO CLASSE»",
    desc: "Le strategie e le tecniche per lo sviluppo della leadership democratica, della coesione di gruppo e del clima facilitante l’insegnamento/apprendimento. Il Gruppo d’Incontro: laboratorio di formazione professionale e crescita personale per i Docenti e gli Alunni.",
    category: "Scuola & Docenti"
  },
  {
    id: 10,
    title: "«LE TEORIE DELLA PERSONALITÀ – LE TEORIE DELLE RELAZIONI UMANE – LE TEORIE DELLA RISOLUZIONE DELLE TENSIONI E DEI CONFLITTI NEL GRUPPO CLASSE»",
    desc: "Il «rispetto dell’altro», l’«empatia» e la «congruenza» elementi costitutivi dell’Approccio Centrato sulla Persona di Carl Rogers.",
    category: "Metodologia Rogersiana"
  },
  {
    id: 11,
    title: "«IL PROCESSO EVOLUTIVO – LA PSICOLOGIA DELL’ETÀ EVOLUTIVA – LA PSICOLOGIA SCOLASTICA E DELL’EDUCAZIONE»",
    desc: "Il punto di vista della psicologia umanistica.",
    category: "Famiglia & Sviluppo"
  },
  {
    id: 12,
    title: "«IL DIRIGENTE SCOLASTICO CENTRATO SULLA PERSONA»",
    desc: "Rendere efficace il proprio «School team», saper «ingaggiare le Persone/Docenti», e promuovere la cooperazione efficace.",
    category: "Scuola & Docenti"
  },
  {
    id: 13,
    title: "«IL DOCENTE CENTRATO SULLA PERSONA»",
    desc: "Creare relazioni produttive all’interno del proprio contesto scolastico; sviluppare e mantenere relazioni significative nel proprio ambito lavorativo, familiare e sociale, facilitare l’apprendimento dei propri allievi; mettere in pratica gli insegnamenti dell’Approccio Centrato sul Discente.",
    category: "Scuola & Docenti"
  },
  {
    id: 14,
    title: "«IL CORRETTO APPROCCIO ALL’HANDICAP»",
    desc: "Psicologia umanistica per Docenti di Sostegno. La comunicazione e la relazione efficace con l’alunno «portatore di handicap». Il punto di vista della psicologia umanistica.",
    category: "Scuola & Docenti"
  },
  {
    id: 15,
    title: "«IL COMPORTAMENTO – L’OSSERVAZIONE SISTEMATICA DEL COMPORTAMENTO – LA VALUTAZIONE»",
    desc: "Le tecniche, gli strumenti e le strategie d’intervento della psicologia umanistica.",
    category: "Metodologia Rogersiana"
  },
  {
    id: 16,
    title: "«L.E.D.A. (Laboratorio Educazione Dialogo Ascolto) & L.E.C.E. (Laboratorio Esercitazione Congruenza Empatia)»",
    desc: "L’ascolto passivo e l’ascolto attivo, ovvero, saper ascoltare per saper comunicare ed incidere significativamente «sull’altro».",
    category: "Laboratori & Comunicazione"
  },
  {
    id: 17,
    title: "«R.O.I.D.A. & P.C.C.D.Q.C.I.»",
    desc: "R.O.I.D.A. (Risorse – Obiettivi – Idee – Decisione – Azione): la spirale del successo formativo; P.C.C.D.Q.C.I. (Perché – Chi – Che cosa – Dove – Quando – Come – In quali circostanze): la progettazione e la programmazione efficace degli interventi didattici e educativi per una scuola «centrata sulle persone».",
    category: "Laboratori & Comunicazione"
  },
  {
    id: 18,
    title: "«L’APPRENDIMENTO E LE DIFFICOLTÀ NELL’APPRENDIMENTO»",
    desc: "Le condizioni, le tecniche, gli strumenti e le strategie facilitanti l’apprendimento e lo sviluppo del processo cognitivo degli alunni.",
    category: "Scuola & Docenti"
  },
  {
    id: 19,
    title: "«IL LABORATORIO S.I.R.F. (Saper Inviare Ricevere Feedback)»",
    desc: "Le barriere alla comunicazione; il brainstorming e l’approccio al problem solving.",
    category: "Laboratori & Comunicazione"
  },
  {
    id: 20,
    title: "«L’AUTONOMIA SCOLASTICA»",
    desc: "L'innovazione metodologica e l'ampliamento dell'offerta formativa per il Docente Centrato sulla Persona.",
    category: "Scuola & Docenti"
  },
  {
    id: 21,
    title: "«I LINGUAGGI EXTRAVERBALI – L’EDUCAZIONE ALL’IMMAGINE E AL SUONO»",
    desc: "Il punto di vista della psicologia umanistica. Le tecniche, gli strumenti e le strategie d’intervento innovative.",
    category: "Laboratori & Comunicazione"
  },
  {
    id: 22,
    title: "«IL BAMBINO LUDENS»",
    desc: "Il gioco – la didattica del gioco – il gioco come crescita personale e sviluppo cognitivo: laboratorio teorico/esperienziale per i Docenti di scuola Materna ed Elementare.",
    category: "Famiglia & Sviluppo"
  },
  {
    id: 23,
    title: "«EDUCARE ALLA SESSUALITÀ RESPONSABILE»",
    desc: "L’attuazione di se stessi nella crescita psicofisica e sessuale. Laboratorio di formazione per i Docenti impegnati nella «relazione d’aiuto». Diventare «help professional consultant».",
    category: "Famiglia & Sviluppo"
  },
  {
    id: 24,
    title: "«COUNSELING E RELAZIONE D’AIUTO»",
    desc: "Seminario/laboratorio di formazione professionale e personale per i Docenti impegnati in attività psicopedagogiche.",
    category: "Metodologia Rogersiana"
  },
  {
    id: 25,
    title: "«DIVENTARE IL GENITORE DESIDERATO DAI PROPRI FIGLI»",
    desc: "Seminario/laboratorio di formazione professionale e personale per i Genitori. Migliorare la comunicazione e la capacità relazionale tra Genitori e figli.",
    category: "Famiglia & Sviluppo"
  },
  {
    id: 26,
    title: "«L’ORIENTAMENTO SCOLASTICO E PROFESSIONALE»",
    desc: "Sapere, saper Essere, saper fare. Le tecniche, gli strumenti e le strategie d’intervento innovative proposte dalla psicologia umanistica.",
    category: "Scuola & Docenti"
  },
  {
    id: 27,
    title: "«ON BECOMING A PERSON» – «IL MIO VERO MODO D’ESSERE»",
    desc: "Diventare una persona autorevole e significativa: seminario/laboratorio di formazione professionale e personale per i Docenti che vogliono applicare all’istruzione gli insegnamenti e le tecniche della psicologia umanistica.",
    category: "Metodologia Rogersiana"
  }
];

export default function Formazione() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tutti");
  const [showAllCourses, setShowAllCourses] = useState(false);

  const categories = ["Tutti", "Scuola & Docenti", "Metodologia Rogersiana", "Laboratori & Comunicazione", "Famiglia & Sviluppo"];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "Tutti" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedCourses = showAllCourses ? filteredCourses : filteredCourses.slice(0, 6);

  const pillars = [
    {
      title: "Ascolto Attivo",
      desc: "Lo strumento chiave per accogliere e comprendere i vissuti emotivi degli studenti e dei colleghi, riducendo le distorsioni comunicative."
    },
    {
      title: "Messaggio in Prima Persona (I-Message)",
      desc: "Tecnica per comunicare i propri bisogni e vissuti senza colpevolizzare l'interlocutore, riducendo le resistenze difensive."
    },
    {
      title: "Metodo Senza Perdenti (Win-Win)",
      desc: "Metodo di risoluzione democratica dei conflitti orientato a trovare soluzioni soddisfacenti per entrambe le parti coinvolte."
    }
  ];

  const accordionItems = [
    {
      title: "Corsi Metodo Gordon (T.E.T. - Teacher Effectiveness Training)",
      content: (
        <div className="space-y-3 text-stone-600 text-sm leading-relaxed">
          <p>ASPU è sede autorizzata per l'erogazione dei corsi Gordon in Campania. I percorsi T.E.T. sono specificamente strutturati per insegnanti di scuole di ogni ordine e grado e consentono di:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Migliorare la gestione della classe e creare un clima favorevole all'apprendimento.</li>
            <li>Risolvere in modo democratico e costruttivo i conflitti con gli alunni, i genitori e i colleghi.</li>
            <li>Ottenere crediti formativi MIUR (ove applicabile tramite accreditamento ministeriale).</li>
          </ul>
        </div>
      )
    },
    {
      title: "Seminari Relazionali per Professionisti",
      content: (
        <div className="space-y-3 text-stone-600 text-sm leading-relaxed">
          <p>Corsi intensivi e laboratori pratici ideati per accrescere l'efficacia relazionale e di coordinamento nei contesti aziendali, sanitari, associativi e del terzo settore. Le tematiche spaziano dalla leadership facilitante alla prevenzione del burnout.</p>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-white bg-stone-50">
      <Header />

      <main className="flex-grow pt-24">
        {/* HERO SECTION */}
        <section className="relative w-full h-[320px] sm:h-[420px] overflow-hidden flex items-center justify-center">
          <Image 
            src="/formazione.png" 
            alt="Formazione Professionale" 
            fill 
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-stone-900/60" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold uppercase tracking-widest font-outfit">
              Corsi &amp; Accreditamenti
            </span>
            <h1 className="font-outfit text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Formazione Relazionale
            </h1>
            <p className="text-stone-200 text-base sm:text-lg max-w-2xl mx-auto font-medium">
              Corsi specialistici ed aggiornamento per insegnanti, educatori e professionisti del sociale.
            </p>
          </div>
        </section>

        {/* DETAILS SECTION */}
        <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest font-outfit">Efficacia Relazionale</span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
                Il Metodo Gordon e la Comunicazione Efficace
              </h2>
              <p className="text-stone-700 text-lg leading-relaxed font-medium">
                La formazione relazionale dell'ASPU fornisce competenze pratiche basate sul metodo di Thomas Gordon per ottimizzare l'efficacia educativa, clinica e direttiva nei diversi contesti sociali.
              </p>
            </div>

            <div className="space-y-6 text-stone-600 leading-relaxed text-sm sm:text-base">
              <p>
                Il modello si fonda sulla classificazione dei comportamenti relazionali e sull'acquisizione di specifiche tecniche di comunicazione e risoluzione dei problemi, mirate a sostituire le barriere comunicative tradizionali con flussi di ascolto e condivisione.
              </p>
              <p>
                In particolare, nei corsi rivolti alla scuola (T.E.T.), il focus risiede nella creazione di relazioni democratiche che favoriscano la responsabilità individuale e l'autonomia dello studente.
              </p>
            </div>

            {/* PILLARS */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-stone-200">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="space-y-2 p-5 rounded-2xl bg-white border border-stone-100 shadow-sm">
                  <h4 className="font-outfit font-bold text-stone-900 text-base flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary flex-shrink-0" />
                    {pillar.title}
                  </h4>
                  <p className="text-stone-500 text-xs leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR INFO */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-stone-200/60 shadow-xl space-y-6">
            <h3 className="font-outfit font-bold text-xl text-stone-900">Perché formarsi con noi?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-stone-600 text-sm">ASPU è un polo di riferimento per il metodo Gordon in Campania.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-stone-600 text-sm">Metodologia basata sull'esperienza pratica (role-play, laboratori).</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-stone-600 text-sm">Rilascio di attestati ufficiali riconosciuti a livello internazionale.</p>
              </div>
            </div>
            <a href="#contatti" className="block w-full py-3.5 rounded-xl bg-primary text-white text-center font-semibold hover:bg-primary/95 transition-all text-sm">
              Richiedi Dettagli del Corso
            </a>
          </div>
        </section>

        {/* MIM / SOFIA / CARTA DEL DOCENTE ACCREDITATIONS */}
        <section className="py-16 bg-white border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-6 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest font-outfit">Riconoscimenti Ufficiali</span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
                Corsi di Formazione Riconosciuti dal Ministero (MIM)
              </h2>
              <p className="text-stone-600 text-sm sm:text-base">
                I nostri percorsi formativi per docenti sono accreditati e conformi alle direttive ministeriali per lo sviluppo professionale continuo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Box 1 */}
              <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200/60 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="font-outfit font-bold text-lg text-stone-900">Riconoscimento MIM &amp; USR</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    L'ASPU ha ottenuto, dal <strong>MIM</strong> e dall'<strong>USR Campania</strong>, il riconoscimento annuale per l'anno scolastico <strong>2024/2025</strong> per lo svolgimento di 7 corsi di formazione rivolti al personale docente della Regione Campania.
                  </p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200/60 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="font-outfit font-bold text-lg text-stone-900">Piattaforma S.O.F.I.A.</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    I corsi riconosciuti, ai sensi dell'art. 5 del D.M. 170/2016, sono stati pubblicati nel catalogo ufficiale del MIM sulla piattaforma <strong>S.O.F.I.A.</strong> Da cui è possibile visionare il percorso formativo ed iscriversi.
                  </p>
                </div>
                <a 
                  href="https://sofia.istruzione.it" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline pt-2 font-outfit"
                >
                  Accedi a S.O.F.I.A. →
                </a>
              </div>

              {/* Box 3 */}
              <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200/60 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-outfit font-bold text-lg text-stone-900">Carta del Docente</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Lo svolgimento dei corsi può essere richiesto direttamente dalle istituzioni scolastiche o da un gruppo di docenti (minimo 10 e massimo 20) che potranno pagare l'importo previsto con il bonus della <strong>Carta del Docente</strong>.
                  </p>
                </div>
                <a 
                  href="https://www.cartadeldocente.istruzione.it" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline pt-2 font-outfit"
                >
                  Usa la Carta del Docente →
                </a>
              </div>
            </div>

            {/* Logo Grid */}
            <div className="pt-12 border-t border-stone-200/85 flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-80 hover:opacity-100 transition-opacity">
              <div className="relative h-14 w-32 grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  src="/mim.avif" 
                  alt="Ministero dell'Istruzione e del Merito" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="relative h-14 w-32 grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  src="/miur.png" 
                  alt="Ministero dell'Istruzione dell'Università e della Ricerca" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="relative h-14 w-32 grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  src="/mepa.avif" 
                  alt="MEPA - Mercato Elettronico della Pubblica Amministrazione" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE COURSES CATALOG */}
        <section id="nostri-corsi" className="py-20 bg-stone-50 border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-6 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest font-outfit">Catalogo Formazione</span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
                Consulta i Nostri Corsi
              </h2>
              <p className="text-stone-600 text-sm sm:text-base">
                Offriamo un'ampia gamma di percorsi formativi teorico-esperienziali per docenti, dirigenti e genitori, strutturati secondo l'Approccio Centrato sulla Persona.
              </p>
            </div>

            {/* Filter controls */}
            <div className="space-y-6 max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Search input */}
                <div className="relative w-full md:max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Cerca un corso per titolo o parola chiave..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-stone-800 placeholder-stone-400 text-sm"
                  />
                </div>

                {/* Counter */}
                <div className="text-stone-500 text-sm font-semibold whitespace-nowrap">
                  Trovati: <span className="text-primary">{filteredCourses.length}</span> {filteredCourses.length === 1 ? "corso" : "corsi"}
                </div>
              </div>

              {/* Category pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setShowAllCourses(false);
                    }}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? "bg-primary text-white shadow-sm"
                        : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Course Cards Grid */}
            {filteredCourses.length === 0 ? (
              <div className="text-center py-16 text-stone-400">
                Nessun corso corrisponde ai criteri di ricerca selezionati.
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                <AnimatePresence>
                  {displayedCourses.map((course) => (
                    <motion.div
                      layout
                      key={course.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-start gap-4">
                          <span className="font-outfit font-extrabold text-sm text-primary/60 bg-primary/5 px-2.5 py-1 rounded-lg">
                            Corso {course.id}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider font-bold text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
                            {course.category}
                          </span>
                        </div>
                        <h3 className="font-outfit font-bold text-base text-stone-900 leading-snug">
                          {course.title}
                        </h3>
                        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                          {course.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}

            {/* "Mostra altri" button */}
            {filteredCourses.length > 6 && (
              <div className="text-center pt-8">
                <button
                  onClick={() => setShowAllCourses(!showAllCourses)}
                  className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/95 transition-all text-sm shadow-md shadow-primary/10"
                >
                  {showAllCourses ? "Mostra meno corsi" : `Mostra tutti i corsi (${filteredCourses.length})`}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ACCORDION ACCREDITATIONS */}
        <section className="py-20 bg-stone-100 border-t border-stone-200">
          <div className="max-w-5xl mx-auto px-6 space-y-12">
            <div className="text-center space-y-3">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest font-outfit">Iter didattico</span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-stone-900">Dettagli dei Corsi Attivi</h2>
            </div>

            <div className="space-y-4">
              {accordionItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-outfit font-bold text-lg text-stone-900 bg-stone-50/20 hover:bg-stone-50/50 transition-colors"
                  >
                    <span>{item.title}</span>
                    <ChevronDown className={`h-5 w-5 text-stone-500 transition-transform duration-300 ${activeAccordion === idx ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {activeAccordion === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-4 border-t border-stone-100">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
