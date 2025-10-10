export function Footer() {
	return (
		<footer
			className="flex-center bg-background-secondary absolute bottom-0 left-0 w-full gap-3 py-2"
			id="footer"
		>
			<span className="font-heading text-font-primary text-sm font-light">
				© 2025 Gianluca Carra
			</span>

			<div className="bg-font-primary h-6 w-[0.5px]" />

			<a
				href="https://github.com/GianlucaCarra"
				target="_blank"
				rel="noopener noreferrer"
				className="text-sm font-medium"
			>
				See this project on GitHub
			</a>
		</footer>
	);
}
