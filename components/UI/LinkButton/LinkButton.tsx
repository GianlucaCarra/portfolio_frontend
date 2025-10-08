import Link from "next/link";

export function LinkButton({ href, text, variant }: { href: string, text: string, variant?: 'black' | 'blue' }) {
	return (
		<Link className={`text-white ${variant === 'blue' || !variant ? 'bg-accent' : 'bg-font-primary'} py-2 px-6 rounded-[5px] text-[11px] font-medium max-w-[80%] w-full text-center`} href={href}>
			{text}
		</Link>
	);
}
