import { getTranslations } from "next-intl/server";
import Eyebrow from "../../shared/Eyebrow";
import styles from "./Tariffs.module.css";
import { TariffsProps } from "./Tariffs.types";
import TariffCard from "../../shared/TariffCard";

export default async function Tariffs({
	PS,
	additionalText,
	eyebrow,
	title,
	cards,
}: TariffsProps) {
	const t = await getTranslations();
	return (
		<section className={styles.wrapper}>
			<Eyebrow eyebrow={eyebrow} />
			<div className={styles.data__info}>
				<h2 className={styles.title}>{t(title)}</h2>
				<p className={styles.text}>{t(additionalText)}</p>
			</div>
			<ul className={styles.cards}>
				{cards.map((card) => (
					<TariffCard
						{...card}
						key={card.title}
					/>
				))}
			</ul>
			<p className={styles.PS}>{t(PS)}</p>
		</section>
	);
}
