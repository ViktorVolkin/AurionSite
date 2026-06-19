import styles from "./CaseCard.module.css";
import { CaseCardProps } from "./CaseCard.types";
import { getTranslations } from "next-intl/server";

export default async function CaseCard({
	countryKey,
	categoryKey,
	outcomeKey,
	timeframeKey,
	descriptionKey,
}: CaseCardProps) {
	const t = await getTranslations();

	return (
		<article className={styles.case}>
			<div className={styles.caseTop}>
				<span className={styles.caseCountry}>{t(countryKey)}</span>
				<span className={styles.caseCategory}>{t(categoryKey)}</span>
			</div>

			<p className={styles.outcome}>{t(outcomeKey)}</p>
			<p className={styles.timeframe}>{t(timeframeKey)}</p>
			<hr className={styles.hr} />
			<p className={styles.caseLine}>{t(descriptionKey)}</p>
		</article>
	);
}
