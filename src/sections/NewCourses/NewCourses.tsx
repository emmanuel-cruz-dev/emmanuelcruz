import AnimatedComponent from "../../components/ui/AnimatedComponent";

function NewCourses() {
  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 xl:w-10/12 mx-auto select-none"
      id="new-courses"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <div className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">Actualmente Cursando</h2>
          <h3 className="text-lg">
            Ampliando mis conocimientos de desarrollo Backend y Fullstack a
            través de estos cursos.
          </h3>
        </div>
      </AnimatedComponent>
      <article className="flex flex-col lg:flex-row justify-center items-center gap-9 text-black">
        {/* Card 1 */}
        {/* Card 2 */}
        {/* Card 3 */}
      </article>
    </section>
  );
}

export default NewCourses;
