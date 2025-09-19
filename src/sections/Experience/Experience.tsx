import AnimatedComponent from "../../components/ui/AnimatedComponent";
import Timeline from "./TimeLine";

function Experience() {
  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 mx-auto select-none"
      id="experience"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <header className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">Experiencia Laboral</h2>
          <h3 className="text-lg">
            Participación activa en equipos de trabajo aplicando metodologías
            ágiles y contribuyendo con código limpio.
          </h3>
        </header>
      </AnimatedComponent>
      <Timeline />
    </section>
  );
}

export default Experience;
