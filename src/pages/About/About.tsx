import { Link } from 'react-router-dom';
import book from '/book.svg';
import code from '/code.svg';
import './About.scss';
import { useEffect } from 'react';

const About = () => {
  const experience = [
      {
      title: 'Software Engineer ( Full Stack )',
      image: code,
      desc: `As a Full Stack Software Engineer,
      I'm responsible for developing,
      implementing, and maintaining end-to-end web applications.
      I'm working across both front-end and back-end technologies to design efficient,
      scalable, and user-friendly software solutions. my role involve collaborating closely with cross-functional teams,
      including designers, product managers, and other engineers, to translate business requirements into technical specifications.
      I'm contribute to all phases of the development lifecycle, ensuring code quality, optimizing application performance,
      and addressing complex challenges in a fast-paced environment.`,
      date: {
        from: '2023',
        to: 'Present  ( APPOUT ITS )',
      },
      url: { name: '', link: '' },
    },
    {
      title: 'Web Developer',
      image: code,
      desc: 'As a seasoned web developer, I specialize in building robust and user-friendly web applications. My toolkit includes a mix of front-end and back-end technologies, allowing me to create seamless experiences for users.',
      date: {
        from: '2022',
        to: '2023',
      },
      url: { name: '', link: '' },
    },
    {
      title: 'Frontend Developer',
      image: code,
      desc: 'As a frontend developer, I specialize in creating engaging and responsive user interfaces. My toolkit includes a mix of front-end technologies that allow me to build seamless web experiences.',
      date: {
        from: '2021',
        to: '2022',
      },
      url: { name: '', link: '' },
    },
    // {
    //   title: 'Army Service',
    //   image: army,
    //   desc: 'In Egypt, military service is mandatory for males between the ages of 18 and 30 for one to three years, depending on their education. As an individual who joined the Egypt army for one year, I underwent basic training and specialized training, which included physical fitness, weapons training, and tactical skills. During my service, I gained valuable experience in leadership, teamwork, and discipline, which have helped me in my personal and professional life. I also had the opportunity to serve my country and contribute to its security and stability. Although military service can be challenging, it is a valuable experience that can help individuals develop important skills and qualities.',
    //   date: {
    //     from: '2020',
    //     to: '2021',
    //   },
    //   url: { name: '', link: '' },
    // },
    // {
    //   title: 'Sales Representative',
    //   image: deal,
    //   desc: 'As a sales representative with 6+ years of experience, I have developed a range of skills and qualities that have helped me succeed in my role. I have learned to actively listen to customers, identify their pain points, and offer solutions that meet their needs',
    //   date: {
    //     from: '2014',
    //     to: '2020',
    //   },
    //   url: { name: '', link: '' },
    // },
  ];

  const read = [
    {
      title: 'Rich Dad Poor Dad',
      image: book,
      desc: '',
      date: {
        from: '',
        to: '',
      },
      url: { name: '', link: '' },
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
        {experience.map(({ title, date, image, desc, url }, index) => (
          <div key={index} className='work_brief'>
            <div className='position'>
              <div className='top_sec'>
                <div className='title'>
                  <h2>{title}</h2>
                  <figure>
                    <img src={image} alt={title} />
                  </figure>
                </div>
                <Link to={url.link}> {url.name}</Link>
              </div>
              <p>
                <strong>
                  <small>
                    {date.from && !date.to
                      ? date.from
                      : date.from + ' - ' + date.to}
                  </small>
                </strong>
              </p>
              <p>{desc}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className='title read'>
        <h1>Read.</h1>
      </div>

      <div className='work_data read'>
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
                <Link to={url.link}> {url.name}</Link>
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
