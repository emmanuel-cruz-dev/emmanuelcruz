const Loader = ({ size = "medium", color = "red", fullScreen = true }) => {
  const sizeClasses = {
    medium: "w-14 h-14",
  };

  const colorClasses = {
    red: "border-accent",
  };

  return (
    <div
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
    </div>
  );
};

export default Loader;
