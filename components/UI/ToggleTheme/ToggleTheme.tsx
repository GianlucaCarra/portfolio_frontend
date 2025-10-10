"use client";
import { useTheme } from "@/hooks/useTheme";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { CiDark, CiLight } from "react-icons/ci";

export function ToggleTheme() {
	const { toggle, theme } = useTheme();

	return (
		<button
			onClick={toggle}
			className="bg-background-secondary fixed top-[20px] right-[20px] z-10 flex items-center justify-center rounded-full shadow-md"
		>
			<div className="relative flex h-12 w-12 items-center justify-center">
				<MdDarkMode
					size={30}
					className={`absolute transition-opacity duration-500 ${theme === "light" ? "opacity-100" : "opacity-0"}`}
				/>
				<MdLightMode
					size={30}
					className={`absolute transition-opacity duration-500 ${theme === "dark" || !theme ? "opacity-100" : "opacity-0"}`}
				/>
			</div>
		</button>
	);
}
