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
			className={`text-white ${variant === "blue" || !variant ? "bg-accent" : "bg-font-primary"} w-full max-w-[80%] rounded-[5px] px-6 py-2 text-center text-[11px] font-medium`}
			href={href}
		>
			{text}
		</Link>
	);
}
