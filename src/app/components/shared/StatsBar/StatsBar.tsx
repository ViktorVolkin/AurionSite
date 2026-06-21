import { getTranslations } from "next-intl/server";
import styles from "./StatsBar.module.css";
import { StatsBarProps } from "./StatsBar.types";

export default async function StatsBar({ items }: StatsBarProps) {
	const t = await getTranslations();

	return (
		<div className={styles.wrapper}>
			<ul className={styles.list}>
				{items.map(({ title, text }, idx) => (
					<li
						className={styles.item}
						key={idx}>
						<span className={styles.title}>{title}</span>
						<p className={styles.text}>{t(text)}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
