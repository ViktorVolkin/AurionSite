"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./not-found.module.css";
import clsx from "clsx";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
	variable: "--inter",
	subsets: ["latin", "cyrillic"],
	style: "normal",
});

const cormorantGaramond = Cormorant_Garamond({
	subsets: ["cyrillic", "latin"],
	variable: "--cormorant",
	style: "normal",
	weight: ["400", "600", "700"],
});

const localesFallback = {
	ru: {
		back: "Вернуться назад",
		homepage: "Перейти на главную",
		description:
			"Похоже, вы попали на не существующую страницу, или адрес изменился. Давайте вернемся на стабильный маршрут.",
	},
	en: {
		back: "Go back",
		homepage: "Go to homepage",
		description:
			"It looks like you've landed on a non-existent page, or the address has changed. Let's get back on track.",
	},
};

export default function GlobalNotFound() {
	const router = useRouter();
	const pathname = usePathname();

	const isRu = pathname?.startsWith("/ru") || pathname?.split("/")[1] === "ru";
	const t = isRu ? localesFallback.ru : localesFallback.en;

	return (
		<html
			lang={isRu ? "ru" : "en"}
			className={clsx(inter.variable, cormorantGaramond.variable)}>
			<body style={{ margin: 0, background: "#0d1b2a" }}>
				<div className={styles.container}>
					<div className={styles.textBlock}>
						<div className={styles.radarCircle1} />
						<div className={styles.radarCircle2} />

						<h1 className={styles.title404}>404</h1>
						<p className={styles.description}>{t.description}</p>
					</div>

					<div className={styles.actions}>
						<button
							onClick={() => router.back()}
							className={clsx(styles.btn, styles.btnSecondary)}>
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
							{t.back}
						</button>

						<Link
							href={isRu ? "/ru" : "/en"}
							className={clsx(styles.btn, styles.btnPrimary)}>
							{t.homepage}
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
			</body>
		</html>
	);
}
