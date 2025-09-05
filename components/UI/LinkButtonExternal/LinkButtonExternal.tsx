import Link from "next/link";
import Image from "next/image";

export function LinkButtonExternal({href, text, icon: Icon}: {href: string, text: string, icon?: React.ComponentType}) {
	return (
		<Link className="text-2 w-full text-center" href={href} target="_blank">
			{ Icon && <Icon /> }

			{text}
		</Link>
	);
}
