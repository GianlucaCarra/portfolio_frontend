import { BiCode, BiGlobe, BiLinkExternal, BiLogoGithub } from "react-icons/bi";

export function LinkCard({ link, type }: { link: string, type: "live" | "front" | "back" }) {
	// const [hoveredLink, setHoveredLink] = useState(null);

	const linkTypes = {
		live: {
			label: "View Live Site",
			icon: BiGlobe,
			color: "from-blue-500 to-cyan-500",
			description: "Explore the live application",
		},
		front: {
			label: "Frontend Code",
			icon: BiCode,
			color: "from-purple-500 to-pink-500",
			description: "Check out the frontend repository",
		},
		back: {
			label: "Backend Code",
			icon: BiLogoGithub,
			color: "from-orange-500 to-red-500",
			description: "Explore the backend code",
		},
	}
	const linkMap = linkTypes[type];
	const Icon = linkMap.icon;

	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="group overflow-hidden flex gap-4 w-full rounded-2xl border border-font-secondary/10 bg-background-secondary/50 p-3 lg:p-5 shadow-lg lg:basis-1/3 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
		>

			<div className={`relative h-12 w-12 lg:h-15 lg:w-15 shrink-0 rounded-xl bg-gradient-to-br ${linkMap.color} flex transform items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
				<Icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
			</div>

			<div className="relative w-full h-fit">
				<h3 className="mb-1.5 flex items-center justify-between text-base lg:text-lg font-bold text-font-primary">
					{linkMap.label}

					<BiLinkExternal className="h-4 w-4 text-font-secondary transform opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
				</h3>

				<p className="text-sm lg:text-base text-font-secondary">{linkMap.description}</p>
			</div>
		</a>
	);
}
