import logo from "@/../public/header__logo.webp";

import { FooterProps } from "@/app/components/widgets/Footer/Footer.types";
import { HeaderProps } from "@/app/components/widgets/Header/Header.types";

export const HEADER: HeaderProps = {
	blocks: [
		{ id: "#possibilities", text: "widgets.header.possibilities" },
		{ id: "#process", text: "widgets.header.workflow" },
		{ id: "#sources", text: "widgets.header.sources" },
		{ id: "#contacts", text: "widgets.header.contacts" },
	],
	openPopup: { text: "widgets.header.openPopup" },
};

export const FOOTER: FooterProps = {
	description: "description",
	product: {
		title: "titles.product",
		links: [
			{ href: "#", text: "product.features" },
			{ href: "#", text: "product.demo" },
			{ href: "#", text: "product.pricing" },
			{ href: "#", text: "product.security" },
			{ href: "#", text: "product.api", desktopOnly: true },
		],
	},
	methodology: {
		title: "titles.methodology",
		links: [
			{ href: "#", text: "methodology.howItWorks" },
			{ href: "#", text: "methodology.accuracy" },
			{ href: "#", text: "methodology.releases" },
			{ href: "#", text: "methodology.changelog", desktopOnly: true },
		],
	},
	sources: {
		title: "titles.sources",
		links: [
			{ href: "#", text: "sources.partners" },
			{ href: "#", text: "sources.coverage" },
			{ href: "#", text: "sources.freshness", desktopOnly: true },
			{ href: "#", text: "sources.certifications", desktopOnly: true },
		],
	},
	company: {
		title: "titles.company",
		links: [
			{ href: "#", text: "company.about" },
			{ href: "#", text: "company.contacts" },
			{ href: "#", text: "company.careers" },
			{ href: "#", text: "company.press", desktopOnly: true },
		],
	},
	email: "office@landostat.tech",
};
