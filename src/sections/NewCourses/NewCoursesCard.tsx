import { backgroundColor } from "../../constants/constants";
import { NewCoursesCardProps } from "../../types/types";

function NewCoursesCard({ img, alt, title, description }: NewCoursesCardProps) {
  return (
    <article
      className={`text-center ${backgroundColor[title]} px-9 pt-7 pb-9 h-full text-white`}
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
        <h3 className="font-bold text-lg lg:text-2xl">{title}</h3>
        <p className="leading-7 w-10/12 mx-auto md:w-auto text-gray-300">
          {description}.
        </p>
      </div>
    </article>
  );
}

export default NewCoursesCard;
