import { Skill } from "@/types/skill.type";
import { SkillMirror } from "../SkillMirror/SkillMirror";

export function SkillCarousel({ reverse, data }: { reverse?: boolean; data: Skill[] }) {
	return (
		<div className="scrollbar-hidden left-0 flex w-full flex-nowrap overflow-x-hidden mask-r-from-88% mask-l-from-88% lg:mask-r-from-90% lg:mask-l-from-90%">
			<SkillMirror data={data} reverse={reverse} />
			<SkillMirror data={data} reverse={reverse} ariaHidden />
			<SkillMirror data={data} reverse={reverse} ariaHidden />
		</div>
	);
}
