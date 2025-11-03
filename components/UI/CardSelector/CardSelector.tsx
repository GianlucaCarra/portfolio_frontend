"use client";

import {
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiReactquery,
	SiTypescript,
	SiNodedotjs,
	SiNestjs,
	SiDotnet,
	SiPostgresql,
	SiGraphql,
	SiGit,
	SiGithub,
	SiDocker,
	SiJest,
} from "react-icons/si";
import { useState } from "react";
import { SelectorButton } from "../SelectorButton/SelectorButton";
import { SkillCard } from "../SkillCard/SkillCard";
import { Tech } from "@/types/tech.interface";

const front: Tech[] = [
	{
		name: "Next.js",
		logo: SiNextdotjs,
		experience: 90,
	},
	{
		name: "React",
		logo: SiReact,
		experience: 95,
	},
	{
		name: "Tailwind CSS",
		logo: SiTailwindcss,
		experience: 95,
	},
	{
		name: "React Query",
		logo: SiReactquery,
		experience: 85,
	},
	{
		name: "TypeScript",
		logo: SiTypescript,
		experience: 95,
	},
];

const back: Tech[] = [
	{
		name: "Node.js",
		logo: SiNodedotjs,
		experience: 85,
	},
	{
		name: "NestJS",
		logo: SiNestjs,
		experience: 80,
	},
	{
		name: ".NET / C#",
		logo: SiDotnet,
		experience: 75,
	},
	{
		name: "PostgreSQL",
		logo: SiPostgresql,
		experience: 90,
	},
	{
		name: "GraphQL",
		logo: SiGraphql,
		experience: 80,
	},
];

const other: Tech[] = [
	{
		name: "Git",
		logo: SiGit,
		experience: 100,
	},
	{
		name: "GitHub",
		logo: SiGithub,
		experience: 100,
	},
	{
		name: "Docker",
		logo: SiDocker,
		experience: 85,
	},
	{
		name: "Jest",
		logo: SiJest,
		experience: 80,
	},
];

export function CardSelector() {
	const [selectedSec, setSelectedSec] = useState<"front" | "back" | "other">("back");
	const techMap = { front, back, other };

	const handleToggle = (sec: "front" | "back" | "other") => {
		setSelectedSec(sec);
	};

	return (
		<div className="flex-center-col max-h-fit w-full lg:gap-4">
			<div className="flex-center my-5 flex-wrap gap-2 lg:my-4 lg:gap-3">
				<SelectorButton
					onClick={() => handleToggle("back")}
					label={"Backend"}
					selected={selectedSec === "back"}
				/>
				<SelectorButton
					onClick={() => handleToggle("front")}
					label={"Frontend"}
					selected={selectedSec === "front"}
				/>
				<SelectorButton
					onClick={() => handleToggle("other")}
					label={"Tools & DevOps"}
					selected={selectedSec === "other"}
				/>
			</div>

			<SkillCard type={selectedSec} techs={techMap[selectedSec]} />
		</div>
	);
}
