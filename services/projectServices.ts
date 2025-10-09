import api from "./api";

export async function getProjects(): Promise<any> {
	return (await api.get("projects")).data;
}
