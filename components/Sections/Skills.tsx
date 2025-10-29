import { SectionTitle } from "../UI/SectionTitle/SectionTitle";
import { SkillPoint } from "../UI/SkillPoint/SkillPoint";
import { CardSelector } from "../UI/CardSelector/CardSelector";

export function Skills() {
	return (
		<section className="flex flex-col gap-3 lg:min-w-[40%] lg:gap-4" id="skills">
			<SectionTitle text="Skills & Expertise" />

			<div className="flex flex-col gap-4">
				<SkillPoint text="Lorem ipsum dolor sit amet consectetur adipisicing elit. esse voluptatibus quas ex eos suscipit blanditiis dolorem del" />
				<SkillPoint text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
			</div>

			<CardSelector />
		</section>
	);
}
