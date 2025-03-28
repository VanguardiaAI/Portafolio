"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "../lib/ThemeContext";

export function Contact() {
  const { theme } = useTheme();
  
  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/tuuser",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://linkedin.com/in/tuuser",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      href: "https://twitter.com/tuuser",
      label: "Twitter",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      href: "mailto:contacto@tudominio.com",
      label: "Email",
    },
  ];

  return (
    <section 
      className={`relative py-20 px-4 md:px-6 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-gray-900 to-black' 
          : 'bg-gradient-to-b from-gray-100 to-white'
      }`}
      id="contacto"
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
            Contacto
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}>
            ¿Buscas un desarrollador Full Stack con experiencia en IA? ¡Hablemos sobre cómo puedo ayudarte a convertir tus ideas en proyectos exitosos!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl border ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800'
                : 'glass-card gradient-border soft-shadow'
            }`}
          >
            <h3 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Redes Sociales
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 transition-colors p-4 rounded-xl ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-white bg-gray-900/50 hover:bg-gray-900/80'
                      : 'text-gray-700 hover:text-gray-900 glass-effect hover:shadow-md'
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl border ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800'
                : 'glass-card gradient-border soft-shadow'
            }`}
          >
            <h3 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Envíame un Mensaje
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nombre"
                  className={`w-full border rounded-xl p-4 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-900/50 border-gray-800 text-white'
                      : 'bg-white/50 border-gray-200 text-gray-900 shadow-inner hover:border-gray-300 focus:shadow-md'
                  }`}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className={`w-full border rounded-xl p-4 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-900/50 border-gray-800 text-white'
                      : 'bg-white/50 border-gray-200 text-gray-900 shadow-inner hover:border-gray-300 focus:shadow-md'
                  }`}
                />
              </div>
              <div>
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className={`w-full border rounded-xl p-4 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-900/50 border-gray-800 text-white'
                      : 'bg-white/50 border-gray-200 text-gray-900 shadow-inner hover:border-gray-300 focus:shadow-md'
                  }`}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full text-white font-semibold py-4 px-8 rounded-xl hover:opacity-90 transition-all ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:translate-y-[-2px] hover:shadow-lg'
                }`}
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 