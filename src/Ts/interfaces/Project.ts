interface Project {
	title: string;
	desc: string;
	image: string;
	about: string;
	techs: string[];
	website: string;
	github: string;
	category: string | string[];
	released: boolean;
}

export default Project;
