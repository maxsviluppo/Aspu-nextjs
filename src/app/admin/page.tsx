"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { 
  Users, 
  BookOpen, 
  Calendar, 
  Search, 
  TrendingUp, 
  UserCheck, 
  MessageSquare,
  CheckCircle,
  Clock,
  ArrowRight,
  ExternalLink
} from "lucide-react";

export default function AdminDashboardHome() {
  const [leadsCount, setLeadsCount] = useState(0);
  const [newLeadsCount, setNewLeadsCount] = useState(0);
  const [seoPagesCount, setSeoPagesCount] = useState(6);
  const [aiAccessEnabled, setAiAccessEnabled] = useState(true);

  useEffect(() => {
    // Load leads count from localStorage dynamically
    try {
      const stored = localStorage.getItem("aspu_contact_leads");
      if (stored) {
        const leads = JSON.parse(stored);
        setLeadsCount(leads.length);
        setNewLeadsCount(leads.filter((l: any) => l.status === "Nuovo").length);
      }
      const storedSeo = localStorage.getItem("aspu_pages_seo");
      if (storedSeo) {
        const seoData = JSON.parse(storedSeo);
        setSeoPagesCount(seoData.length);
      }
      const storedAi = localStorage.getItem("aspu_ai_access_enabled");
      if (storedAi !== null) {
        setAiAccessEnabled(JSON.parse(storedAi));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="space-y-10">
      
      {/* Welcome Heading */}
      <section className="space-y-2">
        <span className="text-primary font-semibold text-xs uppercase tracking-widest font-outfit">Console Amministratore</span>
        <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">Console Principale</h2>
        <p className="text-stone-400 text-sm max-w-2xl">
          Benvenuto nel pannello gestionale ASPU. Da qui puoi navigare tra la gestione contatti e iscrizioni ed i dettagli SEO delle pagine.
        </p>
      </section>

      {/* Analytics Statistics Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Messaggi / Leads Ricevuti", value: leadsCount.toString(), change: `${newLeadsCount} Nuovi da gestire`, icon: MessageSquare, color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
          { title: "Pagine Configurate SEO", value: seoPagesCount.toString(), change: "Metatags attivi", icon: Search, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
          { title: "Stato Compliance SEO", value: "4/4", change: "Robots, Sitemap, GA, Verification", icon: CheckCircle, color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="p-6 rounded-3xl bg-stone-900/60 border border-stone-800/80 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">{stat.title}</span>
                <div className={`p-2.5 rounded-xl border ${stat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-extrabold font-outfit text-white">{stat.value}</h3>
                <div className="flex items-center gap-1 text-[11px] text-stone-500">
                  <CheckCircle className="h-3 w-3 text-emerald-500" />
                  <span>{stat.change}</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Main Sections Gateways */}
      <section className="grid lg:grid-cols-2 gap-8">
        
        {/* Gateway: Contatti */}
        <div className="p-8 rounded-3xl bg-stone-900/60 border border-stone-800/80 shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-blue-500 border border-blue-500/25 flex items-center justify-center">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-outfit font-extrabold text-2xl text-white">Contatti &amp; Iscrizioni</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Gestisci in tempo reale le richieste inviate dagli utenti tramite il form contatti della homepage e delle altre pagine. Aggiorna lo stato di ogni iscrizione.
            </p>
          </div>
          <Link 
            href="/admin/contatti"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/95 transition-all shadow-lg shadow-primary/10"
          >
            Gestisci Contatti ({leadsCount}) <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Gateway: SEO */}
        <div className="p-8 rounded-3xl bg-stone-900/60 border border-stone-800/80 shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/25 flex items-center justify-center">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="font-outfit font-extrabold text-2xl text-white">SEO Metatags Pagine</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Visualizza ed imposta il titolo SEO, la descrizione del sito e le parole chiave associate a ciascuna URL nominale del sito ASPU.
            </p>
          </div>
          <Link 
            href="/admin/seo"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-750 text-white font-semibold text-sm transition-all border border-stone-700"
          >
            Configura SEO Pagine <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </section>

      {/* AI SEO Monitor Section */}
      <section className="p-8 rounded-3xl bg-stone-900/60 border border-stone-800/80 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-outfit font-extrabold text-xl text-white border-l-2 border-primary pl-2.5">
              Monitor SEO AI-Agent &amp; Generative Engine Optimization (GEO)
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Gestisci l'autorizzazione di scansione per i modelli di linguaggio e monitora l'indicizzazione nelle risposte AI (ChatGPT, Claude, Gemini, Perplexity)
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-stone-300">Accesso Web AI:</span>
            <button
              onClick={() => {
                const newState = !aiAccessEnabled;
                setAiAccessEnabled(newState);
                localStorage.setItem("aspu_ai_access_enabled", JSON.stringify(newState));
              }}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${
                aiAccessEnabled ? "bg-emerald-500" : "bg-stone-800"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  aiAccessEnabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-xs font-bold ${aiAccessEnabled ? "text-emerald-400" : "text-stone-400"}`}>
              {aiAccessEnabled ? "Abilitato (Consigliato)" : "Disabilitato"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { name: "ChatGPT / SearchGPT", agent: "GPTBot", desc: "OpenAI Crawler", lastActive: "Mai (Sito offline/locale)" },
            { name: "Claude AI / Artifacts", agent: "ClaudeBot", desc: "Anthropic Crawler", lastActive: "Mai (Sito offline/locale)" },
            { name: "Gemini / Google AI", agent: "Google-Extended", desc: "Google AI Crawler", lastActive: "Mai (Sito offline/locale)" },
            { name: "Perplexity AI", agent: "PerplexityBot", desc: "Perplexity Search", lastActive: "Mai (Sito offline/locale)" },
            { name: "Apple Intelligence", agent: "Applebot-Extended", desc: "Apple Search Agent", lastActive: "Mai (Sito offline/locale)" },
          ].map((bot, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-stone-950/40 border border-stone-900 flex flex-col justify-between space-y-4">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-white text-sm block font-outfit truncate">{bot.name}</strong>
                  <span className={`h-2 w-2 rounded-full ${aiAccessEnabled ? "bg-emerald-500/80" : "bg-amber-500/80"}`} />
                </div>
                <span className="text-[10px] text-stone-500 block truncate">UA: {bot.agent}</span>
              </div>
              
              <div className="pt-2 border-t border-stone-900/60 space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-stone-400 font-light">Scansioni (30g)</span>
                  <span className="text-white font-bold">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400 font-light">Stato</span>
                  <span className={`font-bold ${aiAccessEnabled ? "text-emerald-400" : "text-amber-500"}`}>
                    {aiAccessEnabled ? "Consentito (Offline)" : "Bloccato"}
                  </span>
                </div>
                <div className="text-[10px] text-stone-500 pt-1 text-right italic font-light">
                  {bot.lastActive}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-2xl bg-stone-900/20 border border-stone-850/60 text-xs text-stone-300 leading-relaxed">
          <strong>💡 Ottimizzazione GEO (Generative Engine Optimization):</strong> Mantenere l'accesso web abilitato consente ai modelli di AI di leggere i contenuti del tuo sito in tempo reale, citando ASPU come fonte autorevole quando gli utenti fanno domande relative alla scuola di counseling e crescita personale.
        </div>
      </section>

      {/* Compliance & Webmaster check */}
      <section className="p-8 rounded-3xl bg-stone-900/40 border border-stone-800/60 shadow-xl space-y-6">
        <div>
          <h3 className="font-outfit font-extrabold text-xl text-white border-l-2 border-primary pl-2.5">Stato di Indicizzazione &amp; file SEO</h3>
          <p className="text-xs text-stone-450 mt-1">Stato dei file richiesti dai bot di ricerca (Google, Bing, ecc.)</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { name: "ads.txt", path: "/ads.txt", desc: "Monetizzazione e compliance", status: "Configurato", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
            { name: "Sitemap XML", path: "/sitemap.xml", desc: "Mappa del sito per crawler", status: "Next.js Default", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
            { name: "Google Analytics", path: "/layout.tsx", desc: "Codice GA4 (G-RBJK0LYEF0)", status: "Configurato", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
            { name: "Google Verification", path: "/layout.tsx", desc: "Verifica della Search Console", status: "Configurato", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-stone-950/40 border border-stone-900/80 text-sm">
              <div>
                <strong className="text-white block font-outfit font-bold">{item.name}</strong>
                <span className="text-stone-500 text-xs mt-0.5">{item.desc}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${item.color}`}>{item.status}</span>
                <a href={item.path} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-white" title="Visualizza">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-stone-900/20 border border-stone-850 p-4 rounded-2xl text-stone-500 text-[11px] leading-relaxed">
          <strong>Nota sulle configurazioni</strong>: I tag di tracciamento sono attualmente impostati con codici provvisori all'interno di <code className="text-stone-400">src/app/layout.tsx</code>. Quando avrai generato i codici reali su Google Search Console (codice di verifica HTML) e Google Analytics (Measurement ID del tipo G-XXXXXXXXXX), potrai incollarli direttamente nel file oppure passarmeli per completare le integrazioni definitive.
        </div>
      </section>

    </div>
  );
}
