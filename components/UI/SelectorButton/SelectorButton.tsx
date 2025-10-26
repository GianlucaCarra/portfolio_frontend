export function SelectorButton({
	onClick,
	label,
	selected,
}: {
	onClick: React.MouseEventHandler;
	label: string;
	selected: boolean;
}) {
	return (
		<button
			onClick={onClick}
			className={`flex-center max-h-fit w-full px-3 py-2 font-sans text-xs font-medium ${selected ? "bg-accent/20 text-accent" : "bg-font-secondary/20 text-font-secondary"} max-w-fit flex-1 rounded-[5px] text-nowrap hover:scale-102 hover:cursor-pointer lg:text-sm`}
		>
			{label}
		</button>
	);
}
