"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
	const router = useRouter();

	return (
		<div className={styles.container}>
			<div className={styles.visualBlock}>
				<div className={styles.glowBackground} />
				<div className={styles.radarCircle1} />
				<div className={styles.radarCircle2} />
				<h1 className={`${styles.fadeInUp} ${styles.title404}`}>404</h1>
			</div>

			<div className={styles.textBlock}>
				<h2 className={`${styles.fadeInUp} ${styles.subtitle}`}></h2>

				<p className={`${styles.fadeInUp} ${styles.description}`}>
					Похоже, этой точки нет на нашей карте, или адрес изменился. Давайте
					вернемся на стабильный маршрут.
				</p>
			</div>

			<div className={`${styles.fadeInUp} ${styles.actions}`}>
				<button
					onClick={() => router.back()}
					className={`${styles.btn} ${styles.btnSecondary}`}>
					<svg
						className={styles.iconLeft}
						width="16"
						height="16"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						/>
					</svg>
					Вернуться назад
				</button>

				<Link
					href="/"
					className={`${styles.btn} ${styles.btnPrimary}`}>
					На главную
					<svg
						className={styles.iconRight}
						width="16"
						height="16"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13 7l5 5m0 0l-5 5m5-5H6"
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
}
