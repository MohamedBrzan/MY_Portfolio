import { Link } from 'react-router-dom';
import book from '/book.svg';
import shop from '/shop.svg';
import army from '/army.svg';
import waiter from '/waiter.svg';
import code from '/code.svg';
import deal from '/deal.svg';
import './About.scss';
import { useEffect } from 'react';

const About = () => {
  const experience = [
    {
      title: 'Web Developer',
      image: code,
      desc: 'As a seasoned web developer, I specialize in building robust and user-friendly web applications. My toolkit includes a mix of front-end and back-end technologies, allowing me to create seamless experiences for users.',
      date: {
        from: '2022',
        to: '',
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
    {
      title: 'Army Service',
      image: army,
      desc: 'In Egypt, military service is mandatory for males between the ages of 18 and 30 for one to three years, depending on their education. As an individual who joined the Egypt army for one year, I underwent basic training and specialized training, which included physical fitness, weapons training, and tactical skills. During my service, I gained valuable experience in leadership, teamwork, and discipline, which have helped me in my personal and professional life. I also had the opportunity to serve my country and contribute to its security and stability. Although military service can be challenging, it is a valuable experience that can help individuals develop important skills and qualities.',
      date: {
        from: '2020',
        to: '2021',
      },
      url: { name: '', link: '' },
    },
    {
      title: 'Sales Representative',
      image: deal,
      desc: 'As a sales representative with three years of experience, I have developed a range of skills and qualities that have helped me succeed in my role. I have learned to actively listen to customers, identify their pain points, and offer solutions that meet their needs',
      date: {
        from: '2017',
        to: '2020',
      },
      url: { name: '', link: '' },
    },
    {
      title: 'Waiter',
      image: waiter,
      desc: 'As a waiter with one year of experience, I have developed excellent customer service skills and the ability to work in a fast-paced environment. I have gained experience in taking orders, serving food and drinks, and handling payments. I have also learned to work effectively as part of a team, communicating with kitchen staff and other servers to ensure that orders are delivered accurately and efficiently.',
      date: {
        from: '2016',
        to: '2017',
      },
      url: { name: '', link: '' },
    },

    {
      title: 'Sales Man',
      image: shop,
      desc: 'As a salesperson with two years of experience, I have developed a unique mix of characteristics and skills that have helped me succeed in my role. I have learned to treat each prospective customer as an individual and adjust my message or selling technique to suit them.',
      date: {
        from: '2014',
        to: '2016',
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
