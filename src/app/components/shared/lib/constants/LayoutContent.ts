import { FooterProps } from "@/app/components/widgets/Footer/Footer.types";
import { HeaderDropdownProps } from "@/app/components/widgets/Header/components/HeaderDropdown/HeaderDropdown.types";
import { HeaderProps } from "@/app/components/widgets/Header/Header.types";

export const HEADER: HeaderProps = {
	blocks: [
		{ id: "#forBusiness", text: "widgets.header.forBusiness" },
		{ id: "#aboutUs", text: "widgets.header.aboutUs" },
		{ id: "#cases", text: "widgets.header.cases" },
		{ id: "blog", text: "widgets.header.blog" },
		{ id: "#contacts", text: "widgets.header.contacts" },
	],
	openPopup: { text: "widgets.header.openPopup" },
};

export const HeaderDropdownContent: HeaderDropdownProps = {
	name: "widgets.header.headerDropdown.title",
	titlePrefix: "widgets.header.headerDropdown.titlePrefix",
	countries: [
		{
			country: "widgets.header.headerDropdown.countries.montenegro.name",
			slug: "montenegro",
			reasons: [
				{
					name: "widgets.header.headerDropdown.countries.montenegro.reasons.business",
					slug: "business",
				},
				{
					name: "widgets.header.headerDropdown.countries.montenegro.reasons.real-estate",
					slug: "real-estate",
				},
				{
					name: "widgets.header.headerDropdown.countries.montenegro.reasons.digital-nomad",
					slug: "digital-nomad",
				},
			],
		},
		{
			country: "widgets.header.headerDropdown.countries.serbia.name",
			slug: "serbia",
			reasons: [
				{
					name: "widgets.header.headerDropdown.countries.serbia.reasons.company",
					slug: "business",
				},
				{
					name: "widgets.header.headerDropdown.countries.serbia.reasons.real-estate",
					slug: "real-estate",
				},
			],
		},
		{
			country: "widgets.header.headerDropdown.countries.spain.name",
			slug: "spain",
			reasons: [
				{
					name: "widgets.header.headerDropdown.countries.spain.reasons.digital-nomad",
					slug: "digital-nomad",
				},

				{
					name: "widgets.header.headerDropdown.countries.spain.reasons.non-lucrative",
					slug: "non-lucrative",
				},
			],
		},

		{
			country: "widgets.header.headerDropdown.countries.armenia.name",
			slug: "armenia",
			reasons: [
				{
					name: "widgets.header.headerDropdown.countries.armenia.reasons.business",
					slug: "business",
				},
				{
					name: "widgets.header.headerDropdown.countries.armenia.reasons.work",
					slug: "work",
				},
			],
		},
		{
			country: "widgets.header.headerDropdown.countries.greece.name",
			slug: "greece",
			reasons: [
				{
					name: "widgets.header.headerDropdown.countries.greece.reasons.golden-visa",
					slug: "golden-visa",
				},
			],
		},
	],
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
