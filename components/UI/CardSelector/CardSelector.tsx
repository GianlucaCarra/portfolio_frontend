"use client";

import { MouseEvent, useState } from "react";
import { SelectorButton } from "../SelectorButton/SelectorButton";

export function CardSelector() {
	const [selectedSec, setSelectedSec] = useState<"front" | "back" | "other">("back");

	const handleToggle = (sec: "front" | "back" | "other") => {
		setSelectedSec(sec);
	};

	return (
		<div className="flex-center bg max-h-fit w-full">
			<div className="flex-center flex-wrap gap-2 lg:gap-3">
				<SelectorButton
					onClick={() => handleToggle("back")}
					label={"Backend & Database"}
					selected={selectedSec === "back"}
				/>
				<SelectorButton
					onClick={() => handleToggle("front")}
					label={"Frontend Development"}
					selected={selectedSec === "front"}
				/>
				<SelectorButton
					onClick={() => handleToggle("other")}
					label={"Tools & DevOps"}
					selected={selectedSec === "other"}
				/>
			</div>
		</div>
	);
}
