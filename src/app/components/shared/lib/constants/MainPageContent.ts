import {
	ConsultationFormProps,
	CountryOption,
	MethodOption,
} from "@/app/components/widgets/ConsultationForm/ConsultationForm.types";
import { FinalCtaProps } from "@/app/components/widgets/FinalCta/FinalCta.types";
import { PossibilitiesBlockProps } from "@/app/components/widgets/PossibilitiesBlock/PossibilitiesBlock.types";
import { ProcessBlockProps } from "@/app/components/widgets/ProcessBlock/ProcessBlock.types";
import { AboutUsProps } from "@/app/components/widgets/AboutUs/AboutUs.types";
import MockImage from "@/../public/Mock.png";
import { CasesBlockProps } from "@/app/components/widgets/CasesBlock/CasesBlock.types";
export const MainPageContent = {
	eyebrow: "mainPage.intro.eyebrow",
	title: "mainPage.intro.title",
	info: "mainPage.intro.info",
	firstButton: {
		text: "mainPage.intro.firstButton.text",
	},
	secondButton: {
		text: "mainPage.intro.secondButton.text",
		href: "#demo",
	},
	decidedBy: [
		{ title: "13", text: "mainPage.intro.decidedBy.0" },
		{ title: "147", text: "mainPage.intro.decidedBy.1" },
		{ title: "8", text: "mainPage.intro.decidedBy.2" },
		{ title: "4", text: "mainPage.intro.decidedBy.3" },
	],
};

const countriesList: CountryOption[] = [
	{
		value: "montenegro",
		translationKey: "countries.montenegro",
		defaultText: "Черногория",
	},
	{ value: "spain", translationKey: "countries.spain", defaultText: "Испания" },
	{ value: "uae", translationKey: "countries.uae", defaultText: "ОАЭ" },
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
		value: "georgia",
		translationKey: "countries.georgia",
		defaultText: "Грузия",
	},
	{
		value: "portugal",
		translationKey: "countries.portugal",
		defaultText: "Португалия",
	},
	{ value: "cyprus", translationKey: "countries.cyprus", defaultText: "Кипр" },
	{
		value: "greece",
		translationKey: "countries.greece",
		defaultText: "Греция",
	},
	{ value: "malta", translationKey: "countries.malta", defaultText: "Мальта" },
	{
		value: "hungary",
		translationKey: "countries.hungary",
		defaultText: "Венгрия",
	},
	{
		value: "france",
		translationKey: "countries.france",
		defaultText: "Франция",
	},
	{ value: "italy", translationKey: "countries.italy", defaultText: "Италия" },
	{
		value: "thailand",
		translationKey: "countries.thailand",
		defaultText: "Таиланд",
	},
	{
		value: "vanuatu",
		translationKey: "countries.vanuatu",
		defaultText: "Вануату",
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
			title: "mainPage.possibilities.blocks.montenegro.title",
			importantText: "mainPage.possibilities.blocks.montenegro.importantText",
			ourExperience: "mainPage.possibilities.blocks.montenegro.ourExperience",
			href: "#/jurisdictions/montenegro",
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
			title: "mainPage.possibilities.blocks.spain.title",
			importantText: "mainPage.possibilities.blocks.spain.importantText",
			ourExperience: "mainPage.possibilities.blocks.spain.ourExperience",
			href: "#jurisdictions/spain",
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
			title: "mainPage.possibilities.blocks.serbia.title",
			importantText: "mainPage.possibilities.blocks.serbia.importantText",
			ourExperience: "mainPage.possibilities.blocks.serbia.ourExperience",
			href: "#jurisdictions/serbia",
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
			title: "mainPage.possibilities.blocks.france.title",
			importantText: "mainPage.possibilities.blocks.france.importantText",
			ourExperience: "mainPage.possibilities.blocks.france.ourExperience",
			href: "#jurisdictions/france",
			unique: [
				{
					question: "mainPage.possibilities.blocks.france.term.question",
					answer: "mainPage.possibilities.blocks.france.term.answer",
				},
				{
					question: "mainPage.possibilities.blocks.france.finance.question",
					answer: "mainPage.possibilities.blocks.france.finance.answer",
				},
				{ question: "mainPage.possibilities.blocks.france.hook" },
			],
		},
		{
			title: "mainPage.possibilities.blocks.malta.title",
			importantText: "mainPage.possibilities.blocks.malta.importantText",
			ourExperience: "mainPage.possibilities.blocks.malta.ourExperience",
			href: "#jurisdictions/malta",
			unique: [
				{
					question: "mainPage.possibilities.blocks.malta.term.question",
					answer: "mainPage.possibilities.blocks.malta.term.answer",
				},
				{
					question: "mainPage.possibilities.blocks.malta.finance.question",
					answer: "mainPage.possibilities.blocks.malta.finance.answer",
				},
				{ question: "mainPage.possibilities.blocks.malta.hook" },
			],
		},
		{
			title: "mainPage.possibilities.blocks.greece.title",
			importantText: "mainPage.possibilities.blocks.greece.importantText",
			ourExperience: "mainPage.possibilities.blocks.greece.ourExperience",
			href: "#jurisdictions/greece",
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
			title: "mainPage.possibilities.blocks.cyprus.title",
			importantText: "mainPage.possibilities.blocks.cyprus.importantText",
			ourExperience: "mainPage.possibilities.blocks.cyprus.ourExperience",
			href: "#jurisdictions/cyprus",
			unique: [
				{
					question: "mainPage.possibilities.blocks.cyprus.term.question",
					answer: "mainPage.possibilities.blocks.cyprus.term.answer",
				},
				{
					question: "mainPage.possibilities.blocks.cyprus.finance.question",
					answer: "mainPage.possibilities.blocks.cyprus.finance.answer",
				},
				{ question: "mainPage.possibilities.blocks.cyprus.hook" },
			],
		},
		{
			title: "mainPage.possibilities.blocks.hungary.title",
			importantText: "mainPage.possibilities.blocks.hungary.importantText",
			ourExperience: "mainPage.possibilities.blocks.hungary.ourExperience",
			href: "#jurisdictions/hungary",
			unique: [
				{
					question: "mainPage.possibilities.blocks.hungary.term.question",
					answer: "mainPage.possibilities.blocks.hungary.term.answer",
				},
				{
					question: "mainPage.possibilities.blocks.hungary.finance.question",
					answer: "mainPage.possibilities.blocks.hungary.finance.answer",
				},
				{ question: "mainPage.possibilities.blocks.hungary.hook" },
			],
		},
	],
};
export const ProcessBlockContent: ProcessBlockProps = {
	eyebrow: "mainPage.process.eyebrow",
	title: "mainPage.process.title",
	cards: [
		{
			title: "Диагностическая консультация",
			text: "Оцениваем ваш профиль, источники дохода и цели. Подбираем юрисдикцию и программу, в которой ваше дело имеет наибольшие шансы.",
		},
		{
			title: "Подготовка документов",
			text: "Собираем комплект, сопровождаем перевод и нотариальное заверение. Каждый документ проверяется до подачи в орган.",
		},
		{
			title: "Одобрение и обустройство",
			text: "Подаём дело, отслеживаем статус и сопровождаем после одобрения: банковский счёт, налоговый номер, продление.",
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
	primaryImage: MockImage,
	secondaryImage: MockImage,
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
