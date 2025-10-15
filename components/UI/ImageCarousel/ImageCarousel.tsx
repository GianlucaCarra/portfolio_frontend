"use client";
import Image from "next/image";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export function ImageCarousel({ images }: { images: { id: string; imageUrl: string }[] }) {
	const [imageIndex, setImageIndex] = useState(0);

	const prevImage = () => {
		setImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
	};

	const nextImage = () => {
		setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
	};

	const goToImage = (index: number) => {
		setImageIndex(index);
	};

	return (
		<div className="relative flex w-full items-center rounded-[5px]">
			<div className="relative h-64 w-full overflow-hidden">
				{images.map((image, idx) => (
					<Image
						className={`${idx === imageIndex ? "z-1 opacity-100" : "pointer-events-none z-0 opacity-0"} absolute aspect-video h-full w-full rounded-[5px] object-cover object-top-left transition-opacity`}
						key={image.id}
						src={image.imageUrl}
						width={2000}
						height={2000}
						alt={""}
					/>
				))}
			</div>

			<button
				onClick={prevImage}
				className="bg-background-primary absolute left-2 z-2 rounded-full p-1"
			>
				<MdChevronLeft className="text-font-primary" size={20} />
			</button>

			<button
				onClick={nextImage}
				className="bg-background-primary absolute right-2 z-2 rounded-full p-1"
			>
				<MdChevronRight className="text-font-primary" size={20} />
			</button>

			<div className="absolute bottom-2 left-1/2 z-2 flex -translate-x-1/2 gap-2">
				{images.map((_, idx) => (
					<button
						className={`h-2 w-2 rounded-full ${imageIndex === idx ? "bg-accent" : "bg-background-secondary"}`}
						key={idx}
						onClick={() => goToImage(idx)}
					/>
				))}
			</div>
		</div>
	);
}
