export function ProjectDescriptionCard({ desc }: { desc: string }) {
	return (
		<div className="border-font-secondary/10 bg-background-secondary/50 mb-8 rounded-2xl border p-8 shadow-lg backdrop-blur-sm lg:mb-10">
			<h2 className="text-font-primary mb-4 flex items-center gap-2 text-2xl font-bold">
				<span className="h-6 w-1 rounded-full bg-gradient-to-b from-blue-500 to-purple-500" />
				About This Project
			</h2>

			<p className="text-font-secondary text-base leading-relaxed lg:text-lg">{desc}</p>
		</div>
	);
}
