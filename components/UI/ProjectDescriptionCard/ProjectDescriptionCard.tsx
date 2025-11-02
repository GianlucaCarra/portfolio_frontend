export function ProjectDescriptionCard({ desc }: { desc: string }) {
	return (
		<div className="mb-8 lg:mb-10 rounded-2xl border p-8 shadow-lg backdrop-blur-sm border-font-secondary/10 bg-background-secondary/50">
			<h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-font-primary">
				<span className="h-6 w-1 rounded-full bg-gradient-to-b from-blue-500 to-purple-500" />
				About This Project
			</h2>

			<p className="leading-relaxed text-base lg:text-lg text-font-secondary">{desc}</p>
		</div>
	);
}
