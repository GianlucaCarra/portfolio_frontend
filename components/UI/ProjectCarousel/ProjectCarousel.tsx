import { Project } from "@/types/project.interface";
import { ProjectCard } from "../ProjectCard/ProjectCard";

export function ProjectCarousel({ data }: { data: Project[] }) {
	if(!data) return null;

	return (
		<div className="scrollbar-hidden flex gap-2 overflow-x-auto">
			{data.map((project) => (
				<ProjectCard
					key={project.id}
					projectId={project.id}
					title={project.name}
					image={project.images?.[0]?.imageUrl ?? "/fallback.png"}
					desc={project.description}
					tags={project.tags}
				/>
			))}
		</div>
	);
}
