import type { Metadata } from "next";
import "./globals.css";
import { AOSProvider } from "@/components/AOSProvider/AOSProvider";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
	title: "Gianluca Carra - Portfolio",
	description: "Created by Gianluca Carra",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark scrollbar-hidden">
			<body className="scrollbar-hidden">
				<AuthProvider>
					<ThemeProvider>
						<AOSProvider>{children}</AOSProvider>
					</ThemeProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
