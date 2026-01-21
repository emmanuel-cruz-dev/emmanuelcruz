import { ReactNode } from "react";
import { useTheme } from "../../hooks";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) => {
  const { theme } = useTheme();

  return (
    <section
      className={`${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 shadow__dark border-gray-700/50"
          : "bg-gradient-to-br from-white to-gray-50 shadow__light border-gray-200"
      } p-6`}
    >
      <div className="flex items-center gap-4">
        <span className={`text-3xl text-accent flex-shrink-0`}>{icon}</span>
        <aside>
          <h4 className="font-bold text-lg mb-2">{title}</h4>
          <p
            className={`text-sm leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        </aside>
      </div>
    </section>
  );
};

export default FeatureCard;
