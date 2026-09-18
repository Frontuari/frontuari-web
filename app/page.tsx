'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Server, Smartphone, LineChart, Database, ShieldCheck,
  Lightbulb, Users, ArrowRight, ChevronLeft, ChevronRight, X
} from 'lucide-react';

type EnterpriseLogo = {
  name: string;
  src: any;
  scale?: number;
};

function EnterpriseLogosTicker({ logos }: { logos: EnterpriseLogo[] }) {
  return (
    <div className="relative w-full py-12 bg-white border-y border-slate-200/80 shadow-inner">
      {/* Texto de marquesina en el fondo */}
      <div className="absolute top-3 w-full overflow-hidden pointer-events-none select-none">
        <div className="animate-ticker flex whitespace-nowrap text-xs sm:text-sm font-mono font-black text-[#00356b]/35 tracking-[0.3em] uppercase">
          <span className="mr-8">
            • CASOS DE ÉXITO • ALIANZAS ESTRATÉGICAS • TRANSFORMACIÓN DIGITAL • FRONTUARI ERP • SOLUCIONES EMPRESARIALES • CONFIANZA Y RENDIMIENTO
          </span>
          <span className="mr-8">
            • CASOS DE ÉXITO • ALIANZAS ESTRATÉGICAS • TRANSFORMACIÓN DIGITAL • FRONTUARI ERP • SOLUCIONES EMPRESARIALES • CONFIANZA Y RENDIMIENTO
          </span>
        </div>
      </div>

      {/* Carcasa del carrusel */}
      <div className="relative overflow-hidden w-full flex items-center py-4">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none" />

        <div className="animate-ticker flex items-center">
          {[...logos, ...logos].map((item, index) => (
            <div
              key={index}
              className="ticker-item shrink-0 h-32 sm:h-40 flex items-center justify-center transition-transform duration-75 group cursor-pointer mr-16 sm:mr-24"
            >
              <img
                src={item.src.src}
                alt={item.name}
                style={{ height: `${(item.scale ?? 1) * 45}%` }}
                className="w-auto max-w-[200px] sm:max-w-[260px] object-contain transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:drop-shadow-md opacity-85 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Texto de marquesina en el fondo */}
      <div className="absolute bottom-3 w-full overflow-hidden pointer-events-none select-none">
        <div className="animate-ticker flex whitespace-nowrap text-xs sm:text-sm font-mono font-black text-[#00356b]/35 tracking-[0.3em] uppercase">
          <span className="mr-8">
            • SOLUCIONES INTEGRALES • COMPROMISO E INNOVACIÓN • SERVICIO DE CALIDAD • FRONTUARI ERP • EFICIENCIA Y ESCALABILIDAD • PROFESIONALIDAD Y EXCELENCIA
          </span>
          <span className="mr-8">
            • SOLUCIONES INTEGRALES • COMPROMISO E INNOVACIÓN • SERVICIO DE CALIDAD • FRONTUARI ERP • EFICIENCIA Y ESCALABILIDAD • PROFESIONALIDAD Y EXCELENCIA
          </span>
        </div>
      </div>
    </div>
  );
}

// IMAGENES 
import logoOpenSource from '../assets/images/icons/opensource.png';
import logoCombinado from '../assets/images/icons/Logo-Frontuari-Datacomm.png';
import bannerNosotros from '../assets/images/banners/banner-nosotros.jpg';
import nombreFrontuari from '../assets/images/nombre-frontuari.jpg';
import bannerTI from '../assets/images/banners/gestion-ti.webp';
import bannerBI from '../assets/images/banners/power-bi.webp';

// APP MOVIL SCREENSHOTS
import appMovil1 from '../assets/images/banners/appmovil/appmovil1.jpeg';
import appMovil2 from '../assets/images/banners/appmovil/appmovil2.jpeg';
import appMovil3 from '../assets/images/banners/appmovil/iconss2.png';
import appMovil4 from '../assets/images/banners/appmovil/appmovil4.jpeg';
import appMovil5 from '../assets/images/banners/appmovil/appmovil5.jpeg';

// LOGO DE IDEMPIERE
import logoIdempiere from '../assets/images/icons/idempiereLogo.png';

// LOGOS (empresas)
import logoCoposa from '../assets/images/enterprises/coposa.png';
import logoAnca from '../assets/images/enterprises/anca.png';
import logoPorcina from '../assets/images/enterprises/porcina.png';
import logoArichuna from '../assets/images/enterprises/arichuna.png';
import logoLasPlumas from '../assets/images/enterprises/las-plumas.png';
import logoTanapo from '../assets/images/enterprises/tanapo.png';
import logoCovencauchos from '../assets/images/enterprises/convecauchos.png';
import logoSiloamazo from '../assets/images/enterprises/siloamazo.png';
import logoBiogene from '../assets/images/enterprises/biogene.png';
import logoMary from '../assets/images/enterprises/mary.png';
import logoPolar from '../assets/images/enterprises/Empresas-polar.png';
import logoBio from '../assets/images/enterprises/biomercados.png';
import logoagrosimon from '../assets/images/enterprises/agrosimon.png';
import logoasasica from '../assets/images/enterprises/asasica.png';
import logol55 from '../assets/images/enterprises/L55.png';
import logohielo from '../assets/images/enterprises/hielo.png';
import logosnitch from '../assets/images/enterprises/snitch.png';
import logotubrica from '../assets/images/enterprises/tubrica.png';
import logopalmeral from '../assets/images/enterprises/palmeral.png';
import logoinverlactea from '../assets/images/enterprises/inverlactea.png';
import logofrisulca from '../assets/images/enterprises/frisulca.png';

import Navbar from './components/navbar';
import Footer from './components/footer';
import '../app/globals.css';

const cursorStyle = `
  @keyframes customBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .animate-cursor-blink {
    animation: customBlink 0.8s step-start infinite;
  }

  @keyframes tickerScroll {
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-50%, 0, 0); }
  }
  .animate-ticker {
    display: flex;
    width: max-content;
    will-change: transform;
    animation: tickerScroll 35s linear infinite;
  }
  .animate-ticker:hover {
    animation-play-state: paused;
  }

  .container {
    user-select: none;
    transition: transform 0.15s cubic-bezier(0.2, 0, 0, 1);
    will-change: transform;
  }

  .container:active {
    transform: scale(0.95);
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  @keyframes wordSlide {
    0%, 9% { transform: translateY(0); }
    14%, 23% { transform: translateY(-1.2em); }
    28%, 37% { transform: translateY(-2.4em); }
    42%, 51% { transform: translateY(-3.6em); }
    56%, 65% { transform: translateY(-4.8em); }
    70%, 79% { transform: translateY(-6.0em); }
    84%, 93% { transform: translateY(-7.2em); }
    98%, 100% { transform: translateY(-8.4em); }
  }
  .animate-word-slide {
    animation: wordSlide 18s cubic-bezier(0.25, 1, 0.5, 1) infinite;
  }
`;

function ServiceCard({
  card,
}: {
  card: { id: number; title: string; icon: any; image: any; description: string };
}) {
  const IconComponent = card.icon;

  return (
    <div
      className={`group cursor-pointer relative overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl flex flex-col justify-between transition-all duration-200 ease-out select-none transform-gpu active:scale-[0.97] active:brightness-95 opacity-100 translate-y-0 h-full`}
    >
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-6 border-b border-slate-100 pointer-events-none">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <img
          src={card.image.src}
          alt={card.title}
          draggable={false}
          className="max-h-full max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105 pointer-events-none select-none"
        />
      </div>

      <div className="h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-300 ease-out pointer-events-none" />

      <div className="p-5 bg-white flex items-center justify-between gap-3 z-10 pointer-events-none">
        <h3 className="text-secondary font-bold text-base leading-snug group-hover:text-primary transition-colors duration-200">
          {card.title}
        </h3>

        <div className="p-2.5 rounded-xl bg-slate-100 text-secondary/70 group-hover:bg-primary group-hover:text-white group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-200 shrink-0">
          <IconComponent size={20} className="transition-transform duration-200" />
        </div>
      </div>
    </div>
  );
}

function TypewriterHeading({ text }: { text: string }) {
  // Animación CSS simple de aparición para evitar bloqueos por JS
  return (
    <span className="animate-fade-in-up inline-block">
      {text}
    </span>
  );
}

function RotatingTypewriter({ words }: { words: string[] }) {
  // CSS-only word slider
  // Find longest word to set container width
  const longestWord = words.reduce((a, b) => a.length > b.length ? a : b, "");

  return (
    <div className="relative h-[1.2em] overflow-hidden text-primary font-black inline-block">
      {/* Elemento invisible para dar el ancho correcto al contenedor */}
      <span className="opacity-0 pointer-events-none whitespace-nowrap block h-[1.2em] select-none">
        {longestWord}
        <span className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 rounded-full" />
      </span>

      <div className="animate-word-slide flex flex-col items-start absolute top-0 left-0">
        {[...words, words[0]].map((word, i) => (
          <span key={i} className="h-[1.2em] leading-[1.2em] whitespace-nowrap block">
            {word}
            <span className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 animate-cursor-blink align-baseline rounded-full" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function FrontuariLanding() {
  const heroWords = [
    "Innovación",
    "Desarrollo de Software",
    "Autogestión",
    "iDempiere ERP",
    "Transformación Digital",
    "Gestión Empresarial",
    "Soluciones Tecnológicas"
  ];

  const serviceCards = [
    {
      id: 1,
      title: 'Implementación y Soporte de iDempiere ERP',
      icon: Server,
      image: logoIdempiere,
      description: 'Transforma la gestión de tu empresa con la potencia de iDempiere ERP. Implementamos el sistema desde cero adaptándolo a tu flujo de negocio, centralizando finanzas, inventario, ventas y cadena de suministro en una plataforma open-source de alto rendimiento. Diseñamos módulos a la medida, automatizamos tus procesos clave, brindamos capacitación y te acompañamos con soporte especializado continuo para escalar tu negocio sin límites.'
    },
    {
      id: 2,
      title: 'Desarrollo Móvil',
      icon: Smartphone,
      image: appMovil3,
      gallery: [appMovil1, appMovil2, appMovil3, appMovil4, appMovil5],
      description: `Diseñamos y desarrollamos aplicaciones móviles a la medida de tus necesidades empresariales para llevar la operativa de tu negocio a cualquier lugar. Contamos con soluciones especializadas como nuestra plataforma de Fuerza de Ventas, orientada a la toma y gestión eficiente de pedidos en campo, y nuestra aplicación de Aprobación de Documentos, diseñada para agilizar flujos de trabajo y autorizar procesos de forma rápida y segura.
      
      Conectamos tus operaciones móviles directamente con tus sistemas centrales para garantizar agilidad, control y respuestas al instante.`
    },
    {
      id: 3,
      title: 'Consultoría en Gestión de Información y ERP',
      icon: LineChart,
      image: bannerTI,
      description: `Diagnosticamos, estructuramos y centralizamos la información de tu empresa para convertir datos dispersos en decisiones estratégicas. A través de nuestra consultoría especializada, evaluamos tus flujos de trabajo, eliminamos silos de información e implementamos arquitecturas ERP adaptadas exactamente a la realidad de tu operativa.
      
      Te acompañamos a unificar finanzas, inventario y procesos clave en un solo ecosistema confiable, reduciendo costos operativos y garantizando el control total de tu negocio en tiempo real.`
    },
    {
      id: 4,
      title: 'Manejo y visualización de datos con Power BI',
      icon: Database,
      image: bannerBI,
      description: `Convierte la sobrecarga de datos en decisiones claras y rentables a través de nuestras soluciones de Inteligencia de Negocios con Power BI. Conectamos todas tus fuentes de información, incluyendo ERP, sistemas contables y bases de datos, en tableros dinámicos en tiempo real que visibilizan tus indicadores clave de rendimiento de un vistazo. Empodera a tu equipo directivo con reportes interactivos que identifican oportunidades de ahorro, detectan ineficiencias y predicen tendencias de crecimiento sin depender de reportes manuales.`
    }
  ];

  const enterpriseLogos: { name: string; src: any; scale?: number }[] = [
    { name: 'Coposa', src: logoCoposa, scale: 2.67 },
    { name: 'ANCA', src: logoAnca, scale: 2.5 },
    { name: 'Inversiones Porcinas', src: logoPorcina, scale: 2.5 },
    { name: 'Arichuna', src: logoArichuna, scale: 2.9 },
    { name: 'Las Plumas', src: logoLasPlumas, scale: 2.6 },
    { name: 'Tanapo', src: logoTanapo, scale: 2.5 },
    { name: 'Covencauchos', src: logoCovencauchos, scale: 4.1 },
    { name: 'Siloamazo', src: logoSiloamazo, scale: 4 },
    { name: 'BioGene', src: logoBiogene, scale: 3.1 },
    { name: 'Mary', src: logoMary, scale: 2.96 },
    { name: 'Empresas Polar', src: logoPolar, scale: 2.82 },
    { name: 'Biomercados', src: logoBio, scale: 2.67 },
    { name: 'Inversiones lacteas', src: logoinverlactea, scale: 2.1 },
    { name: 'Frisulca', src: logofrisulca, scale: 1.5 },
    { name: 'Palmeral', src: logopalmeral, scale: 1.5 },
    { name: 'Agropecuaria San Simón', src: logoasasica, scale: 1.6 },
    { name: 'Agro Simón', src: logoagrosimon, scale: 1.5 },
    { name: 'Inversiones L55', src: logol55, scale: 1.61 },
    { name: 'Hielo San Simón', src: logohielo, scale: 1.6 },
    { name: 'Snitch', src: logosnitch, scale: 2 },
    { name: 'Tubrica', src: logotubrica, scale: 1.0 }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
      <style>{cursorStyle}</style>

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <main>
        {/* HERO SECTION */}
        <div className="relative overflow-hidden bg-slate-950">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50 z-0 pointer-events-none"
          >
            <source src="/video/abstract_line3.webm" type="video/webm" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950 z-0 pointer-events-none" />

          <section id="inicio" className="relative z-10 pt-28 sm:pt-32 lg:pt-48 pb-12 sm:pb-16 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              <div className="space-y-6 sm:space-y-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight min-h-[120px] sm:min-h-[160px] text-white">
                  <TypewriterHeading text="No vendemos Software, vendemos soluciones" />
                </h1>
                <p className="text-base sm:text-lg text-slate-200 max-w-lg leading-relaxed drop-shadow-sm">
                  Transformamos procesos operativos mediante soluciones de software corporativo a medida. Escalabilidad, seguridad y eficiencia estructural para negocios del mañana.
                </p>
              </div>

              <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[450px] bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 border border-white/40 shadow-2xl group">
                <div className="absolute inset-0 bg-[radial-gradient(#24588d_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.05] pointer-events-none" />
                <Database className="absolute -right-6 -bottom-6 w-48 h-48 sm:w-64 sm:h-64 text-primary/10 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
                <span className="text-xs font-mono font-semibold text-secondary/50 uppercase tracking-widest">
                  Frontuari
                </span>

                <div>
                  <p className="text-secondary/60 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
                    Especialistas en:
                  </p>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary min-h-[60px] flex items-center">
                    <RotatingTypewriter words={heroWords} />
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-complementary/15 flex items-center justify-between text-xs text-secondary/60" />
              </div>

            </div>
          </section>
        </div>

        {/* SERVICIOS SECTION */}
        <section
          id="servicios"
          className="relative py-16 sm:py-20 lg:py-28 bg-slate-50 overflow-hidden px-4 sm:px-6 lg:px-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:32px_32px] opacity-25 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16">
              <div className="max-w-2xl">
                <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-primary/15">
                  Especializaciones
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary tracking-tight mb-3">
                  Soluciones Tecnológicas Integrales
                </h2>
                <p className="text-secondary/70 text-base sm:text-lg">
                  Infraestructura, desarrollo y análisis de datos enfocados en el rendimiento empresarial.
                </p>
              </div>
            </div>

            {/* Rejilla de Cards */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {serviceCards.map((card) => (
                <div key={card.id}>
                  <label htmlFor={`modal-toggle-${card.id}`} className="block h-full cursor-pointer">
                    <ServiceCard card={card} />
                  </label>

                  <input type="checkbox" id={`modal-toggle-${card.id}`} className="peer hidden" />

                  {/* Modal CSS-only (Solo abre en desktop) */}
                  <div className="fixed inset-0 z-[100] hidden md:peer-checked:flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl my-8 transform transition-all relative">
                      <div className="relative w-full h-80 sm:h-[400px] bg-slate-900 flex items-center justify-center overflow-hidden">
                        
                        {/* Galerias o imagen única */}
                        {card.gallery && card.gallery.length > 0 ? (
                          <div className="flex overflow-x-auto snap-x snap-mandatory w-full h-full pb-2">
                            {card.gallery.map((img, idx) => (
                              <img
                                key={idx}
                                src={img.src}
                                alt={`${card.title} - Captura ${idx + 1}`}
                                className="snap-center w-full h-full object-contain flex-shrink-0"
                              />
                            ))}
                          </div>
                        ) : (
                          <img
                            src={card.image.src}
                            alt={card.title}
                            className="max-h-[80%] w-auto object-contain"
                          />
                        )}

                        <label
                          htmlFor={`modal-toggle-${card.id}`}
                          className="absolute top-4 right-4 z-30 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors cursor-pointer"
                          aria-label="Cerrar modal"
                        >
                          <X size={20} />
                        </label>
                      </div>

                      <div className="p-6 sm:p-8 space-y-4 max-h-[50vh] overflow-y-auto">
                        <h3 className="text-2xl font-bold text-secondary">
                          {card.title}
                        </h3>
                        <p className="text-secondary/80 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                          {card.description}
                        </p>

                        <div className="pt-6 border-t border-complementary/10 flex items-center justify-between">
                          {card.id === 2 ? (
                            <div className="flex gap-2">
                              <a
                                href="https://play.google.com/store/apps/details?id=net.frontuari.salesforce.ftu&hl=es_419"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary hover:bg-primary-hover text-white px-4 py-2.5 rounded-lg font-bold text-sm transition-colors inline-flex items-center justify-center shadow-sm"
                              >
                                Ver Fuerza de Ventas
                              </a>
                              <a
                                href="https://play.google.com/store/apps/details?id=net.frontuari.erpdocapproved&hl=es_419"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg font-bold text-sm transition-colors inline-flex items-center justify-center shadow-sm"
                              >
                                Ver DOC Approved
                              </a>
                            </div>
                          ) : (
                            <div />
                          )}

                          <label
                            htmlFor={`modal-toggle-${card.id}`}
                            className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-colors cursor-pointer inline-block text-center"
                          >
                            Cerrar
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTÓN "VER MÁS" */}
            <div className="mt-12 sm:mt-16 flex justify-center">
              <a
                href="/productos"
                className="group relative inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md hover:shadow-xl hover:shadow-primary/25 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 select-none"
              >
                <span>Ver más productos y soluciones</span>
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* NOSOTROS SECTION */}
        <section id="nosotros" className="relative bg-slate-50 border-t border-complementary-light pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:32px_32px] opacity-25 pointer-events-none" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 w-full py-16 sm:py-20 mb-12 sm:mb-16 overflow-hidden bg-secondary/5 border-y border-complementary/10">
            <div className="absolute inset-0 z-0">
              <img
                src={bannerNosotros.src}
                alt="Banner Frontuari Equipo"
                className="w-full h-full object-cover object-center opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white opacity-30"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary tracking-tight mb-4">
                Nosotros
              </h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full shadow-sm"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 bg-white/70 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-200/50">
              <div className="lg:col-span-5 relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-md group">
                <img
                  src={nombreFrontuari.src}
                  alt="Frontuari - Identidad y Fortaleza"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full inline-block">
                  Sobre Nosotros:
                </span>
                <h3 className="text-secondary/80 text-base sm:text-base leading-relaxed">
                  Frontuari C,A Somos una empresa con más de 10 años de experiencia dedicada al desarrollo o implementación de herramientas tecnológicas ofreciendo servicios de calidad, trabajamos con tecnologías de punta, para brindar a nuestros clientes las mejores soluciones a todas sus necesidades.
                </h3>
                <p className="text-2xl sm:text-3xl font-extrabold text-secondary leading-tight">
                  ¿Cómo nace el nombre de la empresa?
                </p>
                <p className="text-secondary/70 text-sm sm:text-base leading-relaxed">
                  <strong>FRONTUARI</strong> nace de la unión de las palabras del <strong>“Oso Frontino”</strong> característico de los Andes Venezolanos, única especie viviente de su género y único también en Sur América, en peligro de extinción y el <strong>“Río Ventuari”</strong> del Estado Amazonas, es el cuarto más grande de Venezuela.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 bg-white/70 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-200/50">
              <div className="lg:col-span-5 relative w-full h-64 sm:h-80 rounded-xl overflow-hidden shadow-md group flex flex-col justify-center items-center bg-white p-4">
                <img
                  src={logoOpenSource.src}
                  alt="OpenSource Consulting Group - Alianza Estratégica"
                  className="w-auto h-1/2 object-contain"
                />
                <img
                  src={logoCombinado.src}
                  alt="Datacomm y Frontuari - Alianza Estratégica"
                  className="w-auto h-1/2 object-contain p-2"
                />
              </div>

              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <p className="text-2xl sm:text-3xl font-extrabold text-secondary leading-tight">
                  Una alianza importante…
                </p>
                <p className="text-secondary/70 text-sm sm:text-base leading-relaxed">
                  Frontuari trabaja de la mano con la empresa <strong>datacomm</strong> bajo la marca llamada <span style={{ color: '#24588d' }}><strong>«OpenSource Consulting Group»</strong></span>, esta alianza estratégica tiene el fin de ofrecer y garantizar un trabajo de calidad, profesional y de excelencia en todos nuestros productos y servicios.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl shadow-slate-300/70 border border-slate-200 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-2 group">
                <div className="p-3.5 bg-slate-50 rounded-xl inline-block mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <ShieldCheck size={36} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">Compromiso</h3>
                <p className="text-secondary/70 leading-relaxed">
                  Garantizamos entregas precisas y acompañamiento continuo. Tu éxito operativo es la métrica de nuestra efectividad.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl shadow-slate-300/70 border border-slate-200 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-2 group">
                <div className="p-3.5 bg-slate-50 rounded-xl inline-block mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Lightbulb size={36} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">Innovación</h3>
                <p className="text-secondary/70 leading-relaxed">
                  Adoptamos y adaptamos tecnologías de vanguardia para crear arquitecturas digitales que rompen paradigmas.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl shadow-slate-300/70 border border-slate-200 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-2 group">
                <div className="p-3.5 bg-slate-50 rounded-xl inline-block mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Users size={36} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">Conexión</h3>
                <p className="text-secondary/70 leading-relaxed">
                  No somos solo proveedores; nos integramos como un brazo tecnológico alineado a la cultura de tu empresa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CASOS DE ÉXITO */}
        <section
          id="casos"
          className="mt-16 lg:mt-24 pt-10 sm:pt-14 lg:pt-18 pb-16 sm:pb-20 lg:pb-24 border-t border-complementary-light overflow-hidden w-full"
          style={{ backgroundColor: '#011325' }}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 flex flex-col items-center justify-center text-center">
            <span className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/15 px-3.5 py-1.5 rounded-full inline-block mb-6 border border-white/20">
              Casos de Éxito
            </span>

            <h2 className="mx-auto text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 text-balance">
              Empresas que han confiado en nosotros
            </h2>

            <p className="mx-auto text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl text-center">
              Nuestra trayectoria respaldada por líderes del sector tecnológico e industrial.
            </p>
          </div>

          <EnterpriseLogosTicker logos={enterpriseLogos} />
        </section>

        {/* PUBLICIDAD / LLAMADO A LA ACCIÓN */}
        <section className="relative py-20 overflow-hidden bg-slate-950 border-t border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0,transparent_100%)] pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              Lleva tu empresa al siguiente nivel con Frontuari
            </h2>
            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Descubre cómo nuestras soluciones tecnológicas y nuestro ERP pueden optimizar tus procesos, aumentar tu rentabilidad y asegurar el crecimiento de tu negocio de forma inteligente.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/productos"
                className="bg-primary text-white hover:bg-primary-hover font-bold px-8 py-3.5 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1"
              >
                Explorar Productos
              </a>
              <a
                href="https://wa.me/584149739547?text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20de%20Frontuari%20y%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3.5 rounded-xl transition-colors"
              >
                Contáctanos ahora
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}