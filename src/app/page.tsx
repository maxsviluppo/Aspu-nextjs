"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  BookOpen, 
  Users, 
  Sparkles, 
  Heart, 
  ChevronRight, 
  ChevronLeft,
  Award,
  GraduationCap,
  Calendar,
  CheckCircle,
  FileText
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heroSlides = [
  {
    id: 0,
    image: "/hero1.avif",
    label: "Relazione d'Aiuto",
    title: "Il Counseling Integrato\ndell'Approccio Umanistico",
    subtitle: "Formiamo Counselors per una società centrata sulle persone, basata sull'ascolto empatico e sul potenziale di auto-realizzazione.",
    cta: "Scopri la Scuola",
    ctaHref: "#scuola"
  },
  {
    id: 1,
    image: "/hero2.png",
    label: "Crescita Personale & Formazione",
    title: "Insieme per crescere\ne trasformarsi",
    subtitle: "Percorsi esperienziali di gruppo per espandere la consapevolezza di sé, gestire le emozioni e sviluppare il proprio potenziale umano.",
    cta: "Le Nostre Attività",
    ctaHref: "#attivita"
  },
  {
    id: 2,
    image: "/hero3.png",
    label: "Dal 1999 a Napoli",
    title: "Un percorso interiore\nche cambia la vita",
    subtitle: "Da oltre 25 anni accompagniamo persone e professionisti verso una visione esistenziale più autentica, consapevole e centrata sulla persona.",
    cta: "Contattaci",
    ctaHref: "#contatti"
  }
];

export default function Home() {
  const [activeCourse, setActiveCourse] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [showHistory, setShowHistory] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const goToSlide = useCallback((idx: number, dir?: number) => {
    setSlideDirection(dir ?? (idx > currentSlide ? 1 : -1));
    setCurrentSlide(idx);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % heroSlides.length;
    goToSlide(next, 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    goToSlide(prev, -1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 5500);
    return () => clearInterval(timer);
  }, [nextSlide, isHovered]);

  // 3D tilt effect states for context image
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rY = ((x / rect.width) - 0.5) * 15; // Max 15 deg tilt
    const rX = ((y / rect.height) - 0.5) * -15;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // 3D tilt effect states for video card
  const [vidRotateX, setVidRotateX] = useState(0);
  const [vidRotateY, setVidRotateY] = useState(0);

  const handleVidMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rY = ((x / rect.width) - 0.5) * 10; // Max 10 deg tilt
    const rX = ((y / rect.height) - 0.5) * -10;
    setVidRotateX(rX);
    setVidRotateY(rY);
  };

  const handleVidMouseLeave = () => {
    setVidRotateX(0);
    setVidRotateY(0);
  };

  // 3D tilt effect states for coppia image card
  const [coppiaRotateX, setCoppiaRotateX] = useState(0);
  const [coppiaRotateY, setCoppiaRotateY] = useState(0);

  const handleCoppiaMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rY = ((x / rect.width) - 0.5) * 12; // Max 12 deg tilt
    const rX = ((y / rect.height) - 0.5) * -12;
    setCoppiaRotateX(rX);
    setCoppiaRotateY(rY);
  };

  const handleCoppiaMouseLeave = () => {
    setCoppiaRotateX(0);
    setCoppiaRotateY(0);
  };

  // State to handle the clockwise positions swap of the profiles
  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    const swapTimer = setInterval(() => {
      setIsSwapped(prev => !prev);
    }, 5000);
    return () => clearInterval(swapTimer);
  }, []);

  // Slide state for Counseling Integrato / Applicazioni Efficaci
  const [counselingSlide, setCounselingSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounselingSlide(prev => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const courses = [
    {
      title: "Scuola di Counseling",
      desc: "La Scuola Superiore di Counseling ad \"Approccio Umanistico Integrato\" prepara figure professionali capaci di guidare la relazione d'aiuto secondo il modello Rogersiano.",
      duration: "3 Anni - XVI Edizione",
      details: [
        "Formazione teorico-pratica integrata",
        "Approccio Centrato sulla Persona di Carl Rogers",
        "Tirocinio ed esperienze in gruppo",
        "Riconoscimento professionale"
      ],
      icon: GraduationCap
    },
    {
      title: "Crescita Personale",
      desc: "Percorsi individuali e di gruppo ideati per espandere la consapevolezza di sé, gestire lo stress, le emozioni ed evolvere il proprio potenziale umano.",
      duration: "Seminari & Workshop",
      details: [
        "Incontri esperienziali",
        "Gestione emotiva e dello stress",
        "Comunicazione empatica ed assertiva",
        "Risoluzione costruttiva dei conflitti"
      ],
      icon: Sparkles
    },
    {
      title: "Formazione & Aggiornamento",
      desc: "Corsi specialistici e aggiornamento professionale per docenti, educatori, psicologi e professionisti del sociale e della relazione d'aiuto.",
      duration: "Moduli Flessibili",
      details: [
        "Metodo T.E.T. (Thomas Gordon)",
        "Dinamiche di gruppo ed evoluzione sociale",
        "Sicurezza e benessere relazionale sul lavoro",
        "Attestato di partecipazione e crediti formativi"
      ],
      icon: BookOpen
    }
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-white">
      <Header />

      <main className="flex-grow pt-24">
        {/* HERO SLIDESHOW */}
        <section 
          id="hero" 
          className="relative w-full overflow-hidden" 
          style={{ height: "calc(100vh - 80px)", minHeight: "560px" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slides */}
          <AnimatePresence initial={false} custom={slideDirection}>
            <motion.div
              key={currentSlide}
              custom={slideDirection}
              variants={{
                enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.75, ease: [0.32, 0, 0.67, 0] }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Background image */}
              <Image
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                fill
                priority
                className="object-cover object-center"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/50 to-stone-900/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

              {/* Slide Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="max-w-3xl space-y-6"
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white/90 font-outfit text-xs font-semibold uppercase tracking-widest border border-white/20">
                      {heroSlides[currentSlide].label}
                    </span>
                    <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight" style={{ whiteSpace: "pre-line" }}>
                      {heroSlides[currentSlide].title}
                    </h1>
                    <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl">
                      {heroSlides[currentSlide].subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <a
                        href={heroSlides[currentSlide].ctaHref}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-base hover:bg-primary/90 shadow-xl shadow-primary/30 transition-all hover:scale-[1.02]"
                      >
                        {heroSlides[currentSlide].cta} <ChevronRight className="h-5 w-5" />
                      </a>
                      <a
                        href="#contatti"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/15 backdrop-blur-sm text-white font-semibold border border-white/30 hover:bg-white/25 transition-all"
                      >
                        Richiedi Informazioni
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next arrows */}
          <button
            id="hero-prev-btn"
            onClick={prevSlide}
            aria-label="Slide precedente"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/25 transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            id="hero-next-btn"
            onClick={nextSlide}
            aria-label="Slide successiva"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/25 transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots navigation */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                id={`hero-dot-${idx}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Vai alla slide ${idx + 1}`}
                className={`transition-all rounded-full ${
                  idx === currentSlide
                    ? "w-8 h-2.5 bg-primary shadow-lg shadow-primary/40"
                    : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          {/* Slide counter */}
          <div className="absolute bottom-8 right-6 sm:right-8 z-20 font-outfit text-white/60 text-sm">
            <span className="text-white font-bold">{String(currentSlide + 1).padStart(2, "0")}</span> / {String(heroSlides.length).padStart(2, "0")}
          </div>
        </section>

        {/* CHI SIAMO / MISSION */}
        <section id="chiasmo" className="py-24 max-w-7xl mx-auto px-6 border-t border-border/40">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Animated 3D Image on Left */}
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 relative group"
            >
              <div 
                className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-stone-200 cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transition: "transform 0.1s ease",
                  transformStyle: "preserve-3d"
                }}
              >
                <Image 
                  src="/mission.avif" 
                  alt="ASPU Ambito e Contesto" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
              </div>
            </motion.div>
            
            {/* Mission Content on Right */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <span className="text-primary font-semibold text-sm uppercase tracking-widest font-outfit">Chi Siamo</span>
                <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-stone-900">
                  La Nostra Missione
                </h2>
                <p className="text-stone-700 leading-relaxed text-lg font-medium">
                  L&apos;ASPU nata nel 1999 è un&apos;associazione di promozione sociale che si dedica alla formazione, all&apos;istruzione e all&apos;aggiornamento professionale di figure emergenti della nostra società. La nostra mission è la diffusione di una visione umanistica dell&apos;esistenza centrata sulla persona.
                </p>
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline font-outfit focus:outline-none pt-1"
                >
                  {showHistory ? "Nascondi la nostra storia" : "Leggi la nostra storia & accreditamenti →"}
                </button>
              </div>

              <AnimatePresence>
                {showHistory && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 pt-4 pb-6 text-sm text-stone-600 border-t border-stone-200/60 mt-2 leading-relaxed">
                      <p>
                        L’Associazione svolge attività di orientamento e formazione per la crescita personale e professionale per quanti operano nel settore delle relazioni d’aiuto (help professions), in particolare per insegnanti, educatori, operatori sociali e sanitari, genitori e volontari.
                      </p>
                      <p>
                        Organizziamo corsi di formazione biennali sull’Approccio Centrato sulla Persona in diverse istituzioni e città d’Italia. Un aspetto cardine e peculiare della nostra attività è rappresentato dal “continuing educational”: alla scuola, alla famiglia e al volontariato è riservata un’attenzione speciale mediante corsi base e approfondimenti continui per insegnanti, genitori e volontari.
                      </p>
                      <p>
                        La relazione d’aiuto e la crescita personale sono gli aspetti più sostanziali del nostro impegno. Tutti gli associati collaborano secondo le proprie competenze alla creazione di relazioni interpersonali profonde, finalizzate al miglioramento della società, supportati dall’insegnamento di Carl Rogers e della psicologia esistenziale-umanistica (la &ldquo;Terza Forza&rdquo;).
                      </p>
                      <p>
                        Siamo attivamente impegnati nella diffusione dell’Approccio psicopedagogico rogersiano, della socioterapia (come integrazione tra sistema sociale e della personalità) e del metodo educativo non-direttivo.
                      </p>
                      
                      <div className="pt-4 space-y-4">
                        <h4 className="font-outfit font-bold text-stone-900 text-xs sm:text-sm uppercase tracking-wider text-primary">Riconoscimenti &amp; Accreditamenti</h4>
                        <div className="relative border-l-2 border-primary/30 ml-2 pl-6 space-y-6 text-xs sm:text-sm">
                          <div className="relative">
                            <div className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-primary border-2 border-white" />
                            <strong className="text-stone-850 block font-outfit">28 Luglio 2000</strong>
                            <p className="text-stone-500 mt-0.5">Autorizzazione dal MPI (D.M. prot. n. 7360) per lo svolgimento di corsi di aggiornamento per docenti di ogni ordine e grado.</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-primary border-2 border-white" />
                            <strong className="text-stone-850 block font-outfit">17 Gennaio 2003</strong>
                            <p className="text-stone-500 mt-0.5">Accreditamento provvisorio quale Ente di formazione autorizzato dal MIUR per corsi di aggiornamento docenti (D.M. n. 177).</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-primary border-2 border-white" />
                            <strong className="text-stone-850 block font-outfit">4 Luglio 2003</strong>
                            <p className="text-stone-500 mt-0.5">Accreditamento definitivo quale Ente di formazione autorizzato dal MIUR (D.M. n. 177) per l'aggiornamento professionale dei docenti.</p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-primary border-2 border-white" />
                            <strong className="text-stone-850 block font-outfit">04 Giugno 2012</strong>
                            <p className="text-stone-500 mt-0.5">Accreditamento ad ASSOCOUNSELING (CERT-0066-2012) in ossequio alla Legge n. 4 del 14 Gennaio 2013 per le professioni non regolamentate.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Founders Section */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-stone-200/60">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      SF
                    </div>
                    <div>
                      <h4 className="font-outfit font-bold text-stone-900 text-sm">Dr. Silvano Forcillo</h4>
                      <p className="text-stone-500 text-xs">Presidente & Psicoterapeuta</p>
                    </div>
                  </div>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Psicologo rogersiano, ex Responsabile Dipartimento I.A.C.P. Trainer Gordon ed esperto di dinamiche di gruppo.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                      ES
                    </div>
                    <div>
                      <h4 className="font-outfit font-bold text-stone-900 text-sm">Emanuela Scassa</h4>
                      <p className="text-stone-500 text-xs">Founder & Counselor</p>
                    </div>
                  </div>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Professional Counselor, cura lo sviluppo dei programmi formativi e dei percorsi di crescita personale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IL PRESIDENTE & DIREZIONE */}
        <section id="presidente-sezione" className="py-24 bg-white border-t border-stone-200/60 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Overlapping Floating Images on Left */}
            <div className="lg:col-span-5 relative h-[500px] w-full flex items-center justify-center">
              
              {/* Card 1: Connection Hands (Large Background element) */}
              <motion.div 
                animate={{ 
                  y: [0, -6, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute w-full max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-stone-200/80 z-10 opacity-70"
              >
                <Image 
                  src="/mani.jpg" 
                  alt="Relazione di aiuto e ascolto" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-stone-900/20" />
              </motion.div>

              {/* Card 2: Dottoressa - Emanuela Scassa (Top Right Overlap) */}
              <motion.div 
                animate={{ 
                  x: isSwapped ? [0, 60, -180] : [-180, -240, 0], 
                  y: isSwapped ? [0, 200, 240] : [240, 40, 0],
                  rotate: isSwapped ? [1, 3, -1] : [-1, -3, 1]
                }}
                transition={{ 
                  duration: 2.2, 
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05, zIndex: 30 }}
                className="absolute top-8 right-0 w-[170px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-white z-20 cursor-pointer"
              >
                <Image 
                  src="/dottoressa.jpeg" 
                  alt="Emanuela Scassa" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent p-3 text-white">
                  <p className="font-outfit font-bold text-xs">Emanuela Scassa</p>
                  <p className="text-[9px] text-stone-300">Co-Founder & Counselor</p>
                </div>
              </motion.div>

              {/* Card 3: Il Presidente - Silvano Forcillo (Bottom Left Overlap) */}
              <motion.div 
                animate={{ 
                  x: isSwapped ? [0, -60, 180] : [180, 240, 0], 
                  y: isSwapped ? [0, -200, -240] : [-240, -40, 0],
                  rotate: isSwapped ? [-1, -3, 1] : [1, 3, -1]
                }}
                transition={{ 
                  duration: 2.2, 
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05, zIndex: 30 }}
                className="absolute bottom-8 left-0 w-[200px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-white z-20 cursor-pointer transition-shadow hover:shadow-primary/20"
              >
                <Image 
                  src="/presidente.jpeg" 
                  alt="Dr. Silvano Forcillo" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent p-3.5 text-white">
                  <p className="font-outfit font-bold text-sm">Dr. Silvano Forcillo</p>
                  <p className="text-[10px] text-primary font-semibold">Presidente ASPU</p>
                </div>
              </motion.div>

            </div>

            {/* President Info on Right */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-3">
                <span className="text-primary font-semibold text-sm uppercase tracking-widest font-outfit">La Direzione</span>
                <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
                  Il Presidente
                </h2>
                <h3 className="font-outfit text-xl font-bold text-stone-700">
                  Silvano Forcillo &ndash; Presidente dell&rsquo;ASPU
                </h3>
                <p className="text-stone-600 leading-relaxed text-base">
                  Silvano Forcillo è un rinomato psicologo e psicoterapeuta rogersiano nato a Napoli nel 1954. Laureato in Sociologia con lode nel 1979, ha approfondito la sua formazione in psicodiagnostica e psichiatria sociale. Dal 1994 al 1998, è stato Responsabile del Dipartimento di Psicologia dell&rsquo;Educazione presso l&rsquo;I.A.C.P. &ldquo;Carl Rogers&rdquo;.
                </p>
              </div>

              <div className="space-y-6 text-stone-600 leading-relaxed text-base">
                <p>
                  In qualità di docente di Scuola d&rsquo;Istruzione Superiore di secondo grado, si specializza in Psicoterapia Centrata sulla Persona secondo il modello di Carl Rogers. È anche Trainer del Metodo &ldquo;T.E.T.&rdquo; di Thomas Gordon e socioiatra seguendo l&rsquo;Approccio di Marshal Edelson. Si occupa di dinamiche di gruppo, counseling, sicurezza sul lavoro e dirige la Scuola Superiore di Counseling dell&rsquo;ASPU.
                </p>
                
                <p>
                  Da oltre trent&rsquo;anni, svolge attività di formazione e counseling in vari settori, specializzandosi nelle tossicodipendenze, psicoterapie di gruppo, di coppia e familiare.
                </p>

                <div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary text-stone-850">
                  <p className="font-medium text-stone-800">
                    La sua dedizione al lavoro e la continua ricerca fanno di Silvano Forcillo una figura di riferimento nell&rsquo;ambito della psicologia e della formazione professionale. La sua missione è contribuire allo sviluppo del potenziale umano attraverso l&rsquo;applicazione dell&rsquo;Approccio Centrato sulla Persona.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* IL COUNSELING INTEGRATO - SLIDESHOW ALTERNATO */}
        <section id="counseling-integrato" className="py-24 bg-stone-50 border-t border-stone-200/60 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatePresence mode="wait">
              {counselingSlide === 0 ? (
                <motion.div 
                  key="slide-counseling"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-stone-200 min-h-[500px] flex items-center p-8 sm:p-12 md:p-16"
                >
                  {/* Background Image */}
                  <Image 
                    src="/coppia.jpeg" 
                    alt="Colloquio di Counseling" 
                    fill 
                    className="object-cover"
                  />
                  {/* Dark Overlay Gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
                  
                  {/* Overlay Content */}
                  <div className="relative z-10 max-w-2xl text-white space-y-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary font-semibold text-xs uppercase tracking-widest font-outfit">
                      La Relazione d&apos;Aiuto
                    </span>
                    <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                      Il Counseling Integrato dell&rsquo;Approccio Umanistico
                    </h2>
                    <p className="text-stone-200 text-base sm:text-lg leading-relaxed font-medium">
                      Il Counseling, noto anche come &ldquo;colloquio di relazione d&rsquo;aiuto&rdquo;, è un processo interattivo tra il Counselor (professionista specializzato) e il Cliente, finalizzato a guidare quest&rsquo;ultimo nelle decisioni personali o nell&rsquo;affrontare specifiche difficoltà.
                    </p>
                    <p className="text-stone-350 text-sm sm:text-base leading-relaxed">
                      La Scuola Superiore di Counseling ad Approccio Umanistico Integrato insegna questo processo come un percorso di apprendimento che coinvolge lo sviluppo di risorse personali, la consapevolezza individuale, la gestione delle emozioni e la risoluzione di conflitti interni ed esterni.
                    </p>
                    <div className="inline-block bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-stone-100 text-sm font-medium">
                      Attraverso il counseling, il cliente acquisisce la capacità di lavorare su se stesso, attivando risorse per raggiungere una maggiore soddisfazione personale e sociale.
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="slide-applicazioni"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-stone-200 min-h-[500px] flex items-center p-8 sm:p-12 md:p-16"
                >
                  {/* Background Image */}
                  <Image 
                    src="/colori.jpeg" 
                    alt="Applicazioni Efficaci" 
                    fill 
                    className="object-cover"
                  />
                  {/* Dark Overlay Gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
                  
                  {/* Overlay Content */}
                  <div className="relative z-10 max-w-2xl text-white space-y-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent font-semibold text-xs uppercase tracking-widest font-outfit">
                      Sviluppo Autonomo
                    </span>
                    <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                      Applicazioni Efficaci
                    </h2>
                    <p className="text-stone-200 text-base sm:text-lg leading-relaxed font-medium">
                      L&rsquo;approccio al cliente utilizzato dal Counseling rogersiano ha un notevole successo e trova applicazione, almeno parziale, in varie forme di colloquio psicologico.
                    </p>
                    <div className="space-y-2 border-l-2 border-primary/50 pl-4 py-1">
                      <h4 className="font-outfit font-bold text-white text-lg">
                        Guidare il Cliente alla Propria Soluzione Efficace
                      </h4>
                      <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                        Il Counseling ad Approccio Umanistico Integrato, che è un Approccio non direttivo, a differenza dell&rsquo;Approccio Psicologico Direttivo di altro orientamento psicologico, guida e facilita il cliente a trovare da solo e dentro di sé la propria migliore ed efficace soluzione.
                      </p>
                    </div>
                    <div className="inline-block bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-stone-100 text-sm font-medium">
                      L&rsquo;efficacia sta nel consentire alla persona di fare affidamento sulle proprie capacità autovalutative per decidere della propria vita.
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Dots navigation for the slider */}
            <div className="flex justify-center gap-2.5 mt-8">
              <button 
                onClick={() => setCounselingSlide(0)}
                className={`w-3.5 h-3.5 rounded-full transition-all ${counselingSlide === 0 ? "bg-primary w-8" : "bg-stone-300"}`}
                aria-label="Slide 1"
              />
              <button 
                onClick={() => setCounselingSlide(1)}
                className={`w-3.5 h-3.5 rounded-full transition-all ${counselingSlide === 1 ? "bg-primary w-8" : "bg-stone-300"}`}
                aria-label="Slide 2"
              />
            </div>
          </div>
        </section>

        {/* L'APPROCCIO */}
        <section id="approccio" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(35rem_35rem_at_right,rgba(194,65,12,0.15),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
            <div className="max-w-3xl mx-auto space-y-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest font-outfit">Metodologia Didattica</span>
              <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold">Il Counseling ad Approccio Umanistico Integrato</h2>
              <p className="text-stone-400 text-lg">
                Un approccio non direttivo volto a sbloccare e valorizzare le potenzialità interiori di ciascun individuo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-stone-800/50 border border-stone-800 text-left space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-outfit font-bold text-xl text-white">Relazione d&apos;Aiuto</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Un processo interattivo tra Counselor e cliente per favorire decisioni personali e affrontare difficoltà specifiche.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-stone-800/50 border border-stone-800 text-left space-y-4">
                <div className="h-12 w-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="font-outfit font-bold text-xl text-white">Non Direttività</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  A differenza degli approcci tradizionali, guida il cliente a trovare autonomamente dentro di sé la propria soluzione efficace.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-stone-800/50 border border-stone-800 text-left space-y-4">
                <div className="h-12 w-12 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-outfit font-bold text-xl text-white">Empatia e Rispetto</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Creiamo un clima di accoglienza incondizionata, assenza di giudizio e totale ascolto empatico rogersiano.
                </p>
              </div>
            </div>

            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.18,
                    delayChildren: 0.15
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 items-stretch justify-center pt-24 border-t border-stone-800/60 mt-[58px] mx-auto w-full"
            >
              {[
                {
                  id: "rosso",
                  title: "Scuola Counselor",
                  hoverStyle: "hover:border-red-500/30 hover:shadow-red-500/5",
                  imageClass: "border-red-500/30",
                  image: "/minirosso.png",
                  link: "/scuola-counseling"
                },
                {
                  id: "blu",
                  title: "Crescita Personale",
                  hoverStyle: "hover:border-blue-500/30 hover:shadow-blue-500/5",
                  imageClass: "border-blue-500/30",
                  image: "/moniblu.png",
                  link: "/crescita-personale"
                },
                {
                  id: "verde",
                  title: "Formazione Gordon",
                  hoverStyle: "hover:border-emerald-500/30 hover:shadow-emerald-500/5",
                  imageClass: "border-emerald-500/30",
                  image: "/miniverde.png",
                  link: "/formazione"
                },
                {
                  id: "giallo",
                  title: "Webinar & Eventi",
                  hoverStyle: "hover:border-amber-500/30 hover:shadow-amber-500/5",
                  imageClass: "border-amber-500/30",
                  image: "/minigiallo.png",
                  link: "/aggiornamento"
                }
              ].map((card) => (
                <motion.div
                  key={card.id}
                  variants={{
                    hidden: { opacity: 0, scale: 0.96 },
                    show: { 
                      opacity: 1, 
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 15
                      }
                    }
                  }}
                  className={`relative flex flex-col justify-between overflow-visible rounded-3xl bg-stone-850/65 border border-stone-800/80 p-6 pt-14 transition-all duration-300 group min-h-[260px] text-center ${card.hoverStyle}`}
                >
                  {/* Floating Image Badge */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl overflow-hidden border-2 bg-stone-900 shadow-xl transition-all duration-300 group-hover:scale-105 ${card.imageClass}`}>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4 flex-grow flex flex-col justify-between pt-2">
                    <div className="space-y-2">
                      <h4 className="font-outfit font-extrabold text-lg text-white tracking-tight group-hover:text-primary transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-stone-400 text-xs leading-relaxed">
                        Esplora i dettagli del percorso e le modalità di partecipazione.
                      </p>
                    </div>
                    <a
                      href={card.link}
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white text-white hover:text-stone-900 font-semibold text-sm transition-all border border-white/10 hover:border-white"
                    >
                      Esplora Percorso <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* LA SCUOLA - DETTAGLI E VIDEO */}
        <section id="scuola" className="py-24 bg-stone-50 border-t border-stone-200/60 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Beautiful text layout with animations */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-4">
                <span className="text-primary font-semibold text-sm uppercase tracking-widest font-outfit">La Nostra Storia</span>
                <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
                  La Scuola di Counseling
                </h2>
                <p className="text-stone-700 text-lg leading-relaxed font-medium">
                  La Scuola Superiore di Counseling ad &ldquo;Approccio Umanistico Integrato&rdquo; nasce il 25 gennaio 2003 all&rsquo;interno dell&rsquo;Associazione per lo Sviluppo della Persona e del Potenziale Umano (ASPU).
                </p>
              </div>

              <div className="space-y-6 text-stone-600 leading-relaxed text-base">
                <div className="relative pl-6 border-l-2 border-primary/40 space-y-2">
                  <h4 className="font-outfit font-bold text-stone-900 text-lg">
                    Un Impegno per Diffondere l&apos;Approccio Centrato sulla Persona di Carl Rogers
                  </h4>
                  <p>
                    L&rsquo;impegno e la collaborazione attiva di un gruppo di professionisti determinati a diffondere l&rsquo;Approccio Centrato sulla Persona di Carl Rogers e il Counseling hanno costituito la spinta fondamentale per l&rsquo;istituzione della Scuola di Counseling.
                  </p>
                </div>

                <p>
                  Seguendo l&rsquo;ideologia rogersiana, la scuola si propone di formare in modo approfondito coloro che aspirano a diventare professionisti della Relazione d&rsquo;Aiuto.
                </p>

                <p className="bg-stone-100 p-6 rounded-2xl border border-stone-200/50 italic text-stone-700">
                  &ldquo;Secondo questo approccio, l&rsquo;efficace assistenza non consiste nel dettare soluzioni, bensì nel creare le condizioni affinché l&rsquo;individuo possa comprendere e affrontare autonomamente il proprio problema, assumendosi la responsabilità delle proprie scelte.&rdquo;
                </p>

                <p>
                  La scuola si impegna a garantire una formazione completa e bilanciata, che includa aspetti teorici, pratici ed esperienziali, seguendo il modello dell&rsquo;Approccio &ldquo;Centrato sulla Persona&rdquo;.
                </p>
              </div>
            </motion.div>

            {/* Right Column: 3D Tile Container for Video */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              {/* 3D Tile Background */}
              <div 
                className="relative w-full max-w-[384px] rounded-3xl bg-gradient-to-br from-white to-stone-100/80 p-5 shadow-2xl border border-white/85 cursor-pointer"
                onMouseMove={handleVidMouseMove}
                onMouseLeave={handleVidMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${vidRotateX}deg) rotateY(${vidRotateY}deg)`,
                  transition: "transform 0.15s ease",
                  transformStyle: "preserve-3d"
                }}
              >
                <div 
                  className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-stone-900 border border-stone-200/60 shadow-inner"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <video 
                    src="/video.mp4" 
                    controls 
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/mission.avif"
                  />
                </div>
                
                {/* Micro badge indicator */}
                <div 
                  className="mt-4 flex items-center justify-between text-xs text-stone-500 font-outfit"
                  style={{ transform: "translateZ(15px)" }}
                >
                  <span className="font-semibold text-primary">ASPU Presentazione</span>
                  <span>Video Ufficiale</span>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* CORSI / ATTIVITÀ */}
        <section id="attivita" className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-stone-900">Offerta Formativa & Attività</h2>
            <p className="text-stone-600">Offriamo percorsi differenziati per aspiranti counselors o per la crescita individuale.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Sidebar list */}
            <div className="lg:col-span-4 space-y-3">
              {courses.map((course, idx) => {
                const Icon = course.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCourse(idx)}
                    className={`w-full flex items-center gap-4 p-5 rounded-2xl text-left transition-all ${
                      activeCourse === idx
                        ? "bg-primary text-white shadow-lg shadow-primary/10 font-bold"
                        : "bg-stone-50 hover:bg-stone-100 text-stone-800"
                    }`}
                  >
                    <Icon className="h-6 w-6 flex-shrink-0" />
                    <span className="font-outfit text-base">{course.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active content panel */}
            <div className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-stone-100 min-h-[400px] flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-stone-900">
                    {courses[activeCourse].title}
                  </h3>
                  <span className="px-4 py-1.5 rounded-full bg-amber-100 text-primary font-outfit text-xs font-bold tracking-wide uppercase">
                    {courses[activeCourse].duration}
                  </span>
                </div>
                <p className="text-stone-600 text-lg leading-relaxed">
                  {courses[activeCourse].desc}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {courses[activeCourse].details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-stone-700 text-sm font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-stone-100 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3 text-stone-500 text-sm">
                  <Calendar className="h-5 w-5" /> Iscrizioni aperte per la nuova sessione
                </div>
                <a href="#contatti" className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-900 text-white font-semibold text-center hover:bg-stone-800 transition-all flex items-center justify-center gap-2">
                  Richiedi Programma PDF <FileText className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* CLOSING BANNER SECTION */}
        <section className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden border-t border-stone-850">
          <div className="absolute inset-0 bg-[radial-gradient(30rem_30rem_at_left,rgba(194,65,12,0.1),transparent)] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 text-center space-y-12 relative z-10">
            {/* Italian Quote Part */}
            <div className="space-y-4 max-w-3xl mx-auto">
              <span className="text-primary font-semibold text-xs uppercase tracking-widest font-outfit">La Nostra Visione</span>
              <h2 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                FORMIAMO COUNSELORS PER UNA SOCIETÀ CENTRATA SULLE PERSONE
              </h2>
              <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
                Oggi il Counseling ad Approccio Umanistico Integrato della nostra Scuola è arrivato alla Sedicesima Edizione e continua ad essere attivamente impegnata nella formazione dei Counselors &ldquo;Centrati sulla Persona&rdquo; per migliorare la qualità della vita e della nostra società.
              </p>
            </div>

            {/* Separator / Quote Icon spacer */}
            <div className="w-16 h-[1px] bg-stone-800 mx-auto" />

            {/* English Quote Part with Transparent Quote Marks Underneath */}
            <div className="relative py-8 max-w-2xl mx-auto flex flex-col items-center justify-center">
              {/* Huge transparent background quotes */}
              <span className="absolute text-[12rem] sm:text-[16rem] font-serif text-white/[0.03] select-none pointer-events-none -top-16 -left-4 sm:-left-12 leading-none">&ldquo;</span>
              <span className="absolute text-[12rem] sm:text-[16rem] font-serif text-white/[0.03] select-none pointer-events-none -bottom-24 -right-4 sm:-right-12 leading-none">&rdquo;</span>

              {/* Quote text overlayed */}
              <blockquote className="relative z-10 text-xl sm:text-2xl font-outfit italic font-medium text-stone-200 leading-relaxed">
                &ldquo;The good life is a process, not a state of being.<br className="hidden sm:inline" /> It is a direction, not a destination.&rdquo;
              </blockquote>
              <cite className="relative z-10 block mt-4 font-outfit text-xs font-bold uppercase tracking-widest text-primary not-italic">
                &mdash; Carl Rogers
              </cite>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
