import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks";
import StatCard from "./StatCard";
import AnimatedComponent from "../../components/ui/AnimatedComponent";
import FeatureCard from "./FeatureCard";
import { FaUsers } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { PiSuitcaseSimple } from "react-icons/pi";
import { AiOutlineThunderbolt } from "react-icons/ai";

function About() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section
      className={`scroll-top py-10 w-11/12 max-w-7xl mx-auto ${
        theme === "dark" ? "text-white" : "text-gray-900"
      }`}
      id="about"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl mb-4">
            {t("sections.about.title")}
          </h2>
          <h3 className="text-lg">{t("sections.about.description")}</h3>
        </div>
      </AnimatedComponent>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <StatCard
              icon={<PiSuitcaseSimple />}
              number={5}
              label={t("sections.about.highlight1")}
              delay={0}
            />
            <StatCard
              icon={<FaUsers />}
              number={5}
              label={t("sections.about.highlight2")}
              delay={100}
            />
            <StatCard
              icon={<AiOutlineThunderbolt />}
              number={15}
              label={t("sections.about.highlight3")}
              delay={200}
            />
          </div>

          <div
            className={`${
              theme === "dark"
                ? "shadow__dark bg-gradient-to-br from-neutral-500/10 to-neutral-600/10 border-neutral-500/20"
                : "shadow__light bg-gradient-to-br from-neutral-50 to-neutral-100 border-neutral-200"
            } p-8`}
          >
            <h3 className="text-2xl font-bold mb-4">
              {t("sections.about.cta.title")}{" "}
              <span className="text-accent">
                {t("sections.about.cta.titleAccent")}
              </span>
            </h3>
            <p
              className={`mb-6 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {t("sections.about.cta.desc")}
            </p>
            <div className="flex gap-3">
              <a
                href="#contact"
                className="bg-accent text-white font-semibold px-4 md:px-6 py-3 transition-all duration-300 inline-flex items-center gap-2 group"
              >
                {t("sections.about.contactMe")}
                <span className="material-icons-outlined text-2xl group-hover:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
              </a>
              <a
                href="#experience"
                className={`${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700 border-gray-700"
                    : "bg-white hover:bg-gray-50 border-gray-300"
                } font-semibold px-4 md:px-6 py-3 transition-all duration-300 border-2 inline-flex items-center gap-2`}
              >
                {t("sections.about.viewExperience")}
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <FeatureCard
            icon={<HiOutlineRocketLaunch />}
            title={t("sections.about.experience.title")}
            description={t("sections.about.experience.desc")}
          />
          <FeatureCard
            icon={<TbTargetArrow />}
            title={t("sections.about.skills.title")}
            description={t("sections.about.skills.desc")}
          />
          <FeatureCard
            icon={<MdOutlineLocalLibrary />}
            title={t("sections.about.learning.title")}
            description={t("sections.about.learning.desc")}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
