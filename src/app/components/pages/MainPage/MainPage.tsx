import {
	MainPageContent,
	ProcessBlockContent,
} from "@/app/components/shared/lib/constants";
import IntroBlock from "@/app/components/widgets/IntroBlock";
import styles from "./MainPage.module.css";
import ArrowRightIcon from "../../shared/svg/ArrowRightIcon";
import PossibilitiesBlock from "./components/PossibilitiesBlock";
import { PossibilitiesBlockContent } from "../../shared/lib/constants";
import ProcessBlock from "./components/ProcessBlock";
import AboutUs from "./components/AboutUs";
import {
	AboutUsContent,
	CasesBlockContent,
	FinalCtaContent,
} from "../../shared/lib/constants/MainPageContent";

import FinalCta from "../../widgets/FinalCta";
import CasesBlock from "./components/CasesBlock";
export default function MainPage() {
	return (
		<main className={styles.main}>
			<IntroBlock
				{...MainPageContent}
				firstButton={{
					...MainPageContent.firstButton,
					iconAfter: <ArrowRightIcon />,
				}}></IntroBlock>
			<PossibilitiesBlock {...PossibilitiesBlockContent} />
			<ProcessBlock {...ProcessBlockContent} />
			<AboutUs {...AboutUsContent} />
			<CasesBlock {...CasesBlockContent} />
			<FinalCta {...FinalCtaContent} />
		</main>
	);
}
