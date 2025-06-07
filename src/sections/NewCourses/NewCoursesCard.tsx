interface NewCoursesCardProps {
  img: string;
  alt: string;
  title: string;
  description: string;
}

function NewCoursesCard({ img, alt, title, description }: NewCoursesCardProps) {
  return (
    <article>
      <div>
        <figure className="w-24 h-24">
          <img
            className="w-full h-full cover"
            src={img}
            alt={alt}
            loading="lazy"
          />
        </figure>
        <div className="flip-card__content flex flex-col gap-2">
          <h3 className="font-bold text-lg">{title}</h3>
          <p>{description}.</p>
        </div>
      </div>
    </article>
  );
}

export default NewCoursesCard;
