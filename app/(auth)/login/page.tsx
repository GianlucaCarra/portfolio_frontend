"use client"

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react"

export default function Login() {
	const [email, setEmail] = useState<string>('');
	const [secret, setSecret] = useState<string>('');
	const { login, user } = useAuth();
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		login(email, secret);

		if(!user) {
			router.replace('/login');
		}

		router.replace('/dashboard');
	};

	return (
		<div className="grid place-items-center w-full h-full bg-background-light">
			<form action="" className="flex flex-col gap-2 ">
				<input type="text" onChange={(e) => setEmail(e.target.value)} />
				<input type="password" onChange={(e) => setSecret(e.target.value)} />

				<button onClick={(e) => handleSubmit(e)} className="bg-purple">Login</button>
			</form>
		</div>
	);
}
