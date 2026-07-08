export interface FaqItemProps {
	titleKey: string;
	textKey?: string;
	as?: "p" | "div" | "span";
	children?: React.ReactNode;
}
