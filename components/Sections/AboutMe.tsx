import { SectionTitle } from "../UI/SectionTitle/SectionTitle";

export function AboutMe() {
	return (
		<section className="flex flex-col gap-3 lg:gap-4" id="about-me">
			<SectionTitle text="About Me" />

			<p className="text-base">
				Hey! Nice to meet you. I’m Gianluca Carra, a full-stack developer with a passion for
				creating applications and softwares that are both efficient and user-friendly.
				<br />
				<br />
				I have experience working with multiple techs and frameworks and I enjoy tackling complex
				challenges to deliver high-quality solutions.
				<br />
				<br />
				I’m always eager to learn new technologies and improve my skills, combining creativity and
				performance in every project I work on.
			</p>
		</section>
	);
}
