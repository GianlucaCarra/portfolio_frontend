import { AnimatedLogo } from "@/components/UI/AnimatedLogo/AnimatedLogo";
import { CiDark, CiLight, CiLink, CiLinkedin, CiMail } from "react-icons/ci";
import { ProjectSlider } from "@/components/UI/ProjectSlider/ProjectSlider";
import Image from "next/image";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { ToggleTheme } from "@/components/UI/ToggleTheme/ToggleTheme";
import { Header } from "@/components/Sections/Header";
import { Hero } from "@/components/Sections/Hero";
import { AboutMe } from "@/components/Sections/AboutMe";
import { Skills } from "@/components/Sections/Skills";

export default function Home() {
	return (
		<div className="flex flex-col h-[20000px] p-6 gap-[22px]">
			<Header />

			<Hero />

			<AboutMe />

			<Skills />
		</div>
	);
}

			// <ToggleTheme />

			// <div className="flex flex-col items-start justify-center mb-[40px] mx-7">
			// 	<header className="flex flex-col items-start justify-start">
			// 		<AnimatedLogo />

			// 		<h2 data-aos="fade-right" className="text-[min(4vw,30px)] text-font font-light">Full-stack Developer</h2>
			// 	</header>

			// 	<div className="flex items-center justify-between w-full gap-5 mt-10">
			// 		<div data-aos="fade-right" className="flex flex-col gap-5">
			// 			<p>Hi, I&#x2019;m a full-stack developer turning ideas into solutions.</p>

			// 			<LinkButton data-aos="fade-right" href="#projects" text="See Projects"/>
			// 		</div>

			// 		<Image width={100} height={100} src="/profile.png" alt="Profile Image" className="rounded-full object-cover w-35 h-35" />
			// 	</div>
			// </div>

			// <main className="">
			// 	<Section>
			// 		<h3 className="text-[min(5vw,50px)] font-semi mb-4">About Me</h3>

			// 		<p className="">
			// 			Hey! Nice to meet you. I&#x2019;m Gianluca Carra, a full-stack developer with a passion for creating applications and softwares that are both efficient and user-friendly.
			// 			<br />
			// 			<br />
			// 			I have experience working with multiple techs and frameworks and I enjoy tackling complex challenges to deliver high-quality solutions.
			// 			<br />
			// 			<br />
			// 			I&#x2019;m always eager to learn new technologies and improve my skills, combining creativity and performance in every project I work on.
			// 		</p>

			// 		{/* <div>
			// 			<InfiniteSlider />
			// 		</div> */}
			// 	</Section>

			// 	<Section id={"projects"}>
			// 		<h3 className="text-[min(5vw,50px)] font-semi mb-4 px-7">Projects</h3>

			// 		<div>
			// 			<ProjectSlider />
			// 		</div>
			// 	</Section>

			// 	<Section>
			// 		<h3 className="text-[min(5vw,50px)] font-semi mb-4">Contact</h3>

			// 		<p className="mb-6">Fell free to get in touch, i&#x2019;ll make sure to answer ASAP!</p>

			// 		<div className="grid place-self-center justify-items-center grid-cols-1 sm:grid-cols-2 gap-4 max-w-180">
			// 			<LinkButtonExternal href={"https://www.linkedin.com/in/gianlucacarra/"} text={"Linkedin"} icon={CiLinkedin} />
			// 			<LinkButtonExternal href={"mailto:contact@giancarra.com"} text={"E-mail"} icon={CiMail} />
			// 			<LinkButtonExternal href={"https://wa.link/ukd2nz"} text={"WhatsApp"} icon={FaWhatsapp} />
			// 			<LinkButtonExternal href={"https://github.com/gianlucacarra"} text={"GitHub"} icon={FaGithub} />
			// 		</div>
			// 	</Section>
			// </main>

			// <footer>
			// 	<p className="text-center text-font-secondary-light text-sm mb-4">© 2024 Gianluca Carra. All rights reserved.</p>
			// </footer>
