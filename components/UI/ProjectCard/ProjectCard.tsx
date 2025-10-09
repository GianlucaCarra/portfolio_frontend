import Image from "next/image";
import { ProjectTag } from "../ProjectTag/ProjectTag";
import Link from "next/link";

export function ProjectCard({
	projectId,
	title,
	image,
	desc,
	tags,
}: {
	projectId: string;
	title: string;
	image: string;
	desc: string;
	tags: any[];
}) {
	return (
		<div className="bg-background-secondary flex w-[140px] min-w-[140px] flex-col gap-[6px] rounded-[5px] p-[10px]">
			<Image
				width={100}
				height={100}
				src={image}
				alt={`${title} project thumbnail`}
				className="h-[65px] max-h-[65px] w-full rounded-[2px] object-cover"
			/>

			<h4 className="w-full truncate text-[12px] font-medium">{title}</h4>

			<span className="line-clamp-4 w-full overflow-hidden text-[9px] text-ellipsis">{desc}</span>

			<div className="scrollbar-hidden flex gap-1 overflow-x-auto">
				{tags.map((tag) => (
					<ProjectTag key={tag.id} name={tag.name} />
				))}
			</div>

			<Link href={`/projects/${projectId}`} className="text-accent text-[9px]">
				See more
			</Link>
		</div>
	);
}
