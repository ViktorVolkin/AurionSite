import { TabProps } from "@/app/components/shared/Tab/Tab.types";
import { StaticImageData } from "next/image";

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
