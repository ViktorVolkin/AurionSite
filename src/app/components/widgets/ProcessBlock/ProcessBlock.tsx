import { getTranslations } from "next-intl/server";
import Eyebrow from "../../shared/Eyebrow";
import styles from "./ProcessBlock.module.css";
import { ProcessBlockProps } from "./ProcessBlock.types";

export default async function ProcessBlock({
	eyebrow,
	title,
	cards,
}: ProcessBlockProps) {
	const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];
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
							key={idx}
							className={styles.card}>
							<span className={styles.rn}>{romanNumerals[idx] || idx + 1}</span>
							<div className={styles.data}>
								<h6 className={styles.card__title}>{title}</h6>
								<p className={styles.card__text}>{text}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
