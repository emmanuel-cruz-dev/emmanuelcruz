import { ReactNode, RefObject } from "react";

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

// export interface UseAnimationProps {
//   threshold: number;
//   animation: string;
//   direction: string;
//   delay: number;
// }

// export interface UseAnimationReturn {
//   elementRef: RefObject<HTMLDivElement>;
//   getClasses: () => string;
// }

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

export interface TechnologiesProps {
  img: string;
  name: string;
}

export interface ProjectsCardProps {
  title: string;
  description: string;
  img1: string;
  img2: string;
  img3: string;
  flyer: string;
  technologies: TechnologiesProps[];
  link: string;
}

export interface LastModifiedDateProps {
  currentLanguage: string;
}

export interface LoaderProps {
  size: string;
  color: string;
  fullScreen: boolean;
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
