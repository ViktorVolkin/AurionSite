"use client";

import { useTranslations } from "next-intl";
import clsx from "clsx";
import styles from "./Eyebrow.module.css";
import { EyebrowProps } from "./Eyebrow.types";

export default function Eyebrow({ eyebrow, className }: EyebrowProps) {
	const t = useTranslations();

	const translationKey =
		typeof eyebrow === "object" && eyebrow !== null ? eyebrow : eyebrow;

	return (
		<span className={clsx(styles.eyebrow, className)}>{t(translationKey)}</span>
	);
}
