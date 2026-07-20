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
import Image from "next/image";

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
			<section className={styles.container}>
				{data.previewImage && (
					<div className={styles.image__container}>
						<Image
							src={data.previewImage}
							alt={country}
							fill
							className={styles.image}
						/>
					</div>
				)}
				<TabsSwitcher {...data.tabsSwitcher} />
			</section>
			<Roadmap {...data.roadmap} />
			<AdvantagesDescription {...data.advantages} />
			<Tariffs {...data.tariffs} />
			<FAQ {...data.faq} />
			<FinalCta {...FinalCtaContent} />
		</main>
	);
}
