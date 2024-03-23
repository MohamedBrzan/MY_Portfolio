type ProjectPage = {
  dispatch: React.Dispatch<any>;
  title: string;
  desc: string;
  image: string;
  about: string;
  techs: string[];
  website: string;
  github: string;
  category: string | string[];
};

export default ProjectPage;
