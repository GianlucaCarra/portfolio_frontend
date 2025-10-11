import Image from "next/image";

export function ImageCarousel({ images }: { images: { id: string; imageUrl: string }[] }) {
	return (
		<div className="rounded-[5px]">
			{images.map((image) => (
				<Image className="rounded-[5px]" src={image.imageUrl} width={2000} height={2000} alt={""} />
			))}
		</div>
	);
}
