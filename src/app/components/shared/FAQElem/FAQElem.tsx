"use client";
import styles from "./FAQElem.module.css";
import { FaqItemProps } from "./FAQElem.types";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion } from "framer-motion";
import VerticalLine from "./VerticalLine";

export default function FaqElem({ titleKey, textKey }: FaqItemProps) {
	const t = useTranslations();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.item}>
			<button
				type="button"
				className={styles.button}
				onClick={() => setIsOpen(!isOpen)}
				aria-expanded={isOpen}>
				<span className={styles.question}>{t(titleKey)}</span>

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
				<p className={styles.text}>{t(textKey)}</p>
			</motion.div>
		</div>
	);
}
