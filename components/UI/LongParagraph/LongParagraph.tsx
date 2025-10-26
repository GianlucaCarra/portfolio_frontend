"use client";

import { useEffect, useRef, useState } from "react";

export function LongParagraph({ paragraphs }: { paragraphs: string[] }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

	// Detect which paragraph is closest to center
	const handleScroll = () => {
		const container = containerRef.current;
		if (!container) return;

		const containerRect = container.getBoundingClientRect();
		const containerCenter = containerRect.top + containerRect.height / 2;

		let closestIndex = 0;
		let closestDistance = Infinity;

		paragraphRefs.current.forEach((p, idx) => {
			if (!p) return;

			const pRect = p.getBoundingClientRect();
			const pCenter = pRect.top + pRect.height / 2;
			const distance = Math.abs(containerCenter - pCenter);

			if (distance < closestDistance) {
				closestDistance = distance;
				closestIndex = idx;
			}
		});

		setActiveIndex(closestIndex);
	};

	// Debounced scroll handler for better performance
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		let rafId: number;
		const debouncedScroll = () => {
			cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(handleScroll);
		};

		container.addEventListener("scroll", debouncedScroll, { passive: true });

		// Initial check
		handleScroll();

		return () => {
			container.removeEventListener("scroll", debouncedScroll);
			cancelAnimationFrame(rafId);
		};
	}, [paragraphs.length]);

	return (
		<div className="relative mx-auto w-full">
			<div
				ref={containerRef}
				className="scrollbar-hide relative flex h-[200px] snap-y snap-mandatory flex-col items-center gap-8 overflow-y-auto mask-t-from-85% mask-b-from-85% py-10"
				style={{
					scrollbarWidth: "none",
					msOverflowStyle: "none",
				}}
			>
				{paragraphs.map((paragraph, idx) => (
					<p
						key={idx}
						ref={(el) => {
							paragraphRefs.current[idx] = el;
						}}
						className={`snap-center px-6 text-center text-sm transition-all duration-300 lg:text-base ${
							idx === activeIndex ? "scale-100 opacity-100" : "scale-95 opacity-40"
						}`}
					>
						{paragraph}
					</p>
				))}
			</div>

			<div className="mt-3 flex justify-center gap-2">
				{paragraphs.map((_, idx) => (
					<button
						key={idx}
						onClick={() => {
							const p = paragraphRefs.current[idx];
							if (p) {
								p.scrollIntoView({ behavior: "smooth", block: "center" });
							}
						}}
						className={`h-2 w-2 rounded-full transition-all ${
							idx === activeIndex
								? "bg-accent w-6"
								: "bg-font-secondary hover:scale-140 hover:cursor-pointer"
						}`}
						aria-label={`Go to paragraph ${idx + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
