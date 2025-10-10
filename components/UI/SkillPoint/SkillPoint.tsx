export function SkillPoint({ text }: { text: string }) {
	return (
		<div className="flex items-start gap-3">
			<div className="bg-accent mt-[8px] h-[7px] w-[7px] flex-shrink-0 rounded-full"></div>
			<span className="text-base break-words">{text}</span>
		</div>
	);
}
