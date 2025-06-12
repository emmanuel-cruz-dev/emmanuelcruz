import { FC } from "react";
import { backgroundColor } from "../../constants/constants";
import { NewCoursesCardProps } from "../../types/types";
import { useTheme } from "../../hooks/useThemeProvider";

const NewCoursesCard: FC<NewCoursesCardProps> = ({
  img,
  alt,
  title,
  description,
}) => {
  const { theme } = useTheme();

  return (
    <article
      className={`${
        theme === "dark" ? "shadow__dark" : "shadow__light"
      } text-center ${
        backgroundColor[title]
      } px-9 pt-7 pb-14 h-full text-white`}
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
        <p className="w-10/12 mx-auto md:w-auto text-gray-300">
          {description}.
        </p>
      </div>
    </article>
  );
};

export default NewCoursesCard;
