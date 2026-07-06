import { FinalCtaContent } from "../../shared/lib/constants";
import { BLOG_CONTENT } from "../../shared/lib/constants/BlogContent";
import FinalCta from "../../widgets/FinalCta";
import BlogCards from "./components/BlogCards";
import styles from "./BlogPage.module.css";
import { Suspense } from "react";

export default async function BlogPage() {
	return (
		<main className={styles.wrapper}>
			<Suspense>
				<BlogCards
					cards={BLOG_CONTENT.cards}
					title={BLOG_CONTENT.title}
				/>
			</Suspense>
			<FinalCta {...FinalCtaContent} />
		</main>
	);
}
