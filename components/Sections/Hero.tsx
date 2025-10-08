import { AnimatedLogo } from "../UI/AnimatedLogo/AnimatedLogo";
import Image from "next/image";
import { LinkButton } from "../UI/LinkButton/LinkButton";

export function Hero() {
	return (
		<section className="flex items-end w-full">
			<div className="flex flex-col gap-3">
				<h2 className="font-semibold text-[min(24px,70px)]">Hello there 👋!</h2>

				<span className="text-[14px]">
					I’m a developer turning great ideas into solutions.
				</span>

				<div className="flex flex-col h-fit w-full gap-1">
					<LinkButton href="" text="View Projects" />
					<LinkButton href="" text="Contact Me" variant="black" />
				</div>
			</div>

			<Image height={150} width={150} src="/profile.png" alt={"Profile Image"} className="rounded-full h-[150px] w-[150px] object-fill ml-[20px]" />
		</section>
	);
}
