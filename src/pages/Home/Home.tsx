import GitHub from '/github.svg';
import Linkedin from '/linkedin.svg';
import Whatsapp from '/whatsapp.svg';
import Gmail from '/gmail.svg';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  const links = [
    { name: 'GitHub', url: 'https://github.com/MohamedBrzan', image: GitHub },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mohamed-brzan-01966518a/',
      image: Linkedin,
    },
    {
      name: 'Whatsapp',
      url: 'whatsapp://send?abid=+201113772369',
      image: Whatsapp,
    },
    {
      name: 'Gmail',
      url: 'mailto:mohamedbrzan.dev@gmail.com',
      image: Gmail,
    },
  ];

  const langs = ['HTML/CSS', 'Bootstrap', 'Sass', 'MUI' , 'Shadcn-UI', 'JavaScript', 'TypeScript', 'React', 'Next', 'Angular', 'Node', 'Express', 'MongoDB', 'Websocket', 'Jest', 'Git']

  return (
    <section className='home'>
      <div className='intro_text'>
        <div className='name'>
          {/* <h1 className='glitch' >I'm Mohamed Mahmoud Brzan</h1> */}
          <h1 className='glitch'>I'm Mohmaed</h1>
        </div>
        <div className='bio'>
          <p>
            Meet Mohamed Mahmoud, a talented web developer with a passion for
            creating beautiful and functional websites. With 3+ years of
            experience in the industry, <br /> I honed my skills in
            {langs.map((lang, i) => (
              <div className='lang' key={i}>{lang}</div>
            ))}
            , and other web technologies.
            <br /> My portfolio showcases a range of projects, from simple
            landing pages to complex web applications, all designed with a keen
            eye for detail and user experience.
          </p>
        </div>
      </div>
      <hr />

      <div className='social_links'>
        {links.map(({ name, url, image }, index) => (
          <Link to={url} key={index}>
            <figure>
              <img src={image} alt={name} />
            </figure>
          </Link>
        ))}
      </div>
      <div className='intro_title'>
        <h1>HELLO, There!</h1>
      </div>
    </section>
  );
};

export default Home;
