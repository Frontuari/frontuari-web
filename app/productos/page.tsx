'use client';

import React, { useState, MouseEvent, useRef } from 'react';
import { ArrowLeft, ChevronRight, CheckCircle2, Database, Blocks, CloudCog, BarChart3 } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';


import imgIdempiere from '../../assets/images/icons/idempiereLogo.png';
import imgSalesforce from '../../assets/images/banners/appmovil/iconss2.png';
import imgErpDoc from '../../assets/images/banners/appmovil/erpdoc2.jpeg' ;
import imgPowerBI from '../../assets/images/banners/power-bi.webp';

/* =========================================
   COMPONENTE: 3D Parallax Tilt + Lumen Glow
========================================= */
interface TiltWrapperProps {
  children: React.ReactNode;
}

export const TiltWrapper = ({ children }: TiltWrapperProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Mutación directa de la propiedad style: 0 re-renderizados de React
    cardRef.current.style.transform = `perspective(1000px) rotateX(${(y / (rect.height / 2)) * -10}deg) rotateY(${(x / (rect.width / 2)) * 10}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full cursor-pointer"
    >
      <div
        ref={cardRef}
        className="w-full h-full transition-transform duration-100 ease-out transform-gpu"
      >
        {children}
      </div>
    </div>
  );
};

/* =========================================
   DATA DE MÓDULOS CON CONTROL DE LUZ
========================================= */
const modules = [
  {
    id: 1,
    title: 'Implementación, Soporte y Consultoría iDempiere',
    description: 'Gestión integral, implementación desde cero y puesta en marcha de la arquitectura ERP para empresas en crecimiento.',
    image: imgIdempiere,
    bullets: [
      'Implementación completa de iDempiere adaptada a los procesos de tu negocio.',
      'Soporte técnico especializado y capacitación para el uso óptimo del sistema.',
      'Consultoría estratégica para optimizar flujos de trabajo financieros y logísticos.',
      'Sin costos de licenciamiento por usuario (100% Open Source).',
      'Arquitectura Multi-Compañía, Multi-Organización, Multi-Moneda y Multi-Idioma.',
      'Trazabilidad total, auditoría financiera y automatización con Workflows configurables.'
    ],
    hasGlow: true 
  },
  {
    id: 2,
    title: 'Desarrollo de Plugins a Medida',
    description: 'Extensión de funcionalidades nativas ajustadas a la lógica de tu negocio, aprovechando toda la flexibilidad de iDempiere.',
    bullets: [
      'Agregado de un sistema openPosDelivery para optimizar pedidos y entregas.',
      'Armado de regiones de ventas y gestión multisucursales para operaciones pesadas.',
      'Adaptaciones a medida de bancos y generación de archivos TXT bancarios para tus necesidades.'
    ],
    image: imgIdempiere,
    hasGlow: true
  },
  {
    id: 3,
    title: 'Aplicación Salesforce',
    description: 'Nuestra plataforma de Fuerza de Ventas, orientada a la toma y gestión eficiente de pedidos en campo.',
    bullets: [
      'Funcionalidad online y offline mediante sincronización.',
      'Registro de clientes Potenciales, ventas y precios de productos en un solo lugar.',
      'Registra tus Ordenes y Cobros en un solo lugar.',
      'Registra seguimieentos de tus visitas'
    ],
    image: imgSalesforce,
    hasGlow: false,
    objectFit: 'contain',
    playStoreLink: 'https://play.google.com/store/apps/details?id=net.frontuari.salesforce.ftu&hl=es_419'
  },
  {
    id: 4,
    title: 'DOC Approved',
    description: 'Aplicación de Aprobación de Documentos, diseñada para agilizar flujos de trabajo y autorizar procesos de forma rápida y segura.',
    bullets: [
      'Agiliza flujos de trabajo.',
      'Autoriza procesos de forma rápida y segura.',
      'Conexión directa con tus operaciones centrales.'
    ],

    image: imgErpDoc,
    hasGlow: false,
    playStoreLink: 'https://play.google.com/store/apps/details?id=net.frontuari.erpdocapproved&hl=es_419'
  },
  {
    objectFit: 'contain',
    id: 5,
    title: 'Analítica Avanzada con Power BI',
    description: 'Visualización de datos clave e inteligencia de negocios en tiempo real.',
    bullets: [
      'Creación de cubos de datos a partir de tu ERP.',
      'Visualizaciones dinámicas en tiempo real.',
      'Modelado de KPIs estratégicos para toma de decisiones.'
    ],
  
    image: imgPowerBI,
  
    hasGlow: true
  }
];

export default function ProductosTemplatePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-[#24588D] selection:text-white flex flex-col justify-between overflow-hidden">
      <Navbar />

      <main className="pt-24 sm:pt-28 md:pt-32 flex-grow">
        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-950 text-white py-12 sm:py-16 lg:py-20 border-b border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#24588D]/30 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-widest">
              <a href="/" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                <ArrowLeft size={14} /> Inicio
              </a>
              <ChevronRight size={14} />
              <span className="text-blue-400 font-bold">Productos & Servicios</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <span className="text-white font-bold text-xs uppercase tracking-widest bg-[#24588D]/40 px-3.5 py-1.5 rounded-full inline-block border border-[#24588D]">
                Catálogo Corporativo
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                Nuestras Soluciones
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Impulsamos la transformación digital de tu empresa con herramientas tecnológicas de alto impacto.
              </p>
            </div>
          </div>
        </section>

        {/* MÓDULOS DE PRODUCTOS */}
        <section className="relative py-16 sm:py-24 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] [background-size:32px_32px] opacity-50 pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="flex flex-col gap-12 lg:gap-16">
              {modules.map((module, index) => (
                <div
                  key={module.id}
                  className={`
                    group bg-white rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center
                    border border-slate-200 shadow-sm
                    transition-all duration-500 ease-in-out
                    hover:-translate-y-2 hover:border-[#24588D] hover:shadow-[0_0_35px_-10px_rgba(36,88,141,0.5)]
                    ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}
                  `}
                >

                  {/* CONTENEDOR TILT */}
                  <div className="w-full lg:w-5/12 h-64 sm:h-80 flex-shrink-0">
                    <TiltWrapper>
                      <div className="w-full h-full rounded-2xl bg-transparent relative overflow-hidden flex items-center justify-center group">
                        {/* RENDERIZADO DE LA IMAGEN */}
                        {module.image ? (
                          <Image
                            src={module.image}
                            alt={module.title}
                            fill
                            unoptimized
                            draggable={false}
                            className={`transition-transform duration-300 group-hover:scale-105 pointer-events-none select-none ${(module as any).objectFit === 'contain' ? 'object-contain p-4' : 'object-cover'}`}
                          />
                        ) : (
                          <div className="relative z-10 transform-gpu translate-z-[50px]">
                            {(module as any).icon}
                          </div>
                        )}
                      </div>
                    </TiltWrapper>
                  </div>

                  {/* CONTENIDO EXPLICATIVO */}
                  <div className="w-full lg:w-7/12 space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-[#24588D] transition-colors duration-300">
                      {module.title}
                    </h2>

                    <p className="text-slate-600 leading-relaxed text-lg">
                      {module.description}
                    </p>

                    <div className="space-y-4 pt-2">
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Ofrecemos:</h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {module.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="text-[#24588D] flex-shrink-0 mt-0.5" size={20} />
                            <span className="text-slate-700 font-medium">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap gap-4">

                      {/* <button className="flex items-center gap-2 text-sm font-bold text-[#24588D] bg-[#24588D]/5 hover:bg-[#24588D]/10 px-5 py-2.5 rounded-lg transition-colors">
                        MÁS INFORMACIÓN
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button> */}
                      {(module as any).playStoreLink && (
                        <a href={(module as any).playStoreLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white bg-[#24588D] hover:bg-[#1a426b] px-5 py-2.5 rounded-lg transition-colors shadow-sm hover:shadow-md">
                          Ver en Google Play
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}