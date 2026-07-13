'use client';

import React, { useState } from 'react';
import { 
  Menu, X, Server, Smartphone, 
  LineChart, Database, ShieldCheck, 
  Lightbulb, Users, ArrowRight 
} from 'lucide-react';

export default function FrontuariLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
      
      {/* 1. HEADER & NAVIGATION */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-complementary/20 transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24"> {/* h-24 asegura padding generoso "20x" */}
            
            {/* Logo Area */}
            <div className="flex-shrink-0 cursor-pointer">
              <span className="font-heading font-bold text-3xl tracking-tight text-primary">
                Frontuari
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              <a href="#inicio" className="text-secondary hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide">Inicio</a>
              <a href="#nosotros" className="text-secondary hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide">Nosotros</a>
              <a href="#servicios" className="text-secondary hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide">Servicios</a>
              <a href="#casos" className="text-secondary hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide">Casos de Éxito</a>
              
              <button 
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md font-bold transition-all transform hover:-translate-y-0.5 shadow-md"
                aria-label="Contactar a Frontuari"
              >
                Contáctanos
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-secondary p-2"
                aria-expanded={isMenuOpen}
                aria-label="Abrir menú de navegación"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-complementary/20 absolute w-full shadow-lg">
            <div className="px-6 pt-4 pb-6 space-y-4 flex flex-col">
              <a href="#inicio" className="block text-secondary font-medium">Inicio</a>
              <a href="#nosotros" className="block text-secondary font-medium">Nosotros</a>
              <a href="#servicios" className="block text-secondary font-medium">Servicios</a>
              <a href="#casos" className="block text-secondary font-medium">Casos de Éxito</a>
              <button className="w-full bg-primary text-white px-6 py-3 rounded-md font-bold text-center">
                Contáctanos
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <main>
        <section id="inicio" className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Text */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Innovación y Compromiso Tecnológico para tu Empresa
              </h1>
              <p className="text-lg text-secondary/80 max-w-lg leading-relaxed">
                Transformamos procesos operativos mediante soluciones de software corporativo a medida. Escalabilidad, seguridad y eficiencia estructural para negocios del mañana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-md font-bold flex items-center justify-center transition-all transform hover:-translate-y-1 shadow-soft">
                  Inicia tu transformación <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="bg-transparent border-2 border-complementary text-secondary hover:border-primary hover:text-primary px-8 py-4 rounded-md font-bold transition-all">
                  Conoce más
                </button>
              </div>
            </div>

            {/* Hero Image / Abstract Visual */}
            <div className="relative w-full h-[400px] lg:h-[500px] bg-complementary-light rounded-2xl overflow-hidden flex items-center justify-center border border-complementary/20 shadow-sm group">
              {/* Aquí idealmente va una ilustración isométrica. Se simula con geometría y un icono por ahora */}
              <div className="absolute inset-0 bg-gradient-to-tr from-complementary-light to-white opacity-50"></div>
              <Database size={120} className="text-primary/20 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-10 left-10 right-10 bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white">
                <div className="h-2 w-1/3 bg-primary rounded-full mb-3"></div>
                <div className="h-2 w-2/3 bg-complementary rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURES (NUESTRA ESENCIA) */}
        <section id="nosotros" className="py-24 bg-white border-t border-complementary-light px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Nuestra Esencia</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Card 1 */}
              <div className="bg-white p-10 rounded-xl shadow-soft border border-complementary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <ShieldCheck size={40} className="text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">Compromiso</h3>
                <p className="text-secondary/70 leading-relaxed">
                  Garantizamos entregas precisas y acompañamiento continuo. Tu éxito operativo es la métrica de nuestra efectividad.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white p-10 rounded-xl shadow-soft border border-complementary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <Lightbulb size={40} className="text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">Innovación</h3>
                <p className="text-secondary/70 leading-relaxed">
                  Adoptamos y adaptamos tecnologías de vanguardia para crear arquitecturas digitales que rompen paradigmas.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-10 rounded-xl shadow-soft border border-complementary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <Users size={40} className="text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">Conexión</h3>
                <p className="text-secondary/70 leading-relaxed">
                  No somos solo proveedores; nos integramos como un brazo tecnológico alineado a la cultura de tu empresa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SERVICES SECTION */}
        <section id="servicios" className="py-24 bg-complementary-light px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-2xl">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Soluciones Tecnológicas Integrales</h2>
                <p className="text-secondary/70 text-lg">
                  Infraestructura, desarrollo y análisis de datos enfocados en el rendimiento empresarial.
                </p>
              </div>
              <button className="hidden md:block text-primary font-bold hover:underline mt-4 md:mt-0">
                Ver todos los servicios &rarr;
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-transparent hover:border-complementary/20">
                <div className="w-14 h-14 bg-complementary-light rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Database size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3">Implementación ERP</h3>
                <p className="text-sm text-secondary/70 mb-4">
                  Despliegue y migración experta hacia ecosistemas iDempiere adaptados a tus procesos internos.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-transparent hover:border-complementary/20">
                <div className="w-14 h-14 bg-complementary-light rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <LineChart size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3">Inteligencia de Negocios</h3>
                <p className="text-sm text-secondary/70 mb-4">
                  Data Warehousing y dashboards dinámicos utilizando Pentaho Data Integration y PowerBI.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-transparent hover:border-complementary/20">
                <div className="w-14 h-14 bg-complementary-light rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Smartphone size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3">Desarrollo Móvil</h3>
                <p className="text-sm text-secondary/70 mb-4">
                  Creación de aplicaciones corporativas robustas para optimizar tu fuerza de ventas y logística.
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-transparent hover:border-complementary/20">
                <div className="w-14 h-14 bg-complementary-light rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Server size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3">Administración Linux</h3>
                <p className="text-sm text-secondary/70 mb-4">
                  Configuración, mantenimiento y seguridad avanzada de servidores en entornos Debian.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* 5. FOOTER */}
      <footer className="bg-secondary text-complementary-light pt-20 pb-10 px-6 lg:px-8 border-t-[6px] border-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <span className="font-heading font-bold text-3xl tracking-tight text-white block mb-6">
              Frontuari
            </span>
            <p className="text-complementary text-sm leading-relaxed max-w-xs mb-6">
              Ingeniería de software y soluciones corporativas para transformar la infraestructura digital de tu empresa.
            </p>
            <address className="not-italic text-sm text-complementary">
              <p>Araure, Portuguesa</p>
              <p>Venezuela</p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-complementary hover:text-white transition-colors text-sm">Inicio</a></li>
              <li><a href="#nosotros" className="text-complementary hover:text-white transition-colors text-sm">Nuestra Empresa</a></li>
              <li><a href="#servicios" className="text-complementary hover:text-white transition-colors text-sm">Servicios IT</a></li>
              <li><a href="#casos" className="text-complementary hover:text-white transition-colors text-sm">Casos de Éxito</a></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal & Contacto</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-complementary hover:text-white transition-colors text-sm">Política de Privacidad</a></li>
              <li><a href="#" className="text-complementary hover:text-white transition-colors text-sm">Términos de Servicio</a></li>
              <li><a href="mailto:contacto@frontuari.com" className="text-complementary hover:text-primary transition-colors text-sm mt-4 block">contacto@frontuari.com</a></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto border-t border-complementary/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-complementary">
            &copy; {new Date().getFullYear()} Frontuari, C.A. Todos los derechos reservados.
          </p>
          <p className="text-xs text-complementary mt-2 md:mt-0">
            Diseñado con precisión y excelencia.
          </p>
        </div>
      </footer>
      
    </div>
  );
}
