import CardPollosHermanos1 from "../assets/images/card-pollos-hermanos1.webp";
import CardPollosHermanos2 from "../assets/images/card-pollos-hermanos2.webp";
import CardPollosHermanos3 from "../assets/images/card-pollos-hermanos3.webp";

import CardLockKey1 from "../assets/images/card-lock-key1.webp";
import CardLockKey2 from "../assets/images/card-lock-key2.webp";
import CardLockKey3 from "../assets/images/card-lock-key3.webp";

import CardPortfolio1 from "../assets/images/card-portfolio1.webp";
import CardPortfolio2 from "../assets/images/card-portfolio2.webp";
import CardPortfolio3 from "../assets/images/card-portfolio3.webp";

import CardJinjer1 from "../assets/images/card-jinjer1.webp";
import CardJinjer2 from "../assets/images/card-jinjer2.webp";
import CardJinjer3 from "../assets/images/card-jinjer3.webp";

import CardLiterarium1 from "../assets/images/card-literarium1.webp";
import CardLiterarium2 from "../assets/images/card-literarium2.webp";
import CardLiterarium3 from "../assets/images/card-literarium3.webp";
import { TFunction } from "i18next";

const getPProjects = (t: TFunction) => [
  {
    id: 1,
    title: "Emmanuel Cruz | Portfolio",
    description: t("sections.projects.portfolio"),
    img1: CardPortfolio1,
    img2: CardPortfolio2,
    img3: CardPortfolio3,
    flyer: "darkMode",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Sass",
      "React Hook Form",
      "Zod",
    ],
    link: "https://emmanuel-cruz.netlify.app/",
    github: "https://github.com/emmanuel-cruz-dev/emmanuelcruz",
  },
  {
    id: 2,
    title: "Los Pollos Hermanos",
    description: t("sections.projects.pollos"),
    img1: CardPollosHermanos1,
    img2: CardPollosHermanos2,
    img3: CardPollosHermanos3,
    flyer: "responsive",
    technologies: ["HTML", "CSS", "Javascript", "JQuery"],
    link: "https://emmanuel-cruz-dev.github.io/los-pollos-hermanos-website/",
    github: "https://github.com/emmanuel-cruz-dev/los-pollos-hermanos-website",
  },
  {
    id: 3,
    title: "Literarium | Bookstore",
    description: t("sections.projects.literarium"),
    img1: CardLiterarium1,
    img2: CardLiterarium2,
    img3: CardLiterarium3,
    flyer: "responsive",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://literarium.netlify.app/",
    github: "https://github.com/emmanuel-cruz-dev/literarium",
  },
  {
    id: 4,
    title: "Jinjer | Website",
    description: t("sections.projects.jinjer"),
    img1: CardJinjer1,
    img2: CardJinjer2,
    img3: CardJinjer3,
    flyer: "language",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Sass"],
    link: "https://jinjer.vercel.app/",
    github: "https://github.com/emmanuel-cruz-dev/jinjer",
  },
  {
    id: 5,
    title: "LockKey | Gestor de Contraseñas",
    description: t("sections.projects.lockKey"),
    img1: CardLockKey1,
    img2: CardLockKey2,
    img3: CardLockKey3,
    flyer: "darkMode",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://lock-key.vercel.app/",
    github: "https://github.com/emmanuel-cruz-dev/lockkey-no-country-mvp",
  },
];

export default getPProjects;
