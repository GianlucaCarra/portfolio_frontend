export function ProjectTag({ name }: { name: string }) {
	return (
		<div className="flex-center font-heading bg-background-primary text-font-primary px-3 py-[2px] text-[7px] font-semibold">
			{name}
		</div>
	);
}
