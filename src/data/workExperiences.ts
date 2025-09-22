import { Experience } from "../types/types";

export const workExperiences: Experience[] = [
  {
    id: 1,
    company: "No Country",
    period: "Febrero - Marzo | 2025",
    description:
      "Desarrollo de Lock Key, gestor de contraseñas diseñado para facilitar el almacenamiento y la gestión confiable de credenciales, utilizando Vite, React, TypeScript y Tailwind CSS. Implementación de interfaces responsivas y optimización de rendimiento.",
    github:
      "https://github.com/No-Country-simulation/equipo-c24-70-ft-webapp/tree/frontend",
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS"],
    side: "left",
    startDate: new Date("2025-02-01"),
    endDate: new Date("2025-03-31"),
    isCurrent: false,
  },
  {
    id: 2,
    company: "No Country",
    period: "Marzo - Abril | 2025",
    description:
      "Desarrollo de FitFlow, plataforma integral de salud y fitness que utiliza inteligencia artificial para ofrecer planes personalizados de dieta, ejercicio y seguimiento de progreso.",
    github: "https://github.com/deimos-et-fobos/fitflow",
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS"],
    side: "right",
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-04-30"),
    isCurrent: false,
  },
  {
    id: 3,
    company: "Foo Talent Group",
    period: "Abril - Junio | 2025",
    description:
      "Desarrollo de Aura, plataforma integral de gestión de registros y atenciones para el centro terapéutico Rayuela.",
    github: "https://github.com/FooTalentGroup/AURA",
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS"],
    side: "left",
    startDate: new Date("2025-04-01"),
    endDate: new Date("2025-06-30"),
    isCurrent: false,
  },
  {
    id: 4,
    company: "Kramer E-Commerce",
    period: "Junio 2025 - Presente",
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
    side: "left",
    startDate: new Date("2025-06-01"),
    endDate: null,
    isCurrent: true,
  },
  {
    id: 5,
    company: "Foo Talent Group",
    period: "Julio - Septiembre | 2025",
    description:
      "Desarrollo de Flowik, software de gestión de inventario para productos de mascotas.",
    github: "https://github.com/petshop112/Flowik/tree/main",
    technologies: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "React-Query",
    ],
    side: "right",
    startDate: new Date("2025-07-01"),
    endDate: new Date("2025-09-15"),
    isCurrent: false,
  },
];
