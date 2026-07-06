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
					name: "widgets.header.headerDropdown.countries.montenegro.reasons.company",
					slug: "company",
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
					slug: "company",
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
					name: "widgets.header.headerDropdown.countries.spain.reasons.golden-visa",
					slug: "golden-visa",
				},
				{
					name: "widgets.header.headerDropdown.countries.spain.reasons.non-lucrative",
					slug: "non-lucrative",
				},
			],
		},
		{
			country: "widgets.header.headerDropdown.countries.uae.name",
			slug: "uae",
			reasons: [
				{
					name: "widgets.header.headerDropdown.countries.uae.reasons.investor",
					slug: "investor",
				},
				{
					name: "widgets.header.headerDropdown.countries.uae.reasons.freelance",
					slug: "freelance",
				},
				{
					name: "widgets.header.headerDropdown.countries.uae.reasons.remote-work",
					slug: "remote-work",
				},
			],
		},
		{
			country: "widgets.header.headerDropdown.countries.hungary.name",
			slug: "hungary",
			reasons: [
				{
					name: "widgets.header.headerDropdown.countries.hungary.reasons.white-card",
					slug: "white-card",
				},
				{
					name: "widgets.header.headerDropdown.countries.hungary.reasons.real-estate",
					slug: "real-estate",
				},
			],
		},
		{
			country: "widgets.header.headerDropdown.countries.portugal.name",
			slug: "portugal",
			reasons: [
				{
					name: "widgets.header.headerDropdown.countries.portugal.reasons.d7-visa",
					slug: "d7-visa",
				},
				{
					name: "widgets.header.headerDropdown.countries.portugal.reasons.digital-nomad",
					slug: "digital-nomad",
				},
			],
		},
		{
			country: "widgets.header.headerDropdown.countries.cyprus.name",
			slug: "cyprus",
			reasons: [
				{
					name: "widgets.header.headerDropdown.countries.cyprus.reasons.permanent-residency",
					slug: "permanent-residency",
				},
				{
					name: "widgets.header.headerDropdown.countries.cyprus.reasons.it-visa",
					slug: "it-visa",
				},
			],
		},
		{
			country: "widgets.header.headerDropdown.countries.greece.name",
			slug: "greece",
			reasons: [
				{
					name: "widgets.header.headerDropdown.countries.greece.reasons.fiv",
					slug: "fiv",
				},
				{
					name: "widgets.header.headerDropdown.countries.greece.reasons.golden-visa",
					slug: "golden-visa",
				},
			],
		},
		{
			country: "widgets.header.headerDropdown.countries.italy.name",
			slug: "italy",
			reasons: [
				{
					name: "widgets.header.headerDropdown.countries.italy.reasons.residenza-elettiva",
					slug: "residenza-elettiva",
				},
				{
					name: "widgets.header.headerDropdown.countries.italy.reasons.digital-nomad",
					slug: "digital-nomad",
				},
			],
		},
		{
			country: "widgets.header.headerDropdown.countries.france.name",
			slug: "france",
			reasons: [
				{
					name: "widgets.header.headerDropdown.countries.france.reasons.visiteur",
					slug: "visiteur",
				},
				{
					name: "widgets.header.headerDropdown.countries.france.reasons.talent-passport",
					slug: "talent-passport",
				},
			],
		},
		{
			country: "widgets.header.headerDropdown.countries.malta.name",
			slug: "malta",
			reasons: [
				{
					name: "widgets.header.headerDropdown.countries.malta.reasons.mprp",
					slug: "mprp",
				},
				{
					name: "widgets.header.headerDropdown.countries.malta.reasons.nomad-residence",
					slug: "nomad-residence",
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
