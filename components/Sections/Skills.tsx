import { SectionTitle } from "../UI/SectionTitle/SectionTitle";
import { SkillCarousel } from "../UI/SkillCarousel.tsx/SkillCarousel";
import { SkillPoint } from "../UI/SkillPoint/SkillPoint";

export function Skills() {
	return (
		<section className="flex flex-col gap-3" id="skills">
			<SectionTitle text="Skills" />

			<div className="flex flex-col gap-2">
				<SkillPoint text="Lorem ipsum dolor sit amet consectetur adipisicing elit. esse voluptatibus quas ex eos suscipit blanditiis dolorem del" />
				<SkillPoint text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
			</div>

			<SkillCarousel />
		</section>
	);
}
