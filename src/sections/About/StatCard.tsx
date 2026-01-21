import { ReactNode } from "react";
import { useTheme, useStatCardAnimation } from "../../hooks";

const StatCard = ({
  icon,
  number,
  label,
  delay = 0,
}: {
  icon: ReactNode;
  number: number;
  label: string;
  delay?: number;
}) => {
  const { theme } = useTheme();
  const { count, isVisible } = useStatCardAnimation(number, delay);

  return (
    <section
      className={`${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90"
          : "bg-gradient-to-br from-white to-gray-50"
      } p-6 flex flex-col items-center gap-3 ${
        theme === "dark" ? "shadow__dark" : "shadow__light"
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <span className="text-4xl text-accent">{icon}</span>
      <div className="text-center">
        <p className="text-3xl font-bold mb-1">
          <span className="text-accent">+</span>
          {count}
        </p>
        <p
          className={`text-xs font-medium uppercase tracking-wide ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {label}
        </p>
      </div>
    </section>
  );
};

export default StatCard;
