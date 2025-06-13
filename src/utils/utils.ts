import { GetAnimationClassesProps } from "../types/types";

export const getAnimationClasses = ({
  animation,
  direction,
  delay = 0,
}: GetAnimationClassesProps): string => {
  const classes = ["animated", animation];

  if (animation === "slide" && direction) {
    classes.push(direction);
  }

  if (delay > 0) {
    classes.push(`delay-${delay}`);
  }

  return classes.join(" ");
};

export const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
