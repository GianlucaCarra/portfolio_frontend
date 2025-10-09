import { AnimatedLogo } from "../UI/AnimatedLogo/AnimatedLogo";
import Image from "next/image";
import { LinkButton } from "../UI/LinkButton/LinkButton";

export function Hero() {
	return (
		<section className="flex w-full items-end" id="hero">
			<div className="flex flex-col gap-3">
				<h2 className="text-[min(24px,70px)] font-semibold">Hello there 👋!</h2>

				<span className="text-[14px]">I’m a developer turning great ideas into solutions.</span>

				<div className="flex h-fit w-full flex-col gap-1">
					<LinkButton href="" text="View Projects" />
					<LinkButton href="" text="Contact Me" variant="black" />
				</div>
			</div>

			<Image
				height={150}
				width={150}
				src="/profile.png"
				alt={"Profile Image"}
				className="ml-[20px] h-[150px] w-[150px] rounded-full object-fill"
			/>
		</section>
	);
}
