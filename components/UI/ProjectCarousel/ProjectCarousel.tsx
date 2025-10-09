import { ProjectCard } from "../ProjectCard/ProjectCard";

export function ProjectCarousel({ data }: { data: any[] }) {
	console.log(data[0]);

	return (
		<div className="scrollbar-hidden flex gap-2 overflow-x-auto">
			{data.map((project) => (
				<ProjectCard
					key={project.id}
					projectId={project.id}
					title={project.name}
					image={project.images[0].imageUrl}
					desc={project.description}
					tags={project.tags}
				/>
			))}
		</div>
	);
}
