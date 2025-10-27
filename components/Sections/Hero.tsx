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

				<div className="flex h-fit w-full flex-col items-center gap-2 lg:items-start lg:gap-3">
					<LinkButton href="#featured" text="View Projects" />
					<LinkButton href="#contact" text="Contact Me" variant="black" />
				</div>
			</div>
{/*
			<Image
				height={5000}
				width={5000}
				src="/profile.png"
				alt={"Profile Image"}
				className="border-accent h-[160px] w-[160px] rounded-full border-2 object-cover shadow-xl lg:hidden"
			/> */}
			<Image
				height={5000}
				width={5000}
				src="/profile3.png"
				alt={"Profile Image"}
				className="absolute h-[200px] w-[200px] left-1/2 transform -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-[-2.5%] bottom-0 lg:h-[400px] lg:w-[400px] object-cover"
			/>

			<Image
				height={5000}
				width={5000}
				src="/bulb.png"
				alt={"Profile Image"}
				className="absolute left-1/2 transform -translate-x-[-20%] lg:left-auto lg:top-0 lg:translate-x-0 lg:right-[-5%] -z-10 top-53 h-[90px] w-[120px] lg:h-[90px] lg:w-[200px] object-cover object-bottom"
			/>

			<div className="h-[180px]">

			</div>
		</section>
	);
}
