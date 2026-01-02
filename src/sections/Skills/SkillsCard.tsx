import { Skill } from "../../types/types";

const SkillsCard = (skill: Skill) => {
  return (
    <section
      className="flex flex-col items-center gap-2 group"
      title={skill.title}
    >
      <figure className="w-16 h-16 flex items-center justify-center rounded-lg p-2 group-hover:scale-110 transition-all duration-300 ease-in-out">
        <img
          src={skill.logo}
          alt={`${skill.name} logo`}
          loading="lazy"
          className="w-full h-full object-contain"
          width={100}
          height={100}
        />
      </figure>
      <p className="text-xs font-semibold">{skill.name}</p>
    </section>
  );
};

export default SkillsCard;
