import { SectionTitle } from "../UI/SectionTitle/SectionTitle";
import { SkillCarousel } from "../UI/SkillCarousel.tsx/SkillCarousel";
import { SkillPoint } from "../UI/SkillPoint/SkillPoint";

const techSkills = [
	{ name: "React", logoUrl: "/techs/react-original.svg" },
	{ name: "Next.js", logoUrl: "/techs/nextjs-original.svg" },
	{ name: "TypeScript", logoUrl: "/techs/typescript-original.svg" },
	{ name: "JavaScript", logoUrl: "/techs/javascript-original.svg" },
	{ name: "HTML5", logoUrl: "/techs/html5-original.svg" },
	{ name: "CSS3", logoUrl: "/techs/css3-original.svg" },
	{ name: "TailwindCSS", logoUrl: "/techs/tailwindcss-original.svg" },
	{ name: "Node.js", logoUrl: "/techs/nodejs-original.svg" },
];

const dataSkills = [
	{ name: "PostgreSQL", logoUrl: "/techs/postgresql-original.svg" },
	{ name: "MongoDB", logoUrl: "/techs/mongodb-original.svg" },
	{ name: "MySQL", logoUrl: "/techs/mysql-original.svg" },
	{ name: "Prisma", logoUrl: "/techs/prisma-original.svg" },
	{ name: "Mongoose", logoUrl: "/techs/mongoose-original.svg" },
];

const otherSkills = [
	{ name: "Git", logoUrl: "/techs/git-original.svg" },
	{ name: "GitHub", logoUrl: "/techs/github-original.svg" },
	{ name: "Docker", logoUrl: "/techs/docker-original.svg" },
	{ name: "Azure", logoUrl: "/techs/azure-original.svg" },
	{ name: "AWS", logoUrl: "/techs/aws-original.svg" },
	{ name: "Figma", logoUrl: "/techs/figma-original.svg" },
	{ name: "Jest", logoUrl: "/techs/jest-original.svg" },
	{ name: "Insomnia", logoUrl: "/techs/insomnia-original.svg" },
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
