import styles from "./FAQ.module.css";
import { FAQProps } from "./FAQ.types";
import FAQElem from "../../shared/FAQElem";

export default function FAQ({ items }: FAQProps) {
	return (
		<ul className={styles.wrapper}>
			{items.map((elem) => (
				<FAQElem
					{...elem}
					key={elem.titleKey}
				/>
			))}
		</ul>
	);
}
