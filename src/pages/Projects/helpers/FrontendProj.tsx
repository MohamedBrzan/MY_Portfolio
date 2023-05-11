import pro1 from '/pro1.jpg';

const FrontendProj = () => {
  const frontend = [
    {
      title: 'E-commerce Website',
      desc: 'this is desc',
      image: pro1,
      techs: ['HTML', 'CSS', 'JS'],
    },
    {
      title: 'E-commerce Website',
      desc: 'this is desc',
      image: pro1,
      techs: ['HTML', 'CSS', 'JS'],
    },
  ];

  return (
    <section className='projects_sections' id='frontend'>
      {frontend.map(({ title, desc, image, techs }, index) => (
        <div className='project' key={index}>
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
      ))}
    </section>
  );
};

export default FrontendProj;
