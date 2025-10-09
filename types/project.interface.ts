export interface Project {
	id: string;
	name: string;
	title: string;
	description: string;
	images: { id:	string; imageUrl: string }[];
	tags:  { id:	string; name: string }[];
}
