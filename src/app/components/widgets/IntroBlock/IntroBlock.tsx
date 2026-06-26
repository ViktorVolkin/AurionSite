import { getTranslations } from "next-intl/server";
import styles from "./IntroBlock.module.css";
import { IntroBlockProps } from "./IntroBlock.types";
import OpenPopupButton from "@/app/components/shared/OpenPopupButton";
import Eyebrow from "@/app/components/shared/Eyebrow";
import StatsBar from "@/app/components/shared/StatsBar";
import FinalCta from "../FinalCta";
import { FinalCtaContent } from "../../shared/lib/constants";

export default async function IntroBlock({
	eyebrow,
	title,
	info,
	firstButton,
	decidedBy,
}: IntroBlockProps) {
	const t = await getTranslations();

	return (
		<section className={styles.container}>
			<div className={styles.heroInner}>
				<Eyebrow eyebrow={eyebrow}></Eyebrow>

				<h1 className={styles.title}>
					{t.rich(title, {
						highlight: (chunks) => <em>{chunks}</em>,
					})}
				</h1>

				<p className={styles.info}>{t(info)}</p>

				<OpenPopupButton
					{...firstButton}
					className={styles.firstButton}
				/>
			</div>
			{decidedBy && <StatsBar items={decidedBy} />}
		</section>
	);
}
