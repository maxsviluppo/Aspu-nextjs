"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  GraduationCap, 
  CheckCircle, 
  Calendar, 
  Award, 
  ChevronDown, 
  BookOpen, 
  Users, 
  ArrowRight,
  Sparkles,
  Clock,
  Briefcase
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ScuolaCounseling() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const stats = [
    { label: "Edizioni attivate", value: "17" },
    { label: "Ore di formazione", value: "25.732" },
    { label: "Counselors diplomati", value: "250+" },
    { label: "Intensivi residenziali", value: "68" },
    { label: "Ore di supervisione", value: "2.670" },
    { label: "Ore di tirocinio e stage", value: "8.500" }
  ];

  const accordionItems = [
    {
      title: "Requisiti di accesso e fasi di ammissione",
      content: (
        <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
          <p className="font-semibold text-stone-850">Per essere ammessi alla Scuola è necessario possedere uno dei seguenti requisiti:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Laurea (anche triennale) in qualsiasi disciplina.</li>
            <li>Diploma di scuola media superiore e comprovata attività professionale di almeno 60 mesi nei settori dell'educazione, dell'insegnamento, della sanità, del sociale o delle risorse umane.</li>
          </ul>
          <p className="font-semibold text-stone-850 mt-4">Fasi di ammissione:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Colloquio motivazionale e di orientamento con il Direttore della Scuola.</li>
            <li>Test d'ingresso psico-attitudinale.</li>
            <li>Valutazione del curriculum vitae et studiorum.</li>
          </ol>
        </div>
      )
    },
    {
      title: "Iter formativo e monte ore",
      content: (
        <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
          <p>Il percorso formativo si sviluppa in <strong>3 anni</strong> per un totale di oltre <strong>750 ore</strong> di attività didattica così suddivise:</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-2">
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/50">
              <span className="block font-bold text-primary text-lg">390 Ore</span>
              <span className="text-xs text-stone-500">Lezioni teorico-pratiche in aula</span>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/50">
              <span className="block font-bold text-primary text-lg">90 Ore</span>
              <span className="text-xs text-stone-500">Laboratori esperienziali</span>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/50">
              <span className="block font-bold text-primary text-lg">90 Ore</span>
              <span className="text-xs text-stone-500">Supervisione didattica in gruppo</span>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/50">
              <span className="block font-bold text-primary text-lg hunt-heading">150 Ore</span>
              <span className="text-xs text-stone-500">Tirocinio pratico guidato</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Certificazioni rilasciate",
      content: (
        <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
          <p>Al completamento del percorso e al superamento dell'esame finale, la Scuola rilascia:</p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <Award className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-850 block">Diploma di Professional Counselor</strong>
                <span className="text-xs text-stone-500">Titolo valido per l'iscrizione immediata al Registro Nazionale dei Counselor (AssoCounseling) ai sensi della L. 4/2013.</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Award className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-850 block">Attestato delle Competenze Relazionali</strong>
                <span className="text-xs text-stone-500">Rilasciato al termine del 1° e 2° anno per certificare lo sviluppo di abilità comunicative interpersonali.</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Organizzazione didattica",
      content: (
        <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
          <p>La didattica è strutturata in formula weekend per agevolare chi lavora:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>10 Weekend all'anno</strong> (Sabato 09:00 - 18:30 e Domenica 09:00 - 13:30).</li>
            <li><strong>2 Intensivi Residenziali</strong> all'anno (dal giovedì alla domenica) incentrati sul lavoro corporeo e sull'evoluzione del gruppo d'incontro.</li>
            <li>Frequenza obbligatoria per almeno l'<strong>80%</strong> delle ore didattiche complessive.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Riconoscimenti professionali",
      content: (
        <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
          <p>La Scuola Superiore di Counseling dell'ASPU è accreditata e riconosciuta da <strong>AssoCounseling</strong> con codice univoco di iscrizione. Questo garantisce standard qualitativi elevati ed europei nel campo della relazione d'aiuto.</p>
          <div className="bg-primary/5 p-4 rounded-xl border-l-4 border-primary text-stone-850 font-medium">
            Il titolo rilasciato permette la libera professione di Counselor in conformità con la Legge n. 4 del 14 gennaio 2013 relativa alle professioni non regolamentate.
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-white bg-stone-50">
      <Header />

      <main className="flex-grow pt-24">
        <section className="relative w-full h-[320px] sm:h-[420px] overflow-hidden flex items-center justify-center">
          <Image 
            src="/scuola2.png" 
            alt="Scuola di Counseling" 
            fill 
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-stone-900/60" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold uppercase tracking-widest font-outfit">
              XVI Edizione - Iscrizioni Aperte
            </span>
            <h1 className="font-outfit text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Scuola di Counseling
            </h1>
            <p className="text-stone-200 text-base sm:text-lg max-w-2xl mx-auto font-medium">
              Formazione professionale triennale ad &ldquo;Approccio Umanistico Integrato&rdquo; a Napoli dal 2003.
            </p>
          </div>
        </section>

        {/* SECTION 2: INTRO & HISTORY */}
        <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest font-outfit">La Nostra Scuola</span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
                Scuola Superiore di Counseling ad &ldquo;Approccio Umanistico Integrato&rdquo;
              </h2>
              <p className="text-stone-700 text-lg leading-relaxed font-medium">
                La Scuola di Counseling nasce all'interno dell'ASPU con l'intento di formare figure in grado di facilitare la relazione d'aiuto, basandosi sull'ascolto empatico e sulle potenzialità di auto-realizzazione della persona.
              </p>
            </div>

            <div className="space-y-6 text-stone-600 leading-relaxed text-sm sm:text-base">
              <p>
                In conformità con il modello di Carl Rogers, la scuola sostiene che l'efficacia dell'aiuto non consista nell'offrire ricette precostituite o direttive esterne, bensì nel creare le condizioni relazionali favorevoli affinché il cliente possa mobilitare le proprie risorse interiori e fare scelte esistenziali responsabili.
              </p>
              <p>
                Nel corso dei suoi 22 anni di attività relazionale, la scuola ha perfezionato un approccio che integra i fondamenti della Terapia Centrata sulla Persona con contributi della Gestalt, dell'Analisi Transazionale, della Bioenergetica e della Psicologia Sistemico-Relazionale, per dare al futuro professionista una mappa teorico-pratica ricca ed esaustiva.
              </p>
            </div>

            {/* STATS BLOCK */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-stone-200">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="block font-outfit font-extrabold text-3xl text-primary">{stat.value}</span>
                  <span className="block text-xs text-stone-500 font-semibold uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR BOX */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-stone-200/60 shadow-xl space-y-6">
            <h3 className="font-outfit font-bold text-xl text-stone-900">Perché scegliere ASPU?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-stone-600 text-sm leading-relaxed"><strong>Standard Qualitativi Elevati</strong>: Programma accreditato da associazioni professionali nazionali.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-stone-600 text-sm leading-relaxed"><strong>Docenti e Supervisori Certificati</strong>: Professionisti con oltre 20 anni di esperienza clinica e formativa.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-stone-600 text-sm leading-relaxed"><strong>Incontri Esperienziali Residui</strong>: Lavoro intensivo di gruppo per integrare teoria e crescita personale.</p>
              </div>
            </div>
            <a href="#contatti" className="block w-full py-3.5 rounded-xl bg-primary text-white text-center font-semibold hover:bg-primary/95 transition-all text-sm">
              Richiedi Opuscolo Informativo
            </a>
          </div>
        </section>

        {/* METODOLOGIA & ABILITÀ */}
        <section className="py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <div className="max-w-3xl space-y-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest font-outfit">Competenze e Metodi</span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">Le 8 Abilità Chiave del Counselor ASPU</h2>
              <p className="text-stone-400">
                L'iter formativo prepara lo studente a padroneggiare abilità comunicative, relazionali e di mediazione dei conflitti applicabili in molteplici ambiti professionali.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Ascolto Empatico", desc: "Abilità di comprendere il mondo interiore del cliente 'come se' fosse il proprio, senza mai perdere il confine." },
                { title: "Accettazione Incondizionata", desc: "Sviluppo di un atteggiamento non giudicante e di profondo rispetto per l'esperienza vissuta dall'altro." },
                { title: "Congruenza e Autenticità", desc: "Consapevolezza e trasparenza del proprio stato emotivo per fungere da specchio chiaro nella relazione." },
                { title: "Gestione delle Emozioni", desc: "Riconoscimento e accoglienza delle risonanze emotive personali e del cliente durante il colloquio." },
                { title: "Risoluzione dei Conflitti", desc: "Metodologie di mediazione basate sulla comunicazione non violenta e sul problem-solving Rogersiano." },
                { title: "Facilitazione di Gruppo", desc: "Capacità di condurre gruppi d'incontro per catalizzare la crescita e il confronto reciproco." },
                { title: "Consapevolezza Corporea", desc: "Integrazione dei segnali psico-corporei ed energetici nel processo di ascolto relazionale." },
                { title: "Etica Professionale", desc: "Rispetto del codice deontologico, del segreto professionale e dei limiti operativi del counseling." }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-stone-800/40 border border-stone-800 space-y-3">
                  <span className="font-outfit font-extrabold text-primary text-xl">0{idx + 1}</span>
                  <h4 className="font-outfit font-bold text-white text-lg">{item.title}</h4>
                  <p className="text-stone-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACCORDION INFO SECTION */}
        <section className="py-20 max-w-5xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest font-outfit">Organizzazione del Corso</span>
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-stone-900">Dettagli del Percorso Formativo</h2>
          </div>

          <div className="space-y-4">
            {accordionItems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
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
        </section>

        {/* DIREZIONE & PERCORSO PERSONALE */}
        <section className="py-20 bg-white border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
            {/* Foto Direttore */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-stone-150">
                <Image 
                  src="/presidente.jpeg" 
                  alt="Dr. Silvano Forcillo" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

            {/* Testo Direttore */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest font-outfit">La Direzione</span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-stone-900">Dr. Silvano Forcillo</h2>
              <h3 className="font-outfit text-lg font-bold text-stone-600">Direttore della Scuola e Presidente ASPU</h3>
              <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                Psicologo rogersiano e psicoterapeuta iscritto all'Ordine degli Psicologi della Campania. Vanta oltre trent'anni di attività professionale e di conduzione di gruppi d'incontro basati sul modello Rogersiano. È stato allievo diretto e collaboratore dell'I.A.C.P. (Istituto dell'Approccio Centrato sulla Persona).
              </p>
              <div className="bg-stone-50 p-6 rounded-2xl border-l-4 border-accent text-stone-800 text-sm">
                <strong>Il Percorso Personale</strong>: Il counseling non si apprende solo sui libri. L'iter ASPU richiede a ciascun partecipante un lavoro di esplorazione interiore e di autoconsapevolezza emotiva, curato in particolar modo durante gli intensivi residenziali.
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
