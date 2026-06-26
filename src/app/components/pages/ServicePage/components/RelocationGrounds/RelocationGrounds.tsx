import Eyebrow from "@/app/components/shared/Eyebrow";
import styles from "./RelocationGrounds.module.css";
import { RelocationGroundsProps } from "./RelocationGrounds.types";
import { getTranslations } from "next-intl/server";

export default async function RelocationGrounds({
	eyebrow,
	title,
	children,
}: RelocationGroundsProps) {
	const t = await getTranslations();
	return (
		<section className={styles.section}>
			<Eyebrow eyebrow={eyebrow} />
			<h2 className={styles.title}>{t(title)}</h2>
			{children}
		</section>
	);
}
