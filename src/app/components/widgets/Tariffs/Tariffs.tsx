import { getTranslations } from "next-intl/server";
import Eyebrow from "../../shared/Eyebrow";
import TariffCard from "../../shared/TariffCard";
import styles from "./Tariffs.module.css";
import { TariffsProps } from "./Tariffs.types";

export default async function Tariffs({
	additionalText,
	eyebrow,
	title,
	cards = [],
}: TariffsProps) {
	const t = await getTranslations();
	const hasMultipleCards = cards.length > 1;

	return (
		<section className={styles.wrapper}>
			<Eyebrow eyebrow={eyebrow} />

			<div className={styles.data__info}>
				<h2 className={styles.title}>{t(title)}</h2>
				{hasMultipleCards && additionalText && (
					<p className={styles.text}>{t(additionalText)}</p>
				)}
			</div>

			{hasMultipleCards ? (
				<ul className={styles.cards}>
					{cards.map((card) => (
						<TariffCard
							key={card.title}
							{...card}
						/>
					))}
				</ul>
			) : (
				cards[0] && (
					<div className={styles.card}>
						<TariffCard {...cards[0]} />
					</div>
				)
			)}
		</section>
	);
}
