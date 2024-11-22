import Logo from "../assets/icons/logo-blanco.png";
const Loader = () => {
  return (
    <article className="loader__container">
      <div className="flex flex-col gap-6 justify-center items-center h-screen w-screen fixed top-0 left-0 z-50">
        <div className="spinner"></div>
      </div>
    </article>
  );
};

export default Loader;
