import { useTranslation } from "react-i18next";
import AnimatedComponent from "./AnimatedComponent";
import FlipCard1 from "../assets/icons/flip-card1.jpg";
import FlipCard2 from "../assets/icons/flip-card2.jpg";
import FlipCard3 from "../assets/icons/flip-card3.jpg";

const FlipCards = () => {
  const { t } = useTranslation();

  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 xl:w-10/12 mx-auto"
      id="services"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <div className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">
            Construyendo Experiencias Digitales
          </h2>
          <h3 className="text-lg">
            Estos principios fundamentales guían cada línea de código y diseño,
            y aseguran que cada proyecto sea accesible, atractivo y eficiente.
          </h3>
        </div>
      </AnimatedComponent>
      <article className="flip-cards__container flex flex-col lg:flex-row justify-center gap-9 text-black">
        {/* Flip Card 1 */}
        <AnimatedComponent animation="flip">
          <div className="cards__front-back">
            <div className="front1"></div>
            <div className="back1">
              <figure className="w-24 h-24">
                <img className="w-full h-full cover" src={FlipCard1} alt="" />
              </figure>
              <div className="flip-card__content flex flex-col gap-2">
                <h3 className="font-bold text-xl">Usabilidad ante Todo</h3>
                <p>
                  Cada decisión de diseño está enfocada en ofrecer una
                  experiencia atractiva y sin fricciones.
                </p>
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
                <img className="w-full h-full cover" src={FlipCard2} alt="" />
              </figure>
              <div className="flip-card__content flex flex-col gap-2">
                <h3 className="font-bold text-xl">Velocidad que Importa</h3>
                <p>
                  Un sitio bien optimizado ofrece resultados rápidos, tanto en
                  velocidad como en posicionamiento web.
                </p>
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
                <img className="w-full h-full cover" src={FlipCard3} alt="" />
              </figure>
              <div className="flip-card__content flex flex-col gap-2">
                <h3 className="font-bold text-xl">Perfecto en Cada Pantalla</h3>
                <p>
                  Un diseño que responde a las necesidades de cada dispositivo
                  es esencial para impactar a tu audiencia.
                </p>
              </div>
            </div>
          </div>
        </AnimatedComponent>
      </article>
    </section>
  );
};

export default FlipCards;
