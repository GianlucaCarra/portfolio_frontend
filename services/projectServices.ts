import { Project } from "@/types/project.interface";
import api from "./api";

export async function getProjects(): Promise<Project[]> {
	return (await api.get("projects")).data as Project[];
}

export async function getProject(id: string): Promise<Project> {
	return (await api.get(`projects/${id}`)).data as Project;
}
