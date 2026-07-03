import { motion } from "framer-motion";
import styles from "./VerticalLine.module.css";
import { VerticalLineProps } from "./VerticalLine.types";
import clsx from "clsx";

export default function VerticalLine({ isOpen, className }: VerticalLineProps) {
	return (
		<svg
			className={clsx(styles.svg_icon, className)}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true">
			<line
				x1="4"
				y1="12"
				x2="20"
				y2="12"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>

			<motion.line
				x1="12"
				y1="4"
				x2="12"
				y2="20"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				animate={{ scaleY: isOpen ? 0 : 1 }}
				style={{ originX: 0.5, originY: 0.5 }}
				transition={{ duration: 0.25, ease: "easeInOut" }}
			/>
		</svg>
	);
}
