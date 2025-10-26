"use client";
import { useTheme } from "@/hooks/useTheme";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export function ToggleTheme() {
	const { toggle, theme } = useTheme();

	return (
		<button
			onClick={toggle}
			className="fixed top-[0px] right-[0px] z-10 flex items-center justify-center hover:cursor-pointer lg:top-[20px] lg:right-[20px]"
		>
			<div className="relative flex h-12 w-12 items-center justify-center">
				<MdOutlineDarkMode
					className={`absolute text-2xl transition-opacity duration-500 ${theme === "light" ? "opacity-100" : "opacity-0"} lg:text-3xl`}
				/>
				<MdOutlineLightMode
					className={`absolute text-2xl transition-opacity duration-500 ${theme === "dark" || !theme ? "opacity-100" : "opacity-0"} lg:text-3xl`}
				/>
			</div>
		</button>
	);
}
