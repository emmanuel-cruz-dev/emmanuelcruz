import { TFunction } from "i18next";
import { SkillsCardProps } from "../types/types";
import HTMLLogo from "../assets/icons/html-logo.png";
import CSSLogo from "../assets/icons/css-logo.png";
import JavascriptLogo from "../assets/icons/javascript-logo.png";
import TypescriptLogo from "../assets/icons/typescript-logo.png";

export const getWebSkills = (t: TFunction): SkillsCardProps[] => [
  {
    src: HTMLLogo,
    alt: "HTML",
    title: t("sections.skills.html"),
  },
  {
    src: CSSLogo,
    alt: "CSS",
    title: t("sections.skills.css"),
  },
  {
    src: JavascriptLogo,
    alt: "JavaScript",
    title: t("sections.skills.javascript"),
  },
  {
    src: TypescriptLogo,
    alt: "TypeScript",
    title: t("sections.skills.typescript"),
  },
];
