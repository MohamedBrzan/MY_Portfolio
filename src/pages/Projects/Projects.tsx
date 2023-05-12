import { useEffect } from 'react';
import ProjectsData from './helpers/ProjectsData';
import './Projects.scss';

const Projects = () => {
  useEffect(() => {
    const tabs = document.querySelectorAll('.projects .tabs .tab');
    const sections = document.querySelectorAll('.projects .projects_sections .project');

    document.querySelectorAll('.projects .tabs .tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((tab) => tab.classList.remove('active'));

        tab.classList.add('active');

        sections.forEach((section) => {
          if (section.getAttribute('id') === tab.getAttribute('data-select')) {
            sections.forEach((section) => section.classList.add('disabled'));
            section.classList.add('active');
            section.classList.add('animation');
            setTimeout(() => section.classList.remove('animation'), 2000);
          } else {
            section.classList.remove('active');
          }
        });
      });
    });

    const allBtn = document.querySelector('[data-select="all"]');

    allBtn?.addEventListener('click', () => {
      sections.forEach((section) => section.classList.add('animation'));
      setTimeout(
        () =>
          sections.forEach((section) => section.classList.remove('animation')),
        2000
      );
      sections.forEach((section) => section.classList.remove('disabled'));
    });
  }, []);

  return (
    <section className='projects'>
      <div className='title'>
        <h1>Projects.</h1>
      </div>
      <hr />
      <ul className='tabs'>
        <li className='tab active' data-select='all'>
          All
        </li>
        <li className='tab' data-select='frontend'>
          Frontend
        </li>
        <li className='tab' data-select='backend'>
          Backend
        </li>
        <li className='tab' data-select='full-stack'>
          Full-Stack
        </li>
        <li className='tab' data-select='ui-ux'>
          UI&UX
        </li>
      </ul>
      <ProjectsData />

      <div className='intro_title'>
        <h1>Projects!</h1>
      </div>
    </section>
  );
};

export default Projects;
