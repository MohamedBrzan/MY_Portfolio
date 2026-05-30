import ProjectsData from './helpers/ProjectsData';
import './Projects.scss';
import SEO from '../../Components/SEO';

const Projects = () => {
  return (
    <section className="projects">
      <SEO title="Projects — Mohamed Mahmoud" />
      <h1 className="title">Projects.</h1>
      <hr />
      <ProjectsData />
      <div className="intro_title" aria-hidden="true">
        <p>Projects!</p>
      </div>
    </section>
  );
};

export default Projects;
