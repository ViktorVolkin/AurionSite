import styles from "./BlogPage.module.css";
import { BlogPageProps } from "./BlogPage.types";

export default async function BlogPage({ cards, params }: BlogPageProps) {
	const { locale, country } = await params;

	return <div className={styles.wrapper}></div>;
}
