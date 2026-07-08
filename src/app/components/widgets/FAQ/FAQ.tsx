"use client";
import { useTranslations } from "next-intl";
import styles from "./FAQ.module.css";
import { FAQProps } from "./FAQ.types";
import FAQElem from "../../shared/FAQElem";

export default function FAQ({ categories }: FAQProps) {
	const t = useTranslations();

	return (
		<div className={styles.wrapper}>
			{categories.map((group) => (
				<FAQElem
					key={group.id}
					titleKey={group.categoryTitleKey}
					as="div">
					<div className={styles.sub_faq_list}>
						{group.questions.map((question) => (
							<FAQElem
								key={question.titleKey}
								titleKey={question.titleKey}
								textKey={question.textKey}
								as="p"
							/>
						))}
					</div>
				</FAQElem>
			))}
		</div>
	);
}
