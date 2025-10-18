import { SectionTitle } from "../UI/SectionTitle/SectionTitle";
import { SkillCarousel } from "../UI/SkillCarousel.tsx/SkillCarousel";
import { SkillPoint } from "../UI/SkillPoint/SkillPoint";
import { SkillsCarousels } from "../UI/SkillsCarousels/SkillsCarousels";

export function Skills() {
	return (
		<section className="flex flex-col gap-3 lg:gap-4" id="skills">
			<SectionTitle text="Skills" />

			<div className="mb-[23px] flex flex-col gap-4">
				<SkillPoint text="Lorem ipsum dolor sit amet consectetur adipisicing elit. esse voluptatibus quas ex eos suscipit blanditiis dolorem del" />
				<SkillPoint text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
			</div>
		</section>
	);
}
