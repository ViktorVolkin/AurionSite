import { getTranslations } from "next-intl/server";
import styles from "./SummaryCard.module.css";
import { SummaryCardProps } from "./SummaryCard.types";

export default async function SummaryCard({
	title,
	elements,
}: SummaryCardProps) {
	const t = await getTranslations();
	return (
		<article className={styles.wrapper}>
			<span className={styles.title}>{t(title)}</span>
			<ul className={styles.list}>
				{elements.map(({ title, text }) => (
					<li
						className={styles.list__elem}
						key={title}>
						<span className={styles.question}>{t(title)}</span>
						<span className={styles.answer}>
							{t.rich(text, {
								highlight: (chunks) => <em>{chunks}</em>,
							})}
						</span>
					</li>
				))}
			</ul>
		</article>
	);
}
