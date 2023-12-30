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
      url: 'mailto:mohamedmahmoudbrzan@gmail.com',
      image: Gmail,
    },
  ];

  return (
    <section className='home'>
      <div className='intro_text'>
        <div className='name'>
          {/* <h1 className='glitch' >I'm Mohamed Mahmoud Brzan</h1> */}
          <h1 className='glitch'>I'm M.Mahmoud</h1>
        </div>
        <div className='bio'>
          <p>
            Meet Mohamed Mahmoud, a talented frontend developer with a passion
            for creating beautiful and functional websites. With 2+ years of
            experience in the industry, <br /> I honed my skills in JavaScript,
            and other frontend technologies. <br /> Their portfolio showcases a
            range of projects, from simple landing pages to complex web
            applications, all designed with a keen eye for detail and user
            experience.
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
