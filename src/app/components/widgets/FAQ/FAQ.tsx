import styles from "./FAQ.module.css";
import { FAQProps } from "./FAQ.types";
import FAQElem from "../../shared/FAQElem";
import FAQClient from "./components/FAQClient";

export default async function FAQ(props: FAQProps) {
	if (props.variant === "categories") {
		return (
			<FAQClient
				categories={props.categories}
				variant={"categories"}
			/>
		);
	}

	return (
		<div className={styles.wrapper}>
			{props.questions.map((question) => (
				<FAQElem
					key={question.titleKey}
					titleKey={question.titleKey}
					textKey={question.textKey}
					as="p"
				/>
			))}
		</div>
	);
}
