import { ToggleTheme } from "@/components/UI/ToggleTheme/ToggleTheme";
import { Header } from "@/components/Sections/Header";
import { Hero } from "@/components/Sections/Hero";
import { FeaturedProjects } from "@/components/Sections/FeaturedProjects";
import { Contact } from "@/components/Sections/Contact";
import { Footer } from "@/components/Sections/Footer";
import { MainSection } from "@/components/Sections/MainSection";

export default function Home() {
	return (
		<main className="bg-background-primary scrollbar-hidden">
			<div className="bg-background-primary scrollbar-hidden relative  flex flex-col gap-[35px] p-6 lg:gap-20 lg:px-12 lg:py-8 xl:px-[6%]">
				<ToggleTheme />

				<Header />

				<Hero />

				<MainSection />

				<FeaturedProjects />

				<Contact />
			</div>

			<Footer />
		</main>
	);
}

//  mx-auto max-w-6xl px-4 py-8 md:px-8
