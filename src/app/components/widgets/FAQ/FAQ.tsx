import styles from "./FAQ.module.css";
import { FAQProps } from "./FAQ.types";
import FAQElem from "../../shared/FAQElem";
import FAQClient from "./components/FAQClient";
import { getTranslations } from "next-intl/server";

export default async function FAQ(props: FAQProps) {
	if (props.variant === "categories") {
		return (
			<FAQClient
				categories={props.categories}
				variant={"categories"}
			/>
		);
	}

	const t = await getTranslations();

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: props.questions.map((question) => ({
			"@type": "Question",
			name: t(question.titleKey),
			acceptedAnswer: {
				"@type": "Answer",
				text: t(question.textKey ?? ""),
			},
		})),
	};

	return (
		<div
			className={styles.wrapper}
			style={props.customStyle}>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

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
