import Image from "next/image";
import { LinkButton } from "../UI/LinkButton/LinkButton";
import { SectionTitle } from "../UI/SectionTitle/SectionTitle";

export function Hero() {
	return (
		<section
			data-aos="fade-up-left"
			className="bg-background-secondary relative flex w-full flex-col items-center gap-5 rounded-2xl py-8 shadow-2xl lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-12"
			id="hero"
		>
			<div className="flex flex-col items-center gap-4 lg:w-[50%] lg:items-start lg:gap-6">
				<SectionTitle noLine text="Hello there 👋!" />

				<span className="max-w-[90%] text-center text-sm lg:w-[60%] lg:text-left lg:text-base">
					I’m a developer turning great ideas into solutions.
				</span>

				<div className="z-4 flex h-fit w-full flex-col items-center gap-2 lg:items-start lg:gap-3">
					<LinkButton href="#featured" text="View Projects" />
					<LinkButton href="#contact" text="Contact Me" variant="black" />
				</div>
			</div>

			<Image
				height={400}
				width={400}
				src="/profile.png"
				alt={"Profile Image"}
				className="absolute bottom-0 left-1/2 h-[200px] w-[200px] -translate-x-1/2 transform object-cover lg:right-[-2.5%] lg:left-auto lg:h-[400px] lg:w-[400px] lg:translate-x-0"
				priority
			/>

			<Image
				height={90}
				width={100}
				src="/bulb.png"
				alt={"Bulb Image"}
				className="absolute top-53 left-1/2 z-0 h-[110px] w-[50px] -translate-x-[-80%] transform object-cover object-bottom lg:top-0 lg:right-3 lg:left-auto lg:h-[100px] lg:w-[80px] lg:translate-x-0"
				priority
			/>

			<div className="h-[180px] lg:hidden" />
		</section>
	);
}
