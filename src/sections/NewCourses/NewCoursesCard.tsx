import { NewCoursesCardProps } from "@/types/types";

// TODO agregar colores para manejar un background personalizado en cada card
// Colores por cada curso:
// Academia ForIT #110b25
// Alura Latam #061d3c
// Talento Tech #153242

function NewCoursesCard({ img, alt, title, description }: NewCoursesCardProps) {
  return (
    <article className="text-center bg-[#061d3c] px-4 py-6 h-full">
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
        <p>{description}.</p>
      </div>
    </article>
  );
}

export default NewCoursesCard;
