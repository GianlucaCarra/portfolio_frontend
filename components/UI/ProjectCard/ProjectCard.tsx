import { LinkButton } from "../LinkButton/LinkButton";

export function ProjectCard({ projectId, title, desc, tags }: { projectId: string, title: string; desc: string; tags: string[] }) {
	return (
		<div className="w-50 bg-background-secondary-light flex flex-col p-3 rounded-md">
			<h4 className="text-lg font-semibold mb-2 w-full truncate">{title}</h4>

			<p className="text-sm text-font-secondary-light mb-4 h-20 overflow-hidden text-ellipsis line-clamp-4 w-full">{desc}</p>

			<div className="flex flex-col justify-between items-center">
				<span className="mb-1">{
				tags}
				</span>
				<LinkButton href={`/projects/${projectId}`} text="View Project" />
			</div>
		</div>
	);
}
