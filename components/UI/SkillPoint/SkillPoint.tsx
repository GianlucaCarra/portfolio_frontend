export function SkillPoint({ text }: { text: string }) {
	return (
		<div className="flex items-start gap-3 select-text">
			<span className="text-sm break-words lg:text-base">{text}</span>
		</div>
	);
}
