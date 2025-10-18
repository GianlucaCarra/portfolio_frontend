import { Skill } from "@/types/skill.type";
import Image from "next/image";

export function SkillMirror({
	reverse,
	data,
	ariaHidden,
}: {
	reverse?: boolean;
	data: Skill[];
	ariaHidden?: boolean;
}) {
	return (
		<div
			aria-hidden={ariaHidden}
			className={`flex-center min-w-max ${reverse ? "animate-slider-reverse" : "animate-slider"} gap-3 pr-3 lg:gap-5 lg:pr-5`}
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
	);
}
