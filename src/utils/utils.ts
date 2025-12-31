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

export const getInputClasses = (hasError: boolean) => {
  const baseClasses =
    "w-full bg-white/20 border py-2 px-3 focus:outline-none focus:ring-2 transition-colors duration-200";
  const errorClasses = hasError
    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500";

  return `${baseClasses} ${errorClasses}`;
};
