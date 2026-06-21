import { getTranslations } from "next-intl/server";
import styles from "./FinalCta.module.css";
import { FinalCtaProps } from "./FinalCta.types";
import Eyebrow from "../../shared/Eyebrow";
import ConsultationForm from "../ConsultationForm";
import { ConsultationFormContent } from "../../shared/lib/constants/MainPageContent";

export default async function FinalCta({
	eyebrow,
	text,
	title,
}: FinalCtaProps) {
	const t = await getTranslations();

	return (
		<section
			className={styles.finalSection}
			id="contacts">
			<Eyebrow eyebrow={eyebrow} />
			<div className={styles.content}>
				<div className={styles.data}>
					<h2 className={styles.title}>{t(title)}</h2>
					<p className={styles.text}>{t(text)}</p>
				</div>
				<ConsultationForm {...ConsultationFormContent} />
			</div>
		</section>
	);
}
