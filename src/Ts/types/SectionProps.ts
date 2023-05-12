import Project from '../interfaces/Project';
import Action from './Action';

type SectionProps = {
  initialState: Project;
  reducer: (state: Project, action: Action) => Project;
};

export default SectionProps;
