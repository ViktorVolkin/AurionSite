import styles from "./ArticleLayout.module.css";

export default function ArticlesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className={styles.pageWrapper}>
			<article className={styles.articleContent}>{children}</article>
		</div>
	);
}
