import { getProjects } from "@/services/projectServices";
import { SectionTitle } from "../UI/SectionTitle/SectionTitle";
import { ProjectCarousel } from "../UI/ProjectCarousel/ProjectCarousel";

export async function FeaturedProjects() {
	const { data } = await getProjects();

	return (
		<section className="flex flex-col gap-3 overflow-y-visible lg:gap-4" id="featured">
			<SectionTitle text="Featured Projects" />

			<p className="mt-4 self-center text-center lg:mt-6 lg:max-w-[60%]">
				I recently performed a hard reset on my GitHub account, which temporarily removed all my
				repositories. I’m currently rebuilding my portfolio and will be showcasing new projects
				soon. Stay tuned for updates!
			</p>

			{/* <ProjectCarousel data={data} /> */}
		</section>
	);
}
