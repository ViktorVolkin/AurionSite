import { getTranslations } from "next-intl/server";
import styles from "./AdvantagesDescription.module.css";
import { AdvantagesDescriptionProps } from "./AdvantagesDescription.types";
import SummaryCard from "@/app/components/shared/SummaryCard";

export default async function AdvantagesDescription({
	title,
	firstText,
	secondText,
	card,
}: AdvantagesDescriptionProps) {
	const t = await getTranslations();
	return (
		<section className={styles.wrapper}>
			<div className={styles.data__container}>
				<h2 className={styles.title}>{t(title)}</h2>
				<p className={styles.first_text}>{t(firstText)}</p>
				<p className={styles.second_text}>{t(secondText)}</p>
			</div>
			<SummaryCard {...card} />
		</section>
	);
}
