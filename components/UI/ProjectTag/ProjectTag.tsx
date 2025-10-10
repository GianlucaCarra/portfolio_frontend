export function ProjectTag({ name }: { name: string }) {
	return (
		<div className="flex-center font-heading bg-background-primary text-font-primary rounded-[4px] px-4.5 py-1.5 text-xs font-semibold">
			{name}
		</div>
	);
}
