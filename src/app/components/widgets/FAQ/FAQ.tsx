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

	const translateOrReturn = (keyOrText: string) => {
		if (!keyOrText) return "";
		return t.has(keyOrText) ? t(keyOrText) : keyOrText;
	};

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: props.questions.map((question) => ({
			"@type": "Question",
			name: translateOrReturn(question.titleKey),
			acceptedAnswer: {
				"@type": "Answer",
				text: translateOrReturn(question.textKey ?? ""),
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

			{props.questions.map((question, index) => {
				const title = translateOrReturn(question.titleKey);
				const text = translateOrReturn(question.textKey ?? "");

				return (
					<FAQElem
						key={`${question.titleKey}-${index}`}
						titleKey={title}
						textKey={text}
						as="p"
					/>
				);
			})}
		</div>
	);
}
