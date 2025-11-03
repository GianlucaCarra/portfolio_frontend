import api from "./api";

export async function login(email: string, secret: string): Promise<string> {
	return (await api.post("super", { email, secret })).data as string;
}
