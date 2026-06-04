"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  CheckCircle, 
  ChevronDown, 
  Clock, 
  Award,
  Users,
  Compass,
  FileText,
  BookOpen,
  Heart,
  Sparkles
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Aggiornamento() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const programs = [
    {
      title: "Supervisione Clinica e Didattica",
      desc: "Incontri periodici di supervisione (individuali e di gruppo) con supervisori accreditati AssoCounseling, essenziali per la verifica e il miglioramento dell'efficacia professionale."
    },
    {
      title: "Seminari Specialistici Avanzati",
      desc: "Focus su tematiche emergenti nel counseling: la gestione del lutto, il supporto alla genitorialità, il counseling interculturale ed i nuovi modelli di intervento corporeo."
    },
    {
      title: "Aggiornamento e Crediti Formativi",
      desc: "Tutte le nostre proposte rilasciano attestati utili all'acquisizione dei crediti formativi (CFU) obbligatori per il mantenimento dell'iscrizione ai registri professionali."
    }
  ];

  const accordionItems = [
    {
      title: "Supervisione in Gruppo per Counselor Professionisti",
      content: (
        <div className="space-y-3 text-stone-600 text-sm leading-relaxed">
          <p>Un laboratorio permanente di supervisione didattica e clinica in cui i counselors attivi possono analizzare casi complessi, risonanze personali e migliorare la qualità dei propri interventi con i clienti, sotto la guida del Dott. Silvano Forcillo.</p>
        </div>
      )
    },
    {
      title: "Webinar di Approfondimento & Focus Teorici",
      content: (
        <div className="space-y-3 text-stone-600 text-sm leading-relaxed">
          <p>Incontri teorici ed esperienziali online e in presenza incentrati sull'evoluzione dei paradigmi dell'ascolto Rogersiano, le neuroscienze affettive e l'integrazione di tecniche espressive corporee.</p>
        </div>
      )
    },
    {
      title: "Strategie & Tecniche di Counseling Breve",
      content: (
        <div className="space-y-6 text-stone-600 text-sm sm:text-base leading-relaxed">
          <p>
            Le strategie e le tecniche di counseling possono essere considerate strumenti concreti che aiutano il cliente a raggiungere la condizione desiderata. In particolare, le tecniche di <strong>counseling breve</strong> (indicato in letteratura anche come terapia breve centrata sulla soluzione) offrono idee pratiche e stimolanti per facilitare cambiamenti significativi e duraturi il più velocemente possibile.
          </p>
          <p>
            Il modello basato sui programmi del <strong>Prof. Littrell</strong> (Iowa State University) si propone di supportare professionisti ed aspiranti counselors nel raggiungimento di obiettivi chiave per accelerare il processo di cambiamento:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-3 text-sm pt-2">
            {[
              "Conoscere idee innovative su come aiutare le persone a cambiare vita.",
              "Acquisire metodi pratici per perseguire obiettivi in modo rapido ed efficace.",
              "Apprendere molteplici modalità di focalizzazione sul processo di cambiamento.",
              "Fornire conferme e legittimità alle nozioni apprese tramite la pratica clinica.",
              "Spostare il focus interiore più sulla soluzione che sul problema.",
              "Sperimentare il counseling come professione stimolante e interessante.",
              "Utilizzare casi reali videoregistrati per incrementare la flessibilità relazionale.",
              "Attuare i cambiamenti desiderati nella propria dimensione personale."
            ].map((obj, index) => (
              <div key={index} className="flex gap-2.5 items-start p-3 bg-stone-50 rounded-xl border border-stone-200/60">
                <span className="font-outfit font-extrabold text-primary">{index + 1}</span>
                <span className="text-stone-700">{obj}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-stone-100">
            <h4 className="font-outfit font-bold text-stone-900 mb-3 text-sm uppercase tracking-wider text-primary">Le 7 Caratteristiche del Modello:</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Focalizzazione sul cliente",
                "Incremento di competenze",
                "Trattazione piacevole",
                "Struttura accessibile e accattivante",
                "Cambiamenti più veloci",
                "Nuove idee, opzioni e concetti",
                "Fare qualcosa di diverso"
              ].map((pill, index) => (
                <span key={index} className="px-3.5 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/10">
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Il Processo del Cambiamento: Chi Cambia?",
      content: (
        <div className="space-y-6 text-stone-600 text-sm sm:text-base leading-relaxed">
          <p>
            Il percorso per diventare <strong>«Counselor Brevi»</strong> è un processo impegnativo, continuo e in costante evoluzione. Come facilitatori della relazione d'aiuto, impariamo a divenire maggiormente consapevoli di chi siamo e di come appariamo agli altri. Esploriamo e studiamo la complessa realtà circostante per comprendere meglio le persone e i contesti in cui sono inserite.
          </p>
          <p>
            Le storie che i nostri clienti ci affidano sono cariche di problemi, disillusioni e sofferenza, ma al contempo ricche di risorse latenti. Il compito fondamentale del counselor è fornire una cornice di significato per ristrutturare queste storie, accrescendo la flessibilità, la fiducia ed orientandole verso una rinnovata speranza.
          </p>

          <div className="p-6 bg-primary/5 rounded-2xl border-l-4 border-primary text-stone-850 font-medium">
            <strong>Opportunità Formativa Rogersiana:</strong><br />
            Il corso intensivo offre l'occasione unica di acquisire le strategie dell'Approccio Centrato sulla Persona di Carl R. Rogers per operare con autorevolezza ed efficacia nel campo dell'<em>Help Profession</em>.
          </div>

          <div className="pt-4 border-t border-stone-100">
            <h4 className="font-outfit font-bold text-stone-900 mb-3 text-sm uppercase tracking-wider text-primary">Destinatari del Percorso:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-bold font-outfit">
              {["Medici & Psicologi", "Psicoterapeuti", "Counselors", "Docenti", "Genitori", "Operatori Sociali", "Riabilitatori", "Facilitatori Auto-Aiuto"].map((dest, idx) => (
                <div key={idx} className="p-3 bg-stone-50 rounded-xl border border-stone-200/50 text-stone-700">
                  {dest}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "I Principi dell’Approccio Centrato sulla Persona (Carl Rogers)",
      content: (
        <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
          <p>
            I cardini fondamentali dell'Approccio Umanistico Centrato sulla Persona ideati da Carl Rogers, utili a favorire la crescita interiore ed il mantenimento dell'equilibrio relazionale:
          </p>

          <div className="space-y-3 pt-2">
            {[
              "Ciascuno possiede una tendenza interna a realizzare i propri potenziali verso la crescita e in modo da mantenere o migliorare la vita.",
              "Dovremmo essere molto più aperti verso tutte le esperienze, comprese le varie sensazioni che provengono dal corpo.",
              "Gli altri ci forniscono un appoggio essenziale nel farci avere esperienze più complete.",
              "Il concetto di sé scaturisce da queste esperienze e anche dai rapporti con gli altri.",
              "Per quanto l'amore incondizionato degli altri (stima, benevolenza e approvazione) sia importante, non dovremmo considerarci in modo favorevole o sfavorevole secondo quello che è il giudizio altrui.",
              "Se tentiamo di essere quello che vogliono gli altri, finiremo col perdere il contatto con noi stessi, col diventarci estranei.",
              "Se le nuove esperienze non si accordano con il concetto che abbiamo di noi stessi, finiremo con l'essere ansiosi, rigidi e nevrotici.",
              "Se ci formiamo un concetto di noi secondo quanto vogliono gli altri, la tensione dei grossi conflitti che ne derivano può essere ridotta da qualche forte sostegno esterno.",
              "Se gli altri riescono ad accettarci come siamo, diventa più facile anche per noi accettarci come siamo."
            ].map((principle, index) => (
              <div key={index} className="flex items-start gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-200/50 hover:bg-stone-50/80 transition-colors">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-stone-700 text-sm sm:text-base">{principle}</span>
              </div>
            ))}
          </div>
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
            src="/aggiornamento.png" 
            alt="Aggiornamento Professionale" 
            fill 
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-stone-900/60" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold uppercase tracking-widest font-outfit">
              Formazione Continua
            </span>
            <h1 className="font-outfit text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Aggiornamento Continuo
            </h1>
            <p className="text-stone-200 text-base sm:text-lg max-w-2xl mx-auto font-medium">
              Supervisione didattica, seminari specialistici e crediti formativi per counselors e professionisti.
            </p>
          </div>
        </section>

        {/* DETAILS SECTION */}
        <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest font-outfit">Supervisione &amp; Ricerca</span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
                Mantenere l'Eccellenza nella Relazione d'Aiuto
              </h2>
              <p className="text-stone-700 text-lg leading-relaxed font-medium">
                ASPU organizza percorsi strutturati di supervisione e aggiornamento per garantire che l'intervento professionale dei diplomati risponda sempre ai più elevati standard etici e operativi.
              </p>
            </div>

            <div className="space-y-6 text-stone-600 leading-relaxed text-sm sm:text-base">
              <p>
                In accordo con le linee guida delle maggiori associazioni di categoria nazionali (come AssoCounseling), la formazione permanente e la supervisione costante sono considerate parti integranti del percorso di responsabilità e tutela del cliente.
              </p>
              <p>
                Le attività offrono un'occasione costante di interscambio e confronto per promuovere la ricerca scientifica e teorica legata all'Approccio Rogersiano a Napoli.
              </p>
            </div>

            {/* PROGRAMS */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-stone-200">
              {programs.map((prog, idx) => (
                <div key={idx} className="space-y-2 p-5 rounded-2xl bg-white border border-stone-100 shadow-sm">
                  <h4 className="font-outfit font-bold text-stone-900 text-base flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    {prog.title}
                  </h4>
                  <p className="text-stone-500 text-xs leading-relaxed">{prog.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR INFO */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-stone-200/60 shadow-xl space-y-6">
            <h3 className="font-outfit font-bold text-xl text-stone-900">Iscrizione e Frequenza</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-stone-600 text-sm">Percorsi flessibili erogati nel fine settimana o in modalità ibrida.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-stone-600 text-sm">Rilascio dell'attestato di partecipazione con indicazione dei CFU per registro.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-stone-600 text-sm">Possibilità di convenzioni e iscrizioni agevolate per soci ASPU.</p>
              </div>
            </div>
            <a href="#contatti" className="block w-full py-3.5 rounded-xl bg-primary text-white text-center font-semibold hover:bg-primary/95 transition-all text-sm">
              Consulta il Calendario Supervisioni
            </a>
          </div>
        </section>

        {/* ACCORDION DETAIL */}
        <section className="py-20 bg-stone-100 border-t border-stone-200">
          <div className="max-w-5xl mx-auto px-6 space-y-12">
            <div className="text-center space-y-3">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest font-outfit">Attività Formative</span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-stone-900">Dettagli dei Moduli</h2>
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
