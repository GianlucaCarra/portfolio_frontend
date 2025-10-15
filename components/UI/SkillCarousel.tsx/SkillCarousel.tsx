import { Skill } from "@/types/skill.type";
import Image from "next/image";

export function SkillCarousel({ reverse, data }: { reverse?: boolean; data: Skill[] }) {
	return (
		<div className="scrollbar-hidden left-0 flex w-full flex-nowrap overflow-x-hidden mask-r-from-95% mask-l-from-95%">
			<div
				className={`flex-center ${reverse ? "animate-slider-reverse" : "animate-slider"} gap-3 pr-3`}
			>
				{data.map((skill, index) => (
					<Image
						key={index}
						src={skill.logoUrl}
						alt={`${skill.name} Logo`}
						width={70}
						height={70}
						className="h-16 w-16 flex-none"
					/>
				))}
			</div>

			<div
				aria-hidden
				className={`flex-center ${reverse ? "animate-slider-reverse" : "animate-slider"} gap-3 pr-3`}
			>
				{data.map((skill, index) => (
					<Image
						key={index}
						src={skill.logoUrl}
						alt={`${skill.name} Logo`}
						width={70}
						height={70}
						className="h-16 w-16 flex-none"
					/>
				))}
			</div>
		</div>
	);
}
