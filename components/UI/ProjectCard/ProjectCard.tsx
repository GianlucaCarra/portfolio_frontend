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
	tags: { id: string; name: string }[];
}) {
	return (
		<div className="bg-background-secondary flex min-w-[280px] flex-col gap-3 rounded-[5px] p-3 shadow-md">
			<Image
				width={1920}
				height={1080}
				src={image}
				alt={`${title} project thumbnail`}
				className="h-[150px] w-full rounded-[2px] object-cover object-top-left"
			/>

			<h4 className="w-full truncate text-base font-medium">{title}</h4>

			<span className="line-clamp-4 w-full overflow-hidden text-sm text-ellipsis">{desc}</span>

			<div className="scrollbar-hidden flex gap-1 overflow-x-auto mask-r-from-97% mask-l-from-97% px-1">
				{tags.map((tag) => (
					<ProjectTag key={tag.id} name={tag.name} />
				))}
			</div>

			<Link href={`/projects/${projectId}`} className="text-accent text-sm">
				See more
			</Link>
		</div>
	);
}
