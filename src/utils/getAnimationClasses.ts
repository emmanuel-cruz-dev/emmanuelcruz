export const getAnimationClasses = ({ animation, direction, delay }) => {
  const classes = ["animated", animation];

  if (animation === "slide") {
    classes.push(direction);
  }

  if (delay > 0) {
    classes.push(`delay-${delay}`);
  }

  return classes.join(" ");
};
