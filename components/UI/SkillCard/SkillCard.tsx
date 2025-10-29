"use client";

import { Tech } from "@/types/tech.interface";
import { SkillBar } from "../SkillBar/SkillBar";
import { useEffect, useRef, useState } from "react";

export function SkillCard({ type, techs }: { type: "front" | "back" | "other"; techs: Tech[] }) {
	const techType = {
		front: { title: "Frontend Development", color: "#3b82f6", }, // Azul vibrante
		back: { title: "Backend & Database", color: "#8b5cf6", }, // Roxo moderno
		other: { title: "Tools & DevOps", color: "#10b981", } // Verde esmeralda
	}

	const techMap = techType[type];

	return (
		<div
			className={`flex flex-col gap-3 rounded-lg w-full p-3 border-1 shadow-xl lg:p-4 overflow-hidden transition-opacity duration-200 ease-in-out`}
			style={{ backgroundColor: techMap.color + '30', borderColor: techMap.color }}
		>
			<h2 className="font-semibold text-sm lg:text-base">{techMap.title}</h2>

			<div className="flex flex-col gap-4">
				{techs.map(({ name, logo, experience }, i) =>
					<SkillBar key={`${type}-${name}-${i}`} text={name} experience={experience} logo={logo} />
				)}
			</div>
		</div>
	);
}
