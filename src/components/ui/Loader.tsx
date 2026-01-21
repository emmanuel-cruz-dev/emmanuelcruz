import { FC } from "react";
import { LoaderProps } from "../../types/types";

const Loader: FC<LoaderProps> = ({
  size = "medium",
  color = "red",
  fullScreen = true,
}) => {
  const sizeClasses: Record<string, string> = {
    medium: "w-14 h-14",
  };

  const colorClasses: Record<string, string> = {
    red: "border-accent",
  };

  return (
    <article
      className={`
        loader-container
        ${
          fullScreen
            ? "fixed inset-0 flex items-center bg-[#111827] justify-center z-50"
            : ""
        }
      `}
    >
      <div
        className={`
          loader
          ${sizeClasses[size]}
          ${colorClasses[color]}
          border-[5px]
          border-t-transparent
          rounded-full
          animate-spin
        `}
      />
    </article>
  );
};

export default Loader;
