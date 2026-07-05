"use client";
import { motion } from "framer-motion";
import styles from "./Tag.module.css";
import { TagProps } from "./Tag.types";
import clsx from "clsx";
import Link from "next/link";
export default function Tag({ children, leadsTo, className }: TagProps) {
	const TagContent = leadsTo ? (
		<Link
			href={leadsTo}
			className={styles.btn}>
			{children}
		</Link>
	) : (
		<span className={styles.btn}>{children}</span>
	);
	return (
		<motion.div
			className={clsx(styles.wrapper, className)}
			whileHover={{ y: -2 }}
			whileTap={{ y: +2 }}>
			{TagContent}
		</motion.div>
	);
}
