import { SkillsCardProps } from "../../types/types";
import { FC } from "react";

const SkillsCard: FC<SkillsCardProps> = ({ src, alt, title }) => {
  return (
    <article className="card group" title={title} aria-label={alt}>
      <img
        src={src}
        alt={`${alt} logo`}
        loading="lazy"
        className="w-16 group-hover:scale-110 transition-all duration-300 ease-in-out"
        width="100"
        height="100"
      />
      <p className="font-semibold">{alt}</p>
    </article>
  );
};

export default SkillsCard;
