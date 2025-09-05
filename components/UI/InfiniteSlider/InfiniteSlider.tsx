import Image from "next/image";

const techs: {name: string, src: string}[] = [
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
	{ name: "JavaScript", src: "/javascript.svg" },
];

export function InfiniteSlider() {
	return (
		<div className="relative overflow-hidden h-20 flex items-center left-0 mask-l-from-90% mask-r-from-90%">
			{techs.map((tech, index) => (
			<div key={index}
			style={{ animationDelay: `${(90 / techs.length * (techs.length - index) * -1)}s` }}
			className={`absolute left-[100%]
				flex items-center justify-center h-[40px] w-[40px]
				animate-slide-left`}
			>
				<Image src={tech.src} alt={tech.name} width={80} height={80} className="w-10"/>
			</div>
			))}
		</div>
	);
}
