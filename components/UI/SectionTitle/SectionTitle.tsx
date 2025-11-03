export function SectionTitle({ text }: { text: string }) {
	return (
		<div className="flex w-fit flex-col gap-[0px]">
			<h3 className="text-2xl font-semibold lg:text-3xl">{text}</h3>
		</div>
	);
}
