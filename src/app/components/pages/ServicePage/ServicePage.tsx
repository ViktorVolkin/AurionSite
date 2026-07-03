import { notFound } from "next/navigation";
import { FinalCtaContent } from "../../shared/lib/constants";
import { SERVICE_PAGES_DATA } from "../../shared/lib/constants/ServicePageContent";

import FAQ from "../../widgets/FAQ";
import FinalCta from "../../widgets/FinalCta";
import IntroBlock from "../../widgets/IntroBlock";
import Roadmap from "../../widgets/Roadmap";
import Tariffs from "../../widgets/Tariffs";
import AdvantagesDescription from "./components/AdvantagesDescription";
import TabsSwitcher from "./components/TabsSwitcher";
import styles from "./ServicePage.module.css";

interface Props {
	params: Promise<{ country: string; ground: string }>;
}
export default async function ServicePage({ params }: Props) {
	const { country, ground } = await params;
	const data = SERVICE_PAGES_DATA[country]?.[ground];
	if (data === undefined) {
		notFound();
	}
	return (
		<main className={styles.page}>
			<IntroBlock {...data.intro} />
			<TabsSwitcher {...data.tabsSwitcher} />
			<Roadmap {...data.roadmap} />
			<AdvantagesDescription {...data.advantages} />
			<Tariffs {...data.tariffs} />
			<FAQ {...data.faq} />
			<FinalCta {...FinalCtaContent} />
		</main>
	);
}
