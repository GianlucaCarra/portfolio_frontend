import { ProjectCard } from "../ProjectCard/ProjectCard";

export function ProjectSlider() {
	return (
		<div className="flex gap-4 overflow-x-auto scrollbar-hidden px-7 mask-l-from-95% mask-r-from-95%">
			<ProjectCard title={"Project Tisadsads adsadstle"}
			desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam reiciendis exercitationem laudantium quaerat blanditiis, sit porro officia sunt in ipsa excepturi inventore eum facere unde? Cumque dolore aspernatur atque!"}
			tags={["asdad", "adasd"]} projectId={"1"} />
			<ProjectCard title={"Project Tisadsads adsadstle"}
			desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam reiciendis exercitationem laudantium quaerat blanditiis, sit porro officia sunt in ipsa excepturi inventore eum facere unde? Cumque dolore aspernatur atque!"}
			tags={["asdad", "adasd"]} projectId={"1"} />
			<ProjectCard title={"Project Tisadsads adsadstle"}
			desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam reiciendis exercitationem laudantium quaerat blanditiis, sit porro officia sunt in ipsa excepturi inventore eum facere unde? Cumque dolore aspernatur atque!"}
			tags={["asdad", "adasd"]} projectId={"1"} />
			{

			}
		</div>
	);
}
