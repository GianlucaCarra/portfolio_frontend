import { Tech } from "@/types/tech.interface";
import { SkillBar } from "../SkillBar/SkillBar";

export function SkillCard({ type, techs }: { type: "front" | "back" | "other"; techs: Tech[] }) {
	const techType = {
		front: { title: "Frontend Development", color: "#3b82f6" },
		back: { title: "Backend & Database", color: "#8b5cf6" },
		other: { title: "Tools & DevOps", color: "#10b981" },
	};

	const techMap = techType[type];

	return (
		<div
			className={`flex w-full flex-col gap-3 overflow-hidden rounded-lg border-1 p-3 shadow-xl transition-opacity duration-200 ease-in-out lg:p-4`}
			style={{ backgroundColor: techMap.color + "30", borderColor: techMap.color }}
		>
			<h2 className="text-sm font-semibold lg:text-base">{techMap.title}</h2>

			<div className="flex flex-col gap-4">
				{techs.map(({ name, logo, experience }, i) => (
					<SkillBar key={`${type}-${name}-${i}`} text={name} experience={experience} logo={logo} />
				))}
			</div>
		</div>
	);
}
