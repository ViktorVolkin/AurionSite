"use client";

import { motion } from "framer-motion";
import styles from "./loading.module.css";

export default function Loading() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.ambientGlow} />

			<div className={styles.loaderContainer}>
				<motion.div
					animate={{ rotate: 360 }}
					transition={{
						duration: 1.3,
						repeat: Infinity,
						ease: "linear",
					}}
					className={styles.spinner}
				/>

				<div className={styles.textBlock}>
					<h3 className={styles.brand}>Aurion</h3>
					<p className={styles.status}>Loading...</p>
				</div>
			</div>
		</div>
	);
}
