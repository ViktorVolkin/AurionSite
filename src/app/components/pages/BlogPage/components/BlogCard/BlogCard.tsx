import styles from "./BlogCard.module.css";
import { BlogCardProps } from "./BlogCard.types";

export default function BlogCard({}: BlogCardProps) {
	return <article className={styles.wrapper}></article>;
}
