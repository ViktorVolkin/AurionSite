export default function CloseIcon({ className }: { className?: string }) {
	return (
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}>
			<path d="M5 5l14 14M19 5L5 19"></path>
		</svg>
	);
}
