"use client";

import React, { useEffect, useState } from "react";
import { 
  Search, 
  Edit3, 
  Check, 
  X, 
  Globe, 
  FileText, 
  Save,
  Tag
} from "lucide-react";

interface PageSeo {
  path: string;
  name: string;
  title: string;
  description: string;
  keywords: string[];
}

const defaultSeoData: PageSeo[] = [
  {
    path: "/",
    name: "Homepage",
    title: "ASPU | Scuola Superiore di Counseling Umanistico Integrato",
    description: "Scuola di Counseling ad Approccio Umanistico Integrato (Carl Rogers) a Napoli. Crescita personale, formazione e consulenza professionale dal 1999.",
    keywords: ["counseling napoli", "approccio rogersiano", "carl rogers", "crescita personale", "scuola counseling", "aspu"]
  },
  {
    path: "/scuola-counseling",
    name: "Scuola Counseling",
    title: "Scuola di Counseling Napoli - Carl Rogers | ASPU",
    description: "Diventa Counselor professionista. Scuola triennale in Counseling ad Approccio Umanistico Integrato Rogersiano. Teoria, pratica ed esperienze di gruppo.",
    keywords: ["scuola counseling napoli", "counselor rogersiano", "formazione counseling", "relazione aiuto", "carl rogers napoli"]
  },
  {
    path: "/crescita-personale",
    name: "Crescita Personale",
    title: "Corsi Crescita Personale Napoli e Formazione Genitori | ASPU",
    description: "Percorsi esperienziali individuali e di gruppo per aumentare autostima, consapevolezza emotiva, gestione dello stress e relazioni sane a Napoli.",
    keywords: ["crescita personale napoli", "autostima napoli", "formazione genitori", "comunicazione empatica", "consapevolezza emotiva"]
  },
  {
    path: "/formazione",
    name: "Formazione Gordon",
    title: "Corsi Gordon e Formazione Docenti Accreditata MIUR | ASPU",
    description: "Corsi di formazione relazionale accreditati MIM e MIUR per insegnanti, educatori e professionisti. Metodo Gordon T.E.T. e Carta del Docente a Napoli.",
    keywords: ["formazione docenti napoli", "corsi gordon napoli", "metodo gordon tet", "accreditato miur napoli", "carta del docente napoli"]
  },
  {
    path: "/aggiornamento",
    name: "Webinar ed Eventi",
    title: "Webinar ed Eventi Formativi Relazionali Napoli | ASPU",
    description: "Partecipa ai seminari di aggiornamento continuo ed eventi online gratuiti di ASPU. Sviluppo del potenziale umano e socioterapia a Napoli.",
    keywords: ["webinar aspu", "eventi formativi napoli", "aggiornamento docenti", "socioterapia napoli", "seminari gratuiti counseling"]
  },
  {
    path: "/privacy",
    name: "Privacy Policy",
    title: "Privacy Policy | ASPU",
    description: "Informativa sul trattamento dei dati personali ed utilizzo dei cookie del sito dell'Associazione per lo Sviluppo della Persona e del Potenziale Umano (ASPU).",
    keywords: ["privacy aspu", "cookie policy aspu", "trattamento dati aspu"]
  }
];

export default function AdminSeoPage() {
  const [seoData, setSeoData] = useState<PageSeo[]>([]);
  const [editingPath, setEditingPath] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<PageSeo | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "info" } | null>(null);

  const showToast = (message: string, type: "success" | "info" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Load from localStorage or seed
  useEffect(() => {
    try {
      const stored = localStorage.getItem("aspu_pages_seo");
      if (stored) {
        setSeoData(JSON.parse(stored));
      } else {
        localStorage.setItem("aspu_pages_seo", JSON.stringify(defaultSeoData));
        setSeoData(defaultSeoData);
      }
    } catch (e) {
      console.error(e);
      setSeoData(defaultSeoData);
    }
  }, []);

  const handleEditClick = (page: PageSeo) => {
    setEditingPath(page.path);
    setEditForm({
      ...page,
      keywords: [...page.keywords]
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!editForm) return;
    const { name, value } = e.target;
    setEditForm(prev => prev ? { ...prev, [name]: value } : null);
  };

  const handleKeywordsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editForm) return;
    const keysArray = e.target.value.split(",").map(k => k.trim());
    setEditForm(prev => prev ? { ...prev, keywords: keysArray } : null);
  };

  const saveSeoChanges = () => {
    if (!editForm) return;
    const updated = seoData.map(page => {
      if (page.path === editForm.path) {
        return editForm;
      }
      return page;
    });

    setSeoData(updated);
    try {
      localStorage.setItem("aspu_pages_seo", JSON.stringify(updated));
      showToast("SEO salvato con successo!", "success");
    } catch (e) {
      console.error(e);
      showToast("Errore durante il salvataggio", "info");
    }

    setEditingPath(null);
    setEditForm(null);
  };

  return (
    <div className="space-y-8 relative">
      
      {/* App Style Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-stone-900 border border-stone-800 shadow-2xl text-xs font-semibold text-white animate-fade-in">
          <div className={`p-1 rounded-full ${toast.type === "success" ? "bg-emerald-500/10 text-emerald-500" : "bg-blue-500/10 text-blue-500"}`}>
            <Check className="h-4 w-4" />
          </div>
          <span>{toast.message}</span>
        </div>
      )}

      {/* Title */}
      <section className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-primary font-semibold text-xs uppercase tracking-widest font-outfit">Configurazioni SEO</span>
          <h2 className="font-outfit text-3xl font-extrabold text-white">Metatags &amp; Indicizzazione</h2>
          <p className="text-stone-400 text-sm">Visualizza ed aggiorna i metadati nominali caricati dai motori di ricerca.</p>
        </div>
      </section>

      {/* Pages list */}
      <section className="space-y-6">
        {seoData.map((page) => {
          const isEditing = editingPath === page.path;
          return (
            <div key={page.path} className="bg-stone-900/60 border border-stone-800/80 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 transition-all">
              
              {/* Page header title */}
              <div className="flex items-center justify-between border-b border-stone-900 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-stone-950 text-primary border border-stone-850 flex-shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-outfit font-extrabold text-xl text-white">{page.name}</h3>
                    <code className="text-xs text-stone-500">{page.path}</code>
                  </div>
                </div>

                {!isEditing ? (
                  <button
                    onClick={() => handleEditClick(page)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-750 text-stone-300 hover:text-white border border-stone-700 text-xs font-semibold transition-all"
                  >
                    <Edit3 className="h-3.5 w-3.5" /> Modifica SEO
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={saveSeoChanges}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary hover:bg-primary/95 text-white text-xs font-semibold transition-all shadow-md shadow-primary/10"
                    >
                      <Save className="h-3.5 w-3.5" /> Salva
                    </button>
                    <button
                      onClick={() => { setEditingPath(null); setEditForm(null); }}
                      className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white border border-stone-700 transition-all"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Page metatags details */}
              {!isEditing ? (
                <div className="grid md:grid-cols-12 gap-6 text-sm">
                  {/* Left block info */}
                  <div className="md:col-span-8 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">Meta Title (Titolo nella Scheda/Google)</span>
                      <strong className="text-white block text-base font-outfit">{page.title}</strong>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">Meta Description</span>
                      <p className="text-stone-400 leading-relaxed text-sm">{page.description}</p>
                    </div>
                  </div>
                  {/* Right block keywords */}
                  <div className="md:col-span-4 space-y-2 border-t md:border-t-0 md:border-l border-stone-900 pt-4 md:pt-0 md:pl-6">
                    <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-1">Keywords</span>
                    <div className="flex flex-wrap gap-1.5">
                      {page.keywords && page.keywords.length > 0 ? (
                        page.keywords.map((key, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-stone-950 text-stone-400 text-xs border border-stone-900 font-medium">
                            <Tag className="h-3 w-3 text-stone-600" /> {key}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-stone-600 italic">Nessuna parola chiave inserita</span>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                /* Interactive edit form fields */
                <div className="space-y-4 text-sm" onClick={(e) => e.stopPropagation()}>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">Meta Title</label>
                    <input 
                      type="text" 
                      name="title"
                      value={editForm?.title || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-800 bg-stone-950/60 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-primary transition-all font-outfit font-bold"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">Meta Description</label>
                    <textarea 
                      name="description"
                      rows={3}
                      value={editForm?.description || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-800 bg-stone-950/60 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-primary transition-all resize-none leading-relaxed"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">Keywords (separate da virgola)</label>
                    <input 
                      type="text" 
                      name="keywords"
                      value={editForm?.keywords.join(", ") || ""}
                      onChange={handleKeywordsChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-800 bg-stone-950/60 text-white placeholder-stone-650 text-sm focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </section>

    </div>
  );
}
