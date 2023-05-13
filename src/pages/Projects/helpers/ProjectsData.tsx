import { useReducer } from 'react';
import SeeProject from './SeeProject';
import frontend1 from '/frontend_1.png';
import frontend2 from '/frontend_2.png';
import frontend3 from '/frontend_3.png';
import frontend4 from '/frontend_4.png';
import frontend5 from '/frontend_5.png';
import frontend6 from '/frontend_6.png';
import frontend7 from '/frontend_7.png';
import frontend8 from '/frontend_8.png';
import frontend9 from '/frontend_9.png';
import frontend10 from '/frontend_10.png';
import frontend11 from '/frontend_11.png';
import ShowProjectPage from '../../../Functions/ShowProjectPage';
import Project from '../../../Ts/interfaces/Project';
import reducer from '../../../store/reducer';
import initialState from '../../../store/store';

const ProjectsData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const data: Project[] = [
    {
      title: 'Multipurpose Website',
      desc: 'Many designs websites here',
      about:
        'Flexible website template that can be used to create almost any kind of website imaginable',
      category: 'frontend',
      image: frontend1,
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      website:
        'https://mohamedbrzan.github.io/multipurpose-bootstrap-template/',
      github:
        'https://github.com/MohamedBrzan/multipurpose-bootstrap-template/',
    },
    {
      title: 'Flourish E-Commerce',
      desc: 'Online platform that showcases furniture products and allows customers to purchase them online.',
      about:
        'Online platform that showcases furniture products and allows customers to purchase them online.',
      category: 'frontend',
      image: frontend2,
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      website:
        'https://mohamedbrzan.github.io/Flourish-eCommerce-Template/index-2.html',
      github: 'https://github.com/MohamedBrzan/Flourish-eCommerce-Template',
    },
    {
      title: 'Furnitica Store',
      desc: 'Online platform that showcases furniture products and allows customers to purchase them online.',
      about:
        'Online platform that showcases furniture products and allows customers to purchase them online.',
      category: 'frontend',
      image: frontend3,
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      website:
        'https://mohamedbrzan.github.io/Furnitica-Minimalist-Furniture/index-2.html',
      github: 'https://github.com/MohamedBrzan/Furnitica-Minimalist-Furniture',
    },
    {
      title: 'Ruby Jewelry Store',
      desc: 'Ruby is an online platform that showcases jewelry products and allows customers to purchase them online.',
      about:
        'online platform that showcases jewelry products and allows customers to purchase them online.',
      category: 'frontend',
      image: frontend4,
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      website: 'https://mohamedbrzan.github.io/Ruby-Jewelry-Store-eCommerce/',
      github: 'https://github.com/MohamedBrzan/Ruby-Jewelry-Store-eCommerce',
    },
    {
      title: 'Stroyka Store',
      desc: 'Stroyka Tools Store, improve your work now.',
      about:
        'A tools website is an online platform that provides tools and resources for various purposes.',
      category: 'frontend',
      image: frontend5,
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      website:
        'https://mohamedbrzan.github.io/Stroyka-Tools-Store-HTML-Template/',
      github:
        'hhttps://github.com/MohamedBrzan/Stroyka-Tools-Store-HTML-Template',
    },
    {
      title: 'Molla E-Commerce',
      desc: 'Many styles and designs for E-Commerce websites.',
      about:
        'Flexible website template that can be used to create almost any kind of website imaginable',
      category: 'frontend',
      image: frontend6,
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      website: 'https://mohamedbrzan.github.io/molla-eCommerce-html-template/',
      github: 'https://github.com/MohamedBrzan/molla-eCommerce-html-template',
    },
    {
      title: 'E-CommerCe',
      desc: "All what you need you'll find it here.",
      about:
        'An e-commerce website is an online platform that allows businesses to sell goods or services online and collect payment via an online payment system.',
      category: 'frontend',
      image: frontend7,
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      website:
        'https://mohamedbrzan.github.io/E-CommerCe/?flexRadioDefault=on#',
      github: 'https://github.com/MohamedBrzan/E-CommerCe',
    },
    {
      title: 'Oxygen Company',
      desc: 'this is Oxygen Company website to breath the life.',
      about:
        'A company website is an online platform that provides information about a business, its products or services, and its mission and values.',
      category: 'frontend',
      image: frontend8,
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      website: 'https://mohamedbrzan.github.io/Oxygen-Company/index.html',
      github: 'https://github.com/MohamedBrzan/Oxygen-Company',
    },
    {
      title: 'The Company',
      desc: 'you can make you company website now.',
      about:
        'A company website is an online platform that provides information about a business, its products or services, and its mission and values.',
      category: 'frontend',
      image: frontend9,
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      website: 'https://mohamedbrzan.github.io/The-Company/',
      github: 'https://github.com/MohamedBrzan/The-Company',
    },
    {
      title: 'Lumpia E-Commerce',
      desc: 'This is electronic E-commerce for all electronics you need.',
      about:
        'An e-commerce website is an online platform that allows businesses to sell goods or services online and collect payment via an online payment system.',
      category: 'frontend',
      image: frontend10,
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      website: 'https://mohamedbrzan.github.io/Lumpia-E-Commerce/',
      github: 'https://github.com/MohamedBrzan/The-Company',
    },
    {
      title: 'Pizza Restaurant',
      desc: 'All Pizzas special here, try it now.',
      about:
        'A pizza website is an online platform that showcases pizza products and allows customers to order them online.',
      category: 'frontend',
      image: frontend11,
      techs: ['HTML', 'CSS', 'Bootstrap', 'JS', 'React.js'],
      website: 'https://mohamedbrzan.github.io/',
      github: 'https://github.com/MohamedBrzan/MohamedBrzan.github.io',
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
