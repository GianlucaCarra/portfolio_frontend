import { SectionTitle } from "../UI/SectionTitle/SectionTitle";
import { SkillPoint } from "../UI/SkillPoint/SkillPoint";
import { CardSelector } from "../UI/CardSelector/CardSelector";

export function Skills() {
	return (
		<section className="flex flex-col gap-3 lg:min-w-[40%] lg:gap-4" id="skills">
			<SectionTitle text="Skills & Expertise" />

			<div className="flex flex-col gap-4">
				<SkillPoint text="I break down complex challenges into elegant, scalable solutions that drive real business value." />
				<SkillPoint text="Quick to adapt and master new technologies, always staying ahead of industry trends." />
				<SkillPoint text="Obsessed with code quality, performance optimization, and delivering pixel-perfect implementations." />
			</div>

			<CardSelector />
		</section>
	);
}
