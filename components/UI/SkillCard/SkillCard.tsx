import { Tech } from "@/types/tech.interface";

export function SkillCard({ type, techs }: { type: "front" | "back" | "other"; techs: Tech[] }) {
	return <div className="flex-center bg max-h-fit w-full p-5"></div>;
}
