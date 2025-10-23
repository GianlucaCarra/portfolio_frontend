export function SectionTitle({ text, noLine }: { text: string; noLine?: boolean }) {
	return (
		<div className="flex w-fit flex-col gap-[0px]">
			<h3 className="text-2xl font-semibold lg:text-3xl">{text}</h3>

			{!noLine && <div className="bg-accent h-[1px] w-[90%] rounded-[1px]" />}
		</div>
	);
}
