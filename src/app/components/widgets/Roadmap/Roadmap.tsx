import { getTranslations } from "next-intl/server";
import Eyebrow from "../../shared/Eyebrow";
import styles from "./Roadmap.module.css";
import { RoadmapProps } from "./Roadmap.types";
import { romanNumerals } from "../../shared/lib/constants";
export default async function Roadmap({
	eyebrow,
	title,
	additionalInfo,
	steps,
}: RoadmapProps) {
	const t = await getTranslations();

	return (
		<section className={styles.wrapper}>
			<Eyebrow eyebrow={eyebrow} />
			<div className={styles.title__container}>
				<h2 className={styles.title}>{t(title)}</h2>
				<p className={styles.additional}>{t(additionalInfo)}</p>
			</div>
			<ul className={styles.steps}>
				{steps.map((step, idx) => (
					<li
						className={styles.step}
						key={step.title}>
						<div className={styles.rn__container}>
							<span className={styles.rn}>{romanNumerals[idx + 1]}</span>
						</div>
						<div className={styles.top}>
							<h3 className={styles.step__title}>{t(step.title)}</h3>
							{step.important && (
								<span className={styles.step__important}>
									{t(step.important)}
								</span>
							)}
						</div>
						<p className={styles.step__text}>{t(step.text)}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
