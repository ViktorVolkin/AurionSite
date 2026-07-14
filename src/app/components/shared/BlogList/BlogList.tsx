import styles from "./BlogList.module.css";
import { BlogListProps } from "./BlogList.types";

export default function BlogList({ text }: BlogListProps) {
	return (
		<ul className={styles.list}>
			{text.map((item) => (
				<li
					className={styles.list__item}
					key={item}>
					{item}
				</li>
			))}
		</ul>
	);
}
