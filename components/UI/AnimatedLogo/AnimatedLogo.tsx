"use client"

import { useEffect, useState } from "react";

export function AnimatedLogo() {
	const [stringIndex, setStringIndex] = useState<number>(0);
	const [showCursor, setShowCursor] = useState<boolean>(true);
	const logoString: string = "Gianluca Carra";

	useEffect(() => {
		const randomNumber = Math.floor(Math.random() * (300 - 50)) + 50;

		if (stringIndex < logoString.length) {
			const timeout = setTimeout(() => {
				setStringIndex(stringIndex + 1);
			}, randomNumber);

			return () => clearTimeout(timeout);
		}
  	}, [stringIndex, logoString.length]);

	useEffect(() => {
		const interval = setInterval(() => {
		setShowCursor((prev) => !prev);
		}, 500);
		return () => clearInterval(interval);
	}, []);

	return (
		<h1 className="text-[min(8vw,70px)] font-bold mb-2">
			{logoString
			.split("")
			.slice(0, stringIndex)
			.map((char, index) => (
				<span
				key={index}
				className={`transition-opacity duration-300 ease-in-out ${
					index <= stringIndex ? "opacity-100" : "opacity-0"
				}`}
				>
				{char}
				</span>
			))}
			{showCursor && <span className="">_</span>}
		</h1>
	);
}
