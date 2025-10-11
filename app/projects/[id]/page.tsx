import { Footer } from "@/components/Sections/Footer";
import { ImageCarousel } from "@/components/UI/ImageCarousel/ImageCarousel";
import { LinkButton } from "@/components/UI/LinkButton/LinkButton";
import { ProjectTag } from "@/components/UI/ProjectTag/ProjectTag";
import { SectionTitle } from "@/components/UI/SectionTitle/SectionTitle";
import { ToggleTheme } from "@/components/UI/ToggleTheme/ToggleTheme";
import { getProject } from "@/services/projectServices";
import type { Project } from "@/types/project.interface";
import Link from "next/link";
import { MdArrowLeft, MdChevronLeft } from "react-icons/md";

export default async function Project({ params }: { params: { id: string } }) {
	const { id } = await params;
	const { data }: { data: Project } = await getProject(id);

	return (
		<div className="bg-background-primary relative flex h-[100vh] flex-col gap-4 p-6">
			<ToggleTheme />

			<div className="flex-center relative">
				<Link href="/" className="absolute left-0">
					<MdChevronLeft className="text-font-primary" size={30} />
				</Link>

				<h1 className="mx-3 max-w-[80%] place-self-center text-[28px] font-semibold text-clip">
					{data.name}
				</h1>
			</div>

			<div className="flex-center relative">
				<div className="absolute top-2 left-2 z-5 flex gap-2">
					{data.tags.map((tag) => (
						<ProjectTag key={tag.id} name={tag.name} />
					))}
				</div>

				<ImageCarousel images={data.images} />
			</div>

			<p className="text-base">{data.description}</p>

			{(data.liveUrl || data.frontendUrl || data.backendUrl) && (
				<section className="flex flex-col gap-3">
					<SectionTitle text="Related Links" />

					<LinkButton href={data.liveUrl || ""} text={"Ola"} />
				</section>
			)}

			<Footer />
		</div>
	);
}
