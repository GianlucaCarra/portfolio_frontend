export function SkillPoint({ text }: { text: string }) {
	return (
		<div className="flex items-start gap-2">
			<div className="bg-accent mt-[5px] h-[7px] w-[7px] flex-shrink-0 rounded-full"></div>
			<span className="break-words">{text}</span>
		</div>
	);
}
