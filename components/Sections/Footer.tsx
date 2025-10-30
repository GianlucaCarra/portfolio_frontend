import { LiaGithub } from "react-icons/lia";

export function Footer() {
	return (
		<footer className="bg-background-secondary text-font-primary border-font-primary/20 mt-auto flex flex-col items-center justify-center gap-3 border-t py-4">
			<div className="flex items-center gap-3">
				<span className="font-heading text-xs font-light lg:text-sm">
					© {new Date().getFullYear()} Gianluca Carra
				</span>

				<div className="bg-font-primary/40 h-5 w-[1px] lg:h-7" />

				<a
					href="https://github.com/GianlucaCarra/portfolio_frontend"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:scale-104 hover:opacity-80 lg:text-sm"
				>
					<LiaGithub size={20} className="hidden lg:block" />
					See this project on GitHub
				</a>
			</div>
		</footer>
	);
}
