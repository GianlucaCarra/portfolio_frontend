"use client";
import { useOnScreen } from "@/hooks/useOnScreen";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";

export function SkillBar({
	text,
	experience,
	logo: Icon,
}: {
	text: string;
	experience: number;
	logo: IconType;
}) {
	const [hasAnimated, setHasAnimated] = useState(false);
	const { ref, isVisible } = useOnScreen<HTMLDivElement>();

	useEffect(() => {
		if (isVisible && !hasAnimated) {
			setHasAnimated(true);
		}
	}, [isVisible, hasAnimated]);

	return (
		<div className="flex flex-col items-center gap-1 lg:gap-2">
			<div className="flex w-full items-center gap-1.5 lg:gap-2">
				<Icon className="text-accent text-base font-black lg:text-xl" />

				<h4 className="text-sm font-medium lg:text-base">{text}</h4>
			</div>

			<div ref={ref} className="bg-font-secondary/20 h-[8px] w-full rounded-2xl lg:h-2.5">
				<div
					className={`bg-accent h-[8px] rounded-2xl lg:h-2.5 ${hasAnimated ? "animate-shimmer" : "w-0"}`}
					style={{ "--skill-width": `${experience}%` } as React.CSSProperties}
				/>
			</div>
		</div>
	);
}
