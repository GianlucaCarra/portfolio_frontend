"use client";

import { useRef } from "react";
import { Project } from "@/types/project.interface";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export function ProjectCarousel({ data }: { data: Project[] }) {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (!scrollRef.current) return;
		const { clientWidth } = scrollRef.current;
		const scrollAmount = direction === "left" ? -clientWidth / 1.2 : clientWidth / 1.2;
		scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
	};

	return (
		<div className="group relative w-full">
			<button
				onClick={() => scroll("left")}
				className="text-font-secondary/80 hover:bg-accent/90 bg-background-secondary/80 absolute top-1/2 left-[-5%] z-20 hidden -translate-y-1/2 rounded-full p-3 opacity-0 shadow-md transition-all group-hover:opacity-100 hover:scale-110 hover:cursor-pointer hover:text-white lg:flex"
				aria-label="Scroll left"
			>
				<BiChevronLeft className="text-2xl" />
			</button>

			<div className="relative -mx-4 -my-5 mask-r-from-97% mask-l-from-97% lg:-mx-6 lg:-my-11">
				<div
					ref={scrollRef}
					className="scrollbar-hidden flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-4 py-5 lg:gap-4 lg:px-6 lg:py-11"
				>
					{data.map((project) => (
						<div key={project.id} className="snap-start">
							<ProjectCard
								projectId={project.id}
								title={project.name}
								image={project.images?.[0]?.imageUrl ?? "/fallback.png"}
								desc={project.description}
								tags={project.tags}
							/>
						</div>
					))}
				</div>
			</div>

			<button
				onClick={() => scroll("right")}
				className="text-font-secondary/80 hover:bg-accent/90 bg-background-secondary/80 absolute top-1/2 right-[-5%] z-20 hidden -translate-y-1/2 rounded-full p-3 opacity-0 shadow-md transition-all group-hover:opacity-100 hover:scale-110 hover:cursor-pointer hover:text-white lg:flex"
				aria-label="Scroll right"
			>
				<BiChevronRight className="text-2xl" />
			</button>
		</div>
	);
}
