import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  type: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'VanguardCRM',
    description: 'Sistema CRM inteligente con IA para la gestión avanzada de relaciones con clientes',
    type: 'CRM',
    image: '/images/crm-project.jpg'
  },
  {
    title: 'CloudFlow',
    description: 'Plataforma SAAS para automatización de flujos de trabajo empresariales',
    type: 'SAAS',
    image: '/images/saas-project.jpg'
  },
  {
    title: 'TechVision',
    description: 'Aplicación web para análisis predictivo de datos en tiempo real',
    type: 'Web App',
    image: '/images/webapp-project.jpg'
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black p-6 shadow-xl transition-all hover:scale-105"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
      
      <h3 className="mb-2 text-2xl font-bold">
        <span className="gradient-text">{project.title}</span>
      </h3>
      
      <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-blue-500 to-pink-500 px-3 py-1 text-sm font-medium text-white">
        {project.type}
      </span>
      
      <p className="mt-4 text-gray-300">
        {project.description}
      </p>
    </motion.div>
  );
};

const LatestProjects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center text-4xl font-bold"
        >
          Últimos Proyectos
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProjects; 