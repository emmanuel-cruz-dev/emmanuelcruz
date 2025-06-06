import { useTranslation } from "react-i18next";
import AnimatedComponent from "../../components/ui/AnimatedComponent";
import FlipCard1 from "../../assets/icons/flip-card1.webp";
import FlipCard2 from "../../assets/icons/flip-card2.webp";
import FlipCard3 from "../../assets/icons/flip-card3.webp";
import { Card } from "./Card";

function FlipCards() {
  const { t } = useTranslation();

  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 xl:w-10/12 mx-auto select-none"
      id="services"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <div className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">
            {t("sections.services.title")}
          </h2>
          <h3 className="text-lg">{t("sections.services.description")}.</h3>
        </div>
      </AnimatedComponent>
      <article className="flip-cards__container flex flex-col lg:flex-row justify-center items-center gap-9 text-black">
        {/* Flip Card 1 */}
        <Card
          num={1}
          img={FlipCard1}
          alt="Icono de un monitor de computadora."
          title={t("sections.services.cardTitle1")}
          description={t("sections.services.cardDescription1")}
        />

        {/* Flip Card 2 */}
        <Card
          num={2}
          img={FlipCard2}
          alt="Icono de una nave espacial con un engranaje dentro, el cual es un logo de Search Engine Optimization (Optimización para motores de búsqueda)."
          title={t("sections.services.cardTitle2")}
          description={t("sections.services.cardDescription2")}
        />

        {/* Flip Card 3 */}
        <Card
          num={3}
          img={FlipCard3}
          alt="Icono de Diseño responsivo, en el cual se ven 4 dispositivos de diferentes tamaños: notebook, tablet, celular y monitor de computadora."
          title={t("sections.services.cardTitle3")}
          description={t("sections.services.cardDescription3")}
        />
      </article>
    </section>
  );
}

export default FlipCards;
