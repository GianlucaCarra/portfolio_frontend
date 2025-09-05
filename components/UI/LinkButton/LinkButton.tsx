import Link from "next/link";

export function LinkButton({href, text}: {href: string, text: string}) {
	return (
		<Link className="text-2 bg-foreground-light px-3.5 py-2.5 rounded-[5px] text-background-secondary-light  w-full text-center" href={href}>
			{text}
		</Link>
	);
}
