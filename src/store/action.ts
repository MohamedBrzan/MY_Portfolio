export type Action = {
  type: 'SHOW';
  dispatch: React.DispatchWithoutAction;
  title: string;
  desc: string;
  image: string;
  about: string;
  techs: string[];
  website: string;
  github: string;
  category: string;
};

export default Action;
