import { useAnimation } from "../hooks/useAnimation.js";
import { getAnimationClasses } from "../utils/getAnimationClasses.js";

const AnimatedComponent = ({
  children,
  threshold = 0.1,
  animation = "fade",
  direction = "up",
  delay = 0,
}) => {
  const elementRef = useAnimation({ threshold, animation });

  return (
    <div
      ref={elementRef}
      className={getAnimationClasses({ animation, direction, delay })}
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;
