'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Server, Smartphone,
  LineChart, Database, ShieldCheck,
  Lightbulb, Users, ArrowRight,
  ChevronLeft, ChevronRight
} from 'lucide-react';

type EnterpriseLogo = {
  name: string;
  src: any;
  scale?: number; // Factor de escala individual (ej: 1.2, 0.85, 1.4)
};


function EnterpriseLogosTicker({ logos }: { logos: EnterpriseLogo[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animId: number;

    const updateScales = () => {
      if (containerRef.current && trackRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        const maxDistance = containerRect.width / 2;

        const items = trackRef.current.querySelectorAll<HTMLDivElement>('.ticker-item');
        items.forEach((item) => {
          const itemRect = item.getBoundingClientRect();
          const itemCenter = itemRect.left + itemRect.width / 2;
          const distance = Math.abs(containerCenter - itemCenter);

          // Distancia normalizada: 0 en el centro exacto, 1 en los bordes
          const normDistance = Math.min(distance / maxDistance, 1);

          // Escala y opacidad dinámica 
          const scale = 1;
          const opacity = 0.65 + (1 - normDistance) * 0.35;

          item.style.transform = `scale(${scale.toFixed(3)})`;
          item.style.opacity = opacity.toFixed(2);
        });
      }
      animId = requestAnimationFrame(updateScales);
    };

    animId = requestAnimationFrame(updateScales);
    return () => cancelAnimationFrame(animId);
  }, []);

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
      <div ref={containerRef} className="relative overflow-hidden w-full flex items-center py-4">
        {/* Degradados laterales blancos */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none" />

        {/* Ticker continuo: SIN gap y SIN padding lateral para que el -50% sea simétrico */}
        <div ref={trackRef} className="animate-ticker flex items-center">
          {[...logos, ...logos].map((item, index) => (
            <div
              key={index}
              /* Margen derecho asegura que todos los logos mantengan separación y se respete el w-auto (sin w-48) */
              className="ticker-item shrink-0 h-32 sm:h-40 flex items-center justify-center transition-transform duration-75 group cursor-pointer mr-16 sm:mr-24"
            >
              <img
                src={item.src.src}
                alt={item.name}
                /* La altura se calcula con base a la escala. El w-auto del tailwind calcula el ancho perfecto */
                style={{ height: `${(item.scale ?? 1) * 45}%` }}
                className="w-auto max-w-[200px] sm:max-w-[260px] object-contain transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:drop-shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Texto de marquesina en el fondo */}
      <div className="absolute bottom-3 w-full overflow-hidden pointer-events-none select-none">
        <div className="animate-ticker flex whitespace-nowrap text-xs sm:text-sm font-mono font-black text-[#00356b]/35 tracking-[0.3em] uppercase">
          <span className="mr-8">
            • SOLUCIONES INTEGRALES • COMPROMISO E INNOVACIÓN • SERVICIO DE CALIDAD • FRONTUARI ERP • EFICIENCIA Y ESCALABILIDAD • PROFESIONALIDAD Y EXCELECNIA
          </span>
          <span className="mr-8">
            • SOLUCIONES INTEGRALES • COMPROMISO E INNOVACIÓN • SERVICIO DE CALIDAD • FRONTUARI ERP • EFICIENCIA Y ESCALABILIDAD • PROFESIONALIDAD Y EXCELECNIA
          </span>
        </div>
      </div>
    </div>
  );
}

// IMAGENES 
import logoFrontuari from '../assets/images/icons/Logo-Frontuari.png';
import logoOpenSource from '../assets/images/icons/opensource.png';
import logoCombinado from '../assets/images/icons/Logo-Frontuari-Datacomm.png';
import bannerNosotros from '../assets/images/banners/banner-nosotros.jpg';
import nombreFrontuari from '../assets/images/nombre-frontuari.jpg';
import bannerTI from '../assets/images/banners/gestion-ti.webp'
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
// ESTILO GLOBAL INYECTADO PARA EL PARPADEO DEL CURSOR
const cursorStyle = `
  @keyframes customBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .animate-cursor-blink {
    animation: customBlink 0.8s step-start infinite;
  }

  /* Animación del Ticker Infinito */
  @keyframes tickerScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-ticker {
    display: flex;
    width: max-content;
    animation: tickerScroll 35s linear infinite;
  }
  .animate-ticker:hover {
    animation-play-state: paused;
  }

  @keyframes moveBackgroundDots {
  
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 48px 48px;
    }
  }
  .animate-moving-dots {
    animation: moveBackgroundDots 5s linear infinite;
  }

`;

// 1. TYPEWRITER HEADING (Título Principal)
function TypewriterHeading({ text, speed = 55 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayedText(text.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      <span className="inline-block w-[4px] h-[0.85em] bg-primary ml-1.5 animate-cursor-blink align-baseline rounded-full" />
    </span>
  );
}

// 2. ROTATING TYPEWRITER (Escribe, borra y cambia palabras de forma fluida)
function RotatingTypewriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 40,
  delayBetween = 2000,
}: {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[currentWordIndex];

    if (!isDeleting && currentText === fullWord) {
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetween);
      return () => clearTimeout(timer);
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * words.length);
      } while (words.length > 1 && nextIndex === currentWordIndex);

      setCurrentWordIndex(nextIndex);
      return;
    }

    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting
          ? fullWord.slice(0, prev.length - 1)
          : fullWord.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, delayBetween]);

  return (
    <span className="text-primary font-black">
      {currentText}
      <span className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 animate-cursor-blink align-baseline rounded-full" />
    </span>
  );
}

export default function FrontuariLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<null | { id: number; title: string; image: any; gallery?: any[]; description: string; icon?: any }>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const [isLogosVisible, setIsLogosVisible] = useState(false);
  const logosSectionRef = useRef<HTMLDivElement>(null);
  const [isServiciosVisible, setIsServiciosVisible] = useState(false);
  const serviciosSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsServiciosVisible(entry.isIntersecting);
      },
      { threshold: 0.25 } // Detecta la entrada y salida de la sección
    );

    if (serviciosSectionRef.current) {
      observer.observe(serviciosSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const heroWords = [
    "Innovación",
    "Desarrollo de Software",
    "Autogestión",
    "iDempiere ERP",
    "Transformación Digital",
    "Gestión Empresarial",
    "Soluciones Tecnológicas"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLogosVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (logosSectionRef.current) {
      observer.observe(logosSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const serviceCards = [
    {
      id: 1,
      title: 'iDempiere ERP',
      icon: Server,
      image: logoIdempiere,
      description: 'Transforma la gestión de tu empresa con la potencia de iDempiere ERP. Centralizamos finanzas, inventario, ventas y cadena de suministro en una plataforma open-source de alto rendimiento. Diseñamos módulos a la medida, automatizamos tus procesos clave y te acompañamos con soporte especializado para escalar tu negocio sin límites.'
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
      title: 'Power BI',
      icon: Database,
      image: bannerBI,
      description: `Convierte la sobrecarga de datos en decisiones claras y rentables a través de nuestras soluciones de Inteligencia de Negocios con Power BI. Conectamos todas tus fuentes de información, incluyendo ERP, sistemas contables y bases de datos, en tableros dinámicos en tiempo real que visibilizan tus indicadores clave de rendimiento de un vistazo. Empodera a tu equipo directivo con reportes interactivos que identifican oportunidades de ahorro, detectan ineficiencias y predicen tendencias de crecimiento sin depender de reportes manuales.`
    }
  ];

  const enterpriseLogos: { name: string; src: any; scale?: number }[] = [
    { name: 'Coposa', src: logoCoposa, scale: 2.67 },
    { name: 'ANCA', src: logoAnca, scale: 2.5 }, // Ejemplo: agrandar ANCA un 25%
    { name: 'Inversiones Porcinas', src: logoPorcina, scale: 2.5 },
    { name: 'Arichuna', src: logoArichuna, scale: 2.9 },
    { name: 'Las Plumas', src: logoLasPlumas, scale: 2.6 },
    { name: 'Tanapo', src: logoTanapo, scale: 2.5 },
    { name: 'Covencaucho', src: logoCovencauchos, scale: 4.1 },
    { name: 'Siloamazo', src: logoSiloamazo, scale: 4 },
    { name: 'BioGene', src: logoBiogene, scale: 3.1 },
    { name: 'Mary', src: logoMary, scale: 2.96 },
    { name: 'Empresas Polar', src: logoPolar, scale: 2.82 }, // Ejemplo: agrandar Polar un 20%
    { name: 'Biomercados', src: logoBio, scale: 2.67 },
    { name: 'Inversiones lacteas', src: logoinverlactea, scale: 2.1 },
    { name: 'Frisulca', src: logofrisulca, scale: 1.5 },
    { name: 'Palmeral', src: logopalmeral, scale: 1.5  },
    { name: 'Agropecuaria San Simón', src: logoasasica, scale: 1.6 },
    { name: 'Agro Simón', src: logoagrosimon, scale: 1.5 },
    { name: 'Inversiones L55', src: logol55, scale: 1.61 },
    { name: 'Hielo San Simón', src: logohielo, scale: 1.6 },
    { name: 'Snitch', src: logosnitch, scale: 2 },
    { name: 'Tubrica', src: logotubrica, scale: 1.0 }
  ];



  const handleOpenCardModal = (card: typeof serviceCards[0]) => {
    setSelectedCard(card);
    setCurrentSlide(0);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
      {/* Inyección de animación para el parpadeo del cursor */}
      <style>{cursorStyle}</style>

      {/* HEADER CON CONTRASTE PARA EL LOGO */}
      <header className="fixed top-0 w-full z-50 bg-slate-900/80 bg-white/100 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 gap-4">

            {/* Contenedor blanco/translúcido para dar contraste y legibilidad al logo con texto negro */}
            <div className="bg-white/95 hover:bg-white backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-white/20 transition-all flex items-center shrink-0">
              <img
                decoding="async"
                className="h-6 sm:h-8 md:h-9 w-auto shrink-0 object-contain my-auto"
                src={logoFrontuari.src}
                alt="Frontuari"
              />
            </div>

            <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 ">

              <a href="#inicio" className="transition-colors text-sm uppercase tracking-wid transform hover:scale-105">Inicio</a>
              <a href="#nosotros" className="transition-colors text-sm uppercase tracking-wide text-black transform hover:scale-105">Nosotros</a>
              <a href="#servicios" className="transition-colors text-sm uppercase tracking-wide text-black transform hover:scale-105">Servicios</a>
              <a href="#casos" className="transition-colors text-sm uppercase tracking-wide text-black transform hover:scale-105">Casos de Éxito</a>

              <button
                className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 lg:px-6 lg:py-3 rounded-md font-bold transition-all transform hover:-translate-y-0.5 shadow-md text-sm"
                aria-label="Contactar a Frontuari"
              >
                Contáctanos
              </button>
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-label="Abrir menú de navegación"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-white/10 absolute top-full left-0 w-full shadow-lg text-black">
            <div className="px-6 pt-4 pb-6 space-y-4 flex flex-col">
              <a href="#inicio" className="block text-slate-200 font-medium hover:text-black transition-colors">Inicio</a>
              <a href="#nosotros" className="block text-slate-200 font-medium hover:text-black transition-colors">Nosotros</a>
              <a href="#servicios" className="block text-slate-200 font-medium hover:text-black transition-colors">Servicios</a>
              <a href="#casos" className="block text-slate-200 font-medium hover:text-black transition-colors">Casos de Éxito</a>
              <button className="w-full bg-primary text-white px-6 py-3 rounded-md font-bold text-center">
                Contáctanos
              </button>
            </div>
          </div>
        )}
      </header>

      {/* MAIN */}
      <main>
        {/* SECCIÓN INICIO CON VIDEO DE FONDO */}
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
                <div className="flex flex-col sm:flex-row gap-4 pt-2 sm:pt-4">
                  <button className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-md font-bold flex items-center justify-center transition-all transform hover:-translate-y-1 shadow-lg">
                    Inicia tu transformación <ArrowRight className="ml-2 shrink-0" size={20} />
                  </button>
                  <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white px-8 py-4 rounded-md font-bold transition-all text-center backdrop-blur-sm">
                    Conoce más
                  </button>
                </div>
              </div>

              <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[450px] bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 border border-white/40 shadow-2xl group">

                <div className="absolute inset-0 bg-[radial-gradient(#24588d_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.05] pointer-events-none" />
                <Database className="absolute -right-6 -bottom-6 w-48 h-48 sm:w-64 sm:h-64 text-primary/10 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between border-b border-complementary/15 pb-4">

                  <span className="text-xs font-mono font-semibold text-secondary/50 uppercase tracking-widest">
                    Frontuari Tech Spec
                  </span>
                </div>
                {/* NO HAY NADA, NO EXISTE */}
                <div className="">
                  <p className="text-secondary/60 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
                    Especialistas en:
                  </p>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary min-h-[60px] flex items-center">
                    <RotatingTypewriter words={heroWords} />
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-complementary/15 flex items-center justify-between text-xs text-secondary/60">
                  <div className="flex items-center gap-2">

                  </div>
                  <span className="font-mono text-primary font-bold">v2026.1</span>
                </div>

              </div>

            </div>
          </section>
        </div>


        {/* SERVICES SECTION CON PUNTOS MÓVILES Y FADE PURAMENTE POR OPACIDAD */}
        <section
          id="servicios"
          ref={serviciosSectionRef}
          className="relative py-16 sm:py-20 lg:py-28 bg-slate-50 overflow-hidden px-4 sm:px-6 lg:px-8"
        >
          {/* PUNTOS MÁS GRANDES (2.5px) QUE MUEVEN Y WRAPPEAN CONTINUAMENTE */}
          <div className="absolute inset-0  bg-[radial-gradient(#94a3b8_3.5px,transparent_2.5px)] [background-size:48px_48px] opacity-40 blur-[4px] pointer-events-none animate-moving-dots" />

          {/* LUZ AMBIENTAL SUAVE */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* CABECERA CON FADE IN / FADE OUT ESTÁTICO */}
            <div
              className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 transition-opacity duration-700 ease-in-out ${
                isServiciosVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
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

            {/* GRID DE CONTENEDORES CON FADE ESCALONADO SIN DESPLAZAMIENTO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {serviceCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.id}
                    onClick={() => handleOpenCardModal(card)}
                    style={{
                      transitionDelay: isServiciosVisible ? `${index * 120}ms` : '0ms',
                    }}
                    className={`group cursor-pointer relative overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between transition-all duration-700 ease-out hover:-translate-y-2 hover:border-primary/40 ${
                      isServiciosVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {/* CONTENEDOR DE LA IMAGEN */}
                    <div className="relative h-48 w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-6 border-b border-slate-100">
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <img
                        src={card.image.src}
                        alt={card.title}
                        className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-108"
                      />
                    </div>

                    {/* BARRA DE ACENTO INFERIOR QUE SE EXPANDE EN HOVER */}
                    <div className="h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />

                    {/* PIE CON TÍTULO E ICONO CON TILTEO */}
                    <div className="p-5 bg-white flex items-center justify-between gap-3 z-10">
                      <h3 className="text-secondary font-bold text-base leading-snug group-hover:text-primary transition-colors duration-300">
                        {card.title}
                      </h3>

                      {/* ICONO CON TILTEO Y ROTACIÓN */}
                      <div className="p-2.5 rounded-xl bg-slate-100 text-secondary/70 group-hover:bg-primary group-hover:text-white group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300 shrink-0">
                        <IconComponent size={20} className="transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* NOSOTROS SECTION */}
        <section id="nosotros" className="bg-white border-t border-complementary-light">
          <div className="relative w-full py-16 sm:py-20 mb-12 sm:mb-16 overflow-hidden bg-secondary/5 border-y border-complementary/10">
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
                Nuestra Esencia
              </h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full shadow-sm"></div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 bg-complementary-light/40 p-6 sm:p-8 lg:p-10 rounded-2xl border border-complementary/15 shadow-sm">
              <div className="lg:col-span-5 relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-md group">
                <img
                  src={nombreFrontuari.src}
                  alt="Frontuari - Identidad y Fortaleza"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 ring-1 ring-black/5 rounded-xl"></div>
              </div>

              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full inline-block">
                  Sobre Nosotros:
                </span>
                <h3 className="text-secondary/70 text-base sm:text-base leading-relaxed">
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 bg-complementary-light/40 p-6 sm:p-8 lg:p-10 rounded-2xl border border-complementary/15 shadow-sm">
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
              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-soft border border-complementary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <ShieldCheck size={40} className="text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">Compromiso</h3>
                <p className="text-secondary/70 leading-relaxed">
                  Garantizamos entregas precisas y acompañamiento continuo. Tu éxito operativo es la métrica de nuestra efectividad.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-soft border border-complementary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <Lightbulb size={40} className="text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">Innovación</h3>
                <p className="text-secondary/70 leading-relaxed">
                  Adoptamos y adaptamos tecnologías de vanguardia para crear arquitecturas digitales que rompen paradigmas.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-soft border border-complementary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <Users size={40} className="text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">Conexión</h3>
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
          className="py-16 sm:py-20 lg:py-24 border-t border-complementary-light overflow-hidden"
          style={{ backgroundColor: '#011325' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 text-center">
            <span className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/15 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-white/20">
              Casos de Éxito
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Empresas que han confiado en nosotros
            </h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Nuestra trayectoria respaldada por líderes del sector tecnológico e industrial.
            </p>
          </div>

          {/* Ticker dinámico con fondo blanco y escalado al centro */}
          <EnterpriseLogosTicker logos={enterpriseLogos} />
        </section>
      </main>

      {/* MODAL SERVICIOS */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl my-8 transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-80 sm:h-[400px] bg-slate-900 flex items-center justify-center overflow-hidden">
              {selectedCard.gallery && selectedCard.gallery.length > 0 ? (
                <>
                  <img
                    src={selectedCard.gallery[currentSlide].src}
                    alt="Fondo Difuminado"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-45 scale-110 pointer-events-none"
                  />

                  <img
                    src={selectedCard.gallery[currentSlide].src}
                    alt={`${selectedCard.title} - Captura ${currentSlide + 1}`}
                    className="relative z-10 max-h-[88%] w-auto object-contain rounded-2xl shadow-2xl border border-white/20 transition-all duration-300"
                  />

                  {selectedCard.gallery.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide((prev) => (prev === 0 ? selectedCard.gallery!.length - 1 : prev - 1));
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                        aria-label="Imagen anterior"
                      >
                        <ChevronLeft size={22} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide((prev) => (prev === selectedCard.gallery!.length - 1 ? 0 : prev + 1));
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                        aria-label="Siguiente imagen"
                      >
                        <ChevronRight size={22} />
                      </button>

                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                        {selectedCard.gallery.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentSlide(idx);
                            }}
                            className={`h-2 rounded-full transition-all ${currentSlide === idx ? 'bg-white w-5' : 'bg-white/50 w-2'
                              }`}
                            aria-label={`Ir a imagen ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <img
                  src={selectedCard.image.src}
                  alt={selectedCard.title}
                  className="max-h-[80%] w-auto object-contain"
                />
              )}

              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 z-30 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4 max-h-[50vh] overflow-y-auto">
              <h3 className="text-2xl font-bold text-secondary">
                {selectedCard.title}
              </h3>
              <p className="text-secondary/80 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                {selectedCard.description}
              </p>

              <div className="pt-6 border-t border-complementary/10 flex items-center justify-between">
                {selectedCard.id === 2 ? (
                  <a
                    href="https://play.google.com/store/apps/collection/cluster?gsr=SnFqLEFTNFNDMi9GajFBSk96V2JiS1ppVVk4ckEvamFsb2RvbGZ0V0xWR212aGs9sgI9CiAKHG5ldC5mcm9udHVhcmkuc2FsZXNmb3JjZS5mdHUQBxIXCAESEzg2MDgxNDQzMDYzMDQyNzU2MTEYALASAA%3D%3D:S:ANO1ljKEez0&hl=es_VE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-colors inline-flex items-center justify-center shadow-sm"
                  >
                    Ver
                  </a>
                ) : (
                  <div />
                )}

                <button
                  onClick={() => setSelectedCard(null)}
                  className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL POLÍTICA DE PRIVACIDAD */}
      {isPrivacyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={() => setIsPrivacyOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl my-8 transform transition-all flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-5 border-b border-complementary/15 flex items-center justify-between bg-complementary-light/30">
              <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                Política de Privacidad
              </h3>
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="text-secondary/60 hover:text-secondary rounded-full p-1.5 transition-colors"
                aria-label="Cerrar modal de privacidad"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4 overflow-y-auto text-secondary/80 text-sm sm:text-base leading-relaxed">
              <p>
                Frontuari, C.A., operando bajo la marca OpenSource Consulting Group, se compromete a proteger la privacidad y confidencialidad de la información proporcionada por sus clientes en servicios de software corporativo, infraestructura, desarrollo móvil, análisis de datos y bases de datos.
              </p>
              <p>
                Los datos recopilados se utilizan exclusivamente con fines operativos y técnicos para optimizar las soluciones contratadas. La empresa garantiza que no venderá, alquilará ni compartirá información personal o sensible con terceros no autorizados con fines comerciales.
              </p>
              <p>
                Cualquier transferencia de datos se limitará estrictamente a requerimientos legales o necesidades operativas bajo condiciones de confidencialidad. Los usuarios tienen derecho a acceder, corregir o eliminar su información personal mediante solicitud directa.
              </p>
            </div>

            <div className="px-6 py-4 border-t border-complementary/10 bg-gray-50 flex justify-end">
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-colors shadow-sm"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-secondary text-complementary-light pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 border-t-[6px] border-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 sm:mb-16">

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

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-complementary hover:text-white transition-colors text-sm">Inicio</a></li>
              <li><a href="#nosotros" className="text-complementary hover:text-white transition-colors text-sm">Nuestra Esencia</a></li>
              <li><a href="#servicios" className="text-complementary hover:text-white transition-colors text-sm">Servicios IT</a></li>
              <li><a href="#casos" className="text-complementary hover:text-white transition-colors text-sm">Casos de Éxito</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal & Contacto</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => setIsPrivacyOpen(true)}
                  className="text-complementary hover:text-white transition-colors text-sm text-left focus:outline-none"
                >
                  Política de Privacidad
                </button>
              </li>

              <li><a href="mailto:frontuari@gmail.com" className="text-complementary hover:text-primary transition-colors text-sm mt-4 block">frontuari@gmail.com</a></li>
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

    </div>
  );
}