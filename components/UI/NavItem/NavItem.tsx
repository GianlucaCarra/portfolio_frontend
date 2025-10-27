import Link from "next/link";

export function NavItem({ text, link }: { text: string; link: string }) {
	return (
		<li className="text-font-secondary text-base font-light hover:scale-105 hover:cursor-pointer">
			<Link href={`#${link}`}>{text}</Link>
		</li>
	);
}
