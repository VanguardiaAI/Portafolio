"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Building2, Briefcase } from "lucide-react";
import { useRef } from "react";
import { useTheme } from "../lib/ThemeContext";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";

export function Experience() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Experiencias con keys originales para las traducciones
  const experiencesData = [
    {
      originalTitle: "Desarrollador Freelance",
      company: "Proyectos con IA",
      period: "2023 - Presente",
      description:
        "Desarrollo de 3 proyectos clave: CRM para clínicas estéticas con IA, SaaS para gestión de membresías VIP en Discord y aplicación de recetas mexicanas con sugerencias basadas en ubicación.",
    },
    {
      originalTitle: "Desarrollador de Bots",
      company: "Proyecto Personal",
      period: "2022 - 2024",
      description:
        "Desarrollo y mejora continua de un bot de trading algorítmico para Telegram. Implementación de sistema de suscripción y actualizaciones periódicas para mejorar su rendimiento.",
    },
    {
      originalTitle: "Fundador y Desarrollador",
      company: "La Guía Digital Automotriz",
      period: "2019 - 2022",
      description:
        "Creación y desarrollo de una aplicación móvil (www.laguiadigital.mx) para la guía de precios de vehículos usados, enfocada en revendedores. Desarrollada con React Native, HTML, CSS y JavaScript.",
    },
  ];

  // Obtener experiencias traducidas
  const experiences = experiencesData.map(exp => {
    const translated = t.experience.jobs[exp.originalTitle];
    return {
      title: translated.title,
      company: translated.company,
      period: translated.period,
      description: translated.description,
      originalTitle: exp.originalTitle
    };
  });

  return (
    <section 
      className={`relative py-20 px-4 md:px-6 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-black to-gray-900' 
          : 'bg-gradient-to-b from-white to-gray-100'
      }`}
      id="experiencia"
    >
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t.experience.title}
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}>
            {t.experience.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea de progreso animada */}
          <motion.div 
            className={`absolute left-4 md:left-1/2 h-full w-0.5 ${
              theme === 'dark' 
                ? 'bg-gradient-to-b from-blue-500/20 to-purple-600/20'
                : 'bg-gradient-to-b from-blue-500/40 to-purple-600/40'
            } origin-top`}
            style={{ scaleY: scaleX }}
          />
          {/* Línea estática de fondo */}
          <div 
            className={`absolute left-4 md:left-1/2 h-full w-0.5 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
            }`} 
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.originalTitle}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -50 : 50,
                y: 20 
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                y: 0 
              }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Punto en el timeline con animación */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.2 + 0.3
                }}
                viewport={{ once: true }}
                className={`absolute top-0 z-10 ${
                  index % 2 === 0 ? "right-4 md:-right-6" : "left-4 md:-left-6"
                } w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center ${
                  theme === 'light' ? 'shadow-lg' : ''
                }`}
              >
                {index % 2 === 0 ? (
                  <Building2 className="h-6 w-6 text-white" />
                ) : (
                  <Briefcase className="h-6 w-6 text-white" />
                )}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`rounded-2xl border transition-colors ml-20 md:ml-0 p-6 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-gray-700'
                    : 'glass-card hover-card gradient-border'
                }`}
              >
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {exp.title}
                </h3>
                <div className="text-blue-400 mb-2">{exp.company}</div>
                <div className={`${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} mb-4`}>{exp.period}</div>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 