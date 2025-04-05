import { useTheme } from "../../hooks/useThemeProvider";

export const CounterDivs = ({ num, title }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? "shadow__dark" : "shadow__light"
      } bg-gradient-to-r from-cyan-500 to-blue-500/60 w-full h-full rounded-xl py-4`}
    >
      <p className="text-center text-lg leading-8 font-semibold">
        <span className="text-4xl font-extrabold">
          <span className="text-accent">+</span>
          {num}
          <br />
        </span>
        {title}
      </p>
    </div>
  );
};
