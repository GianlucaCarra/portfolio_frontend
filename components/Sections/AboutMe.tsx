import { LongParagraph } from "../UI/LongParagraph/LongParagraph";
import { SectionTitle } from "../UI/SectionTitle/SectionTitle";
import { StatBadge } from "../UI/StatBadge/StatBadge";
import { BiCode } from "react-icons/bi";
import { FaCode, FaProjectDiagram, FaRocket, FaTachometerAlt } from "react-icons/fa";
import { MdBusiness, MdWorkHistory } from "react-icons/md";

const paragraphs = [
	"Hey! Nice to meet you. I'm Gianluca Carra, a full-stack developer with a passion for creating applications and software that are both efficient and user-friendly.",
	"With several years of experience in web development, I specialize in building scalable, performant applications using modern technologies. My approach combines clean code principles with creative problem-solving to deliver solutions that not only work flawlessly but also provide exceptional user experiences.",
	"I have hands-on experience working with multiple technologies and frameworks, from frontend interfaces to backend APIs and database architecture. I enjoy tackling complex challenges and turning them into elegant, maintainable code.",
	"I'm always eager to learn new technologies and improve my skills. Whether it's exploring the latest frameworks, optimizing performance, or implementing best practices, I believe in continuous growth and staying at the forefront of web development.",
];

export function AboutMe() {
	return (
		<section className="flex flex-col gap-3 lg:gap-4" id="about-me">
			<SectionTitle text="About Me" />

			<LongParagraph paragraphs={paragraphs} />

			<div className="flex w-full flex-wrap justify-center gap-4">
				<StatBadge value="5+" label="Years of Experience" icon={MdWorkHistory} />
				<StatBadge value="2x" label="Faster Delivery" icon={FaRocket} />
				<StatBadge value="20+" label="Projects Delivered" icon={FaProjectDiagram} />
				<StatBadge value="15+" label="Techs Mastered" icon={FaCode} />
				<StatBadge value="70k+" label="Lines of Code" icon={BiCode} />
				<StatBadge value="50ms" label="Avg API Response" icon={FaTachometerAlt} />
				<StatBadge value="10+" label="Industries Served" icon={MdBusiness} />
			</div>
		</section>
	);
}
