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
		<div className="bg-background-secondary flex min-w-[280px] flex-col gap-3 rounded-[5px] p-3 lg:min-w-[320px] lg:gap-4 lg:rounded-[7px] lg:p-4">
			<Image
				width={1920}
				height={1080}
				src={image}
				alt={`${title} project thumbnail`}
				className="aspect-video h-[150px] w-full rounded-[2px] object-cover object-top-left lg:h-[190px] lg:rounded-[4px]"
			/>

			<h4 className="line-clamp-1 w-full truncate overflow-hidden text-base font-medium text-ellipsis lg:text-lg">
				{title}
			</h4>

			<span className="line-clamp-4 w-full overflow-hidden text-base text-ellipsis">{desc}</span>

			<div className="scrollbar-hidden flex gap-1 overflow-x-auto">
				{tags.map((tag) => (
					<ProjectTag key={tag.id} name={tag.name} />
				))}
			</div>

			<Link
				href={`/projects/${projectId}`}
				className="text-accent text-sm hover:opacity-80 lg:text-base"
			>
				See more
			</Link>
		</div>
	);
}
//ProjectTag Slider mask-r-from-97% mask-l-from-97% px-1
