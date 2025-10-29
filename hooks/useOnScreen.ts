import { useEffect, useRef, useState } from "react";

export function useOnScreen<T extends HTMLDivElement>(options?: IntersectionObserverInit) {
	const ref = useRef<T | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!ref.current) return;

		const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
			threshold: 0,
			...options,
		});

		observer.observe(ref.current);

		return () => observer.disconnect();
	}, [options]);

	return { ref, isVisible };
}
