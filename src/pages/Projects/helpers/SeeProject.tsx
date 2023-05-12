import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CloseProjectPage } from '../../../Functions/ShowProjectPage';
import Project from '../../../Ts/interfaces/Project';
import world from '/world.svg';
import CloseMenu from '/close.svg';
import externalLink from '/external-link.svg';

const SeeProject = (props: Project) => {
  const [loading, setLoading] = useState(true);
  const [titleText, setTitleText] = useState<string>('');
  const [imageText, setImageText] = useState<string>('');
  const [descText, setDescText] = useState<string>('');
  const [aboutText, setAboutText] = useState<string>('');
  const [techsText, setTechsText] = useState<string[]>(['']);
  const [websiteText, setWebsiteText] = useState<string>('');
  const [githubText, setGithubText] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    setTitleText(props?.title);
    setImageText(props?.image);
    setDescText(props?.desc);
    setAboutText(props?.about);
    setTechsText(props?.techs);
    setWebsiteText(props?.website);
    setGithubText(props?.github);
    setLoading(false);
  }, [
    props?.about,
    props?.desc,
    props?.github,
    props?.image,
    props?.techs,
    props?.title,
    props?.website,
  ]);

  console.log(titleText);

  return (
    <div className='see_project'>
      <div className='backdrop' onClick={CloseProjectPage}></div>
      <div className='modal'>
        {!loading && (
          <>
            <div className='content'>
              <div className='project_title'>
                <h1>
                  <strong>{titleText}</strong>
                </h1>{' '}
                <figure
                  style={{ width: '5%', textAlign: 'end' }}
                  onClick={CloseProjectPage}
                >
                  <img src={CloseMenu} alt='Close Image' width='100%' />
                </figure>
              </div>

              <p className='project_desc'>{descText}</p>

              <figure>
                <img src={imageText} alt={titleText} />
              </figure>
              <div className='project_about'>
                <h3>About</h3>
                <p>{aboutText}</p>
              </div>
              <div className='project_techs'>
                <h3>Technologies</h3>
                {techsText.map((tech, index) => (
                  <span key={index}>
                    <strong>
                      <small>{tech}</small>
                    </strong>
                  </span>
                ))}
              </div>
              <div className='website_url'>
                <div className='top'>
                  <h3>Website</h3>
                  <figure>
                    <img src={world} alt={titleText} />
                  </figure>
                </div>
                <Link to={websiteText}>{websiteText}</Link>
              </div>
            </div>
            <div className='github'>
              <Link to={githubText}>
                <div className='git_content'>
                  <h2>Open Project</h2>
                  <figure>
                    <img src={externalLink} alt={titleText} />
                  </figure>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SeeProject;
