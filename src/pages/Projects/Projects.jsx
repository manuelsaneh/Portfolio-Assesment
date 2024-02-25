import { projects } from "../../components/ProjectCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <p className="projects__text">My Work</p>
        <h2 className="projects__heading">Projects.</h2>

        <p className="projects__paragraph">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described and
          with live demos in it. It reflects my ability to solve complex
          problems, work with different technologies, and manage projects
          effectively.
        </p>
      </div>

      <span className="line"></span>

      <div className="projects__card">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
