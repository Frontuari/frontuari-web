'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoFrontuari from '../../assets/images/icons/Logo-Frontuari.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 gap-4">
          <a
            href="/#inicio"
            className="bg-white/95 hover:bg-white backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-slate-200/60 transition-all flex items-center shrink-0"
          >
            <img
              decoding="async"
              className="h-6 sm:h-8 md:h-9 w-auto shrink-0 object-contain my-auto"
              src={logoFrontuari.src}
              alt="Frontuari"
            />
          </a>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
            <a href="/#inicio" className="transition-colors text-sm uppercase tracking-wide text-black hover:text-primary transform hover:scale-105">Inicio</a>
            <a href="/#servicios" className="transition-colors text-sm uppercase tracking-wide text-black hover:text-primary transform hover:scale-105">Servicios</a>
            <a href="/#nosotros" className="transition-colors text-sm uppercase tracking-wide text-black hover:text-primary transform hover:scale-105">Nosotros</a>
            <a href="/#casos" className="transition-colors text-sm uppercase tracking-wide text-black hover:text-primary transform hover:scale-105">Casos de Éxito</a>
            <a href="/productos" className="transition-colors text-sm uppercase tracking-wide text-black hover:text-primary transform hover:scale-105">Productos</a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black p-2 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Abrir menú de navegación"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10 absolute top-full left-0 w-full shadow-lg text-white">
          <div className="px-6 pt-4 pb-6 space-y-4 flex flex-col">
            <a href="/#inicio" onClick={() => setIsMenuOpen(false)} className="block text-slate-200 font-medium hover:text-white transition-colors">Inicio</a>
            <a href="/#servicios" onClick={() => setIsMenuOpen(false)} className="block text-slate-200 font-medium hover:text-white transition-colors">Servicios</a>
            <a href="/#nosotros" onClick={() => setIsMenuOpen(false)} className="block text-slate-200 font-medium hover:text-white transition-colors">Nosotros</a>
            <a href="/#casos" onClick={() => setIsMenuOpen(false)} className="block text-slate-200 font-medium hover:text-white transition-colors">Casos de Éxito</a>
            <a href="/productos" onClick={() => setIsMenuOpen(false)} className="block text-slate-200 font-medium hover:text-white transition-colors">Productos</a>
          </div>
        </div>
      )}
    </header>
  );
}