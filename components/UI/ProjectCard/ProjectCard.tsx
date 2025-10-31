"use client";
import Link from "next/link";
import Image from "next/image";
import { ProjectTag } from "../ProjectTag/ProjectTag";
import { BiChevronRight } from "react-icons/bi";
import { useRef } from "react";

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
	const scrollRef = useRef<HTMLDivElement>(null);

	function handleMouseEnter() {
		const el = scrollRef.current;
		if (!el) return;

		const parentWidth = el.parentElement?.offsetWidth ?? 0;
		const scrollWidth = el.scrollWidth;
		const maxTranslate = scrollWidth - parentWidth;
		el.style.transform = `translateX(-${maxTranslate}px)`;
		el.style.transition = "2000ms";
	}

	function handleMouseLeave() {
		const el = scrollRef.current;
		if (!el) return;
		el.style.transform = "translateX(0)";
	}

	return (
		<Link
			href={`/projects/${projectId}`}
			className="group/card block snap-center"
			aria-label={`See details of project ${title}`}
		>
			<div
				className="bg-background-secondary lg:max-w-[320px]lg:gap-4 flex max-w-[280px] min-w-[280px] flex-col gap-3 rounded-[5px] p-3 shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl lg:min-w-[320px] lg:rounded-[7px] lg:p-4"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className="relative overflow-hidden rounded-[2px] lg:rounded-[4px]">
					<Image
						width={1920}
						height={1080}
						src={image}
						alt={`${title} project thumbnail`}
						className="aspect-video h-[150px] w-full object-cover object-top transition-transform duration-300 group-hover/card:scale-105 lg:h-[190px]"
					/>
				</div>

				<h4 className="text-font-primary line-clamp-1 w-full text-base font-medium lg:text-lg">
					{title}
				</h4>

				<p className="text-font-secondary line-clamp-3 text-sm leading-relaxed lg:text-base">
					{desc}
				</p>

				<div className="relative h-[30px] w-full overflow-x-auto mask-r-from-95% mask-l-from-95% px-1 lg:h-[40px]">
					<div
						ref={scrollRef}
						className="absolute top-0 left-0 flex gap-1.5 px-1.5 duration-[13000ms] ease-linear lg:px-2 lg:transition-transform"
					>
						{tags.map((tag) => (
							<ProjectTag key={tag.id} name={tag.name} />
						))}
					</div>
				</div>

				<span className="text-accent mt-auto flex items-center gap-1 text-sm font-medium lg:text-base">
					See Project
					<BiChevronRight className="h-4 w-4 transition-transform group-hover/card:translate-x-1 lg:h-5 lg:w-5" />
				</span>
			</div>
		</Link>
	);
}
