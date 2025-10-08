import Image from "next/image";

export function SkillCarousel() {
	return (
		<div className="w-full flex overflow-x-hidden scrollbar-hidden left-0 mask-l-from-95% mask-r-from-95%">
			<div className="flex-center gap-2 animate-slider pr-2">
				<Image src="/javascript.svg" alt="JavaScript Logo" width={50} height={50} className="w-12 h-12 flex-none"/>
				<Image src="/javascript.svg" alt="JavaScript Logo" width={50} height={50} className="w-12 h-12 flex-none"/>
				<Image src="/javascript.svg" alt="JavaScript Logo" width={50} height={50} className="w-12 h-12 flex-none"/>
				<Image src="/javascript.svg" alt="JavaScript Logo" width={50} height={50} className="w-12 h-12 flex-none"/>
				<Image src="/javascript.svg" alt="JavaScript Logo" width={50} height={50} className="w-12 h-12 flex-none"/>
				<Image src="/javascript.svg" alt="JavaScript Logo" width={50} height={50} className="w-12 h-12 flex-none"/>
				<Image src="/javascript.svg" alt="JavaScript Logo" width={50} height={50} className="w-12 h-12 flex-none"/>
				<Image src="/javascript.svg" alt="JavaScript Logo" width={50} height={50} className="w-12 h-12 flex-none"/>
			</div>

			<div aria-hidden className="flex-center gap-2 animate-slider pr-2">
				<Image src="/javascript.svg" alt="JavaScript Logo" width={50} height={50} className="w-12 h-12 flex-none"/>
				<Image src="/javascript.svg" alt="JavaScript Logo" width={50} height={50} className="w-12 h-12 flex-none"/>
				<Image src="/javascript.svg" alt="JavaScript Logo" width={50} height={50} className="w-12 h-12 flex-none"/>
				<Image src="/javascript.svg" alt="JavaScript Logo" width={50} height={50} className="w-12 h-12 flex-none"/>
				<Image src="/javascript.svg" alt="JavaScript Logo" width={50} height={50} className="w-12 h-12 flex-none"/>
				<Image src="/javascript.svg" alt="JavaScript Logo" width={50} height={50} className="w-12 h-12 flex-none"/>
				<Image src="/javascript.svg" alt="JavaScript Logo" width={50} height={50} className="w-12 h-12 flex-none"/>
				<Image src="/javascript.svg" alt="JavaScript Logo" width={50} height={50} className="w-12 h-12 flex-none"/>
			</div>
		</div>
	);
}
