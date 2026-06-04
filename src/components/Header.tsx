"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  return (
    <>
      {/* HEADER / NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 glass border-b border-border/40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <a href="/" className="block">
            <div className="relative h-[76px] w-[198px] overflow-hidden">
              <Image 
                src="/logo.avif" 
                alt="ASPU Logo" 
                fill 
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-outfit text-sm font-medium">
            <a href="/#scuola" className="hover:text-primary transition-colors">La Scuola</a>
            <a href="/#approccio" className="hover:text-primary transition-colors">L'Approccio</a>
            
            {/* Desktop Attività Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="hover:text-primary transition-colors flex items-center gap-1 py-2 focus:outline-none cursor-pointer">
                Attività 
                <svg className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-1 w-56 rounded-xl bg-white border border-stone-200/80 shadow-xl py-2 z-50 text-stone-850 font-outfit"
                  >
                    <a href="/scuola-counseling" className="block px-4 py-2.5 text-sm hover:bg-stone-50 hover:text-primary transition-colors">Scuola Counseling</a>
                    <a href="/crescita-personale" className="block px-4 py-2.5 text-sm hover:bg-stone-50 hover:text-primary transition-colors">Crescita Personale</a>
                    <a href="/formazione" className="block px-4 py-2.5 text-sm hover:bg-stone-50 hover:text-primary transition-colors">Formazione</a>
                    <a href="/aggiornamento" className="block px-4 py-2.5 text-sm hover:bg-stone-50 hover:text-primary transition-colors">Aggiornamento</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <a href="/#chiasmo" className="hover:text-primary transition-colors">Chi Siamo</a>
            <a href="#contatti" className="px-5 py-2.5 rounded-full bg-primary text-white hover:bg-primary/95 shadow-md shadow-primary/10 transition-all hover:scale-[1.02]">Contattaci</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            id="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-0 w-full glass-dark border-b border-border/20 z-40 md:hidden font-outfit"
          >
            <div className="flex flex-col p-6 gap-5 text-stone-200">
              <a href="/#scuola" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2 text-lg">La Scuola</a>
              <a href="/#approccio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2 text-lg">L'Approccio</a>
              
              <div className="flex flex-col">
                <button 
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)} 
                  className="hover:text-primary transition-colors py-2 text-lg text-left flex items-center justify-between w-full"
                >
                  <span>Attività</span>
                  <svg className={`h-5 w-5 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileDropdownOpen && (
                  <div className="pl-4 flex flex-col gap-3 border-l border-stone-700/40 mt-1 pb-2">
                    <a href="/scuola-counseling" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors py-1 text-base text-stone-300">Scuola Counseling</a>
                    <a href="/crescita-personale" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors py-1 text-base text-stone-300">Crescita Personale</a>
                    <a href="/formazione" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors py-1 text-base text-stone-300">Formazione</a>
                    <a href="/aggiornamento" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors py-1 text-base text-stone-300">Aggiornamento</a>
                  </div>
                )}
              </div>

              <a href="/#chiasmo" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2 text-lg">Chi Siamo</a>
              <a href="#contatti" onClick={() => setIsMobileMenuOpen(false)} className="px-5 py-3 rounded-xl bg-primary text-white hover:bg-primary/95 text-center font-semibold transition-all">Contattaci</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
