import { useTheme } from "../../context/ThemeContext";

const SkillsContainer = ({ title, children }) => {
  const { theme } = useTheme();

  return (
    <article
      className={`${
        theme === "dark" ? "shadow__dark" : "shadow__light"
      } w-full md:w-fit flex flex-col gap-8 items-center text-center bg-sky-300/20 py-6 px-10 border-2 border-sky-300/20 hover:bg-transparent transition-colors duration-300`}
    >
      <h4 className="font-semibold text-xl">{title}</h4>
      <article className="flex flex-wrap gap-6 lg:gap-14 justify-around items-center">
        {children}
      </article>
    </article>
  );
};

export default SkillsContainer;
