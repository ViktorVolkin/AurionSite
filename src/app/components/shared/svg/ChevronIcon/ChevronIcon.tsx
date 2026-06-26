import { ChevronIconProps } from "./ChevronIcon.types";

export default function ChevronIcon({ isOpen, className }: ChevronIconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			style={{
				transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
				transition: "transform 0.2s ease-in-out",
				width: "1em",
				height: "1em",
				display: "inline-block",
				verticalAlign: "middle",
				marginLeft: "6px",
			}}
			className={className}>
			<path d="m6 9 6 6 6-6" />
		</svg>
	);
}
