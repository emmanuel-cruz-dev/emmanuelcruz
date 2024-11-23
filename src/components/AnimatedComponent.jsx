import { useEffect, useRef } from "react";
import JSConfetti from "js-confetti";

const AnimatedComponent = ({
  children,
  threshold = 0.1,
  animation = "fade",
  direction = "up",
  delay = 0,
}) => {
  const elementRef = useRef(null);
  const jsConfetti = new JSConfetti();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (animation === "confetti") {
              setTimeout(() => {
                jsConfetti.addConfetti({
                  emojis: ["💪🏻", "⚡️", "💥", "✨", "💫", "🏆", "👏", "🌟"],
                  emojiSize: 40,
                  confettiNumber: 200,
                  gravity: 0.9,
                  delay: 7000,
                });
              }, 1500);
            }
            entry.target.classList.add(`${animation}-in`);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, animation]);

  // Construimos las clases basadas en los props
  const getClasses = () => {
    const classes = ["animated", animation];

    if (animation === "slide") {
      classes.push(direction);
    }

    if (delay > 0) {
      classes.push(`delay-${delay}`);
    }

    return classes.join(" ");
  };

  return (
    <div ref={elementRef} className={getClasses()}>
      {children}
    </div>
  );
};

export default AnimatedComponent;
