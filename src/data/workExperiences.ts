interface WorkExperience {
  id: number;
  company: string;
  projectName: string;
  period: string;
  description: string;
  github: string;
  technologies: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: "No Country",
    projectName: "Lock Key",
    period: "Febrero - Marzo | 2025",
    description:
      "Desarrollo de Lock Key, gestor de contraseñas diseñado para facilitar el almacenamiento y la gestión confiable de credenciales, utilizando Vite, React, TypeScript y Tailwind CSS. Implementación de interfaces responsivas y optimización de rendimiento.",
    github:
      "https://github.com/No-Country-simulation/equipo-c24-70-ft-webapp/tree/frontend",
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    company: "No Country",
    projectName: "FitFlow",
    period: "Marzo - Abril | 2025",
    description:
      "Desarrollo de FitFlow, plataforma integral de salud y fitness que utiliza inteligencia artificial para ofrecer planes personalizados de dieta, ejercicio y seguimiento de progreso.",
    github: "https://github.com/deimos-et-fobos/fitflow",
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 3,
    company: "Foo Talent Group",
    projectName: "Aura",
    period: "Abril - Junio | 2025",
    description:
      "Desarrollo de Aura, plataforma integral de gestión de registros y atenciones para el centro terapéutico Rayuela.",
    github: "https://github.com/FooTalentGroup/AURA",
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 4,
    company: "Kramer E-Commerce",
    projectName: "Kramer",
    period: "Junio - Septiembre | 2025",
    description:
      "Desarrollo de aplicación E-Commerce multiplataforma junto a equipo multidisciplinario.",
    github: "https://github.com/LumDev86/Kramer",
    technologies: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "React-Query",
    ],
  },
  {
    id: 5,
    company: "Foo Talent Group",
    projectName: "Flowik",
    period: "Julio - Septiembre | 2025",
    description:
      "Desarrollo de Flowik, aplicación web de gestión para PYMES orientada a la administración de productos, clientes y proveedores. Implementación de un panel administrativo intuitivo con control de stock y precios, registro de ventas, alertas automatizadas y funcionalidades de importación y exportación masiva para optimizar tareas operativas.",
    github: "https://github.com/petshop112/Flowik/tree/main",
    technologies: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "React-Query",
    ],
  },
  {
    id: 6,
    company: "No Country",
    projectName: "Pyme Go",
    period: "Septiembre - Octubre | 2025",
    description:
      "Desarrollo de Pyme Go, plataforma fintech para el onboarding digital de créditos para PYMES. Implementación del frontend con React y Vite, desarrollando formularios dinámicos, carga de documentación, rutas protegidas y seguimiento de solicitudes en tiempo real, priorizando una experiencia de usuario clara y eficiente.",
    github: "https://github.com/Rosariobelenn/Equipo13",
    technologies: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "TanStack Query",
    ],
  },
  {
    id: 7,
    company: "No Country",
    projectName: "EcoShop",
    period: "Noviembre - Diciembre | 2025",
    description:
      "Desarrollo de EcoShop, plataforma de comercio electrónico sostenible orientada a marcas responsables. Implementación del frontend con Next.js, creando una experiencia de usuario moderna e intuitiva que integra catálogo de productos, carrito, checkout y visualización de indicadores de impacto ambiental por producto y compra.",
    github: "https://github.com/felipecalderon/nocountry-ecoshop",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Radix UI",
    ],
  },
];
