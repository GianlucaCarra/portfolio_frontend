"use client";

import { useState } from "react";
import { SelectorButton } from "../SelectorButton/SelectorButton";
import { SkillCard } from "../SkillCard/SkillCard";
import { Tech } from "@/types/tech.interface";import { GiFragmentedSword } from "react-icons/gi";
import { PiBracketsAngleBold } from "react-icons/pi";
import { HiCodeBracketSquare } from "react-icons/hi2";

const front: Tech[] = [
	{
		name: "Next / React",
		logo: HiCodeBracketSquare,
		experience: 90
	},
	{
		name: "Tailwind",
		logo: HiCodeBracketSquare,
		experience: 95
	},
		{
		name: "NodeJS",
		logo: HiCodeBracketSquare,
		experience: 80
	},
	{
		name: "Postgres",
		logo: HiCodeBracketSquare,
		experience: 100
	},
]

const back: Tech[] = [
	{
		name: "NestJS",
		logo: HiCodeBracketSquare,
		experience: 95
	},

]

const other: Tech[] = [
	{
		name: "GitHub",
		logo: HiCodeBracketSquare,
		experience: 100
	}
]

export function CardSelector() {
	const [selectedSec, setSelectedSec] = useState<"front" | "back" | "other">("back");
	const techMap = { front, back, other };

	const handleToggle = (sec: "front" | "back" | "other") => {
		setSelectedSec(sec);
	};

	return (
		<div className="flex-center-col max-h-fit w-full lg:gap-4">
			<div className=" my-3 flex-center flex-wrap gap-2 lg:gap-3 lg:my-4">
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
