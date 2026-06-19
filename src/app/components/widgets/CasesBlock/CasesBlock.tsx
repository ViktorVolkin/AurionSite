import { getTranslations } from "next-intl/server";
import Eyebrow from "../../shared/Eyebrow";
import styles from "./CasesBlock.module.css";
import { CasesBlockProps } from "./CasesBlock.types";
import CaseCard from "../../shared/CaseCard";

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
			data-screen-label="07 Для кого">
			<div className={styles.container}>
				<div className={styles.header__container}>
					<Eyebrow eyebrow={eyebrow} />
					<h2 className={styles.title}>
						{t.rich(title, {
							em: (chunk) => <em>{chunk}</em>,
						})}
					</h2>
				</div>

				<div className={styles.audiences}>
					{cards.map((card, idx) => (
						<CaseCard
							{...card}
							key={idx}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
