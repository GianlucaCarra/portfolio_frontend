"use client";
import { useTheme } from "@/hooks/useTheme";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export function ToggleTheme() {
	const { toggle, theme } = useTheme();

	return (
		<button
			onClick={toggle}
			className="fixed top-[20px] right-[20px] z-10 flex items-center justify-center hover:cursor-pointer lg:top-[10px] lg:right-[10px]"
		>
			<div className="relative flex h-12 w-12 items-center justify-center">
				<MdOutlineDarkMode
					size={30}
					className={`absolute transition-opacity duration-500 ${theme === "light" ? "opacity-100" : "opacity-0"}`}
				/>
				<MdOutlineLightMode
					size={30}
					className={`absolute transition-opacity duration-500 ${theme === "dark" || !theme ? "opacity-100" : "opacity-0"}`}
				/>
			</div>
		</button>
	);
}
