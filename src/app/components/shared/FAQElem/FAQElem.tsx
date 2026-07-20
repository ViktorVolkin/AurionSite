"use client";
import styles from "./FAQElem.module.css";
import { FaqItemProps } from "./FAQElem.types";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion } from "framer-motion";
import VerticalLine from "./VerticalLine";

export default function FaqElem({
	titleKey,
	textKey,
	as = "p",
	children,
}: FaqItemProps) {
	const [isOpen, setIsOpen] = useState(false);

	const ComponentTag = as;

	return (
		<div className={styles.item}>
			<button
				type="button"
				className={styles.button}
				onClick={() => setIsOpen(!isOpen)}
				aria-expanded={isOpen}>
				<span className={styles.question}>{titleKey}</span>

				<div
					className={styles.icons}
					aria-hidden="true">
					<VerticalLine
						isOpen={isOpen}
						className={styles.icon}
					/>
				</div>
			</button>

			<motion.div
				className={styles.answer_content}
				initial={{ height: 0, opacity: 0 }}
				animate={{
					height: isOpen ? "auto" : 0,
					opacity: isOpen ? 1 : 0,
				}}
				transition={{ duration: 0.25, ease: "easeInOut" }}>
				{children ? (
					<div className={styles.text}>{children}</div>
				) : (
					textKey && (
						<ComponentTag className={styles.text}>{textKey}</ComponentTag>
					)
				)}
			</motion.div>
		</div>
	);
}
