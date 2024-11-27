import { useTranslation } from "react-i18next";
import AnimatedComponent from "./AnimatedComponent";
import FlipCard1 from "../assets/icons/flip-card1.jpg";
import FlipCard2 from "../assets/icons/flip-card2.jpg";
import FlipCard3 from "../assets/icons/flip-card3.jpg";

const FlipCards = () => {
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
        <AnimatedComponent animation="flip">
          <div className="cards__front-back">
            <div className="front1"></div>
            <div className="back1">
              <figure className="w-24 h-24">
                <img
                  className="w-full h-full cover"
                  src={FlipCard1}
                  alt="Icono de un monitor de computadora."
                />
              </figure>
              <div className="flip-card__content flex flex-col gap-2">
                <h3 className="font-bold text-lg">
                  {t("sections.services.cardTitle1")}
                </h3>
                <p>{t("sections.services.cardDescription1")}.</p>
              </div>
            </div>
          </div>
        </AnimatedComponent>

        {/* Flip Card 2 */}
        <AnimatedComponent animation="flip">
          <div className="cards__front-back">
            <div className="front2"></div>
            <div className="back2">
              <figure className="w-24 h-24">
                <img
                  className="w-full h-full cover"
                  src={FlipCard2}
                  alt="Icono de una nave espacial con un engranaje dentro, el cual es un logo de Search Engine Optimization (Optimización para motores de búsqueda)."
                />
              </figure>
              <div className="flip-card__content flex flex-col gap-2">
                <h3 className="font-bold text-lg">
                  {t("sections.services.cardTitle2")}
                </h3>
                <p>{t("sections.services.cardDescription2")}.</p>
              </div>
            </div>
          </div>
        </AnimatedComponent>

        {/* Flip Card 3 */}
        <AnimatedComponent animation="flip">
          <div className="cards__front-back">
            <div className="front3"></div>
            <div className="back3">
              <figure className="w-24 h-24">
                <img
                  className="w-full h-full cover"
                  src={FlipCard3}
                  alt="Icono de Diseño responsivo, en el cual se ven 4 dispositivos de diferentes tamaños: notebook, tablet, celular y monitor de computadora."
                />
              </figure>
              <div className="flip-card__content flex flex-col gap-2">
                <h3 className="font-bold text-lg">
                  {t("sections.services.cardTitle3")}
                </h3>
                <p>{t("sections.services.cardDescription3")}.</p>
              </div>
            </div>
          </div>
        </AnimatedComponent>
      </article>
    </section>
  );
};

export default FlipCards;
