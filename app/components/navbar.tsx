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
            className="transition-transform hover:scale-105 flex items-center shrink-0"
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
            <a href="https://osticket.frontuari.net" target="_blank" rel="noopener noreferrer" className="transition-colors text-sm uppercase tracking-wide text-black hover:text-primary transform hover:scale-105">Soporte</a>
          </nav>

          <div className="md:hidden flex items-center relative">
            <input 
              type="checkbox" 
              id="mobile-menu-toggle" 
              className="peer absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer m-0 p-0" 
              aria-label="Abrir menú de navegación"
            />
            <div className="text-black p-2 pointer-events-none relative z-40">
              <Menu size={28} className="block peer-checked:hidden" />
              <X size={28} className="hidden peer-checked:block" />
            </div>
            
            {/* CSS-only menu visibility */}
            <div className="hidden peer-checked:block bg-slate-900 border-b border-white/10 absolute top-full right-[-24px] w-screen shadow-lg text-white z-40">
              <div className="px-6 pt-4 pb-6 space-y-4 flex flex-col">
                <a href="/#inicio" className="block text-slate-200 font-medium hover:text-white transition-colors">Inicio</a>
                <a href="/#servicios" className="block text-slate-200 font-medium hover:text-white transition-colors">Servicios</a>
                <a href="/#nosotros" className="block text-slate-200 font-medium hover:text-white transition-colors">Nosotros</a>
                <a href="/#casos" className="block text-slate-200 font-medium hover:text-white transition-colors">Casos de Éxito</a>
                <a href="/productos" className="block text-slate-200 font-medium hover:text-white transition-colors">Productos</a>
                <a href="https://osticket.frontuari.net" target="_blank" rel="noopener noreferrer" className="block text-slate-200 font-medium hover:text-white transition-colors">Soporte</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}