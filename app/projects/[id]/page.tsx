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

export default async function ProjectPage({ params }: { params: { id: string }}) {
	const { id } = await params;
	const { data }: { data: Project } = await getProject(id);

	const links: { link: string | undefined; type: "front" | "back" | "live" }[] = [
		{ link: data.frontendUrl, type: "front" },
		{ link: data.backendUrl, type: "back" },
		{ link: data.liveUrl, type: "live" }
	];

	return (
		<div className="min-h-screen bg-background-primary">
			<div className="relative mx-auto max-w-6xl px-4 py-8 md:px-8">
				<div className="mb-6 lg:mb-8 flex items-center justify-between">
					<Link href={"/"} className="group text-font-secondary flex items-center gap-1 lg:gap-2 transition-colors">
						<BiChevronLeft className="h-5.5 w-5.5 transition-transform group-hover:-translate-x-1" />

						<span className="font-medium">Back</span>
					</Link>

					<div className="flex items-center gap-3 lg:py-2 rounded-full border border-font-secondary/10 bg-background-secondary/50 px-3.5 py-1.5 lg:px-4 backdrop-blur-sm">
						<div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

						<span className="text-sm font-medium text-font-secondary">
							{/* {data.status} */} In Development
						</span>
					</div>
				</div>

				<div className="mb-8 lg:mb-10 text-center">
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

				<div className="flex flex-col gap-3 lg:flex-row mt-3 lg:mt-4">
					{links.map(({ link, type }, i) => (
							typeof link == "string" && <LinkCard key={i} link={link} type={type} />
						)
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
}
