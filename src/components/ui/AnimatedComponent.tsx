import { FC } from "react";
import { useAnimation } from "../../hooks/useAnimation";
import { getAnimationClasses } from "../../utils/getAnimationClasses";
import { AnimatedComponentProps } from "@/types/types";

const AnimatedComponent: FC<AnimatedComponentProps> = ({
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
