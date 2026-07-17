import { getTranslations } from "next-intl/server";
import styles from "./IntroBlock.module.css";
import { IntroBlockProps } from "./IntroBlock.types";
import OpenPopupButton from "@/app/components/shared/OpenPopupButton";
import Eyebrow from "@/app/components/shared/Eyebrow";
import StatsBar from "@/app/components/shared/StatsBar";

export default async function IntroBlock({
	eyebrow,
	title,
	info,
	firstButton,
	decidedBy,
	seoTitle,
}: IntroBlockProps) {
	const t = await getTranslations();
	const Title = seoTitle ? "h2" : "h1";
	return (
		<section className={styles.container}>
			<div className={styles.heroInner}>
				<Eyebrow eyebrow={eyebrow}></Eyebrow>

				{seoTitle && <h1 className={styles.hidden}>{t(seoTitle)}</h1>}
				<Title className={styles.title}>
					{t.rich(title, {
						highlight: (chunks) => <em>{chunks}</em>,
					})}
				</Title>

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
