import api from "./api"

export async function login(email: string, secret: string): Promise<any> {
	return (await api.post("super", { email, secret })).data;
}
