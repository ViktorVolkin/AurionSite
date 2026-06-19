"use client";
import { useEffect, useRef, useState } from "react";
import { HeaderProps } from "./Header.types";
import HeaderPartial from "./components/HeaderPartial";

export default function Header(props: HeaderProps) {
	const [isMoved, setIsMoved] = useState(false);
	const triggerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const currentTrigger = triggerRef.current;
		if (!currentTrigger) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsMoved(!entry.isIntersecting);
			},
			{
				threshold: 0,
				rootMargin: "0px 0px 0px 0px",
			},
		);

		observer.observe(currentTrigger);
		return () => observer.unobserve(currentTrigger);
	}, []);

	return (
		<>
			<div
				ref={triggerRef}
				style={{
					position: "absolute",
					top: "20px",
					left: 0,
					height: "1px",
					width: "1px",
					pointerEvents: "none",
					zIndex: 9999,
				}}
			/>

			<HeaderPartial
				{...props}
				isMoved={isMoved}
			/>
			<div style={{ height: "80px", width: "100%" }}></div>
		</>
	);
}
