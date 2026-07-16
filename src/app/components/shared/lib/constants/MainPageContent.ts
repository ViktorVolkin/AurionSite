import {
	ConsultationFormProps,
	CountryOption,
	MethodOption,
} from "@/app/components/widgets/ConsultationForm/ConsultationForm.types";
import { FinalCtaProps } from "@/app/components/widgets/FinalCta/FinalCta.types";
import { PossibilitiesBlockProps } from "@/app/components/pages/MainPage/components/PossibilitiesBlock/PossibilitiesBlock.types";
import { ProcessBlockProps } from "@/app/components/pages/MainPage/components/ProcessBlock/ProcessBlock.types";
import { AboutUsProps } from "@/app/components/pages/MainPage/components/AboutUs/AboutUs.types";
import MainPageSmall from "@/../public/MainPageSmall.avif";
import MainPageBig from "@/../public/MainPageBig.avif";

import { CasesBlockProps } from "@/app/components/pages/MainPage/components/CasesBlock/CasesBlock.types";
export const MainPageContent = {
	eyebrow: "mainPage.intro.eyebrow",
	title: "mainPage.intro.title",
	info: "mainPage.intro.info",
	firstButton: {
		text: "mainPage.intro.firstButton.text",
	},

	decidedBy: [
		{ title: "8", text: "mainPage.intro.decidedBy.0" },
		{ title: "147", text: "mainPage.intro.decidedBy.1" },
		{ title: "5", text: "mainPage.intro.decidedBy.2" },
		{ title: "3", text: "mainPage.intro.decidedBy.3" },
	],
};

const countriesList: CountryOption[] = [
	{
		value: "montenegro",
		translationKey: "countries.montenegro",
		defaultText: "Черногория",
	},
	{ value: "spain", translationKey: "countries.spain", defaultText: "Испания" },
	{
		value: "armenia",
		translationKey: "countries.armenia",
		defaultText: "Армения",
	},
	{
		value: "serbia",
		translationKey: "countries.serbia",
		defaultText: "Сербия",
	},
	{
		value: "greece",
		translationKey: "countries.greece",
		defaultText: "Греция",
	},

	{
		value: "unsure",
		translationKey: "countries.unsure",
		defaultText: "Пока не определился",
	},
];

const methodsList: MethodOption[] = [
	{
		value: "telegram",
		label: "Telegram",
		placeholderKey: "fields.contactPlaceholderTg",
		defaultPlaceholder: "Ваш ник @username",
	},
	{
		value: "whatsapp",
		label: "WhatsApp",
		placeholderKey: "fields.contactPlaceholderWa",
		defaultPlaceholder: "Ваш номер WhatsApp",
	},
	{
		value: "phone",
		translationKey: "methods.phone",
		defaultText: "Телефонный звонок",
		placeholderKey: "fields.contactPlaceholderPhone",
		defaultPlaceholder: "+7 (999) 000-00-00",
		label: "Phone",
	},
];

const translationKeys = {
	nameLabel: "fields.nameLabel",
	namePlaceholder: "fields.namePlaceholder",
	countryLabel: "fields.countryLabel",
	methodLabel: "fields.methodLabel",
	contactLabel: "fields.contactLabel",
	submitButton: "Consultation.buttons.submit",
	submitButtonLoading: "Consultation.buttons.loading",
	privacyRu: "privacy.ru",
	privacyEn: "privacy.en",
};

export const ConsultationFormContent: ConsultationFormProps = {
	countries: countriesList,
	methods: methodsList,
	translationKeys: translationKeys,
};
export const PossibilitiesBlockContent: PossibilitiesBlockProps = {
	eyebrow: "mainPage.possibilities.eyebrow",
	title: "mainPage.possibilities.title",
	additionalInfo: "mainPage.possibilities.additionalInfo",
	blocks: [
		{
			title: "mainPage.possibilities.blocks.spain.title",
			importantText: "mainPage.possibilities.blocks.spain.importantText",
			ourExperience: "mainPage.possibilities.blocks.spain.ourExperience",
			href: "/services/spain/digital-nomad",
			unique: [
				{
					question: "mainPage.possibilities.blocks.spain.term.question",
					answer: "mainPage.possibilities.blocks.spain.term.answer",
				},
				{
					question: "mainPage.possibilities.blocks.spain.finance.question",
					answer: "mainPage.possibilities.blocks.spain.finance.answer",
				},
				{ question: "mainPage.possibilities.blocks.spain.hook" },
			],
		},
		{
			title: "mainPage.possibilities.blocks.montenegro.title",
			importantText: "mainPage.possibilities.blocks.montenegro.importantText",
			ourExperience: "mainPage.possibilities.blocks.montenegro.ourExperience",
			href: "/services/montenegro/business",
			unique: [
				{
					question: "mainPage.possibilities.blocks.montenegro.term.question",
					answer: "mainPage.possibilities.blocks.montenegro.term.answer",
				},
				{
					question: "mainPage.possibilities.blocks.montenegro.finance.question",
					answer: "mainPage.possibilities.blocks.montenegro.finance.answer",
				},
				{ question: "mainPage.possibilities.blocks.montenegro.hook" },
			],
		},
		{
			title: "mainPage.possibilities.blocks.serbia.title",
			importantText: "mainPage.possibilities.blocks.serbia.importantText",
			ourExperience: "mainPage.possibilities.blocks.serbia.ourExperience",
			href: "/services/serbia/business",
			unique: [
				{
					question: "mainPage.possibilities.blocks.serbia.term.question",
					answer: "mainPage.possibilities.blocks.serbia.term.answer",
				},
				{
					question: "mainPage.possibilities.blocks.serbia.finance.question",
					answer: "mainPage.possibilities.blocks.serbia.finance.answer",
				},
				{ question: "mainPage.possibilities.blocks.serbia.hook" },
			],
		},

		{
			title: "mainPage.possibilities.blocks.greece.title",
			importantText: "mainPage.possibilities.blocks.greece.importantText",
			ourExperience: "mainPage.possibilities.blocks.greece.ourExperience",
			href: "/services/greece/golden-visa",
			unique: [
				{
					question: "mainPage.possibilities.blocks.greece.term.question",
					answer: "mainPage.possibilities.blocks.greece.term.answer",
				},
				{
					question: "mainPage.possibilities.blocks.greece.finance.question",
					answer: "mainPage.possibilities.blocks.greece.finance.answer",
				},
				{ question: "mainPage.possibilities.blocks.greece.hook" },
			],
		},
		{
			title: "mainPage.possibilities.blocks.armenia.title",
			importantText: "mainPage.possibilities.blocks.armenia.importantText",
			ourExperience: "mainPage.possibilities.blocks.armenia.ourExperience",
			href: "/services/armenia/work",
			unique: [
				{
					question: "mainPage.possibilities.blocks.armenia.term.question",
					answer: "mainPage.possibilities.blocks.armenia.term.answer",
				},
				{
					question: "mainPage.possibilities.blocks.armenia.finance.question",
					answer: "mainPage.possibilities.blocks.armenia.finance.answer",
				},
				{ question: "mainPage.possibilities.blocks.armenia.hook" },
			],
		},
	],
};
export const ProcessBlockContent: ProcessBlockProps = {
	eyebrow: "mainPage.process.eyebrow",
	title: "mainPage.process.title",
	cards: [
		{
			title: "mainPage.process.cards.step_1.title",
			text: "mainPage.process.cards.step_1.text",
		},
		{
			title: "mainPage.process.cards.step_2.title",
			text: "mainPage.process.cards.step_2.text",
		},
		{
			title: "mainPage.process.cards.step_3.title",
			text: "mainPage.process.cards.step_3.text",
		},
	],
};
export const AboutUsContent: AboutUsProps = {
	eyebrow: "mainPage.aboutUs.eyebrow",
	title: "mainPage.aboutUs.title",
	text: "mainPage.aboutUs.text",

	items: [
		{
			title: "mainPage.aboutUs.cards.team.title",
			text: "mainPage.aboutUs.cards.team.text",
		},
		{
			title: "mainPage.aboutUs.cards.specialist.title",
			text: "mainPage.aboutUs.cards.specialist.text",
		},
		{
			title: "mainPage.aboutUs.cards.continious.title",
			text: "mainPage.aboutUs.cards.continious.text",
		},
	],
	primaryImage: MainPageSmall,
	secondaryImage: MainPageBig,
};

export const CasesBlockContent: CasesBlockProps = {
	eyebrow: "mainPage.cases.eyebrow",
	title: "mainPage.cases.title",

	cards: [
		{
			countryKey: "mainPage.cases.montenegroBusiness.country",
			categoryKey: "mainPage.cases.montenegroBusiness.category",
			outcomeKey: "mainPage.cases.montenegroBusiness.outcome",
			timeframeKey: "mainPage.cases.montenegroBusiness.timeframe",
			descriptionKey: "mainPage.cases.montenegroBusiness.description",
		},
		{
			countryKey: "mainPage.cases.spainNomad.country",
			categoryKey: "mainPage.cases.spainNomad.category",
			outcomeKey: "mainPage.cases.spainNomad.outcome",
			timeframeKey: "mainPage.cases.spainNomad.timeframe",
			descriptionKey: "mainPage.cases.spainNomad.description",
		},
		{
			countryKey: "mainPage.cases.UAE.country",
			categoryKey: "mainPage.cases.UAE.category",
			outcomeKey: "mainPage.cases.UAE.outcome",
			timeframeKey: "mainPage.cases.UAE.timeframe",
			descriptionKey: "mainPage.cases.UAE.description",
		},
	],
};
export const FinalCtaContent: FinalCtaProps = {
	eyebrow: "mainPage.finalCta.eyebrow",
	title: "mainPage.finalCta.title",
	text: "mainPage.finalCta.text",
};
