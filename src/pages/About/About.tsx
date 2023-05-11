import { Link } from 'react-router-dom';
import menu from '/menu-hamburger.svg';
import './About.scss';
import { useEffect } from 'react';

const About = () => {
  const experience = [
    {
      title: 'Engineering',
      image: menu,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, atque, non illo dolorem sequi nisi illum ipsamtotam laudantium nulla doloribus sit libero ex recusandaecorrupti aspernatur perferendis error asperiores.',

      url: { name: 'GitHub', link: 'http://github.com/' },
    },
    {
      title: 'Engineering',
      image: menu,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, atque, non illo dolorem sequi nisi illum ipsamtotam laudantium nulla doloribus sit libero ex recusandaecorrupti aspernatur perferendis error asperiores.',

      url: { name: 'GitHub', link: 'http://github.com/' },
    },
    {
      title: 'Engineering',
      image: menu,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, atque, non illo dolorem sequi nisi illum ipsamtotam laudantium nulla doloribus sit libero ex recusandaecorrupti aspernatur perferendis error asperiores.',

      url: { name: 'GitHub', link: 'http://github.com/' },
    },
    {
      title: 'Engineering',
      image: menu,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, atque, non illo dolorem sequi nisi illum ipsamtotam laudantium nulla doloribus sit libero ex recusandaecorrupti aspernatur perferendis error asperiores.',

      url: { name: 'GitHub', link: 'http://github.com/' },
    },
  ];

  const read = [
    {
      title: 'Engineering',
      image: menu,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, atque, non illo dolorem sequi nisi illum ipsamtotam laudantium nulla doloribus sit libero ex recusandaecorrupti aspernatur perferendis error asperiores.',

      url: { name: 'GitHub', link: 'http://github.com/' },
    },
    {
      title: 'Engineering',
      image: menu,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, atque, non illo dolorem sequi nisi illum ipsamtotam laudantium nulla doloribus sit libero ex recusandaecorrupti aspernatur perferendis error asperiores.',

      url: { name: 'GitHub', link: 'http://github.com/' },
    },
    {
      title: 'Engineering',
      image: menu,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, atque, non illo dolorem sequi nisi illum ipsamtotam laudantium nulla doloribus sit libero ex recusandaecorrupti aspernatur perferendis error asperiores.',

      url: { name: 'GitHub', link: 'http://github.com/' },
    },
    {
      title: 'Engineering',
      image: menu,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, atque, non illo dolorem sequi nisi illum ipsamtotam laudantium nulla doloribus sit libero ex recusandaecorrupti aspernatur perferendis error asperiores.',

      url: { name: 'GitHub', link: 'http://github.com/' },
    },
  ];

  useEffect(() => {
    document.querySelectorAll('section.about .work_data a').forEach((link) => {
      link.addEventListener('mouseover', () => {
        document.getElementById('inner_cursor')?.classList.add('open');
      });
      link.addEventListener('mouseleave', () => {
        document.getElementById('inner_cursor')?.classList.remove('open');
      });
    });
  }, []);

  return (
    <section className='about'>
      <div className='title about_me'>
        <h1>Experience.</h1>
      </div>
      <hr />

      <div className='work_data'>
        {experience.map(({ title, image, desc, url }, index) => (
          <div key={index} className='work_brief'>
            <div className='position'>
              <div className='top_sec'>
                <div className='title'>
                  <h2>{title}</h2>
                  <figure>
                    <img src={image} alt={title} />
                  </figure>
                </div>
                <Link to={url.link}>View {url.name}</Link>
              </div>
              <p>{desc}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className='title read'>
        <h1>Read.</h1>
      </div>

      <div className='work_data'>
        {read.map(({ title, image, desc, url }, index) => (
          <div key={index} className='work_brief'>
            <div className='position'>
              <div className='top_sec'>
                <div className='title'>
                  <h2>{title}</h2>
                  <figure>
                    <img src={image} alt={title} />
                  </figure>
                </div>
                <Link to={url.link}>View {url.name}</Link>
              </div>
              <p>{desc}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className='fixed_intro'>
        <h1>About Me.</h1>
      </div>
    </section>
  );
};

export default About;
