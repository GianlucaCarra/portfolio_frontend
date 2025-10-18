import Image from "next/image";
import { LinkButton } from "../UI/LinkButton/LinkButton";
import { SectionTitle } from "../UI/SectionTitle/SectionTitle";

export function Hero() {
	return (
		<section className="relative flex w-full items-start lg:justify-between" id="hero">
			<div className="flex flex-col gap-3 lg:gap-6">
				<SectionTitle text="Hello there 👋!" />

				<span className="text-lg">I’m a developer turning great ideas into solutions.</span>

				<div className="flex h-fit w-full flex-col gap-2 lg:gap-3">
					<LinkButton href="#featured" text="View Projects" />
					<LinkButton href="#contact" text="Contact Me" variant="black" />
				</div>
			</div>

			<Image
				height={5000}
				width={5000}
				src="/profile.png"
				alt={"Profile Image"}
				className="sticky top-4 ml-4 h-[160px] w-[160px] rounded-full object-cover lg:h-[250px] lg:w-[250px]"
			/>
		</section>
	);
}
