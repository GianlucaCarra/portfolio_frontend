import Link from "next/link";

export function StatBadge({
	icon: Icon,
	value,
	label,
}: {
	icon: any;
	value: string;
	label: string;
}) {
	return (
		<div
			data-aos="fade-up"
			className="border-font-secondary/20 flex min-w-[170px] flex-1 basis-[45%] flex-nowrap items-center gap-4 rounded border-1 p-[10px] shadow-xs lg:max-w-[40%] lg:min-w-[33%] lg:basis-auto"
		>
			<div className="bg-accent/10 flex max-h-fit max-w-fit items-center justify-center rounded p-2 lg:p-3">
				<Icon className="text-accent h-6 w-6 lg:h-8 lg:w-8" />
			</div>

			<div className="flex flex-col gap-0.5">
				<span className="text-font-primary font-heading text-xl font-bold text-nowrap lg:text-2xl">
					{value}+
				</span>
				<span className="text-font-secondary/90 font-heading text-[10px] text-nowrap lg:text-sm">
					{label}
				</span>
			</div>
		</div>
	);
}
