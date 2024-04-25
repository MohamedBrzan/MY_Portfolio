import Project from '../Ts/interfaces/Project';
import Action from './action';

const reducer = (state: Project, action: Action): Project => {
	const {
		released,
		title,
		desc,
		image,
		about,
		category,
		techs,
		website,
		github,
	} = action;
	switch (action.type) {
		case 'SHOW':
			return {
				released,
				title,
				desc,
				image,
				about,
				category,
				techs,
				website,
				github,
			};
		default:
			return state;
	}
};

export default reducer;
