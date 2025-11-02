export function ProjectTag({ name, bg }: { name: string; bg?: "secondary" | "primary" }) {
	return (
		<div
			className={`flex-center font-heading ${bg === "primary" || !bg ? "bg-background-primary" : "bg-background-secondary"} text-font-primary rounded-[4px] px-4.5 py-1.5 text-xs font-semibold whitespace-nowrap lg:px-5 lg:text-sm`}
		>
			{name}
		</div>
	);
}
