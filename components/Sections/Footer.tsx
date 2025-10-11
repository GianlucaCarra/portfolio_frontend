export function Footer() {
	return (
		<footer
			className="flex-center bg-background-secondary absolute bottom-0 left-0 w-full gap-3 py-4"
			id="footer"
		>
			<span className="font-heading text-font-primary text-xs font-light">
				© 2025 Gianluca Carra
			</span>

			<div className="bg-font-primary h-5 w-[0.4px]" />

			<a
				href="https://github.com/GianlucaCarra/portfolio_frontend"
				target="_blank"
				rel="noopener noreferrer"
				className="text-xs font-semibold"
			>
				See this project on GitHub
			</a>
		</footer>
	);
}
