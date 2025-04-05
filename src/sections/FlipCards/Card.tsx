import { FlipCardProps } from "@/types/types";
import { FC } from "react";

export const Card: FC<FlipCardProps> = ({
  num,
  img,
  alt,
  title,
  description,
}) => {
  return (
    <article className="cards__front-back">
      <div className={`front${num}`}></div>
      <div className={`back${num}`}>
        <figure className="w-24 h-24">
          <img
            className="w-full h-full cover"
            src={img}
            alt={alt}
            loading="lazy"
            width="100"
            height="100"
          />
        </figure>
        <div className="flip-card__content flex flex-col gap-2">
          <h3 className="font-bold text-lg">{title}</h3>
          <p>{description}.</p>
        </div>
      </div>
    </article>
  );
};
