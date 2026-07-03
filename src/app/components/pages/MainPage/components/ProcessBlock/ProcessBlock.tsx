import { getTranslations } from "next-intl/server";
import Eyebrow from "@/app/components/shared/Eyebrow";
import styles from "./ProcessBlock.module.css";
import { ProcessBlockProps } from "./ProcessBlock.types";
import { romanNumerals } from "@/app/components/shared/lib/constants";

export default async function ProcessBlock({
	eyebrow,
	title,
	cards,
}: ProcessBlockProps) {
	const t = await getTranslations();
	return (
		<section
			className={styles.wrapper}
			id="process">
			<Eyebrow eyebrow={eyebrow} />
			<h2 className={styles.title}>
				{t.rich(title, {
					highlight: (chunks) => <em className={styles.highlight}>{chunks}</em>,
				})}
			</h2>

			<div className={styles.data__container}>
				<ul className={styles.cards__list}>
					{cards.map(({ text, title }, idx) => (
						<li
							key={title}
							className={styles.card}>
							<span
								className={styles.rn}
								aria-hidden="true">
								{romanNumerals[idx] || idx + 1}
							</span>
							<div className={styles.data}>
								<h3 className={styles.card__title}>{t(title)}</h3>
								<p className={styles.card__text}>{t(text)}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
