import { useState, useCallback } from 'react';
import SeeProject from './SeeProject';
import frontend1 from '/frontend_1.webp';
import frontend2 from '/frontend_2.webp';
import frontend3 from '/frontend_3.webp';
import frontend4 from '/frontend_4.webp';
import frontend5 from '/frontend_5.webp';
import frontend6 from '/frontend_6.webp';
import frontend8 from '/frontend_8.webp';
import frontend10 from '/frontend_10.webp';
import highPointImg from '/high_point.webp';
import aramTechImg from '/aram_tech.webp';
import hippoImg from '/hippo.webp';
import faceXImg from '/face_x.webp';
import yoomImg from '/zoom.webp';
import Project from '../../../Ts/interfaces/Project';
import prismicImg from '/prismic.webp';

const data: Project[] = [
  {
    title: 'YOOM Video Chat',
    desc: 'Many designs websites here',
    about:
      'Flexible website template that can be used to create almost any kind of website imaginable',
    category: ['frontend', 'backend'],
    image: yoomImg,
    techs: [
      'HTML',
      'CSS',
      'Bootstrap',
      'Javascript',
      'typescript',
      'react',
      'next',
      'node',
      'MUI',
      'shadcn-ui',
      'stream',
      'clerk',
    ],
    released: true,
    website: 'https://yoom-today.vercel.app',
    github: 'https://github.com/MohamedBrzan/video_chat_app',
  },
  {
    title: 'Social Media FacX Web App',
    desc: 'Many designs websites here',
    about:
      'Flexible website template that can be used to create almost any kind of website imaginable',
    category: ['frontend', 'backend'],
    image: faceXImg,
    techs: [
      'HTML',
      'CSS',
      'Bootstrap',
      'Javascript',
      'typescript',
      'react',
      'next',
      'node',
      'express',
      'mongodb',
      'MUI',
      'shadcn-ui',
    ],
    released: false,
    website: 'https://facex-front.onrender.com',
    github: 'https://github.com/MohamedBrzan/FaceX_Frontend',
  },
  {
    title: 'Hippo Digital Website',
    desc: 'Many designs websites here',
    about:
      'Flexible website template that can be used to create almost any kind of website imaginable',
    category: ['frontend', 'backend'],
    image: hippoImg,
    techs: [
      'HTML',
      'CSS',
      'Bootstrap',
      'Javascript',
      'typescript',
      'react',
      'next',
      'node',
      'express',
      'mongodb',
      'MUI',
      'shadcn-ui',
    ],
    released: true,
    website: 'https://hippoapp.onrender.com/',
    github: 'https://github.com/MohamedBrzan/Hippo_Digital_App',
  },
  {
    title: 'Prismic Landing Page',
    desc: `Prismic it's one of the most popular CMS sites`,
    about:
      'Flexible website template that can be used to create almost any kind of website imaginable',
    category: ['frontend', 'backend'],
    image: prismicImg,
    techs: [
      'HTML',
      'CSS',
      'Bootstrap',
      'Sass',
      'Javascript',
      'next',
      'typescript',
      'prismic CMS',
      'gsap',
    ],
    released: true,
    website: 'https://prismic-lp.vercel.app/',
    github: 'https://github.com/MohamedBrzan/prismic_LP',
  },
  {
    title: 'High Point Company Website',
    desc: `High Point it's a tech solutions company for solving a tech problems`,
    about:
      'Flexible website template that can be used to create almost any kind of website imaginable',
    category: ['frontend', 'backend'],
    image: highPointImg,
    techs: [
      'HTML',
      'CSS',
      'Bootstrap',
      'Sass',
      'Javascript',
      'react',
      'node',
      'express',
      'mongodb',
    ],
    released: true,
    website: 'https://hp-tech.com/',
    github: 'https://github.com/MohamedBrzan/high-point-frontend',
  },
  {
    title: 'Aram Tech Website',
    desc: 'Many designs websites here',
    about:
      'Flexible website template that can be used to create almost any kind of website imaginable',
    category: ['frontend', 'backend'],
    image: aramTechImg,
    techs: [
      'HTML',
      'CSS',
      'Bootstrap',
      'Javascript',
      'typescript',
      'react',
      'node',
      'express',
      'mongodb',
    ],
    released: true,
    website: 'https://mazeedsoft.onrender.com/',
    github: 'https://github.com/MohamedBrzan/MazeedSoft',
  },
  {
    title: 'Multipurpose Website',
    desc: 'Many designs websites here',
    about:
      'Flexible website template that can be used to create almost any kind of website imaginable',
    category: ['frontend'],
    image: frontend1,
    techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
    released: true,
    website: 'https://mohamedbrzan.github.io/multipurpose-bootstrap-template/',
    github: 'https://github.com/MohamedBrzan/multipurpose-bootstrap-template/',
  },
  {
    title: 'Flourish E-Commerce',
    desc: 'Online platform that showcases furniture products and allows customers to purchase them online.',
    about:
      'Online platform that showcases furniture products and allows customers to purchase them online.',
    category: ['frontend'],
    image: frontend2,
    techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
    released: true,
    website: 'https://mohamedbrzan.github.io/Flourish-eCommerce-Template/index-2.html',
    github: 'https://github.com/MohamedBrzan/Flourish-eCommerce-Template',
  },
  {
    title: 'Furnitica Store',
    desc: 'Online platform that showcases furniture products and allows customers to purchase them online.',
    about:
      'Online platform that showcases furniture products and allows customers to purchase them online.',
    category: ['frontend'],
    image: frontend3,
    techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
    released: true,
    website: 'https://mohamedbrzan.github.io/Furnitica-Minimalist-Furniture/index-2.html',
    github: 'https://github.com/MohamedBrzan/Furnitica-Minimalist-Furniture',
  },
  {
    title: 'Ruby Jewelry Store',
    desc: 'Ruby is an online platform that showcases jewelry products and allows customers to purchase them online.',
    about:
      'online platform that showcases jewelry products and allows customers to purchase them online.',
    category: ['frontend'],
    image: frontend4,
    techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
    released: true,
    website: 'https://mohamedbrzan.github.io/Ruby-Jewelry-Store-eCommerce/',
    github: 'https://github.com/MohamedBrzan/Ruby-Jewelry-Store-eCommerce',
  },
  {
    title: 'Stroyka Store',
    desc: 'Stroyka Tools Store, improve your work now.',
    about:
      'A tools website is an online platform that provides tools and resources for various purposes.',
    category: ['frontend'],
    image: frontend5,
    techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
    released: true,
    website: 'https://mohamedbrzan.github.io/Stroyka-Tools-Store-HTML-Template/',
    github: 'https://github.com/MohamedBrzan/Stroyka-Tools-Store-HTML-Template',
  },
  {
    title: 'Molla E-Commerce',
    desc: 'Many styles and designs for E-Commerce websites.',
    about:
      'Flexible website template that can be used to create almost any kind of website imaginable',
    category: ['frontend'],
    image: frontend6,
    techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
    released: true,
    website: 'https://mohamedbrzan.github.io/molla-eCommerce-html-template/',
    github: 'https://github.com/MohamedBrzan/molla-eCommerce-html-template',
  },
  {
    title: 'Oxygen Company',
    desc: 'this is Oxygen Company website to breath the life.',
    about:
      'A company website is an online platform that provides information about a business, its products or services, and its mission and values.',
    category: ['frontend'],
    image: frontend8,
    techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
    released: true,
    website: 'https://mohamedbrzan.github.io/Oxygen-Company/index.html',
    github: 'https://github.com/MohamedBrzan/Oxygen-Company',
  },
  {
    title: 'Lumpia E-Commerce',
    desc: 'This is electronic E-commerce for all electronics you need.',
    about:
      'An e-commerce website is an online platform that allows businesses to sell goods or services online and collect payment via an online payment system.',
    category: ['frontend'],
    image: frontend10,
    techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
    released: true,
    website: 'https://mohamedbrzan.github.io/Lumpia-E-Commerce/',
    github: 'https://github.com/MohamedBrzan/Lumpia-E-Commerce',
  },
];

const ProjectsData = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const handleClose = useCallback(() => setSelectedProject(null), []);

  return (
    <section className="projects_sections">
      {data.map((project, index) => (
        <div
          className="project"
          key={index}
          onClick={() => setSelectedProject(project)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setSelectedProject(project);
            }
          }}
          aria-label={`View ${project.title} details`}
        >
          <figure>
            <img src={project.image} alt={project.title} loading="lazy" />
          </figure>
          <div className="content">
            <div className="text">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="tech">
                {project.techs.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
          {!project.released && (
            <div className="soon">
              <strong>coming soon</strong>
            </div>
          )}
        </div>
      ))}
      {selectedProject && (
        <SeeProject {...selectedProject} onClose={handleClose} />
      )}
    </section>
  );
};

export default ProjectsData;
