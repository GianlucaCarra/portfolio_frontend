import { getProjects } from "@/services/authService";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { Project } from "@/types/project.interface";

export async function ProjectSlider() {
	const { data } = await getProjects();

	return (
		<div className="flex gap-4 overflow-x-auto scrollbar-hidden px-7 mask-l-from-95% mask-r-from-95%">
			{data.map(({ id, name, description, tags }: Project) => {
				<ProjectCard key={id} projectId={id.toString()} title={name} desc={description} tags={tags} />
			})}
		</div>
	);
}
