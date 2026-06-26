import { FinalCtaContent } from "../../shared/lib/constants";
import { IntroBlockServicePageContent } from "../../shared/lib/constants/ServicePageContent";
import FinalCta from "../../widgets/FinalCta";
import IntroBlock from "../../widgets/IntroBlock";
import styles from "./ServicePage.module.css";

export default async function ServicePage() {
	return (
		<main className={styles.page}>
			<IntroBlock {...IntroBlockServicePageContent} />

			<FinalCta {...FinalCtaContent} />
		</main>
	);
}
