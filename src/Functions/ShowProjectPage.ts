import ProjectPage from '../Ts/types/ProjectPage';

const ShowProjectPage = (props: ProjectPage) => {
  const {
    dispatch,
    title,
    desc,
    image,
    about,
    category,
    techs,
    website,
    github,
  } = props;
  document.querySelector('.see_project')?.classList.add('active');

  document.body.style.overflow = 'hidden';

  return dispatch({
    type: 'SHOW',
    title,
    desc,
    image,
    about,
    category,
    techs,
    website,
    github,
  });
};

export default ShowProjectPage;

export const CloseProjectPage = () => {
  document.querySelector('.see_project')?.classList.remove('active');
  document.body.style.overflow = 'auto';
};
