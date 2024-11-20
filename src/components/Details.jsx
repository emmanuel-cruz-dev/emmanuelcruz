const Details = () => {
  return (
    <section
      className="py-10 flex flex-col gap-8 w-11/12 mx-auto select-none"
      id="details"
    >
      <div className="text-center mb-5">
        <h2 className="font-bold text-3xl mb-4">
          {/* {t("sections.projects.title")} */}
          Los Pollos Hermanos
        </h2>
        <h3 className="text-lg">Descripción</h3>
      </div>
      <article>
        <div className="card-container flex flex-col gap-8 mx-auto"></div>
      </article>
    </section>
  );
};

export default Details;
