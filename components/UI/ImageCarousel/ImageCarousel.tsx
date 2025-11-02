"use client";
import Image from "next/image";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export function ImageCarousel({ data }: { data: { id: string; imageUrl: string }[] }) {
	const [activeImage, setActiveImage] = useState(0);

	return (
		<div className="mb-8 lg:mb-10">
			<div className="relative aspect-video overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-800">
				<img
					src={data[activeImage].imageUrl}
					alt={`Project screenshot ${activeImage + 1}`}
					className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
				/>

				<div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
					{data.map((_, index) => (
						<button
							key={index}
							onClick={() => setActiveImage(index)}
							className={`h-3 w-3 rounded-full transition-all ${
								index === activeImage ? "w-8 bg-white" : "bg-white/50 hover:bg-white/75"
							}`}
						/>
					))}
				</div>
			</div>

			<div className="mt-4 flex gap-3 overflow-x-visible pb-2">
				{data.map((img, index) => (
					<button
						key={index}
						onClick={() => setActiveImage(index)}
						className={`h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
							index === activeImage
								? "scale-105 border-blue-500"
								: "border-slate-300 opacity-60 hover:opacity-100 dark:border-slate-700"
						}`}
					>
						<img
							src={img.imageUrl}
							alt={`Thumbnail ${index + 1}`}
							className="h-full w-full object-cover"
						/>
					</button>
				))}
			</div>
		</div>
	);
}
