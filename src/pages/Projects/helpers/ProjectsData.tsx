import { useReducer } from 'react';
import SeeProject from './SeeProject';
import pro1 from '/pro1.jpg';
import pro2 from '/pro2.jpg';
import pro3 from '/pro3.jpg';
import pro4 from '/pro4.jpg';
import ShowProjectPage from '../../../Functions/ShowProjectPage';
import Project from '../../../Ts/interfaces/Project';
import reducer from '../../../store/reducer';
import initialState from '../../../store/store';

const ProjectsData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const data: Project[] = [
    {
      title: 'Frontend one E-commerce Website',
      desc: 'this is desc',
      about: 'this is about',
      category: 'frontend',
      image: pro1,
      techs: ['HTML', 'CSS', 'JS'],
      website:
        'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
      github:
        'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
    },
    {
      title: 'Frontend two E-commerce Website',
      desc: 'this is desc',
      about: 'this is about',
      category: 'frontend',
      image: pro1,
      techs: ['HTML', 'CSS', 'JS'],
      website:
        'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
      github:
        'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
    },
    {
      title: 'Backend one E-commerce Website',
      desc: 'this is desc',
      about: 'this is about',
      category: 'backend',
      image: pro2,
      techs: ['HTML', 'CSS', 'JS'],
      website:
        'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
      github:
        'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
    },
    {
      title: 'Backend two E-commerce Website',
      desc: 'this is desc',
      about: 'this is about',
      category: 'backend',
      image: pro3,
      techs: ['HTML', 'CSS', 'JS'],
      website:
        'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
      github:
        'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
    },
    {
      title: 'FullStack one E-commerce Website',
      desc: 'this is desc',
      about: 'this is about',
      category: 'full-stack',
      image: pro3,
      techs: ['HTML', 'CSS', 'JS'],
      website:
        'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
      github:
        'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
    },
    {
      title: 'FullStack two E-commerce Website',
      desc: 'this is desc',
      about: 'this is about',
      category: 'full-stack',
      image: pro4,
      techs: ['HTML', 'CSS', 'JS'],
      website:
        'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
      github:
        'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
    },
    {
      title: 'UiUx one E-commerce Website',
      desc: 'this is desc',
      about: 'this is about',
      category: 'ui-ux',
      image: pro4,
      techs: ['HTML', 'CSS', 'JS'],
      website:
        'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
      github:
        'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
    },
    {
      title: 'UiUx two E-commerce Website',
      desc: 'this is desc',
      about: 'this is about',
      category: 'ui-ux',
      image: pro2,
      techs: ['HTML', 'CSS', 'JS'],
      website:
        'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
      github:
        'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
    },
  ];

  return (
    <section className='projects_sections'>
    
      {data.map(
        (
          { title, desc, image, about, category, techs, website, github },
          index
        ) => (
          <div
            className='project'
            key={index}
            id={category}
            onClick={() =>
              ShowProjectPage({
                dispatch,
                title,
                desc,
                image,
                about,
                category,
                techs,
                website,
                github,
              })
            }
          >
            <figure>
              <img src={image} alt={title} loading='lazy' />
            </figure>
            <div className='content'>
              <div className='text'>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className='tech'>
                  {techs.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      )}
      <SeeProject {...state} />
    </section>
  );
};

export default ProjectsData;
