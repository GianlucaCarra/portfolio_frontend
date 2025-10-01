import Link from "next/link";

export function LinkButtonExternal({href, text, icon: Icon}: {href: string, text: string, icon?: React.ComponentType}) {
	return (
		<Link className="flex items-center justify-center text-2 bg-foreground-light px-3.5 py-2.5 rounded-[5px] text-background-secondary-light w-80 text-center gap-2" href={href} target="_blank">
			{ Icon && <Icon /> }

			{text}
		</Link>
	);
}
