"use client";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

export function ToggleTheme() {
	const { toggle, theme } = useTheme();

	return (
		<button
			onClick={toggle}
			className="bg-background-secondary top-[10px] right-[10px] flex items-center justify-center rounded-full p-1 shadow-md"
		>
			<CiDark
				size={35}
				className={`transition-opacity duration-500 ${theme === "light" ? "opacity-100" : "opacity-0"}`}
			/>
			<CiLight
				size={35}
				className={`transition-opacity duration-500 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
			/>
		</button>
	);
}
