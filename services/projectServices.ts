import api from "./api";

export async function getProjects(): Promise<any> {
	return (await api.get("projects")).data;
}

export async function getProject(id: string): Promise<any> {
	return (await api.get(`projects/${id}`)).data;
}
