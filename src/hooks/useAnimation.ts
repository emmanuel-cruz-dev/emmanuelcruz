import { UseAnimationProps, UseAnimationReturn } from "@/types/types";
import { useEffect, useRef } from "react";

export const useAnimation = ({
  threshold = 0.1,
  animation,
}: UseAnimationProps): UseAnimationReturn => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(`${animation}-in`);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, animation]);

  return elementRef;
};
