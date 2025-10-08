import { LinkButton } from "../LinkButton/LinkButton";

export function ProjectCard({
	projectId,
	title,
	desc,
	tags,
}: {
	projectId: string;
	title: string;
	desc: string;
	tags: string[];
}) {
	return (
		<div className="bg-background-secondary-light flex w-50 flex-col rounded-md p-3">
			<h4 className="mb-2 w-full truncate text-lg font-semibold">{title}</h4>

			<p className="text-font-secondary-light mb-4 line-clamp-4 h-20 w-full overflow-hidden text-sm text-ellipsis">
				{desc}
			</p>

			<div className="flex flex-col items-center justify-between">
				<span className="mb-1">{tags}</span>
				<LinkButton href={`/projects/${projectId}`} text="View Project" />
			</div>
		</div>
	);
}
