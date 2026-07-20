import { FooterProps } from "@/app/components/widgets/Footer/Footer.types";
import { HeaderDropdownProps } from "@/app/components/widgets/Header/components/HeaderDropdown/HeaderDropdown.types";
import { HeaderProps } from "@/app/components/widgets/Header/Header.types";

export const HEADER: HeaderProps = {
	blocks: [
		{ id: "forBusiness", text: "widgets.header.forBusiness" },
		{ id: "blog", text: "widgets.header.blog" },
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
	email: "aurionrelocation@gmail.com",
};
