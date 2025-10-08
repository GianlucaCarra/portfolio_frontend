"use client";

import { createContext, useState, ReactNode, useEffect } from "react";

interface ThemeContextType {
	theme: "dark" | "light";
	toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<"dark" | "light">("light");

	useEffect(() => {
		const stored = localStorage.getItem("theme") as "light" | "dark" | null;

		if (stored) {
			setTheme(stored);
			document.documentElement.className = stored;
		}
	}, []);

	const toggle = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		document.documentElement.className = newTheme;
		localStorage.setItem("theme", newTheme);
	};

	return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export default ThemeContext;
