import { FaqItemProps } from "../../shared/FAQElem/FAQElem.types";

export interface FAQCategory {
	id: string;
	categoryTitleKey: string;
	questions: FaqItemProps[];
}
interface Base {
	customStyle?: React.CSSProperties;
}

export interface FAQCategoriesProps extends Base {
	variant: "categories";
	categories: FAQCategory[];
}

export interface FAQFlatProps extends Base {
	variant: "flat";
	questions: FaqItemProps[];
}

export type FAQProps = FAQCategoriesProps | FAQFlatProps;
