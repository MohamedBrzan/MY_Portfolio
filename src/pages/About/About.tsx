import book from '/book.svg';
import code from '/code.svg';
import './About.scss';
import { useCursor } from '../../contexts/CursorContext';
import SEO from '../../Components/SEO';

const About = () => {
  const { setOpen } = useCursor();

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

  return (
    <section className="about">
      <SEO title="Experience — Mohamed Mahmoud" />
      <div className="title about_me">
        <h1>Experience.</h1>
      </div>
      <hr />

      <div className="work_data">
        {experience.map(({ title, date, image, desc, url }, index) => (
          <div key={index} className="work_brief">
            <div className="position">
              <div className="top_sec">
                <div className="title">
                  <h2>{title}</h2>
                  <figure>
                    <img src={image} alt={title} />
                  </figure>
                </div>
                {url.link && (
                  <a
                    href={url.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                  >
                    {url.name}
                  </a>
                )}
              </div>
              <p>
                <strong>
                  <small>{date.from && !date.to ? date.from : date.from + ' - ' + date.to}</small>
                </strong>
              </p>
              <p>{desc}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="title read">
        <h2>Read.</h2>
      </div>

      <div className="work_data read">
        {read.map(({ title, image, desc, url }, index) => (
          <div key={index} className="work_brief">
            <div className="position">
              <div className="top_sec">
                <div className="title">
                  <h3>{title}</h3>
                  <figure>
                    <img src={image} alt={title} />
                  </figure>
                </div>
                {url.link && (
                  <a
                    href={url.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                  >
                    {url.name}
                  </a>
                )}
              </div>
              <p>{desc}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="fixed_intro" aria-hidden="true">
        <p>About Me.</p>
      </div>
    </section>
  );
};

export default About;
