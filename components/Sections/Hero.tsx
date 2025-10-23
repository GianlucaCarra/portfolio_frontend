import Image from "next/image";
import { LinkButton } from "../UI/LinkButton/LinkButton";
import { SectionTitle } from "../UI/SectionTitle/SectionTitle";

export function Hero() {
	return (
		<section
			className="bg-background-secondary relative flex max-w-fit flex-col-reverse items-center gap-5 rounded-xl py-6 shadow-2xl lg:flex-row lg:items-start lg:justify-between"
			id="hero"
		>
			<div className="flex flex-col items-center gap-4 lg:items-start lg:gap-6">
				<SectionTitle noLine text="Hello there 👋!" />

				<span className="max-w-[80%] text-center text-base lg:w-full lg:text-left">
					I’m a developer turning great ideas into solutions.
				</span>

				<div className="flex h-fit w-full flex-col items-center gap-2 lg:items-start lg:gap-3">
					<LinkButton href="#featured" text="View Projects" />
					<LinkButton href="#contact" text="Contact Me" variant="black" />
				</div>
			</div>

			<Image
				height={5000}
				width={5000}
				src="/profile.png"
				alt={"Profile Image"}
				className="border-accent h-[160px] w-[160px] rounded-full border-2 object-cover lg:h-[250px] lg:w-[250px]"
			/>
		</section>
	);
}
