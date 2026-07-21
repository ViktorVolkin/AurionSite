import {
	BusinessFinalCTAContent,
	BusinessFirstCTAContent,
	BusinessIntroBlockContent,
	BusinessPossiblitiesBlock,
	BusinessRoadmapContent,
} from "../../shared/lib/constants";
import FinalCta from "../../widgets/FinalCta";
import IntroBlock from "../../widgets/IntroBlock";
import Roadmap from "../../widgets/Roadmap";
import PossibilitiesBlock from "../MainPage/components/PossibilitiesBlock";
import styles from "./ForBusiness.module.css";

export default function ForBusiness() {
	return (
		<main className={styles.wrapper}>
			<IntroBlock {...BusinessIntroBlockContent} />
			<FinalCta {...BusinessFirstCTAContent} />
			<PossibilitiesBlock {...BusinessPossiblitiesBlock} />
			<Roadmap {...BusinessRoadmapContent} />
			<FinalCta {...BusinessFinalCTAContent} />
		</main>
	);
}
