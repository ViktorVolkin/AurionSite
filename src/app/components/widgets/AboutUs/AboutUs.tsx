import { getTranslations } from "next-intl/server";
import Eyebrow from "../../shared/Eyebrow";
import styles from "./AboutUs.module.css";
import { AboutUsProps } from "./AboutUs.types";
import Image from "next/image";

export default async function AboutUs({
	text,
	eyebrow,
	items,
	primaryImage,
	secondaryImage,
	title,
}: AboutUsProps) {
	const t = await getTranslations();

	return (
		<section
			className={styles.wrapper}
			id="sources">
			<div className={styles.container}>
				<div className={styles.data__content}>
					<Eyebrow eyebrow={eyebrow} />
					<h2 className={styles.title}>
						{t.rich(title, {
							highlight: (chunks) => <em>{chunks}</em>,
						})}
					</h2>
					<p className={styles.text}>{t(text)}</p>

					<ul className={styles.card__list}>
						{items.map(({ text, title }, idx) => (
							<li
								className={styles.card__item}
								key={idx}>
								<h6 className={styles.card__title}>{t(title)}</h6>
								<p className={styles.card__text}>{t(text)}</p>
							</li>
						))}
					</ul>
				</div>

				<div className={styles.primaryImage}>
					<Image
						src={primaryImage.src}
						alt="Aurion Consultation"
						fill
						sizes="(max-width: 1024px) 100vw, 40vw"
						style={{ objectFit: "cover", borderRadius: "4px" }}
					/>
				</div>
			</div>

			<div className={styles.secondaryImage}>
				<Image
					src={secondaryImage.src}
					alt="Aurion Private Office"
					fill
					sizes="100vw"
					style={{ objectFit: "cover", borderRadius: "4px" }}
				/>
			</div>
		</section>
	);
}
