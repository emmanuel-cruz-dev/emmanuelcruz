import React, { ReactNode, RefObject } from "react";

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface AnimatedComponentProps {
  children: ReactNode;
  threshold?: number;
  animation?: string;
  direction?: string;
  delay: number;
}

export interface useGalleryLogicReturn {
  index: number;
  handleIndexChange: (newIndex: number) => void;
}

export interface GalleryProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export interface CarouselProps {
  img1: string;
  img2: string;
  img3: string;
}

export interface EducationCardsProps {
  img: string;
  href: string;
  logo: string;
  blackLogo?: string;
  title: string;
  span: string;
  description: string;
  num: number;
}

export interface SkillsCardProps {
  src: string;
  alt: string;
  title: string;
}

export interface SkillsContainerProps {
  title: string;
  children: React.JSX.Element[];
}

export interface TechnologiesProps {
  img: string;
  name: string;
}

export type IconType = "responsive" | "darkMode" | "language" | "flyer";

export interface ProjectsCardProps {
  title: string;
  description: string;
  img1: string;
  img2: string;
  img3: string;
  flyer: string;
  technologies: TechnologiesProps[];
  link: string;
  github: string;
}

export type ProjectsIconsProps = {
  type: string;
};

export interface WorkExperience {
  id: number;
  company: string;
  projectName: string;
  period: string;
  description: string;
  github: string;
  technologies: string[];
  tools?: string[];
}

export interface LastModifiedDateProps {
  currentLanguage: Language;
}

export interface LoaderProps {
  size?: string;
  color?: string;
  fullScreen?: boolean;
}

export interface ToastProps {
  message: string;
  type: string;
  show: boolean;
  onClose: () => void;
}

export interface UseAnimationProps {
  threshold?: number;
  animation: string;
}

export type UseAnimationReturn = RefObject<HTMLDivElement>;

export type ToastType = "success" | "error" | "";

export type FormValues = {
  user_name: string;
  user_email: string;
  message: string;
};

export type Language = "es" | "en";

export type LastModified = string | null;

export type UseToastProps = {
  show: boolean;
  onClose: () => void;
};

export type UseToastReturn = {
  progress: number;
  isVisibleSlide: boolean;
  isEntering: boolean;
  handleClose: () => void;
};

export interface CounterDivsProps {
  num: number;
  title: string;
}

export interface GetAnimationClassesProps {
  animation: string;
  direction?: string;
  delay?: number;
}

export type CourseTitle =
  | "Academia ForIT"
  | "Alura Latam"
  | "Talento Tech"
  | "Tech Advanced";

export interface Certificate {
  id: string | number;
  img: string;
  href: string;
  logo: string;
  blackLogo?: string;
  title: string;
  span: string;
  description: string;
  num: number;
}
