import Link from "next/link";

export function StatBadge({
	icon: Icon,
	value,
	label,
}: {
	icon: React.ElementType;
	value: string;
	label: string;
}) {
	return (
		<div
			data-aos="fade-up"
			className="border-font-secondary/20 flex min-w-[180px] flex-1 basis-[45%] flex-nowrap items-center gap-3 rounded-[6px] border-1 p-[10px] shadow-xs lg:max-w-[40%] lg:min-w-[33%] lg:basis-auto"
		>
			<div className="bg-accent/10 flex max-h-fit max-w-fit items-center justify-center rounded p-2 lg:p-3">
				<Icon className="text-accent h-6 w-6 lg:h-8 lg:w-8" />
			</div>

			<div className="flex flex-col gap-0.5">
				<span className="text-font-primary font-heading text-xl font-bold text-nowrap lg:text-2xl">
					{value}+
				</span>
				<span className="text-font-secondary font-heading text-xs text-nowrap lg:text-sm">
					{label}
				</span>
			</div>
		</div>
	);
}
