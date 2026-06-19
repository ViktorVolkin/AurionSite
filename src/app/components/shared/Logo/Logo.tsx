"use client";

import { Link } from "@/i18n/navigation";
import styles from "./Logo.module.css";
import { LogoProps } from "./Logo.types";

export default function Logo({ companyName = "Aurion" }: LogoProps) {
	return (
		<Link
			href="/"
			className={styles.logo__container}>
			<span
				className={styles.mark}
				aria-hidden="true"
			/>
			<span className={styles.logo}>{companyName}</span>
		</Link>
	);
}
