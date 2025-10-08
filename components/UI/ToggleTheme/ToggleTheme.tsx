"use client"
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

export function ToggleTheme() {
	const { toggle, theme } = useTheme();

	return (
		<button onClick={toggle} className="fixed right-[15px] top-[15px] bg-background rounded-full flex items-center justify-center p-1 shadow-md">
			{theme === 'light' ? <CiDark size={35} className="right-[15px] top-[15px]"/> : <CiLight size={35} className="right-[15px] top-[15px]" />}
		</button>
	);
}
