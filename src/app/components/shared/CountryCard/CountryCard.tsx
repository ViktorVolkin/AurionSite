import { CountryCardProps } from "./CountryCard.types";
import styles from "./CountryCard.module.css";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Page({
	importantText,
	ourExperience,
	title,
	unique,
	href,
}: CountryCardProps) {
	const t = await getTranslations();
	return (
		<Link
			href={href}
			className={styles.Link}>
			<article className={styles.wrapper}>
				<div className={styles.title__block}>
					<h5 className={styles.card__title}>{t(title)}</h5>
					<p className={styles.important}>{t(importantText)}</p>
				</div>
				<hr className={styles.hr} />
				<div className={styles.data}>
					<ul className={styles.list}>
						{unique.map((item, idx) => (
							<li
								className={styles.item}
								key={idx}>
								<span>{t(item.question)}</span>
								{item.answer && (
									<span className={styles.answer}>{t(item.answer)}</span>
								)}
							</li>
						))}
					</ul>
					<p className={styles.experience}>{t(ourExperience)}</p>
				</div>
			</article>
		</Link>
	);
}
