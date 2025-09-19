import { Experience, GetAnimationClassesProps } from "../types/types";

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

export const getSortedExperiences = (
  experiences: Experience[]
): Experience[] => {
  return experiences.sort((a, b) => {
    if (a.isCurrent && !b.isCurrent) return -1;
    if (!a.isCurrent && b.isCurrent) return 1;

    return b.startDate.getTime() - a.startDate.getTime();
  });
};
