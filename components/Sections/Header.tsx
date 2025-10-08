import { AnimatedLogo } from "../UI/AnimatedLogo/AnimatedLogo";


export function Header() {
	return (
		<header className="flex">
			<div className="flex flex-col">
				<AnimatedLogo />

				<h2 className="font-light text-[min(14px,70px)] text-font-secondary">Full-stack Developer</h2>
			</div>

			{/*
				<nav>

				</nav>
			*/}
		</header>
	);
}
