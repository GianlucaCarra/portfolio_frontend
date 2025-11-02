import React from "react";
import { Project } from "@/types/project.interface";
import { getProject } from "@/services/projectServices";
import { ImageCarousel } from "@/components/UI/ImageCarousel/ImageCarousel";
import { ProjectDescriptionCard } from "@/components/UI/ProjectDescriptionCard/ProjectDescriptionCard";
import { BiChevronLeft } from "react-icons/bi";
import { ProjectTag } from "@/components/UI/ProjectTag/ProjectTag";
import { Footer } from "@/components/Sections/Footer";
import Link from "next/link";
import { SectionTitle } from "@/components/UI/SectionTitle/SectionTitle";
import { LinkCard } from "@/components/UI/LinkCard/LinkCard";

export default async function ProjectPage({ params }: { params: { id: string } }) {
	const { id } = await params;
	const { data }: { data: Project } = await getProject(id);

	const links: { link: string | undefined; type: "front" | "back" | "live" }[] = [
		{ link: data.frontendUrl, type: "front" },
		{ link: data.backendUrl, type: "back" },
		{ link: data.liveUrl, type: "live" },
	];

	return (
		<div className="bg-background-primary min-h-screen">
			<div className="relative mx-auto max-w-6xl px-4 py-8 md:px-8">
				<div className="mb-6 flex items-center justify-between lg:mb-8">
					<Link
						href={"/"}
						className="group text-font-secondary flex items-center gap-1 transition-colors lg:gap-2"
					>
						<BiChevronLeft className="h-5.5 w-5.5 transition-transform group-hover:-translate-x-1" />

						<span className="font-medium">Back</span>
					</Link>

					<div className="border-font-secondary/10 bg-background-secondary/50 flex items-center gap-3 rounded-full border px-3.5 py-1.5 backdrop-blur-sm lg:px-4 lg:py-2">
						<div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

						<span className="text-font-secondary text-sm font-medium">
							{/* {data.status} */} In Development
						</span>
					</div>
				</div>

				<div className="mb-8 text-center lg:mb-10">
					<h1 className="animate-fade-in mb-4 text-3xl font-bold text-slate-900 md:text-5xl dark:text-white">
						{data.name}
					</h1>

					<div className="mt-6 flex flex-wrap justify-center gap-2">
						{data.tags.map((tag) => (
							<ProjectTag key={tag.id} bg="secondary" name={tag.name} />
						))}
					</div>
				</div>

				<ImageCarousel data={data.images} />

				<ProjectDescriptionCard desc={data.description} />

				<SectionTitle text={"Explore More"} />

				<div className="mt-3 flex flex-col gap-3 lg:mt-4 lg:flex-row">
					{links.map(
						({ link, type }, i) =>
							typeof link == "string" && <LinkCard key={i} link={link} type={type} />
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
}
