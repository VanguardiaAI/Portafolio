"use client";

import { Box, Code, Cpu, Star, DollarSign, Globe, X, ExternalLink, ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import { cn } from "../lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../lib/ThemeContext";

// Estilos globales para ocultar scrollbar
import "./scroll-hide.css";

// Interfaz para las tecnologías
interface Technology {
  name: string;
  icon: string; // URL del logotipo
  color?: string; // Color asociado a la tecnología (opcional)
}

// Interfaz para el carrusel de imágenes
interface ProjectImage {
  url: string;
  alt?: string;
}

// Tipo para los datos del proyecto
interface ProjectData {
  icon: React.ReactNode;
  title: string;
  description: string;
  area: string;
  images: ProjectImage[]; // Array de imágenes del proyecto
  link: string;
  difficulty: number; // De 1 a 5
  budget: number; // De 1 a 5
  isOnline: boolean;
  technologies: Technology[]; // Lista de tecnologías usadas
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const { theme } = useTheme();
  
  // Datos de los proyectos con URLs de imágenes e información adicional
  const projectsData: ProjectData[] = [
    {
      icon: <Cpu className="h-4 w-4" />,
      title: "App de Recetas Mexicanas",
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
      title: "SaaS de Membresías VIP para Discord",
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
      title: "CRM para Clínicas Estéticas con IA",
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
          Ultímos Proyectos
        </h2>
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-6 xl:max-h-[34rem]">
          {projectsData.map((project) => (
            <GridItem
              key={project.title}
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
            project={selectedProject} 
            onClose={closeModal}
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
      <div className="relative w-full h-36 md:h-48 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-400">No hay imágenes disponibles</span>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full">
        {/* Carrusel principal */}
        <div className="relative h-36 md:h-48 w-full overflow-hidden">
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
              className="p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              disabled={images.length <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button 
              onClick={nextImage}
              className="p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              disabled={images.length <= 1}
            >
              <ChevronRight className="h-4 w-4" />
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
                    "w-1.5 h-1.5 rounded-full transition-all",
                    currentIndex === idx 
                      ? "bg-white w-3" 
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
            className="absolute bottom-2 right-2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
          >
            <Maximize className="h-4 w-4" />
          </button>
        </div>
        
        {/* Miniaturas de imágenes */}
        {images.length > 1 && (
          <div className="flex gap-1.5 mt-1.5 overflow-x-auto pb-1.5 hide-scrollbar">
            {images.map((image, idx) => (
              <motion.button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={cn(
                  "relative min-w-12 h-12 md:min-w-14 md:h-14 rounded-md overflow-hidden border-2 transition-all",
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
                
                {/* Botón de cerrar */}
                <button 
                  onClick={toggleFullscreen}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <Minimize className="h-5 w-5" />
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
interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
  theme: 'dark' | 'light';
}

const ProjectModal = ({ project, onClose, theme }: ProjectModalProps) => {
  // Renderizar estrellas de dificultad
  const renderStars = (count: number, total: number = 5) => {
    return Array(total).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={cn(
          "h-4 w-4", 
          i < count ? "text-yellow-400 fill-yellow-400" : theme === 'dark' ? "text-gray-600" : "text-gray-400"
        )} 
      />
    ));
  };

  // Renderizar indicadores de presupuesto
  const renderBudget = (count: number, total: number = 5) => {
    return Array(total).fill(0).map((_, i) => (
      <DollarSign 
        key={i} 
        className={cn(
          "h-4 w-4", 
          i < count ? "text-green-500" : theme === 'dark' ? "text-gray-600" : "text-gray-400"
        )} 
      />
    ));
  };

  return (
    <motion.div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-2 backdrop-blur-md overflow-y-auto ${
        theme === 'dark' 
          ? 'bg-black/80' 
          : 'bg-white/60'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className={`relative max-w-3xl w-full rounded-xl overflow-hidden border shadow-2xl my-4 max-h-[95vh] flex flex-col ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800'
            : 'glass-card gradient-border soft-shadow'
        }`}
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Carrusel de imágenes */}
        <div className="relative">
          <ImageCarousel images={project.images} title={project.title} />
          
          {/* Badge de estado online/offline */}
          <div className="absolute top-2 right-2 z-20">
            <span className={cn(
              "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
              project.isOnline 
                ? "bg-green-500/20 text-green-300 border border-green-500/30" 
                : "bg-red-500/20 text-red-300 border border-red-500/30"
            )}>
              <Globe className="h-3 w-3" />
              {project.isOnline ? "Online" : "Offline"}
            </span>
          </div>
          
          {/* Botón de cerrar */}
          <button 
            onClick={onClose}
            className="absolute top-2 left-2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-20"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        {/* Contenedor scrollable para el contenido */}
        <div className="overflow-y-auto flex-1">
          {/* Contenido del modal */}
          <div className="p-4">
            {/* Encabezado con icono y título */}
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                {project.icon}
              </div>
              <h2 className={`text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h2>
            </div>
            
            {/* Métricas (dificultad y presupuesto) */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className={`rounded-lg p-2.5 border ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700/50'
                  : 'glass-effect'
              }`}>
                <h3 className={`text-xs mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Dificultad
                </h3>
                <div className="flex items-center gap-1">
                  {renderStars(project.difficulty)}
                </div>
              </div>
              <div className={`rounded-lg p-2.5 border ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700/50'
                  : 'glass-effect'
              }`}>
                <h3 className={`text-xs mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Presupuesto
                </h3>
                <div className="flex items-center gap-1">
                  {renderBudget(project.budget)}
                </div>
              </div>
            </div>
            
            {/* Descripción */}
            <div className="mb-4">
              <h3 className={`text-sm font-medium mb-1.5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                Descripción
              </h3>
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.description}
              </p>
            </div>
            
            {/* Tecnologías usadas */}
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h3 className={`text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                Tecnologías
              </h3>
              <div className={`rounded-lg p-3 border ${
                theme === 'dark'
                  ? 'bg-gray-800/30 border-gray-700/30'
                  : 'glass-effect'
              }`}>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {project.technologies.map((tech, index) => (
                    <TechIcon key={tech.name} tech={tech} index={index} theme={theme} />
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Botón de acceso */}
            <div className="flex justify-center mt-4">
              <motion.a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white text-sm font-medium ${
                  theme === 'dark'
                    ? 'shadow-lg'
                    : 'shadow-lg hover:shadow-blue-500/25 hover:translate-y-[-2px]'
                }`}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: theme === 'dark' 
                    ? "0 10px 25px -5px rgba(59, 130, 246, 0.5)" 
                    : "0 12px 28px -5px rgba(59, 130, 246, 0.6)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="h-4 w-4" />
                Visitar proyecto
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}; 