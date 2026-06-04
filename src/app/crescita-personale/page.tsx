"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Sparkles, 
  CheckCircle, 
  ChevronDown, 
  Heart,
  Users,
  Compass,
  Smile
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Quote = ({ text, author }: { text: string; author: string }) => (
  <div className="relative p-6 my-4 bg-stone-50 rounded-xl border-l-4 border-primary/40 overflow-hidden">
    <span className="absolute -top-4 -left-2 text-8xl text-stone-200/50 font-serif pointer-events-none select-none">“</span>
    <p className="relative z-10 italic text-stone-600 text-sm sm:text-base mb-2 font-serif">
      "{text}"
    </p>
    <cite className="block text-right text-xs sm:text-sm font-semibold text-stone-500 not-italic font-outfit">
      — {author}
    </cite>
  </div>
);

export default function CrescitaPersonale() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/crescita1.png", "/crescita2.png"];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const keyAreas = [
    {
      title: "Consapevolezza Emotiva",
      desc: "Imparare a reconocer, accogliere ed esprimere in modo costruttivo le proprie emozioni per prevenire lo stress e migliorare l'equilibrio interiore."
    },
    {
      title: "Comunicazione Empatica",
      desc: "Sviluppare abilità di ascolto attivo basate sulla sospensione del giudizio, ideali per stabilire relazioni autentiche in famiglia e sul lavoro."
    },
    {
      title: "Autostima & Risorse",
      desc: "Scoprire ed attivare il proprio potenziale inespresso, focalizzandosi sull'accettazione di sé come punto di partenza per il cambiamento."
    },
    {
      title: "Gestione delle Relazioni",
      desc: "Apprendere modalità assertive per esprimere i propri bisogni nel rispetto di quelli altrui, prevenendo e mediando i conflitti interpersonali."
    }
  ];

  const accordionItems = [
    {
      title: "Seminari a Tema & Weekend Esperienziali",
      content: (
        <div className="space-y-3 text-stone-600 text-sm leading-relaxed">
          <p>Cicli di incontri nel fine settimana (solitamente Sabato pomeriggio o Domenica mattina) dedicati a temi specifici della crescita personale:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>La gestione costruttiva della rabbia e dell'ansia.</li>
            <li>Autostima e autoaccettazione rogersiana.</li>
            <li>La comunicazione assertiva nei contesti quotidiani.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Corso di Formazione per Genitori",
      content: (
        <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
          <p className="font-semibold text-stone-800 text-base font-outfit">Come diventare il genitore desiderato e amato dai propri figli</p>
          
          <Quote 
            text="Non esistono bambini difficili, ma solo cattivi genitori e cattivi maestri. L'infelicità dell'infanzia è un prodotto degli interventi errati dell'adulto."
            author="Alexander Sutherland Neill"
          />
          
          <p>
            Il corso di formazione per genitori si prefigge lo scopo di sviluppare, migliorare la sensibilità e le competenze necessarie per risolvere i numerosi e complessi problemi che insorgono quotidianamente nella vita familiare. Tali capacità, una volta acquisite, facilitano la soluzione dei problemi e contribuiscono progressivamente alla creazione di un clima affettivo e relazionale soddisfacente e produttivo per l’intera famiglia.
          </p>
          <p>
            Il corso si propone, come obiettivo primario, la crescita personale e professionale dei genitori per svolgere al meglio la difficile funzione genitoriale. La formazione, infatti, privilegia l’apprendimento esperienziale in connessione con le tecniche di formazione professionale e lo sviluppo delle qualità umane, che caratterizzano l’Approccio sociopsicopedagogico non-direttivo conosciuto come <strong>“Approccio Centrato sulla Persona”</strong>.
          </p>
          <p>
            Il corso è rivolto ai genitori desiderosi di migliorare la capacità di comunicazione e la capacità relazionale con i propri figli, al fine di poter significativamente ed efficacemente incidere sul processo evolutivo della loro crescita psicofisica, socioaffettiva e relazionale. Il Corso permetterà l’acquisizione di competenze specifiche peculiari dell’Approccio Umanistico-Esistenziale: l’Ascolto Attivo, l’Accettazione dell’altro in quanto Persona, il Rispetto reciproco, la Congruenza e l’Empatia, che consentiranno di saper vivere con successo, soddisfazione e autorealizzazione il ruolo di genitori e la difficile relazione madre-figlia/o; padre-figlia/o.
          </p>
          
          <div className="pt-4">
            <h4 className="font-outfit font-bold text-stone-900 mb-3 text-sm uppercase tracking-wider text-primary">Alla fine del corso i genitori sapranno:</h4>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                "Ascoltare i propri figli in modo che essi si sentano capiti e rispettati.",
                "Parlare ai propri figli in modo da essere capiti.",
                "Evitare le conseguenze negative del metodo educativo permissivo, autoritario e incoerente.",
                "Evitare comportamenti che incutono timore e provocano timidezza e/o aggressività.",
                "Concordare le regole del comportamento accettabile e desiderato da entrambi.",
                "Aiutare i propri figli ad essere persone fiduciose e autonome.",
                "Aiutare i propri figli nelle scelte e nelle decisioni che riguardano la loro vita.",
                "Aiutare i propri figli a nutrire sentimenti positivi per se stessi e per gli altri.",
                "Migliorare e sviluppare l’Autostima nei propri figli.",
                "Prestare ascolto e attenzione alle dinamiche interiori dei propri figli.",
                "Utilizzare l’intelligenza e il linguaggio emotivo.",
                "Promuovere nei figli una visione umanistica dell’esistenza."
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Il Gruppo d’Incontro",
      content: (
        <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
          <p>
            L’esperienza del gruppo d’incontro consente di raggiungere alcuni considerevoli traguardi, che promuovono e facilitano la crescita personale e professionale dei partecipanti.
          </p>
          <p>
            Il Gruppo d’incontro insegna all’individuo a osservare la natura delle sue interazioni con gli altri, con sé stesso e col gruppo, altresì ad acquisire una maggiore competenza nel trattare situazioni interpersonali difficili. Aiuta a far emergere il latente, ma profondissimo bisogno di un cambiamento di fiducia verso sé stessi. Nel Gruppo d’Incontro ci si rende conto degli atteggiamenti controproducenti nella comunicazione, nelle interazioni interpersonali e nelle relazioni. Così, acquisendo una maggiore libertà e una migliore comunicazione e capacità relazionale, emergono nuove idee, concetti e nuove direzioni.
          </p>
          <p>
            Il gruppo d’incontro è di enorme aiuto nel dar modo agli individui di divenire consapevoli dei propri sentimenti sul cambiamento e di fare del cambiamento stesso una possibilità costruttiva per una migliore qualità della vita.
          </p>
          
          <div className="pt-4">
            <h4 className="font-outfit font-bold text-stone-900 mb-3 text-sm uppercase tracking-wider text-primary">Traguardi del Gruppo d'Incontro:</h4>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                "Favorisce la promozione della speranza",
                "Consente di visualizzare che i propri problemi sono simili a quelli degli altri",
                "Consente di dare supporto e di essere di aiuto agli altri (altruismo)",
                "Consente di sperimentare esperienze emozionali correttive",
                "Sviluppa la capacità di socializzazione e integrazione",
                "Aiuta ad individuare comportamenti e modelli da cui trarre ispirazione",
                "Sollecita l’apprendimento delle tematiche interpersonali",
                "Sviluppa la percezione della coesività del gruppo",
                "Favorisce il cambiamento",
                "Il gruppo d’Incontro aiuta ad uscire dall’incongruenza e dall’incertezza",
                "Favorisce la ristrutturazione cognitiva",
                "Fornisce utili informazioni circa la nuova cultura della terapia di gruppo",
                "Rappresenta una importante esperienza emozionale correttiva delle relazioni vissute e congelate nella famiglia di origine (messa in discussione dei comportamenti stereotipati)."
              ].map((traguardo, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-stone-700">{traguardo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Gruppo d’Incontro a Tema",
      content: (
        <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
          <p>
            Il gruppo d’Incontro costituisce l’occasione di vivere un’esperienza nuova basata su un incontro settimanale di circa due ore, nel quale comunicare liberamente al di fuori degli schemi convenzionali, per realizzare un contatto migliore con se stessi e con gli altri.
          </p>
          <p>
            Si tratta di un vero e proprio laboratorio particolarmente indicato per genitori, docenti, professionisti della relazione d’aiuto, animatori di comunità, operatori sociali, insegnanti, giovani e tutti coloro che sono interessati a sviluppare la propria autostima, l’autofiducia, la creatività, l’espressività, la conoscenza e l’integrazione tra il razionale e l’intuitivo/emotivo.
          </p>
          <p className="italic text-stone-500">
            Il gruppo è a tempo determinato, perché durerà solo per il tempo richiesto dalla trattazione della tematica scelta.
          </p>
          
          <div className="pt-4">
            <h4 className="font-outfit font-bold text-stone-900 mb-3 text-sm uppercase tracking-wider text-primary">Tematiche Proposte:</h4>
            <div className="space-y-3">
              {[
                { num: "1", title: "La gestione efficace dei conflitti nelle relazioni a due", desc: "Marito/moglie, genitori/figli, docente/alunni, datore di lavoro/dipendenti; nelle interazioni familiari, nelle interazioni sociali e lavorative." },
                { num: "2", title: "Paura di vivere e paura d’amare", desc: "Ovvero, «Osare di Vivere»." },
                { num: "3", title: "La sessualità come piacere e crescita", desc: "Piacere di sentire l’altro e sentirsi con l’altro e come crescita personale." },
                { num: "4", title: "La paura d’esprimersi con il linguaggio corporeo", desc: "" },
                { num: "5", title: "Amore – Gelosia – Invidia", desc: "" },
                { num: "6", title: "«I giorni dell’ira»", desc: "La rabbia che è in me." },
                { num: "7", title: "Sessualità – Omosessualità – Bisessualità", desc: "" },
                { num: "8", title: "Il dottor Jeckyll e Mr. Hyde che sono in me", desc: "" }
              ].map((tema, index) => (
                <div key={index} className="flex gap-4 p-3 bg-stone-50 rounded-xl border border-stone-200/60">
                  <span className="font-outfit font-bold text-lg text-primary/80">{tema.num}</span>
                  <div>
                    <h5 className="font-semibold text-stone-900 text-sm sm:text-base">{tema.title}</h5>
                    {tema.desc && <p className="text-stone-500 text-xs sm:text-sm mt-0.5">{tema.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "«SELF - ESTEEM»",
      content: (
        <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
          <p className="font-semibold text-stone-800 text-base font-outfit">Accrescere l'autostima per sentirsi, sentire e vivere meglio</p>
          
          <div className="space-y-2">
            <Quote 
              text="I nostri dubbi sono traditori e ci fanno perdere il bene che potremmo ottenere perché abbiamo paura di osare."
              author="William Shakespeare"
            />
            <Quote 
              text="Soltanto chi osa spingersi un po’ più in là scopre quanto può andare lontano."
              author="Sergio Bambarén"
            />
          </div>
          
          <p>
            Il corso offre ai partecipanti l'occasione unica e singolare, attraverso le tecniche e le strategie proposte dalla Psicologia Umanistica e dall'Approccio Centrato sulla Persona di Carl R. Rogers, di potersi "liberare dalla propria storia", sperimentare e acquisire concretamente una "consapevolezza di sé, senza giudizi e senza paure ataviche", "gioire per quello che si è e per quello che si fa" e "godere della propria originaria unicità esistenziale", condivisa senza più limiti e paure con "gli altri".
          </p>
          <p>
            L'autostima, infatti, non nasce dal paragone con un "modello ideale", né dal sentirsi all'altezza di "qualcuno" o di "qualcosa". Essa, invece, nasce dalla fiducia di esserci, cioè di essere adeguati all'esperienza della propria vita, quale essa sia, malattia e morte comprese. Dal considerare la personalità non come un fatto statico e immutabile, ma come energia e potenzialità che può crescere grazie alla conoscenza che l'uomo ha di sé e all'opportunità che gli viene offerta di essere se stesso.
          </p>
          <p>
            Pertanto, un'autostima profonda si esprime nell'essere in "contatto consapevole dentro e fuori di noi", nell'<em>hic et nunc</em>, con il fluire della vita così com'è, e non come ci aspettiamo che essa sia.
          </p>
        </div>
      )
    },
    {
      title: "«MASOCHISMO MORALE»",
      content: (
        <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
          <p className="font-semibold text-stone-800 text-base font-outfit">Volersi Male e non Volersi Bene</p>
          
          <p>
            Alcuni di noi, più di altri, sono dotati di quel singolare tratto psicologico che è la sensibilità, qualità tipicamente umana, da sempre elogiata da psicologi e filosofi; essa dovrebbe costituire la via ottimale per raggiungere il benessere e la felicità. Spesso, tuttavia, non è così: quanto più un individuo è dotato di sensibilità, tanto più può andare incontro ad ansie, dubbi, conflitti; non di rado fino a scivolare in una qualche forma di psicopatologia.
          </p>
          <p>
            In tal senso, un esito particolarmente ricorrente e catastrofico è quello di finire nel <strong>“masochismo morale”</strong>. Il masochismo morale è un comportamento psicologico la cui causa emotiva è, a sua volta, il senso di colpa. Esiste, quindi, una correlazione psicologica che tiene uniti questi tre aspetti della personalità: sensibilità, senso di colpa e masochismo morale.
          </p>
          <p>
            Questo drammatico e sofferto complesso di fattori psichici può svilupparsi in differenti direzioni: può dare luogo, in alcuni casi, alle cosiddette dipendenze patologiche (da affetti, da persone, situazioni o sostanze); in altri casi, a patologie del carattere, come la nevrosi ossessiva (o “nevrosi del dovere”); infine, in altri casi ancora, alla depressione, che è l’esito estremo, di amplissima rilevanza epidemiologica, del bisogno masochistico di punirsi e di soffrire.
          </p>
          <p>
            Molto più spesso di quanto la stessa psichiatria non affermi, queste patologie possono essere compresenti in una stessa personalità, e il passaggio dall’una all’altra può essere accompagnata da manifestazioni d’ansia e da attacchi di panico.
          </p>
        </div>
      )
    },
    {
      title: "Incontri di Counseling Individuale",
      content: (
        <div className="space-y-3 text-stone-600 text-sm leading-relaxed">
          <p>Percorsi individuali brevi (solitamente dai 5 ai 12 colloqui) con counselor professionisti diplomati ASPU. Sono finalizzati a supportare la persona in momenti di passaggio, decisioni complesse, o temporanee difficoltà esistenziali/professionali.</p>
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
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image 
                src={slides[currentSlide]} 
                alt="Crescita Personale" 
                fill 
                priority
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-stone-900/60" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold uppercase tracking-widest font-outfit">
              Seminari &amp; Workshop
            </span>
            <h1 className="font-outfit text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Crescita Personale
            </h1>
            <p className="text-stone-200 text-base sm:text-lg max-w-2xl mx-auto font-medium">
              Percorsi di gruppo ed individuali per espandere la consapevolezza e sviluppare il potenziale umano.
            </p>
          </div>
        </section>

        {/* DETAILS SECTION */}
        <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest font-outfit">Il Percorso Relazionale</span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
                Espandi la Consapevolezza e Trasforma la Tua Vita
              </h2>
              <p className="text-stone-700 text-lg leading-relaxed font-medium">
                La crescita personale in ASPU non consiste nell'acquisizione passiva di conoscenze teoriche, ma in un cammino di esperienza diretta incentrato sul benessere psico-relazionale della persona.
              </p>
            </div>

            <div className="space-y-6 text-stone-600 leading-relaxed text-sm sm:text-base">
              <p>
                Attraverso metodologie attive ed esperienziali (il cerchio, i giochi di ruolo relazionali, la drammatizzazione, l'espressione corporea ed artistica), i partecipanti hanno l'opportunità di confrontarsi con sé stessi e con gli altri in un clima accogliente e protetto.
              </p>
              <p>
                L'obiettivo finale è ritrovare la propria bussola interiore, sbloccando le risorse creative necessarie per affrontare con successo le sfide della vita affettiva, lavorativa e sociale.
              </p>
            </div>

            {/* KEY AREAS */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-stone-200">
              {keyAreas.map((area, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-outfit font-bold text-stone-900 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary flex-shrink-0" />
                    {area.title}
                  </h4>
                  <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR INFO */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-stone-200/60 shadow-xl space-y-6">
            <h3 className="font-outfit font-bold text-xl text-stone-900">A chi si rivolge?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-stone-600 text-sm">A chi vuole migliorare la comunicazione con familiari e colleghi.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-stone-600 text-sm">A chi attraversa fasi di cambiamento (lavoro, relazioni, pensione).</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-stone-600 text-sm">A chiunque desideri approfondire l'autoconsapevolezza emotiva.</p>
              </div>
            </div>
            <a href="#contatti" className="block w-full py-3.5 rounded-xl bg-primary text-white text-center font-semibold hover:bg-primary/95 transition-all text-sm">
              Iscriviti al Prossimo Incontro
            </a>
          </div>
        </section>

        {/* ACCORDION ACTIVITY TYPES */}
        <section className="py-20 bg-stone-100 border-t border-stone-200">
          <div className="max-w-5xl mx-auto px-6 space-y-12">
            <div className="text-center space-y-3">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest font-outfit">Le Nostre Attività</span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-stone-900">Modalità di Partecipazione</h2>
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
