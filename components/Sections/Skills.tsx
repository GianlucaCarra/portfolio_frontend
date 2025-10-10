import { SectionTitle } from "../UI/SectionTitle/SectionTitle";
import { SkillCarousel } from "../UI/SkillCarousel.tsx/SkillCarousel";
import { SkillPoint } from "../UI/SkillPoint/SkillPoint";

const techSkills = [
	{ name: "JavaScript", logoUrl: "/javascript.svg" },
	{ name: "TypeScript", logoUrl: "/typescript.svg" },
];

const dataSkills = [
	{ name: "MongoDB", logoUrl: "/mongodb.svg" },
	{ name: "PostgreSQL", logoUrl: "/postgresql.svg" },
];

const otherSkills = [
	{ name: "Git", logoUrl: "/git.svg" },
	{ name: "Docker", logoUrl: "/docker.svg" },
];

export function Skills() {
	return (
		<section className="flex flex-col gap-3" id="skills">
			<SectionTitle text="Skills" />

			<div className="mb-[23px] flex flex-col gap-4">
				<SkillPoint text="Lorem ipsum dolor sit amet consectetur adipisicing elit. esse voluptatibus quas ex eos suscipit blanditiis dolorem del" />
				<SkillPoint text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
			</div>

			<SkillCarousel data={techSkills} />
			<SkillCarousel reverse data={dataSkills} />
			<SkillCarousel data={otherSkills} />
		</section>
	);
}
