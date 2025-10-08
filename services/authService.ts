import { Project } from "@/types/project.interface";
import api from "./api";

export async function login(email: string, secret: string): Promise<any> {
	return (await api.post("super", { email, secret })).data;
}

export async function getProjects(): Promise<any> {
	return (await api.get("projects")).data;
}
