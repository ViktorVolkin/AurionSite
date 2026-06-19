"use client";

import { routing } from "@/i18n/routing";
import clsx from "clsx";
import styles from "./LanguageSwitcher.module.css";
import { useLanguageSwitch } from "../lib/useLanguageSwitch";
import { useState, useEffect } from "react";

export default function LanguageSwitcher({
	className,
}: {
	className?: string;
}) {
	const { currentLanguage, switchLanguage } = useLanguageSwitch();

	const [visualLanguage, setVisualLanguage] = useState(currentLanguage);

	useEffect(() => {
		setVisualLanguage(currentLanguage);
	}, [currentLanguage]);

	const handleLangClick = (locale: (typeof routing.locales)[number]) => {
		if (locale === visualLanguage) return;

		setVisualLanguage(locale);

		setTimeout(() => {
			switchLanguage(locale);
		}, 200);
	};

	const activeIndex = routing.locales.indexOf(visualLanguage as any);

	return (
		<div className={clsx(styles.switcher, className)}>
			<div
				className={styles.carriage}
				style={{ transform: `translateX(${activeIndex * 100}%)` }}
			/>
			{routing.locales.map((locale) => {
				const isActive = locale === currentLanguage;
				const isVisuallyActive = locale === visualLanguage;

				return (
					<button
						key={locale}
						type="button"
						className={clsx(styles.langButton, {
							[styles.langButton_active]: isVisuallyActive,
						})}
						onClick={() => handleLangClick(locale)}>
						<span className={styles.btnText}>{locale.toUpperCase()}</span>
					</button>
				);
			})}
		</div>
	);
}
