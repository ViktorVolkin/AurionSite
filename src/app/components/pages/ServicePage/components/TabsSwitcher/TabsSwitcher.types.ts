import { EyebrowProps } from "@/app/components/shared/Eyebrow/Eyebrow.types";
import { TabProps } from "@/app/components/shared/Tab/Tab.types";

export interface ListProps {
	title: string;
	text: string;
}

export interface TabsSwitcherProps {
	eyebrow: string;
	title: string;
	tabs: TabProps[];

	list: Record<string, ListProps[]>;
}
