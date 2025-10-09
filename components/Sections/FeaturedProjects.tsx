import { getProjects } from "@/services/projectServices";
import { SectionTitle } from "../UI/SectionTitle/SectionTitle";
import { ProjectCarousel } from "../UI/ProjectCarousel/ProjectCarousel";

export async function FeaturedProjects() {
	const { data } = await getProjects();

	if (!data || data.length === 0) return null;

	return (
		<section className="flex flex-col gap-3" id="featured">
			<SectionTitle text="Featured Projects" />

			<ProjectCarousel data={data} />
		</section>
	);
}
