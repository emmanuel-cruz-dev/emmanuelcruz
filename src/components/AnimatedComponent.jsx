import { useAnimation } from "../hooks/useAnimation.js";

const AnimatedComponent = ({
  children,
  threshold = 0.1,
  animation = "fade",
  direction = "up",
  delay = 0,
}) => {
  const elementRef = useAnimation({ threshold, animation });
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
