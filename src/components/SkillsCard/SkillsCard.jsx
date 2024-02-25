import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const SkillsCard = ({ skill }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#CCC8AA", color: "#191717" }}
      contentArrowStyle={{ borderRight: "7px solid #CCC8AA" }}
      iconStyle={{ background: skill.iconBg }}
    >
      <div>
        <h3 className="text-tertiary text-[24px] font-bold">{skill.title}</h3>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {skill.points.map((point, index) => (
          <li
            key={`skill-point-${index}`}
            className="text-tertiary text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default SkillsCard;
