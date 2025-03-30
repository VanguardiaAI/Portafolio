import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';
import { useTheme } from '../lib/ThemeContext';
import { ProjectModal } from './Projects'; // Solo importar ProjectModal ya que es lo único que usamos

interface Project {
  originalTitle: string;
  image: string;
  link: string;
  difficulty: number;
  budget: number;
  isOnline: boolean;
  technologies: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
}

// Datos originales de los proyectos (ahora con más información)
const projectsData: Project[] = [
  {
    originalTitle: 'VanguardCRM',
    image: '/images/crm-project.jpg',
    link: 'https://vanguardcrm.com',
    difficulty: 4,
    budget: 3,
    isOnline: true,
    technologies: [
      { name: 'React', icon: <span className="text-blue-500">⚛️</span> },
      { name: 'Node.js', icon: <span className="text-green-500">🟢</span> },
      { name: 'MongoDB', icon: <span className="text-green-600">🍃</span> }
    ]
  },
  {
    originalTitle: 'CloudFlow',
    image: '/images/saas-project.jpg',
    link: 'https://cloudflow.app',
    difficulty: 3,
    budget: 4,
    isOnline: true,
    technologies: [
      { name: 'Vue.js', icon: <span className="text-green-500">🟢</span> },
      { name: 'Firebase', icon: <span className="text-yellow-500">🔥</span> },
      { name: 'Tailwind', icon: <span className="text-blue-400">🌊</span> }
    ]
  },
  {
    originalTitle: 'TechVision',
    image: '/images/webapp-project.jpg',
    link: 'https://techvision.dev',
    difficulty: 5,
    budget: 5,
    isOnline: false,
    technologies: [
      { name: 'Next.js', icon: <span>▲</span> },
      { name: 'GraphQL', icon: <span className="text-pink-500">◯</span> },
      { name: 'TypeScript', icon: <span className="text-blue-500">TS</span> }
    ]
  }
];

const ProjectCard = ({ project, index, onClick }: { 
  project: {
    title: string;
    description: string;
    type: string;
    image: string;
  }; 
  index: number;
  onClick: () => void;
}) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl p-6 shadow-xl transition-all hover:scale-105 cursor-pointer ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 to-black' 
          : 'bg-gradient-to-br from-white to-gray-100'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
      
      <h3 className="mb-2 text-2xl font-bold">
        <span className="gradient-text">{project.title}</span>
      </h3>
      
      <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-blue-500 to-pink-500 px-3 py-1 text-sm font-medium text-white">
        {project.type}
      </span>
      
      <p className={`mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
        {project.description}
      </p>
      
      <div className="mt-6 flex justify-end">
        <button
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            theme === 'dark'
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Ver detalles
        </button>
      </div>
    </motion.div>
  );
};

const LatestProjects = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language];
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  
  // Transformar los proyectos con traducciones
  const projects = projectsData.map(project => {
    const translated = t.latestProjects.projects[project.originalTitle];
    return {
      title: translated.title,
      description: translated.description,
      type: translated.type,
      image: project.image,
      // Información adicional para el modal
      originalData: {
        ...project,
        title: translated.title,
        description: translated.description,
        area: translated.type,
        icon: project.technologies[0].icon,
        images: [{ url: project.image, alt: translated.title }]
      }
    };
  });
  
  const openProjectModal = (project: any) => {
    setSelectedProject(project.originalData);
  };
  
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-12 text-center text-4xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          {t.latestProjects.title}
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
              onClick={() => openProjectModal(project)}
            />
          ))}
        </div>
        
        {selectedProject && (
          <ProjectModal
            isOpen={true}
            onClose={closeModal}
            project={selectedProject}
            theme={theme}
          />
        )}
      </div>
    </section>
  );
};

export default LatestProjects; 