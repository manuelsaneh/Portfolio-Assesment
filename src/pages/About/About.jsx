import { VerticalTimeline } from "react-vertical-timeline-component";
import SkillsCard from "../../components/SkillsCard/SkillsCard";
import "./about.css";
import { skills } from "../../components/SkillsCard";

const About = () => {
  return (
    <>
      <div className="about">
        <p className="about__text">Introduction</p>
        <h2 className="about__heading">Overview.</h2>

        <p className="about__paragraph">
          I&apos;m a skilled Web Developer with experience in JavaScript and
          TypeScript, and expertise in frameworks such as React and
          React-Native. I&apos;m a quick learner and collaborate closely with
          clients to create efficient, scalable, and user-friendly solutions
          that solves real-world problems. Let&apos;s work together to bring
          your ideas to life!!
        </p>
      </div>

      <span className="line"></span>

      <div className="about__skills">
        <p className="about__text">What i have done so far</p>
        <h2 className="about__heading">Skills.</h2>
      </div>
      <div>
        <VerticalTimeline>
          {skills.map((skill, index) => (
            <SkillsCard key={index} skill={skill} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default About;
