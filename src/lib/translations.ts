export type Translation = {
  hero: {
    title: string;
    subtitle: string;
    profileAlt: string;
  };
  experience: {
    title: string;
    subtitle: string;
    jobs: {
      [key: string]: {
        title: string;
        company: string;
        period: string;
        description: string;
      }
    };
  };
  latestProjects: {
    title: string;
    projects: {
      [key: string]: {
        title: string;
        description: string;
        type: string;
      }
    };
  };
  projectsSection: {
    title: string;
    detailsTitle: string;
    techTitle: string;
    infoTitle: string;
    visitButton: string;
    difficultyLabel: string;
    budgetLabel: string;
    statusLabel: string;
    onlineStatus: string;
    offlineStatus: string;
    projects: {
      [key: string]: {
        title: string;
        description: string;
      }
    };
  };
  aboutMe: {
    title: string;
    description: string;
    skills: {
      [key: string]: {
        title: string;
        description: string;
      }
    };
  };
  contact: {
    title: string;
    subtitle: string;
    socialTitle: string;
    messageTitle: string;
    formPlaceholders: {
      name: string;
      email: string;
      message: string;
    };
    sendButton: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
    connectionError: string;
  };
  footer: {
    specialistText: string;
    rightsText: string;
  };
  projects: {
    [key: string]: {
      title: string;
    };
  };
};

export const translations: Record<'es' | 'en', Translation> = {
  es: {
    hero: {
      title: "Desarrollador Full Stack & Especialista en IA",
      subtitle: "6 años de experiencia creando soluciones digitales innovadoras. Especializado en Python, React y desarrollo de aplicaciones potenciadas con IA para crear productos de impacto real.",
      profileAlt: "Foto de perfil"
    },
    experience: {
      title: "Experiencia",
      subtitle: "Mi trayectoria profesional en el desarrollo de software y creación de soluciones digitales innovadoras.",
      jobs: {
        "Desarrollador Freelance": {
          title: "Desarrollador Freelance",
          company: "Proyectos con IA",
          period: "2023 - Presente",
          description: "Desarrollo de 3 proyectos clave: CRM para clínicas estéticas con IA, SaaS para gestión de membresías VIP en Discord y aplicación de recetas mexicanas con sugerencias basadas en ubicación."
        },
        "Desarrollador de Bots": {
          title: "Desarrollador de Bots",
          company: "Proyecto Personal",
          period: "2022 - 2024",
          description: "Desarrollo y mejora continua de un bot de trading algorítmico para Telegram. Implementación de sistema de suscripción y actualizaciones periódicas para mejorar su rendimiento."
        },
        "Fundador y Desarrollador": {
          title: "Fundador y Desarrollador",
          company: "La Guía Digital Automotriz",
          period: "2019 - 2022",
          description: "Creación y desarrollo de una aplicación móvil (www.laguiadigital.mx) para la guía de precios de vehículos usados, enfocada en revendedores. Desarrollada con React Native, HTML, CSS y JavaScript."
        }
      }
    },
    projectsSection: {
      title: "Últimos Proyectos",
      detailsTitle: "Detalles del Proyecto",
      techTitle: "Tecnologías",
      infoTitle: "Información",
      visitButton: "Visitar Proyecto",
      difficultyLabel: "Dificultad:",
      budgetLabel: "Presupuesto:",
      statusLabel: "Estado:",
      onlineStatus: "En línea",
      offlineStatus: "Offline",
      projects: {
        "App de Recetas Mexicanas": {
          title: "App de Recetas Mexicanas",
          description: "Aplicación web inteligente que sugiere alternativas de ingredientes según la ubicación del usuario. Desarrollada con HTML, CSS, JavaScript, Flask y Supabase."
        },
        "SaaS de Membresías VIP para Discord": {
          title: "SaaS de Membresías VIP para Discord",
          description: "Saas desarrollada con React + TypeScript, Flask y MongoDB para la gestión de membresías de pago en servidores de Discord."
        },
        "CRM para Clínicas Estéticas con IA": {
          title: "CRM para Clínicas Estéticas con IA",
          description: "Sistema integral desarrollado con JavaScript, HTML, CSS, Python (Flask) y MongoDB. Optimiza la gestión de pacientes y procedimientos estéticos utilizando IA."
        }
      }
    },
    aboutMe: {
      title: "Sobre Mí",
      description: "Desarrollador Full Stack con 6 años de experiencia especializado en Python y React. Creador de sistemas innovadores desde La Guía Digital Automotriz hasta soluciones potenciadas por IA. Apasionado por crear aplicaciones que resuelvan problemas reales.",
      skills: {
        "Desarrollo Frontend": {
          title: "Desarrollo Frontend",
          description: "React, TypeScript, HTML, CSS, JavaScript"
        },
        "Inteligencia Artificial": {
          title: "Inteligencia Artificial",
          description: "LLMs, Sistemas Multiagente, Automatización con IA"
        },
        "Desarrollo Backend": {
          title: "Desarrollo Backend",
          description: "Python, Flask, MongoDB, Supabase"
        },
        "Desarrollo de Bots": {
          title: "Desarrollo de Bots",
          description: "Telegram, Discord, WhatsApp, Automatizaciones"
        }
      }
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Buscas un desarrollador Full Stack con experiencia en IA? ¡Hablemos sobre cómo puedo ayudarte a convertir tus ideas en proyectos exitosos!",
      socialTitle: "Redes Sociales",
      messageTitle: "Envíame un Mensaje",
      formPlaceholders: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje"
      },
      sendButton: "Enviar Mensaje",
      sending: "Enviando...",
      successMessage: "¡Mensaje enviado correctamente!",
      errorMessage: "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
      connectionError: "Error de conexión. Por favor, inténtalo de nuevo más tarde."
    },
    latestProjects: {
      title: "Últimos Proyectos",
      projects: {
        "VanguardCRM": {
          title: "VanguardCRM",
          description: "Sistema CRM inteligente con IA para la gestión avanzada de relaciones con clientes",
          type: "CRM"
        },
        "CloudFlow": {
          title: "CloudFlow",
          description: "Plataforma SAAS para automatización de flujos de trabajo empresariales",
          type: "SAAS"
        },
        "TechVision": {
          title: "TechVision",
          description: "Aplicación web para análisis predictivo de datos en tiempo real",
          type: "Web App"
        }
      }
    },
    footer: {
      specialistText: "Especialista en desarrollo Full Stack y soluciones con IA",
      rightsText: "© {year} Portfolio Personal. Todos los derechos reservados."
    },
    projects: {
      "Interfaces de usuario avanzadas": {
        title: "Interfaces de usuario avanzadas"
      },
      "CRM para Clínicas Estéticas con IA": {
        title: "CRM para Clínicas Estéticas con IA"
      },
      "Marketplace de productos": {
        title: "Marketplace de productos"
      },
      "CRM para Clínicas Estéticas": {
        title: "CRM para Clínicas Estéticas"
      },
      "Sistemas avanzados de gestión de citas y clientes": {
        title: "Sistemas avanzados de gestión de citas y clientes"
      },
      "Landing pages que convierten": {
        title: "Landing pages que convierten"
      },
      "La Guía Digital Automotriz": {
        title: "La Guía Digital Automotriz"
      },
      "Sistema de gestión de citas con IA": {
        title: "Sistema de gestión de citas con IA"
      }
    }
  },
  en: {
    hero: {
      title: "Full Stack Developer & AI Specialist",
      subtitle: "6 years of experience creating innovative digital solutions. Specialized in Python, React and AI-powered application development to create products with real impact.",
      profileAlt: "Profile photo"
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey in software development and creating innovative digital solutions.",
      jobs: {
        "Desarrollador Freelance": {
          title: "Freelance Developer",
          company: "AI Projects",
          period: "2023 - Present",
          description: "Development of 3 key projects: AI-powered CRM for aesthetic clinics, SaaS for VIP membership management in Discord, and a Mexican recipe application with location-based suggestions."
        },
        "Desarrollador de Bots": {
          title: "Bot Developer",
          company: "Personal Project",
          period: "2022 - 2024",
          description: "Development and continuous improvement of an algorithmic trading bot for Telegram. Implementation of subscription system and periodic updates to improve its performance."
        },
        "Fundador y Desarrollador": {
          title: "Founder and Developer",
          company: "The Automotive Digital Guide",
          period: "2019 - 2022",
          description: "Creation and development of a mobile application (www.laguiadigital.mx) for used vehicle pricing guide, focused on resellers. Developed with React Native, HTML, CSS and JavaScript."
        }
      }
    },
    projectsSection: {
      title: "Latest Projects",
      detailsTitle: "Project Details",
      techTitle: "Technologies",
      infoTitle: "Information",
      visitButton: "Visit Project",
      difficultyLabel: "Difficulty:",
      budgetLabel: "Budget:",
      statusLabel: "Status:",
      onlineStatus: "Online",
      offlineStatus: "Offline",
      projects: {
        "App de Recetas Mexicanas": {
          title: "Mexican Recipes App",
          description: "Intelligent web application that suggests ingredient alternatives based on the user's location. Developed with HTML, CSS, JavaScript, Flask and Supabase."
        },
        "SaaS de Membresías VIP para Discord": {
          title: "Discord VIP Membership SaaS",
          description: "SaaS developed with React + TypeScript, Flask and MongoDB for managing paid memberships in Discord servers."
        },
        "CRM para Clínicas Estéticas con IA": {
          title: "AI-powered CRM for Aesthetic Clinics",
          description: "Comprehensive system developed with JavaScript, HTML, CSS, Python (Flask) and MongoDB. Optimizes patient management and aesthetic procedures using AI."
        }
      }
    },
    aboutMe: {
      title: "About Me",
      description: "Full Stack developer with 6 years of experience specializing in Python and React. Creator of innovative systems from The Automotive Digital Guide to AI-powered solutions. Passionate about creating applications that solve real problems.",
      skills: {
        "Desarrollo Frontend": {
          title: "Frontend Development",
          description: "React, TypeScript, HTML, CSS, JavaScript"
        },
        "Inteligencia Artificial": {
          title: "Artificial Intelligence",
          description: "LLMs, Multi-agent Systems, AI Automation"
        },
        "Desarrollo Backend": {
          title: "Backend Development",
          description: "Python, Flask, MongoDB, Supabase"
        },
        "Desarrollo de Bots": {
          title: "Bot Development",
          description: "Telegram, Discord, WhatsApp, Automations"
        }
      }
    },
    contact: {
      title: "Contact",
      subtitle: "Looking for a Full Stack developer with AI experience? Let's talk about how I can help you turn your ideas into successful projects!",
      socialTitle: "Social Networks",
      messageTitle: "Send Me a Message",
      formPlaceholders: {
        name: "Name",
        email: "Email",
        message: "Message"
      },
      sendButton: "Send Message",
      sending: "Sending...",
      successMessage: "Message sent successfully!",
      errorMessage: "Error sending message. Please try again.",
      connectionError: "Connection error. Please try again later."
    },
    latestProjects: {
      title: "Latest Projects",
      projects: {
        "VanguardCRM": {
          title: "VanguardCRM",
          description: "Intelligent CRM system with AI for advanced customer relationship management",
          type: "CRM"
        },
        "CloudFlow": {
          title: "CloudFlow",
          description: "SAAS platform for business workflow automation",
          type: "SAAS"
        },
        "TechVision": {
          title: "TechVision",
          description: "Web application for real-time predictive data analysis",
          type: "Web App"
        }
      }
    },
    footer: {
      specialistText: "Full Stack development and AI solutions specialist",
      rightsText: "© {year} Personal Portfolio. All rights reserved."
    },
    projects: {
      "Interfaces de usuario avanzadas": {
        title: "Advanced User Interfaces"
      },
      "CRM para Clínicas Estéticas con IA": {
        title: "AI-powered CRM for Aesthetic Clinics"
      },
      "Marketplace de productos": {
        title: "Product Marketplace"
      },
      "CRM para Clínicas Estéticas": {
        title: "CRM for Aesthetic Clinics"
      },
      "Sistemas avanzados de gestión de citas y clientes": {
        title: "Advanced Appointment and Client Management Systems"
      },
      "Landing pages que convierten": {
        title: "High-Converting Landing Pages"
      },
      "La Guía Digital Automotriz": {
        title: "The Automotive Digital Guide"
      },
      "Sistema de gestión de citas con IA": {
        title: "AI-powered Appointment Management System"
      }
    }
  }
}; 