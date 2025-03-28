"use client"; 

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../lib/ThemeContext";

function useScrollDirection() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY.current || currentScrollY <= 0);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrollingUp, isHovering, setIsHovering };
}

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();

  const { isScrollingUp, isHovering, setIsHovering } = useScrollDirection();
  const shouldShow = isScrollingUp || isHovering;

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80; // Altura aproximada de la barra de navegación
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  // Detectar qué sección está visible en la pantalla
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "proyectos", "sobre-mi", "experiencia", "contacto"];
      const currentPosition = window.scrollY + 200; // Ajuste para detectar mejor la sección activa
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = element.offsetTop;
          const height = element.offsetHeight;
          
          if (currentPosition >= offset && currentPosition < offset + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: shouldShow ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="fixed top-0 left-0 w-full z-50 flex justify-center py-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className={`${theme === 'dark' ? 'bg-black/20' : 'bg-white/30'} backdrop-blur-xl w-full h-full absolute inset-0 ${theme === 'light' ? 'nav-glass-effect' : ''}`}
      />
      <div className="flex items-center relative">
        <ul
          className={`relative mx-auto flex w-fit rounded-full ${
            theme === 'dark' 
              ? 'border border-white/20 bg-black/40' 
              : 'nav-pill-light shadow-md'
          } p-1`}
          onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
        >
          <Tab 
            setPosition={setPosition} 
            onClick={() => scrollToSection("hero")} 
            isActive={activeSection === "hero"}
            theme={theme}
          >
            Inicio
          </Tab>
          <Tab 
            setPosition={setPosition} 
            onClick={() => scrollToSection("proyectos")} 
            isActive={activeSection === "proyectos"}
            theme={theme}
          >
            Proyectos
          </Tab>
          <Tab 
            setPosition={setPosition} 
            onClick={() => scrollToSection("sobre-mi")} 
            isActive={activeSection === "sobre-mi"}
            theme={theme}
          >
            Sobre Mí
          </Tab>
          <Tab 
            setPosition={setPosition} 
            onClick={() => scrollToSection("experiencia")} 
            isActive={activeSection === "experiencia"}
            theme={theme}
          >
            Experiencia
          </Tab>
          <Tab 
            setPosition={setPosition} 
            onClick={() => scrollToSection("contacto")} 
            isActive={activeSection === "contacto"}
            theme={theme}
          >
            Contacto
          </Tab>

          <Cursor position={position} theme={theme} />
        </ul>
        
        {/* Botón de cambio de tema */}
        <button
          onClick={toggleTheme}
          className={`ml-4 rounded-full p-2 flex items-center justify-center transition-all ${
            theme === 'dark' 
              ? 'bg-white/10 hover:bg-white/20 text-white' 
              : 'theme-toggle-button'
          }`}
          aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
          {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          )}
        </button>
      </div>
    </motion.nav>
  );
}

const Tab = ({
  children,
  setPosition,
  onClick,
  isActive,
  theme,
}: {
  children: React.ReactNode;
  setPosition: any;
  onClick?: () => void;
  isActive?: boolean;
  theme: 'dark' | 'light';
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase md:px-5 md:py-3 md:text-base transition-colors ${
        isActive 
          ? theme === 'dark' 
              ? "text-blue-400 font-semibold" 
              : "text-blue-600 font-semibold"
          : theme === 'dark'
            ? "text-white mix-blend-difference hover:text-blue-400"
            : "text-gray-800 hover:text-blue-600"
      }`}
    >
      {children}
    </li>
  );
};

const Cursor = ({ position, theme }: { position: any, theme: 'dark' | 'light' }) => {
  return (
    <AnimatePresence>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: position.opacity,
          width: position.width,
          left: position.left,
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.2,
        }}
        style={{
          position: "absolute",
        }}
      >
        <span 
          className={`absolute inset-0 rounded-full ${
            theme === 'dark' 
              ? 'bg-white/10' 
              : 'nav-item-highlight'
          }`}
        />
      </motion.span>
    </AnimatePresence>
  );
};

export default NavHeader; 