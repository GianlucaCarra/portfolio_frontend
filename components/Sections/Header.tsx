import { AnimatedLogo } from "../UI/AnimatedLogo/AnimatedLogo";
import { NavItem } from "../UI/NavItem/NavItem";

export function Header() {
	return (
		<header className="flex items-center justify-between" id="header">
			<div className="flex flex-col lg:gap-1">
				<AnimatedLogo />

				<h2 className="text-font-secondary text-lg font-light lg:text-xl">Full-stack Developer</h2>
			</div>

			<nav className="hidden lg:block">
				<ul className="flex gap-6">
					<NavItem text={"Home"} link={"hero"} />
					<NavItem text={"About Me"} link={"main-section"} />
					<NavItem text={"Projects"} link={"contact"} />
					<NavItem text={"Contact"} link={"contact"} />
				</ul>
			</nav>
		</header>
	);
}
