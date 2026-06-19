import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface NavigationLink {
	text: string;
	href: string;
	desktopOnly?: boolean;
}

export interface BlockProps {
	title: string;
	links: NavigationLink[];
}

export interface FooterProps {
	description: string;
	product: BlockProps;
	sources: BlockProps;
	company: BlockProps;
	methodology: BlockProps;
	email?: string;
}
