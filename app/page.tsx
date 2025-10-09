import { ToggleTheme } from "@/components/UI/ToggleTheme/ToggleTheme";
import { Header } from "@/components/Sections/Header";
import { Hero } from "@/components/Sections/Hero";
import { AboutMe } from "@/components/Sections/AboutMe";
import { Skills } from "@/components/Sections/Skills";
import { FeaturedProjects } from "@/components/Sections/FeaturedProjects";
import { Contact } from "@/components/Sections/Contact";

export default function Home() {
	return (
		<div className="bg-background-primary relative flex flex-col gap-[22px] p-6">
			<ToggleTheme />

			<Header />

			<Hero />

			<AboutMe />

			<Skills />

			<FeaturedProjects />

			<Contact />
		</div>
	);
}
