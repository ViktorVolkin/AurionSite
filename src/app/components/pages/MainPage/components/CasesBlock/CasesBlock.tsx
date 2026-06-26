import { getTranslations } from "next-intl/server";
import Eyebrow from "@/app/components/shared/Eyebrow";
import styles from "./CasesBlock.module.css";
import { CasesBlockProps } from "./CasesBlock.types";
import CaseCard from "../../../../shared/CaseCard";
import { CasesBlockSEO } from "../../../../shared/lib/constants";

export default async function CasesBlock({
	title,
	cards,
	eyebrow,
}: CasesBlockProps) {
	const t = await getTranslations();
	return (
		<section
			className={styles.section}
			id="audience"
			data-screen-label={t(CasesBlockSEO.sectionLabel)}>
			<div className={styles.container}>
				<div className={styles.header__container}>
					<Eyebrow eyebrow={eyebrow} />
					<h2 className={styles.title}>
						{t.rich(title, {
							em: (chunk) => <em>{chunk}</em>,
						})}
					</h2>
				</div>

				<ul className={styles.audiences}>
					{cards.map((card) => (
						<li key={`${card.countryKey}-${card.outcomeKey}`}>
							<CaseCard {...card} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
