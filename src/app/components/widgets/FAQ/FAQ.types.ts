import { FaqItemProps } from "../../shared/FAQElem/FAQElem.types";

export interface FAQCategory {
	id: string;
	categoryTitleKey: string;
	questions: FaqItemProps[];
}

export interface FAQProps {
	categories: FAQCategory[];
}
