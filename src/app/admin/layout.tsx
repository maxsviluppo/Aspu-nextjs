"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Shield, 
  LayoutDashboard, 
  Users, 
  Search, 
  ArrowLeft,
  Menu,
  X
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Contatti e Iscrizioni", href: "/admin/contatti", icon: Users },
    { name: "SEO Pagine", href: "/admin/seo", icon: Search },
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col md:flex-row antialiased font-sans">
      
      {/* Sidebar Navigation */}
      <aside className={`w-full md:w-64 border-b md:border-b-0 md:border-r border-stone-900 bg-stone-950 flex flex-col flex-shrink-0 z-40 transition-all duration-300`}>
        {/* Top brand heading */}
        <div className="p-6 h-20 border-b border-stone-900 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <Shield className="h-4.5 w-4.5" />
            </div>
            <div>
              <h2 className="font-outfit font-extrabold text-sm text-white tracking-wide">ASPU Admin</h2>
              <span className="text-[10px] text-stone-500 font-medium">Console Gestionale</span>
            </div>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Sidebar Nav Items */}
        <nav className={`p-4 space-y-1.5 flex-grow ${mobileMenuOpen ? "block" : "hidden md:block"}`}>
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  active 
                    ? "bg-primary text-white shadow-lg shadow-primary/10" 
                    : "text-stone-400 hover:text-white hover:bg-stone-900"
                }`}
              >
                <Icon className="h-4.5 w-4.5 flex-shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer Link */}
        <div className={`p-4 border-t border-stone-900 ${mobileMenuOpen ? "block" : "hidden md:block"}`}>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-850 text-xs font-bold text-stone-300 hover:text-white transition-all border border-stone-800"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Torna al Sito
          </Link>
        </div>
      </aside>

      {/* Main panel content rendering */}
      <div className="flex-grow flex flex-col min-h-0 bg-stone-950/40">
        <main className="flex-grow p-6 sm:p-10 overflow-y-auto">
          {children}
        </main>
      </div>

    </div>
  );
}
