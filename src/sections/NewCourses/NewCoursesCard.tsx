import { CourseTitle, NewCoursesCardProps } from "../../types/types";

// TODO agregar colores para manejar un background personalizado en cada card
// Colores por cada curso:
// Academia ForIT #110b25
// Alura Latam #061d3c
// Talento Tech #153242

function NewCoursesCard({ img, alt, title, description }: NewCoursesCardProps) {
  const backgroundColor: Record<CourseTitle, string> = {
    "Academia ForIT": "bg-[#110b25]",
    "Alura Latam": "bg-[#061d3c]",
    "Talento Tech": "bg-[#153242]",
  };

  return (
    <article
      className={`text-center ${backgroundColor[title]} px-9 py-7 h-full text-white`}
    >
      <figure className="w-24 h-24 mx-auto mb-2">
        <img
          className="w-full h-full cover"
          src={img}
          alt={alt}
          loading="lazy"
        />
      </figure>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="leading-7 w-10/12 mx-auto md:w-auto">{description}.</p>
      </div>
    </article>
  );
}

export default NewCoursesCard;
