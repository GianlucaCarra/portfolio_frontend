"use client";
import { useTheme } from "@/hooks/useTheme";
import { CiDark, CiLight } from "react-icons/ci";

export function ToggleTheme() {
	const { toggle, theme } = useTheme();

	return (
		<button
			onClick={toggle}
			className="bg-background-secondary fixed top-[10px] right-[10px] flex items-center justify-center rounded-full"
		>
			<div className="relative flex h-10 w-10 items-center justify-center">
				<CiDark
					size={30}
					className={`absolute transition-opacity duration-500 ${theme === "light" ? "opacity-100" : "opacity-0"}`}
				/>
				<CiLight
					size={30}
					className={`absolute transition-opacity duration-500 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
				/>
			</div>
		</button>
	);
}
