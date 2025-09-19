import { FC } from "react";
import { getSortedExperiences } from "../../utils/utils";
import { TimelineProps } from "../../types/types";
import TimelineItem from "./TimeLineItem";

const Timeline: FC<TimelineProps> = ({ experiences }) => {
  const sortedExperiences = getSortedExperiences(experiences);

  return (
    <article className="mx-auto px-4">
      <main className="relative max-w-6xl mx-auto">
        {sortedExperiences.map((experience, index) => (
          <TimelineItem
            key={experience.id}
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </main>

      <footer className="flex justify-center mt-16">
        <a href="#contact" className="btn py-7 hover:bg-[#ff0033]">
          Contáctame
        </a>
      </footer>
    </article>
  );
};

export default Timeline;
