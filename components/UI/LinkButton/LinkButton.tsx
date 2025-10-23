import Link from "next/link";

export function LinkButton({
	href,
	text,
	variant,
}: {
	href: string;
	text: string;
	variant?: "black" | "blue";
}) {
	return (
		<Link
			className={`text-white ${variant === "blue" || !variant ? "bg-accent" : "bg-[#131313]"} w-full max-w-[80%] rounded-[5px] px-6 py-2 text-center text-sm font-medium transition-opacity duration-200 ease-in-out hover:opacity-80 lg:px-8 lg:py-3 lg:text-base`}
			href={href}
		>
			{text}
		</Link>
	);
}
