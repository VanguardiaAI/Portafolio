"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Rocket, Bot } from "lucide-react";
import { useTheme } from "../lib/ThemeContext";

export function AboutMe() {
  const { theme } = useTheme();
  
  const skills = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Desarrollo Frontend",
      description: "React, TypeScript, HTML, CSS, JavaScript",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Inteligencia Artificial",
      description: "LLMs, Sistemas Multiagente, Automatización con IA",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Desarrollo Backend",
      description: "Python, Flask, MongoDB, Supabase",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Desarrollo de Bots",
      description: "Telegram, Discord, WhatsApp, Automatizaciones",
    },
  ];

  return (
    <section 
      className={`relative py-20 px-4 md:px-6 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-gray-900 to-black' 
          : 'bg-gradient-to-b from-gray-100 to-white'
      }`} 
      id="sobre-mi"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Sobre Mí
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}>
            Desarrollador Full Stack con 6 años de experiencia especializado en Python y React. 
            Creador de sistemas innovadores desde La Guía Digital Automotriz hasta soluciones 
            potenciadas por IA. Apasionado por crear aplicaciones que resuelvan problemas reales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl border transition-all ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-gray-700'
                  : 'glass-card hover-card gradient-border subtle-border'
              }`}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white">
                {skill.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {skill.title}
              </h3>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 