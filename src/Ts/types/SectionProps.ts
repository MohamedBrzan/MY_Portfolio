import Action from '../../store/action';
import Project from '../interfaces/Project';

type SectionProps = {
  initialState: Project;
  reducer: (state: Project, action: Action) => Project;
};

export default SectionProps;
