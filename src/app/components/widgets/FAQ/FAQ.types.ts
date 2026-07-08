import { FaqItemProps } from "../../shared/FAQElem/FAQElem.types";

export interface FAQCategory {
	id: string;
	categoryTitleKey: string;
	questions: FaqItemProps[];
}

export interface FAQCategoriesProps {
	variant: "categories";
	categories: FAQCategory[];
}

export interface FAQFlatProps {
	variant: "flat";
	questions: FaqItemProps[];
}

export type FAQProps = FAQCategoriesProps | FAQFlatProps;
