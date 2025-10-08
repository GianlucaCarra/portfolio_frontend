"use client";

import { createContext, useState, ReactNode } from "react";
import * as authService from "@/services/authService";

interface AuthContextType {
	user: string | null;
	login: (email: string, secret: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState(null);

	const login = async (email: string, secret: string) => {
		const { data } = await authService.login(email, secret);

		setUser(data);
	};

	return <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>;
}

export default AuthContext;
