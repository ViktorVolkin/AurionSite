import { FinalCtaContent } from "../../shared/lib/constants";
import {
	IntroBlockServicePageContent,
	RelocationGroundsServicePageContent,
	TabsContent,
} from "../../shared/lib/constants/ServicePageContent";
import Tab from "../../shared/Tab";
import FinalCta from "../../widgets/FinalCta";
import IntroBlock from "../../widgets/IntroBlock";
import RelocationGrounds from "./components/RelocationGrounds";
import styles from "./ServicePage.module.css";

interface PageProps {
	params: Promise<{ locale: string; slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
	return (
		<main className={styles.page}>
			<IntroBlock {...IntroBlockServicePageContent} />
			<RelocationGrounds {...RelocationGroundsServicePageContent}>
				<ul className={styles.tabs}>
					{TabsContent.tabs.map((item) => (
						<li
							key={item.reason}
							className={styles.tab}>
							<Tab {...item} />
						</li>
					))}
				</ul>
			</RelocationGrounds>
			<FinalCta {...FinalCtaContent} />
		</main>
	);
}
