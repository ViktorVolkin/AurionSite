import { getTranslations } from "next-intl/server";
import Eyebrow from "../../shared/Eyebrow";
import styles from "./PossibilitiesBlock.module.css";
import { PossibilitiesBlockProps } from "./PossibilitiesBlock.types";
import CountryCard from "../../shared/CountryCard";
import CustomSwiper from "../../shared/CustomSwiper";

export default async function PossibilitiesBlock({
	additionalInfo,
	eyebrow,
	title,
	blocks,
}: PossibilitiesBlockProps) {
	const t = await getTranslations();

	const renderedCards = blocks.map((item) => ({
		key: `${item.unique}-${item.href}`,
		node: <CountryCard {...item} />,
	}));

	return (
		<section
			className={styles.container}
			id="possibilities">
			<div className={styles.data__container}>
				<div className={styles.title__block}>
					<Eyebrow eyebrow={eyebrow} />
					<h2 className={styles.title}>
						{t.rich(title, {
							highlight: (chunks) => <em>{chunks}</em>,
						})}
					</h2>
				</div>
				<p className={styles.additional_info}>{t(additionalInfo)}</p>
			</div>

			<CustomSwiper
				items={renderedCards}
				slideClassName={styles.slide}
			/>
		</section>
	);
}
