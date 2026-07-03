import { getTranslations } from "next-intl/server";
import clsx from "clsx";
import styles from "./TariffCard.module.css";
import { TariffCardProps } from "./TariffCard.types";
import OpenPopupButton from "../OpenPopupButton";

export default async function TariffCard({
	additional,
	keyPoints,
	price,
	title,
	isFeatured,
	featuredBadge,
}: TariffCardProps & { isFeatured?: boolean; featuredBadge?: string }) {
	const t = await getTranslations();

	return (
		<article
			className={clsx(styles.wrapper, {
				[styles.featured]: isFeatured,
			})}>
			{isFeatured && featuredBadge && (
				<span className={styles.badge}>{t(featuredBadge)}</span>
			)}

			<div className={styles.data__container}>
				<h3 className={styles.title}>{t(title)}</h3>
				<p className={styles.additional}>{t(additional)}</p>
			</div>

			<div className={styles.price__container}>
				<span className={styles.price}>{price.price}</span>
				<span className={styles.price__detail}>{t(price.detail)}</span>
			</div>

			<ul className={styles.list}>
				{keyPoints.map((point) => {
					return (
						<li
							className={styles.list__item}
							key={point}>
							{t(point)}
						</li>
					);
				})}
			</ul>

			<OpenPopupButton
				className={styles.button}
				text="Services.choose"
			/>
		</article>
	);
}
