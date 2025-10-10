import { AnimatedLogo } from "../UI/AnimatedLogo/AnimatedLogo";
import Image from "next/image";
import { LinkButton } from "../UI/LinkButton/LinkButton";
import { SectionTitle } from "../UI/SectionTitle/SectionTitle";

export function Hero() {
	return (
		<section className="relative flex w-full items-start" id="hero">
			<div className="flex flex-col gap-3">
				<SectionTitle text="Hello there 👋!" />

				<span className="text-lg">I’m a developer turning great ideas into solutions.</span>

				<div className="flex h-fit w-full flex-col gap-2">
					<LinkButton href="#featured" text="View Projects" />
					<LinkButton href="#contact" text="Contact Me" variant="black" />
				</div>
			</div>

			<Image
				height={160}
				width={160}
				src="/profile.png"
				alt={"Profile Image"}
				className="sticky top-4 ml-4 h-[160px] w-[160px] rounded-full object-fill"
			/>
		</section>
	);
}
