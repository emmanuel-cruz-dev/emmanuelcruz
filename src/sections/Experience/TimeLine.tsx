import { FC } from "react";
import { workExperiences } from "../../data/workExperiences";
import { getSortedExperiences } from "../../utils/utils";
import { TimelineProps } from "../../types/types";
import TimelineItem from "./TimeLineItem";

const Timeline: FC<TimelineProps> = ({ experiences = workExperiences }) => {
  const sortedExperiences = getSortedExperiences(experiences);

  return (
    <article className="bg-gray-900 text-white">
      <div className="mx-auto px-4">
        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {sortedExperiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        <a
          href="#contact"
          className="inline-block mt-16 px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors duration-200 transform hover:scale-105"
        >
          Contáctame
        </a>
      </div>
    </article>
  );
};

export default Timeline;
