import { getTranslations } from "next-intl/server";
import styles from "./Eyebrow.module.css";
import { EyebrowProps } from "./Eyebrow.types";
import clsx from "clsx";
export default async function Eyebrow({ eyebrow, className }: EyebrowProps) {
	const t = await getTranslations();
	return <span className={clsx(styles.eyebrow, className)}>{t(eyebrow)}</span>;
}
