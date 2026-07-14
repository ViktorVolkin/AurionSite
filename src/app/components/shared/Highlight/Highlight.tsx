import clsx from "clsx";
import styles from "./Highlight.module.css";
import { HighlightProps } from "./Highlight.types";

export default function Highlight({
	children,
	as = "span",
	bright = true,
}: HighlightProps) {
	const Tag = as as React.ElementType;

	return (
		<Tag
			className={clsx(styles.highlight, {
				[styles.bright]: bright,
			})}>
			{children}
		</Tag>
	);
}
