import { CgCodeSlash } from "react-icons/cg";
import { LongParagraph } from "../UI/LongParagraph/LongParagraph";
import { SectionTitle } from "../UI/SectionTitle/SectionTitle";
import { StatBadge } from "../UI/StatBadge/StatBadge";
import { SiTarget } from "react-icons/si";
import { LiaGhostSolid } from "react-icons/lia";
import { BsHouse } from "react-icons/bs";

const paragraphs = [
	"Hey! Nice to meet you. I’m Gianluca Carra, a full-stack developer with a passion for creating applications and softwares that are both efficient and user-friendly.",
	"I have experience working with multiple techs and frameworks and I enjoy tackling complex challenges to deliver high-quality solutions.",
	"I’m always eager to learn new technologies and improve my skills, combining creativity and performance in every project I work on.",
];

export function AboutMe() {
	return (
		<section className="flex flex-col gap-3 lg:gap-4" id="about-me">
			<SectionTitle text="About Me" />

			<LongParagraph paragraphs={paragraphs} />

			<div className="flex w-full flex-wrap justify-center gap-4">
				<StatBadge value="10" label="Years of Experience" icon={CgCodeSlash} />
				<StatBadge value="6" label="Projects made" icon={SiTarget} />
				<StatBadge value="20" label="Ghosts hunted" icon={LiaGhostSolid} />
				<StatBadge value="12" label="Houses builded" icon={BsHouse} />
				<StatBadge value="12" label="Houses builded" icon={BsHouse} />

				<StatBadge value="12" label="Houses builded" icon={BsHouse} />

				<StatBadge value="12" label="Houses builded" icon={BsHouse} />
			</div>
		</section>
	);
}
