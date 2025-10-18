import { SkillsCarousels } from "../UI/SkillsCarousels/SkillsCarousels";
import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";

export function MainSection() {
	return (
		<div className="flex flex-col gap-[35px] lg:gap-10" id="main-section">
			<div className="flex flex-col gap-[35px] lg:flex-row lg:justify-between">
				<AboutMe />

				<Skills />
			</div>

			<SkillsCarousels />
		</div>
	);
}
