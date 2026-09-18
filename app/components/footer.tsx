'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="bg-secondary text-complementary-light pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 border-t-[6px] border-primary relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 sm:mb-16">
          <div>
            <span className="font-heading font-bold text-3xl tracking-tight text-white block mb-6">
              Frontuari
            </span>
            <p className="text-complementary text-sm leading-relaxed max-w-xs mb-6">
              Ingeniería de software y soluciones corporativas para transformar la infraestructura digital de tu empresa.
            </p>
            <address className="not-italic text-sm text-complementary">
              <a
                href="https://maps.app.goo.gl/XriLoMwEgwkp6CzY8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-complementary hover:text-primary transition-colors text-sm block"
              >
                Av. principal C.C. Buenaventura Centro Empresarial Nivel Agrícola Oficina N° M-11, Araure 3303, Portuguesa, Venezuela.
              </a>
            </address>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="/#inicio" className="text-complementary hover:text-white transition-colors text-sm">Inicio</a></li>
              <li><a href="/#servicios" className="text-complementary hover:text-white transition-colors text-sm">Servicios IT</a></li>
              <li><a href="/#nosotros" className="text-complementary hover:text-white transition-colors text-sm">Nuestra Esencia</a></li>
              <li><a href="/#casos" className="text-complementary hover:text-white transition-colors text-sm">Casos de Éxito</a></li>
              <li><a href="/productos" className="text-complementary hover:text-white transition-colors text-sm">Productos</a></li>
              <li><a href="https://osticket.frontuari.net" target="_blank" rel="noopener noreferrer" className="text-complementary hover:text-white transition-colors text-sm">Soporte</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal & Contacto</h4>
            <ul className="space-y-3">
              <li>
                <label
                  htmlFor="privacy-modal-toggle"
                  className="text-complementary hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Política de Privacidad
                </label>
              </li>
              <li>
                <a href="mailto:frontuari@gmail.com" className="text-complementary hover:text-primary transition-colors text-sm block">
                  frontuari@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/584149739547?text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20de%20Frontuari%20y%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-complementary hover:text-primary transition-colors text-sm block"
                >
                  Escríbanos al +58 414 9739547
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/frontuari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-complementary hover:text-primary transition-colors text-sm block"
                >
                  Instagram: @frontuari
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-complementary/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <p className="text-xs text-complementary text-center md:text-left">
            &copy; {new Date().getFullYear()} Frontuari, C.A. Todos los derechos reservados.
          </p>
          <p className="text-xs text-complementary text-center md:text-right">
            No ofrecemos software, ofrecemos soluciones.
          </p>
        </div>
      </footer>

      {/* CHECKBOX INVISIBLE PARA CONTROLAR MODAL CSS-ONLY */}
      <input type="checkbox" id="privacy-modal-toggle" className="peer hidden" />

      {/* MODAL DE PRIVACIDAD (CSS-Only) */}
      <div className="fixed inset-0 z-[100] hidden peer-checked:flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
        {/* Este label actúa como el "onClick outside" para cerrar el modal */}
        <label htmlFor="privacy-modal-toggle" className="absolute inset-0 cursor-pointer" aria-label="Cerrar modal"></label>
        
        <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl my-8 transform transition-all flex flex-col max-h-[85vh] relative z-10">
          <div className="px-6 py-5 border-b border-complementary/15 flex items-center justify-between bg-complementary-light/30">
            <h3 className="text-xl sm:text-2xl font-bold text-secondary">Política de Privacidad</h3>
            <label
              htmlFor="privacy-modal-toggle"
              className="text-secondary/60 hover:text-secondary rounded-full p-1.5 transition-colors cursor-pointer"
              aria-label="Cerrar modal de privacidad"
            >
              <X size={20} />
            </label>
          </div>

          <div className="p-6 sm:p-8 space-y-4 overflow-y-auto text-secondary/80 text-sm sm:text-base leading-relaxed">
            <p>
              Frontuari, C.A., operando bajo la marca OpenSource Consulting Group, se compromete a proteger la privacidad y confidencialidad de la información proporcionada por sus clientes en servicios de software corporativo, infraestructura, desarrollo móvil, análisis de datos y bases de datos.
            </p>
            <p>
              Los datos recopilados se utilizan exclusivamente con fines operativos y técnicos para optimizar las soluciones contratadas.
            </p>
          </div>

          <div className="px-6 py-4 border-t border-complementary/10 bg-gray-50 flex justify-end">
            <label
              htmlFor="privacy-modal-toggle"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-colors shadow-sm cursor-pointer inline-block text-center"
            >
              Entendido
            </label>
          </div>
        </div>
      </div>
    </>
  );
}