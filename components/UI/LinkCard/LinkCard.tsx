import { BiCode, BiGlobe, BiLinkExternal, BiLogoGithub } from "react-icons/bi";

export function LinkCard({ link, type }: { link: string; type: "live" | "front" | "back" }) {
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
	};
	const linkMap = linkTypes[type];
	const Icon = linkMap.icon;

	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="group border-font-secondary/10 bg-background-secondary/50 flex w-full gap-4 overflow-hidden rounded-2xl border p-3 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl lg:basis-1/3 lg:p-5"
		>
			<div
				className={`relative h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br lg:h-15 lg:w-15 ${linkMap.color} flex transform items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
			>
				<Icon className="h-6 w-6 text-white lg:h-8 lg:w-8" />
			</div>

			<div className="relative h-fit w-full">
				<h3 className="text-font-primary mb-1.5 flex items-center justify-between text-base font-bold lg:text-lg">
					{linkMap.label}

					<BiLinkExternal className="text-font-secondary h-4 w-4 transform opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
				</h3>

				<p className="text-font-secondary text-sm lg:text-base">{linkMap.description}</p>
			</div>
		</a>
	);
}
