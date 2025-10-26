import Image from "next/image";
import { LinkButton } from "../UI/LinkButton/LinkButton";
import { SectionTitle } from "../UI/SectionTitle/SectionTitle";

export function Hero() {
	return (
		<section
			data-aos="fade-up-left"
			className="bg-background-secondary fade-up-left relative flex w-full flex-col-reverse items-center gap-5 rounded-xl py-8 shadow-2xl lg:flex-row lg:items-center lg:justify-between lg:px-15 lg:py-15"
			id="hero"
		>
			<div className="flex flex-col items-center gap-4 lg:w-[50%] lg:items-start lg:gap-6">
				<SectionTitle noLine text="Hello there 👋!" />

				<span className="max-w-[90%] text-center text-sm lg:w-[60%] lg:text-left lg:text-base">
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
				className="border-accent h-[160px] w-[160px] rounded-full border-2 object-cover shadow-xl lg:hidden"
			/>
			<Image
				height={5000}
				width={5000}
				src="/profile2.png"
				alt={"Profile Image"}
				className="absolute right-[-2%] bottom-0 hidden h-[400px] w-[400px] object-cover lg:block"
			/>
		</section>
	);
}
