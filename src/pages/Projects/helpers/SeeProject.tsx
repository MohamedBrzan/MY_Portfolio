import { Link } from 'react-router-dom';
import { CloseProjectPage } from '../../../Functions/ShowProjectPage';
import Project from '../../../Ts/interfaces/Project';
import world from '/world.svg';
import CloseMenu from '/close.svg';
import externalLink from '/external-link.svg';

const SeeProject = (props: Project) => {
  const { title, image, desc, about, techs, website, github } = props;

  return (
    <div className='see_project'>
      <div className='backdrop' onClick={CloseProjectPage}></div>
      <div className='modal'>
        <div className='content'>
          <div className='project_title'>
            <h1>
              <strong>{title}</strong>
            </h1>{' '}
            <figure
              style={{ width: '5%', textAlign: 'end' }}
              onClick={CloseProjectPage}
            >
              <img src={CloseMenu} alt='Close Image' width='100%' />
            </figure>
          </div>

          <p className='project_desc'>{desc}</p>

          <figure>
            <img src={image} alt={title} loading='lazy' />
          </figure>
          <div className='project_about'>
            <h3>About</h3>
            <p>{about}</p>
          </div>
          <div className='project_techs'>
            <h3>Technologies</h3>
            <div className='techs'>
              {techs.map((tech, index) => (
                <span key={index}>
                  <strong>
                    <small>{tech}</small>
                  </strong>
                </span>
              ))}
            </div>
          </div>
          <div className='website_url'>
            <div className='top'>
              <h3>Website</h3>
              <figure>
                <img src={world} alt={title} />
              </figure>
            </div>
            <Link to={website}>{website}</Link>
          </div>
        </div>
        <div className='github'>
          <Link to={github}>
            <div className='git_content'>
              <h2>Open Project</h2>
              <figure>
                <img src={externalLink} alt={title} />
              </figure>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeeProject;
