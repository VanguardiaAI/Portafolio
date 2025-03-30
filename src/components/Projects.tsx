"use client";

import { Box, Code, Cpu, Star, DollarSign, Globe, X, ExternalLink, ChevronLeft, ChevronRight, Maximize } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import { cn } from "../lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../lib/ThemeContext";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";

// Estilos globales para ocultar scrollbar
import "./scroll-hide.css";

// Interfaz para las tecnologías
export interface Technology {
  name: string;
  icon: string; // URL del logotipo
  color?: string; // Color asociado a la tecnología (opcional)
}

// Interfaz para el carrusel de imágenes
export interface ProjectImage {
  url: string;
  alt?: string;
}

// Tipo para los datos del proyecto
export interface ProjectData {
  originalTitle: string;
  title: string;
  description: string;
  area: string;
  icon: React.ReactNode;
  images: ProjectImage[];
  link: string;
  difficulty: number;
  budget: number;
  isOnline: boolean;
  technologies: Technology[];
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const { theme } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];
  
  // Datos originales de los proyectos con keys para las traducciones
  const projectsDataOriginal = [
    {
      icon: <Cpu className="h-4 w-4" />,
      originalTitle: "App de Recetas Mexicanas",
      description: "Aplicación web inteligente que sugiere alternativas de ingredientes según la ubicación del usuario. Desarrollada con HTML, CSS, JavaScript, Flask y Supabase.",
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
      images: [
        { 
          url: "https://i.imgur.com/4GlQm3r.png",
          alt: "Interfaz de la aplicación de recetas" 
        },
        { 
          url: "https://i.imgur.com/igjnC0g.png",
          alt: "Interfaz de la aplicación de recetas" 
        },
        { 
          url: "https://i.imgur.com/I2ZkjIe.png",
          alt: "Interfaz de la aplicación de recetas" 
        }
      ],
      link: "https://recetas.clinicas.tech",
      difficulty: 3,
      budget: 2,
      isOnline: true,
      technologies: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "#E34F26"
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "#1572B6"
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#F7DF1E"
        },
        {
          name: "Flask",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
          color: "#000000"
        },
        {
          name: "Supabase",
          icon: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
          color: "#3ECF8E"
        }
      ]
    },
    {
      icon: <Code className="h-4 w-4" />,
      originalTitle: "SaaS de Membresías VIP para Discord",
      description: "Saas desarrollada con React + TypeScript, Flask y MongoDB para la gestión de membresías de pago en servidores de Discord.",
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
      images: [
        { 
          url: "https://i.imgur.com/YI2Xwow.png",
          alt: "Interfaz principal del SaaS" 
        },
        { 
          url: "https://i.imgur.com/ezS5YQO.png",
          alt: "Panel de administración de membresías" 
        },
        { 
          url: "https://i.imgur.com/0r5P7mE.png",
          alt: "Integración con Discord" 
        },
        {
          url: "https://i.imgur.com/3jABVUc.png",
          alt: "Marketplace de membresías" 
        }
      ],
      link: "https://proleaker.pro",
      difficulty: 4,
      budget: 4,
      isOnline: true,
      technologies: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          color: "#61DAFB"
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          color: "#3178C6"
        },
        {
          name: "Flask",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
          color: "#000000"
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          color: "#47A248"
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
          color: "#06B6D4"
        }
      ]
    },
    {
      icon: <Box className="h-4 w-4" />,
      originalTitle: "CRM para Clínicas Estéticas con IA",
      description: "Sistema integral desarrollado con JavaScript, HTML, CSS, Python (Flask) y MongoDB. Optimiza la gestión de pacientes y procedimientos estéticos utilizando IA.",
      area: "md:[grid-area:2/1/3/13] xl:[grid-area:1/5/3/13]",
      images: [
        { 
          url: "https://i.imgur.com/VkfuCwi.png",
          alt: "Landing page del CRM" 
        },
        { 
          url: "https://i.imgur.com/A2Y29JP.png",
          alt: "Módulo de gestión de pacientes y procedimientos" 
        },
        { 
          url: "https://i.imgur.com/l0sUFVE.png",
          alt: "Dashboard del CRM" 
        },
        { 
          url: "https://i.imgur.com/plxrEc0.png",
          alt: "Sistema de gestión de ingresos y facturación" 
        }
      ],
      link: "https://clinicas.tech",
      difficulty: 5,
      budget: 5,
      isOnline: false,
      technologies: [
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#F7DF1E"
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "#E34F26"
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "#1572B6"
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          color: "#3776AB"
        },
        {
          name: "Flask",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
          color: "#000000"
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          color: "#47A248"
        },
        {
          name: "TensorFlow",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
          color: "#FF6F00"
        }
      ]
    }
  ];

  // Aplicar traducciones a los proyectos
  const projectsData = projectsDataOriginal.map(project => {
    const translation = t.projectsSection.projects[project.originalTitle];
    return {
      ...project,
      title: translation.title,
      description: translation.description
    };
  });

  const openModal = (project: ProjectData) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Evitar scroll en el fondo
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Restaurar scroll
  };

  return (
    <section 
      className={`relative py-20 px-4 md:px-6 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-black via-black to-gray-900'
          : 'bg-gradient-to-b from-white via-white to-gray-100'
      }`} 
      id="proyectos"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {t.projectsSection.title}
        </h2>
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-6 xl:max-h-[34rem]">
          {projectsData.map((project) => (
            <GridItem
              key={project.originalTitle}
              project={project}
              onOpenModal={() => openModal(project)}
              theme={theme}
            />
          ))}
        </ul>
      </div>

      {/* Modal de Proyecto */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            isOpen={true}
            onClose={closeModal}
            project={selectedProject}
            theme={theme}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

interface GridItemProps {
  project: ProjectData;
  onOpenModal: () => void;
  theme: 'dark' | 'light';
}

const GridItem = ({ project, onOpenModal, theme }: GridItemProps) => {
  const { area, icon, title, images } = project;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    // Usar un color de fondo como fallback
    console.log(`Error al cargar la imagen para ${title}`);
  };

  return (
    <li className={cn("min-h-[14rem] list-none", area)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`relative h-full rounded-[1.25rem] border-[0.75px] p-2 md:rounded-[1.5rem] md:p-3 cursor-pointer transition-all duration-300 ${theme === 'dark' ? 'border-border hover:shadow-xl' : 'hover-card gradient-border'}`}
        onClick={onOpenModal}
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className={`relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] p-6 md:p-6 ${
          theme === 'dark' 
            ? 'bg-background border-border shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]' 
            : 'glass-card soft-shadow'
        }`}>
          {/* Imagen de fondo con efecto de opacidad */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div 
              className={cn(
                "absolute inset-0 z-10 transition-opacity duration-300",
                isHovered ? "opacity-0" : theme === 'dark' 
                  ? "bg-gradient-to-t from-black via-black/80 to-black/60 opacity-100"
                  : "bg-gradient-to-t from-white/90 via-white/60 to-white/40 opacity-95 backdrop-blur-[2px]"
              )}
            ></div>
            {!imageError && images.length > 0 && (
              <img 
                src={images[0].url} 
                alt={images[0].alt || title}
                className={cn(
                  "w-full h-full object-cover transition-all duration-500 ease-in-out",
                  imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110",
                  isHovered ? "scale-110 filter-none" : "scale-100 filter brightness-90"
                )}
                loading="lazy"
                onLoad={handleImageLoad}
                onError={handleImageError}
                width="1080"
                height="720"
              />
            )}
          </div>

          <div className="relative flex flex-1 flex-col justify-between gap-3 z-20">
            {/* Contenido del proyecto - Solo el título y el icono */}
            <div 
              className={cn(
                "w-fit rounded-lg border-[0.75px] backdrop-blur-sm p-2 transition-all duration-300",
                theme === 'dark' ? 'bg-black/70 border-border' : 'glass-effect',
                isHovered ? "opacity-0" : "opacity-100"
              )}
            >
              {icon}
            </div>
            <div 
              className={cn(
                "space-y-4 transition-all duration-300",
                isHovered ? "opacity-0" : "opacity-100"
              )}
            >
              <h3 className={`pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {title}
              </h3>
            </div>
            
            {/* Botón centrado cuando está en hover */}
            <div 
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-all duration-300",
                isHovered ? "opacity-100 transform-none" : "opacity-0 pointer-events-none translate-y-4"
              )}
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenModal();
                }}
                className={`px-6 py-3 rounded-lg text-white text-base font-medium transition-all ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 backdrop-blur-sm border border-white/10'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:shadow-blue-500/25 hover:scale-110 neo-button'
                }`}
              >
                Ver detalles
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

// Componente para mostrar un ícono de tecnología con animación
const TechIcon = ({ tech, index, theme }: { tech: Technology, index: number, theme: 'dark' | 'light' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: [0, 5, -5, 0],
        transition: { duration: 0.5 }
      }}
      className="flex flex-col items-center"
    >
      <div 
        className={`w-10 h-10 md:w-12 md:h-12 rounded-lg p-2 flex items-center justify-center ${
          theme === 'dark'
            ? 'bg-gray-800/70 border-gray-700/50'
            : 'bg-gray-200/70 border-gray-300/50'
        } border shadow-lg`}
        style={{ boxShadow: tech.color ? `0 4px 12px ${tech.color}30` : undefined }}
      >
        <img 
          src={tech.icon} 
          alt={tech.name} 
          className="w-full h-full object-contain" 
        />
      </div>
      <span className={`mt-1 text-xs text-center truncate w-full ${
        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
      }`}>
        {tech.name}
      </span>
    </motion.div>
  );
};

// Componente del carrusel de imágenes
interface ImageCarouselProps {
  images: ProjectImage[];
  title: string;
}

const ImageCarousel = ({ images, title }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFullscreen(!isFullscreen);
  };
  
  // Si no hay imágenes, mostrar un placeholder
  if (images.length === 0) {
    return (
      <div className="relative w-full h-36 md:h-72 lg:h-96 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-400">No hay imágenes disponibles</span>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full h-full">
        {/* Carrusel principal */}
        <div className="relative h-36 md:h-72 lg:h-96 w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex].url}
              alt={images[currentIndex].alt || `${title} - Imagen ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          
          {/* Botones de navegación del carrusel */}
          <div className="absolute inset-0 flex items-center justify-between p-2 z-10">
            <button 
              onClick={prevImage}
              className="p-1.5 md:p-2.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              disabled={images.length <= 1}
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button 
              onClick={nextImage}
              className="p-1.5 md:p-2.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              disabled={images.length <= 1}
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>
          
          {/* Indicadores de imágenes */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  className={cn(
                    "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all",
                    currentIndex === idx 
                      ? "bg-white w-3 md:w-4" 
                      : "bg-white/40 hover:bg-white/60"
                  )}
                  aria-label={`Ver imagen ${idx + 1}`}
                />
              ))}
            </div>
          )}
          
          {/* Botón de expandir */}
          <button 
            onClick={toggleFullscreen}
            className="absolute top-2 right-2 p-1.5 md:p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
          >
            <Maximize className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>
        
        {/* Miniaturas de imágenes - versión móvil */}
        {images.length > 1 && (
          <div className="flex gap-1.5 mt-1.5 overflow-x-auto pb-1.5 hide-scrollbar md:hidden">
            {images.map((image, idx) => (
              <motion.button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={cn(
                  "relative min-w-12 h-12 rounded-md overflow-hidden border-2 transition-all",
                  currentIndex === idx 
                    ? "border-blue-500 opacity-100" 
                    : "border-transparent opacity-70 hover:opacity-100"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src={image.url} 
                  alt={image.alt || `Miniatura ${idx + 1}`} 
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        )}
        
        {/* Miniaturas de imágenes - versión desktop */}
        {images.length > 1 && (
          <div className="hidden md:flex justify-center gap-2 mt-2">
            {images.map((image, idx) => (
              <motion.button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={cn(
                  "relative w-16 h-16 lg:w-20 lg:h-20 rounded-md overflow-hidden border-2 transition-all",
                  currentIndex === idx 
                    ? "border-blue-500 opacity-100" 
                    : "border-transparent opacity-70 hover:opacity-100"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src={image.url} 
                  alt={image.alt || `Miniatura ${idx + 1}`} 
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        )}
      </div>
      
      {/* Vista a pantalla completa */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleFullscreen}
          >
            <motion.div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botones de navegación */}
              <div className="absolute inset-0 flex items-center justify-between z-10">
                <button 
                  onClick={prevImage}
                  className="p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors ml-4"
                  disabled={images.length <= 1}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={nextImage}
                  className="p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors mr-4"
                  disabled={images.length <= 1}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
              
              {/* Imagen a pantalla completa */}
              <div className="flex-1 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex].url}
                    alt={images[currentIndex].alt || `${title} - Imagen ${currentIndex + 1}`}
                    className="max-w-full max-h-[80vh] object-contain"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>
              
              {/* Controles inferiores */}
              <div className="flex justify-between items-center mt-4 px-4">
                {/* Indicadores de imágenes */}
                <div className="flex items-center gap-1.5">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        currentIndex === idx 
                          ? "bg-white w-4" 
                          : "bg-white/40 hover:bg-white/60"
                      )}
                      aria-label={`Ver imagen ${idx + 1}`}
                    />
                  ))}
                </div>
                
                <div className="text-white text-sm">
                  {currentIndex + 1} / {images.length}
                </div>
                
                {/* Botón de cerrar */}
                <button 
                  onClick={toggleFullscreen}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Componente del Modal de Proyecto
export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData;
  theme: 'dark' | 'light';
}

export const ProjectModal = ({ 
  isOpen, 
  onClose, 
  project, 
  theme 
}: ProjectModalProps) => {
  const { language } = useLanguage();
  const t = translations[language];

  // Funciones para renderizar estrellas y presupuesto
  const renderStars = (difficulty: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${
          i < difficulty
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-400'
        }`}
      />
    ));
  };

  const renderBudget = (budget: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <DollarSign 
        key={i} 
        className={`h-4 w-4 ${
          i < budget
            ? 'text-green-500 fill-green-500'
            : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <AnimatePresence>
      {isOpen && (
    <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div 
            className={`relative w-full max-w-5xl rounded-xl shadow-2xl overflow-hidden ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
          >
            {/* Header con título y botón de cerrar */}
            <div className={`flex items-center justify-between p-4 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <h2 className={`text-lg font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {t.projectsSection.detailsTitle}
              </h2>
          <button 
            onClick={onClose}
                className={`p-1.5 rounded-full ${
                  theme === 'dark'
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                } transition-colors`}
              >
                <X className="h-5 w-5" />
          </button>
        </div>
        
            {/* Contenido principal */}
            <div className="flex flex-col md:flex-row max-h-[calc(90vh-6rem)]">
              {/* Parte izquierda: Imágenes y detalles en desktop */}
              <div className="w-full md:w-2/3 flex flex-col">
                {/* Área de imagen - ocupa más espacio en pantallas grandes */}
                <div className="w-full h-full flex-1">
                  <ImageCarousel
                    images={project.images}
                    title={project.title}
                  />
            </div>
            
                {/* Contenido adicional para pantallas grandes */}
                <div className={`hidden md:block p-6 ${
                theme === 'dark'
                    ? 'bg-gradient-to-t from-gray-900/90 to-gray-800/50' 
                    : 'bg-gradient-to-t from-white/90 to-gray-100/50'
                }`}>
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg mr-3 ${
                theme === 'dark'
                        ? 'bg-blue-500/20' 
                        : 'bg-blue-500/10'
                    }`}>
                      {project.icon}
                </div>
                    <h2 className={`text-2xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h2>
            </div>
            
                  <div className="mb-5">
                    <p className={`text-base ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                {project.description}
              </p>
            </div>
            
                  <a
                    href={project.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg'
                    } transition-all`}
                  >
                    <span>{t.projectsSection.visitButton}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            
              {/* Detalles del proyecto */}
              <div className={`w-full md:w-1/3 h-[calc(60vh-4rem)] md:h-auto ${
                theme === 'dark' ? 'bg-gray-900/80' : 'bg-gray-50/80'
              } overflow-y-auto border-t md:border-t-0 md:border-l ${
                theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
              }`}>
                <div className="p-5 md:p-6 h-full flex flex-col">
                  {/* Solo mostrar esta sección en móvil, en desktop ya se muestra arriba */}
                  <div className="mb-5 md:hidden">
                    <div className="flex items-center mb-3">
                      <div className={`p-2 rounded-lg mr-3 ${
                theme === 'dark'
                          ? 'bg-blue-500/20' 
                          : 'bg-blue-500/10'
              }`}>
                        {project.icon}
                </div>
                      <h3 className={`text-xl font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {project.title}
                      </h3>
              </div>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>
                  
                    <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transition-all"
                    >
                      <span>{t.projectsSection.visitButton}</span>
                <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="mb-6">
                    <h4 className={`text-lg font-semibold mb-3 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {t.projectsSection.techTitle}
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                    {project.technologies.map((tech, index) => (
                        <TechIcon 
                          key={tech.name} 
                          tech={tech} 
                          index={index} 
                          theme={theme} 
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h4 className={`text-lg font-semibold mb-3 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {t.projectsSection.infoTitle}
                    </h4>
                    <div className={`text-sm space-y-4 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <div>
                        <p className="mb-1 font-medium">{t.projectsSection.difficultyLabel}</p>
                        <div className="flex space-x-1">
                          {renderStars(project.difficulty)}
                        </div>
                      </div>
                      <div>
                        <p className="mb-1 font-medium">{t.projectsSection.budgetLabel}</p>
                        <div className="flex space-x-1">
                          {renderBudget(project.budget)}
                        </div>
                      </div>
                      <div>
                        <p className="mb-1 font-medium">{t.projectsSection.statusLabel}</p>
                        <div className="flex items-center space-x-2">
                          <Globe className={`h-5 w-5 ${
                            project.isOnline 
                              ? 'text-green-500' 
                              : 'text-gray-400'
                          }`} />
                          <span className={
                            project.isOnline 
                              ? 'text-green-500 font-medium' 
                              : 'text-gray-400'
                          }>
                            {project.isOnline 
                              ? t.projectsSection.onlineStatus 
                              : t.projectsSection.offlineStatus}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
      )}
    </AnimatePresence>
  );
}; 