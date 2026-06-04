"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Send, CheckCircle, FileText, Facebook, Shield } from "lucide-react";

export default function Footer() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      // Infezione automatica corso/argomento per il lead
      let detectedCourse = "Contatto Generico";
      const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
      if (currentPath.includes("scuola-counseling")) {
        detectedCourse = "Scuola di Counseling";
      } else if (currentPath.includes("crescita-personale")) {
        detectedCourse = "Crescita Personale";
      } else if (currentPath.includes("formazione")) {
        detectedCourse = "Formazione Gordon";
      } else if (currentPath.includes("aggiornamento")) {
        detectedCourse = "Webinar & Eventi";
      }

      // Save to localStorage
      try {
        const stored = localStorage.getItem("aspu_contact_leads");
        const existingLeads = stored ? JSON.parse(stored) : [];
        const newLead = {
          id: Date.now(),
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Non fornito",
          message: formData.message || "",
          course: detectedCourse,
          date: new Date().toLocaleString("it-IT", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }),
          status: "Nuovo"
        };
        localStorage.setItem("aspu_contact_leads", JSON.stringify([newLead, ...existingLeads]));
      } catch (err) {
        console.error("Errore salvataggio lead:", err);
      }

      const subject = encodeURIComponent("Messaggio di contatto da ASPU");
      const body = encodeURIComponent(
        `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefono: ${formData.phone || "Non fornito"}\n\nMessaggio:\n${formData.message}`
      );
      window.location.href = `mailto:info@aspu.it?subject=${subject}&body=${body}`;

      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 5000);
    }
  };

  return (
    <footer id="contatti" className="bg-stone-950 text-stone-400 pt-20 pb-12 border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Main Footer Contacts and Form section */}
        <div className="grid lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Columns: Brand info & Contact details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative h-[104px] w-[270px] overflow-hidden">
              <Image 
                src="/logo.avif" 
                alt="ASPU Logo" 
                fill 
                className="object-contain object-left filter brightness-0 invert"
              />
            </div>
            <div className="space-y-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest font-outfit">Contatti &amp; Sede</span>
              <h3 className="font-outfit text-3xl font-extrabold text-white">Entra in Relazione con Noi</h3>
              <p className="text-stone-400 text-sm">
                Siamo a tua disposizione per informazioni sulla scuola, iscrizioni ed eventi.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-stone-900 text-primary border border-stone-800 flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-white text-sm">Sede Fisica</h4>
                  <p className="text-stone-400 text-sm mt-0.5">Vico Pallonetto a Santa Chiara, 8<br />80134 - Napoli (NA)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-stone-900 text-primary border border-stone-800 flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-white text-sm">Recapiti</h4>
                  <p className="text-stone-400 text-sm mt-0.5">Cell. (+39) 338 54 06 384<br />TeleFax: 081 551 07 39</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-stone-900 text-primary border border-stone-800 flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-white text-sm">E-mail</h4>
                  <p className="text-stone-400 text-sm mt-0.5">info@aspu.it<br />segreteria@aspu.it<br />PEC: info@pec.aspu.it</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-stone-900 text-primary border border-stone-800 flex-shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-white text-sm">Dati Fiscali</h4>
                  <p className="text-stone-400 text-sm mt-0.5">
                    P.IVA: 07726420636<br />
                    C.F. 95014770630<br />
                    Cod. Dest. SDI: KRRH6B9
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-4">
                <a 
                  href="https://www.facebook.com/share/7kVZSfLg7Bd31wwH/?mibextid=LQQJ4d" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-850 hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 text-stone-400 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
                  title="Seguici su Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form and Sitemap */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            {/* Form Card */}
            <div className="bg-stone-900/60 p-8 sm:p-10 rounded-3xl border border-stone-800/80 shadow-2xl">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="h-16 w-16 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h3 className="font-outfit text-2xl font-bold text-white">Messaggio Inviato!</h3>
                  <p className="text-stone-400 max-w-md text-sm">Grazie per averci contattato. La segreteria ASPU ti risponderà al più presto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name-input-footer" className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Nome Completo</label>
                      <input 
                        id="name-input-footer"
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Es. Mario Rossi"
                        className="w-full px-4 py-3 rounded-xl border border-stone-800 focus:outline-none focus:border-primary transition-all bg-stone-950/60 text-white placeholder-stone-600 text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email-input-footer" className="text-xs font-semibold text-stone-400 uppercase tracking-wider">E-mail</label>
                      <input 
                        id="email-input-footer"
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Es. mario.rossi@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-stone-800 focus:outline-none focus:border-primary transition-all bg-stone-950/60 text-white placeholder-stone-600 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone-input-footer" className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Telefono</label>
                    <input 
                      id="phone-input-footer"
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Es. +39 333 1234567"
                      className="w-full px-4 py-3 rounded-xl border border-stone-800 focus:outline-none focus:border-primary transition-all bg-stone-950/60 text-white placeholder-stone-600 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message-input-footer" className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Messaggio</label>
                    <textarea 
                      id="message-input-footer"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Scrivi qui la tua richiesta..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-800 focus:outline-none focus:border-primary transition-all bg-stone-950/60 text-white placeholder-stone-600 text-sm resize-none"
                    />
                  </div>

                  <button 
                    id="submit-form-button-footer"
                    type="submit" 
                    className="w-full py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary/95 shadow-md shadow-primary/10 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    Invia Messaggio <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Sitemap Card */}
            <div className="grid grid-cols-2 gap-8 p-8 rounded-3xl bg-stone-900/30 border border-stone-800/40">
              <div>
                <h4 className="font-outfit font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-4 border-l-2 border-primary pl-2">Le Nostre Attività</h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li><a href="/scuola-counseling" className="hover:text-white transition-colors">Scuola di Counseling</a></li>
                  <li><a href="/crescita-personale" className="hover:text-white transition-colors">Crescita Personale</a></li>
                  <li><a href="/formazione" className="hover:text-white transition-colors">Formazione Relazionale</a></li>
                  <li><a href="/aggiornamento" className="hover:text-white transition-colors">Aggiornamento Continuo</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-outfit font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-4 border-l-2 border-primary pl-2">Link Rapidi</h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li><a href="/" className="hover:text-white transition-colors">Home Page</a></li>
                  <li><a href="#contatti" className="hover:text-white transition-colors">Invia un Messaggio</a></li>
                  <li><a href="https://sofia.istruzione.it" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Piattaforma S.O.F.I.A.</a></li>
                  <li><a href="https://www.cartadeldocente.istruzione.it" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Carta del Docente</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Footer Links */}
        <div className="border-t border-stone-850 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-outfit text-white font-bold text-sm sm:text-base text-center md:text-left">
              Associazione per lo Sviluppo della Persona e del Potenziale Umano
            </span>
            <p className="text-xs text-stone-500 flex items-center gap-1.5 flex-wrap">
              <span>© {new Date().getFullYear()} ASPU. Tutti i diritti riservati. -</span>
              <a href="mailto:castromassimo@gmail.com" className="hover:text-white transition-colors font-medium">DEVTools</a>
              <a href="/admin" className="inline-flex items-center text-stone-500 hover:text-white transition-colors" title="Pannello Amministrazione">
                <Shield className="h-3.5 w-3.5" />
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm flex-shrink-0">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
