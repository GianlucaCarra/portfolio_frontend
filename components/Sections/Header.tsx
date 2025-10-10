import { AnimatedLogo } from "../UI/AnimatedLogo/AnimatedLogo";

export function Header() {
	return (
		<header className="flex" id="header">
			<div className="flex flex-col">
				<AnimatedLogo />

				<h2 className="text-font-secondary text-lg font-light">Full-stack Developer</h2>
			</div>

			{/*
				<nav>

				</nav>
			*/}
		</header>
	);
}
