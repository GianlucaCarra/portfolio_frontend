import Link from "next/link";

export default function NotFound() {
	return (
		<div className="bg-background-primary flex min-h-screen items-center justify-center overflow-hidden px-4">
			<div className="flex flex-col">
				<h1 className="text-center text-[150px] font-bold md:text-[200px]">404</h1>

				<h2 className="text-font-primary mb-4 text-center text-2xl font-semibold md:text-3xl">
					Page Not Found
				</h2>
				<p className="text-font-secondary mx-auto mb-8 max-w-md text-center">
					Oops! The page you're looking for seems to have wandered off into the digital void. Let's
					get you back on track.
				</p>

				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Link
						href="/"
						className="group bg-background-secondary/50 border-font-secondary/10 relative overflow-hidden rounded-full border px-8 py-3 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
					>
						<span className="text-font-primary relative z-10">Go Home</span>
					</Link>
				</div>

				<div className="mt-16 flex justify-center gap-2">
					{[...Array(3)].map((_, i) => (
						<div
							key={i}
							className="bg-accent h-2 w-2 animate-bounce rounded-full"
							style={{ animationDelay: `${i * 0.2}s` }}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
