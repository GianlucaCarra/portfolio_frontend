import { AnimatedLogo } from "@/components/UI/AnimatedLogo/AnimatedLogo";
import { CiDark, CiLight } from "react-icons/ci";
import { LinkButton } from "@/components/UI/LinkButton/LinkButton";
import { InfiniteSlider } from "@/components/UI/InfiniteSlider/InfiniteSlider";
import Image from "next/image";

export default function Home() {
	return (
		<div className="relative h-[10000px]">
			<CiDark size={35} className="absolute right-[15px] top-[15px]"/>

			<div className="flex flex-col items-start justify-center mb-[40px] mx-7">
				<header className="flex flex-col items-start justify-start pt-[40px]">
					<AnimatedLogo />

					<h2 className="text-[min(4vw,30px)] text-font-secondary-light font-light">Full-stack Developer</h2>
				</header>

				<div className="flex items-center justify-between w-full gap-5 mt-10">
					<div className="flex flex-col gap-5">
						<p>Hi, I&#x2019;m a full-stack developer turning ideas into solutions.</p>

						<LinkButton href="#projects" text="See Projects"/>
					</div>

					<Image width={100} height={100} src="/profile.png" alt="Profile Image" className="rounded-full object-cover w-35 h-35" />
				</div>
			</div>

			<main className="bg-background-secondary-light py-4">
				<section className="mb-4 px-7">
					<h3 className="text-[min(5vw,50px)] font-semi mb-4">About Me</h3>

					<p>
						Hey! Nice to meet you. I’m Gianluca Carra, a full-stack developer with a passion for creating applications and softwares that are both efficient and user-friendly.
						<br />
						<br />
						I have experience working with multiple techs and frameworks and I enjoy tackling complex challenges to deliver high-quality solutions.
						<br />
						<br />
						I’m always eager to learn new technologies and improve my skills, combining creativity and performance in every project I work on.
					</p>
				</section>

				{/* <div>
					<InfiniteSlider />
				</div> */}
			</main>
		</div>
	);
}
