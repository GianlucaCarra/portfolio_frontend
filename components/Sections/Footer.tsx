import { LiaGithub } from "react-icons/lia";

export function Footer() {
	return (
		<footer
			className="flex-center bg-background-secondary absolute bottom-0 left-0 w-full gap-3 py-4 lg:gap-4"
			id="footer"
		>
			<span className="font-heading text-font-primary text-xs font-light lg:text-sm">
				© 2025 Gianluca Carra
			</span>

			<div className="bg-font-primary h-5 w-[0.4px] lg:h-7" />

			<a
				href="https://github.com/GianlucaCarra/portfolio_frontend"
				target="_blank"
				rel="noopener noreferrer"
				className="flex-center gap-1.5 text-xs font-semibold hover:opacity-80 lg:text-sm"
			>
				<LiaGithub size={20} className="hidden lg:block" />
				See this project on GitHub
			</a>
		</footer>
	);
}
