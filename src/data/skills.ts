import { TFunction } from "i18next";
import { SkillsCardProps } from "../types/types";
import HTMLLogo from "../assets/icons/html-logo.png";
import CSSLogo from "../assets/icons/css-logo.png";
import JavascriptLogo from "../assets/icons/javascript-logo.png";
import TypescriptLogo from "../assets/icons/typescript-logo.png";

import ReactLogo from "../assets/icons/react-logo.png";
import ReactNativeLogo from "../assets/icons/react-native-logo.png";
import AngularLogo from "../assets/icons/angular-logo.png";
import NodeLogo from "../assets/icons/nodejs-logo.png";
import ExpressLogo from "../assets/icons/express-logo.png";
import ExpressLogoNegro from "../assets/icons/express-negro-logo.png";
import TailwindLogo from "../assets/icons/tailwindcss-logo.png";
import SassLogo from "../assets/icons/sass-logo.png";
import BootstrapLogo from "../assets/icons/bootstrap-logo.png";

import GitLogo from "../assets/icons/git-logo.png";
import GithubLogo from "../assets/icons/github-logo.png";
import VsCodeLogo from "../assets/icons/vscode-logo.png";

import FigmaLogo from "../assets/icons/figma-logo.png";
import PhotoshopLogo from "../assets/icons/photoshop-logo.png";
import WebflowLogo from "../assets/icons/webflow-logo.png";

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

export const getFrameworks = (t: TFunction, theme: string) => [
  {
    src: ReactLogo,
    alt: "React",
    title: t("sections.skills.react"),
  },
  {
    src: ReactNativeLogo,
    alt: "React Native",
    title: t("sections.skills.reactNative"),
  },
  {
    src: AngularLogo,
    alt: "Angular",
    title: t("sections.skills.angular"),
  },
  {
    src: NodeLogo,
    alt: "Node.js",
    title: t("sections.skills.nodejs"),
  },
  {
    src: theme == "dark" ? ExpressLogo : ExpressLogoNegro,
    alt: "Express",
    title: t("sections.skills.express"),
  },
  {
    src: TailwindLogo,
    alt: "Talwind CSS",
    title: t("sections.skills.tailwind"),
  },
  {
    src: SassLogo,
    alt: "Sass",
    title: t("sections.skills.sass"),
  },
  {
    src: BootstrapLogo,
    alt: "Bootstrap",
    title: t("sections.skills.bootstrap"),
  },
];

export const getDevelopmentTools = (t: TFunction) => [
  {
    src: GitLogo,
    alt: "Git",
    title: t("sections.skills.git"),
  },
  {
    src: GithubLogo,
    alt: "GitHub",
    title: t("sections.skills.github"),
  },
  {
    src: VsCodeLogo,
    alt: "VS Code",
    title: t("sections.skills.vscode"),
  },
];

export const getDesignPrototyping = (t: TFunction) => [
  {
    src: FigmaLogo,
    alt: "Figma",
    title: t("sections.skills.figma"),
  },
  {
    src: PhotoshopLogo,
    alt: "Photoshop",
    title: t("sections.skills.photoshop"),
  },
  {
    src: WebflowLogo,
    alt: "Webflow",
    title: t("sections.skills.webflow"),
  },
];
