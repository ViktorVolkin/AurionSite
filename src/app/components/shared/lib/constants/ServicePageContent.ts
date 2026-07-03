import { AdvantagesDescriptionProps } from "@/app/components/pages/ServicePage/components/AdvantagesDescription/AdvantagesDescription.types";
import { TabsSwitcherProps } from "@/app/components/pages/ServicePage/components/TabsSwitcher/TabsSwitcher.types";
import { FAQProps } from "@/app/components/widgets/FAQ/FAQ.types";
import { IntroBlockProps } from "@/app/components/widgets/IntroBlock/IntroBlock.types";
import { RoadmapProps } from "@/app/components/widgets/Roadmap/Roadmap.types";

export interface ServiceProgramContent {
	intro: IntroBlockProps;
	advantages: AdvantagesDescriptionProps;
	tariffs: {
		eyebrow: string;
		title: string;
		additionalText: string;
		PS: string;
		cards: Array<{
			title: string;
			additional: string;
			isFeatured?: boolean;
			featuredBadge?: string;
			price: {
				price: string;
				detail: string;
			};
			keyPoints: string[];
		}>;
	};
	tabsSwitcher: TabsSwitcherProps;
	roadmap: RoadmapProps;
	faq: FAQProps;
}

export const SERVICE_PAGES_DATA: Record<
	string,
	Record<string, ServiceProgramContent>
> = {
	montenegro: {
		"real-estate": {
			intro: {
				eyebrow: "mainPage.intro.eyebrow",
				title: "mainPage.intro.title",
				info: "mainPage.intro.info",
				firstButton: {
					text: "mainPage.intro.firstButton.text",
				},
			},
			advantages: {
				title: "Services.montenegro.real-estate.overview.title",
				firstText: "Services.montenegro.real-estate.overview.firstText",
				secondText: "Services.montenegro.real-estate.overview.secondText",
				card: {
					title: "Services.montenegro.real-estate.overview.card.title",
					elements: [
						{
							title: "Services.montenegro.real-estate.overview.card.typeLabel",
							text: "Services.montenegro.real-estate.overview.card.typeValue",
						},
						{
							title:
								"Services.montenegro.real-estate.overview.card.processingLabel",
							text: "Services.montenegro.real-estate.overview.card.processingValue",
						},
						{
							title:
								"Services.montenegro.real-estate.overview.card.financeLabel",
							text: "Services.montenegro.real-estate.overview.card.financeValue",
						},
						{
							title:
								"Services.montenegro.real-estate.overview.card.validityLabel",
							text: "Services.montenegro.real-estate.overview.card.validityValue",
						},
						{
							title: "Services.montenegro.real-estate.overview.card.pathLabel",
							text: "Services.montenegro.real-estate.overview.card.pathValue",
						},
						{
							title:
								"Services.montenegro.real-estate.overview.card.familyLabel",
							text: "Services.montenegro.real-estate.overview.card.familyValue",
						},
					],
				},
			},
			tariffs: {
				eyebrow: "Services.montenegro.real-estate.tariffs.eyebrow",
				title: "Services.montenegro.real-estate.tariffs.title",
				additionalText:
					"Services.montenegro.real-estate.tariffs.additionalText",
				PS: "Services.montenegro.real-estate.tariffs.PS",
				cards: [
					{
						title: "Services.montenegro.real-estate.tariffs.essential.title",
						additional:
							"Services.montenegro.real-estate.tariffs.essential.additional",
						price: {
							price: "€1 900",
							detail:
								"Services.montenegro.real-estate.tariffs.essential.priceDetail",
						},
						keyPoints: [
							"Services.montenegro.real-estate.tariffs.essential.points.point1",
							"Services.montenegro.real-estate.tariffs.essential.points.point2",
							"Services.montenegro.real-estate.tariffs.essential.points.point3",
							"Services.montenegro.real-estate.tariffs.essential.points.point4",
							"Services.montenegro.real-estate.tariffs.essential.points.point5",
						],
					},
					{
						title: "Services.montenegro.real-estate.tariffs.full.title",
						additional:
							"Services.montenegro.real-estate.tariffs.full.additional",
						isFeatured: true,
						featuredBadge: "Services.montenegro.real-estate.tariffs.full.badge",
						price: {
							price: "€3 900",
							detail:
								"Services.montenegro.real-estate.tariffs.full.priceDetail",
						},
						keyPoints: [
							"Services.montenegro.real-estate.tariffs.full.points.point1",
							"Services.montenegro.real-estate.tariffs.full.points.point2",
							"Services.montenegro.real-estate.tariffs.full.points.point3",
							"Services.montenegro.real-estate.tariffs.full.points.point4",
							"Services.montenegro.real-estate.tariffs.full.points.point5",
						],
					},
					{
						title: "Services.montenegro.real-estate.tariffs.family.title",
						additional:
							"Services.montenegro.real-estate.tariffs.family.additional",
						price: {
							price: "€5 900",
							detail:
								"Services.montenegro.real-estate.tariffs.family.priceDetail",
						},
						keyPoints: [
							"Services.montenegro.real-estate.tariffs.family.points.point1",
							"Services.montenegro.real-estate.tariffs.family.points.point2",
							"Services.montenegro.real-estate.tariffs.family.points.point3",
							"Services.montenegro.real-estate.tariffs.family.points.point4",
							"Services.montenegro.real-estate.tariffs.family.points.point5",
						],
					},
				],
			},
			tabsSwitcher: {
				eyebrow: "Services.montenegro.real-estate.requirements.eyebrow",
				title: "Services.montenegro.real-estate.requirements.title",
				tabs: [
					{
						reason: "main-applicant",
						text: "Services.montenegro.real-estate.requirements.tabs.mainApplicant",
					},
					{
						reason: "family",
						text: "Services.montenegro.real-estate.requirements.tabs.family",
					},
					{
						reason: "finances",
						text: "Services.montenegro.real-estate.requirements.tabs.finances",
					},
					{
						reason: "documents",
						text: "Services.montenegro.real-estate.requirements.tabs.documents",
					},
				],
				list: {
					"main-applicant": [
						{
							title:
								"Services.montenegro.real-estate.requirements.main-applicant.age.title",
							text: "Services.montenegro.real-estate.requirements.main-applicant.age.text",
						},
						{
							title:
								"Services.montenegro.real-estate.requirements.main-applicant.cleanRecord.title",
							text: "Services.montenegro.real-estate.requirements.main-applicant.cleanRecord.text",
						},
						{
							title:
								"Services.montenegro.real-estate.requirements.main-applicant.passport.title",
							text: "Services.montenegro.real-estate.requirements.main-applicant.passport.text",
						},
						{
							title:
								"Services.montenegro.real-estate.requirements.main-applicant.entry.title",
							text: "Services.montenegro.real-estate.requirements.main-applicant.entry.text",
						},
					],
					family: [
						{
							title:
								"Services.montenegro.real-estate.requirements.family.spouse.title",
							text: "Services.montenegro.real-estate.requirements.family.spouse.text",
						},
						{
							title:
								"Services.montenegro.real-estate.requirements.family.children.title",
							text: "Services.montenegro.real-estate.requirements.family.children.text",
						},
						{
							title:
								"Services.montenegro.real-estate.requirements.family.students.title",
							text: "Services.montenegro.real-estate.requirements.family.students.text",
						},
						{
							title:
								"Services.montenegro.real-estate.requirements.family.financeCondition.title",
							text: "Services.montenegro.real-estate.requirements.family.financeCondition.text",
						},
					],
					finances: [
						{
							title:
								"Services.montenegro.real-estate.requirements.finances.income.title",
							text: "Services.montenegro.real-estate.requirements.finances.income.text",
						},
						{
							title:
								"Services.montenegro.real-estate.requirements.finances.statement.title",
							text: "Services.montenegro.real-estate.requirements.finances.statement.text",
						},
						{
							title:
								"Services.montenegro.real-estate.requirements.finances.housing.title",
							text: "Services.montenegro.real-estate.requirements.finances.housing.text",
						},
						{
							title:
								"Services.montenegro.real-estate.requirements.finances.insurance.title",
							text: "Services.montenegro.real-estate.requirements.finances.insurance.text",
						},
					],
					documents: [
						{
							title:
								"Services.montenegro.real-estate.requirements.documents.cleanRecordDoc.title",
							text: "Services.montenegro.real-estate.requirements.documents.cleanRecordDoc.text",
						},
						{
							title:
								"Services.montenegro.real-estate.requirements.documents.civilDocs.title",
							text: "Services.montenegro.real-estate.requirements.documents.civilDocs.text",
						},
						{
							title:
								"Services.montenegro.real-estate.requirements.documents.notary.title",
							text: "Services.montenegro.real-estate.requirements.documents.notary.text",
						},
						{
							title:
								"Services.montenegro.real-estate.requirements.documents.incomeProof.title",
							text: "Services.montenegro.real-estate.requirements.documents.incomeProof.text",
						},
					],
				},
			},
			roadmap: {
				eyebrow: "Services.montenegro.real-estate.roadmap.eyebrow",
				title: "Services.montenegro.real-estate.roadmap.title",
				additionalInfo:
					"Services.montenegro.real-estate.roadmap.additionalInfo",
				steps: [
					{
						title: "Services.montenegro.real-estate.roadmap.steps.0.title",
						important:
							"Services.montenegro.real-estate.roadmap.steps.0.important",
						text: "Services.montenegro.real-estate.roadmap.steps.0.text",
					},
					{
						title: "Services.montenegro.real-estate.roadmap.steps.1.title",
						important:
							"Services.montenegro.real-estate.roadmap.steps.1.important",
						text: "Services.montenegro.real-estate.roadmap.steps.1.text",
					},
					{
						title: "Services.montenegro.real-estate.roadmap.steps.2.title",
						important:
							"Services.montenegro.real-estate.roadmap.steps.2.important",
						text: "Services.montenegro.real-estate.roadmap.steps.2.text",
					},
					{
						title: "Services.montenegro.real-estate.roadmap.steps.3.title",
						important:
							"Services.montenegro.real-estate.roadmap.steps.3.important",
						text: "Services.montenegro.real-estate.roadmap.steps.3.text",
					},
					{
						title: "Services.montenegro.real-estate.roadmap.steps.4.title",
						important:
							"Services.montenegro.real-estate.roadmap.steps.4.important",
						text: "Services.montenegro.real-estate.roadmap.steps.4.text",
					},
				],
			},
			faq: {
				items: [
					{
						titleKey: "Services.montenegro.real-estate.faq.property.title",
						textKey: "Services.montenegro.real-estate.faq.property.text",
					},
					{
						titleKey: "Services.montenegro.real-estate.faq.duration.title",
						textKey: "Services.montenegro.real-estate.faq.duration.text",
					},
					{
						titleKey: "Services.montenegro.real-estate.faq.taxes.title",
						textKey: "Services.montenegro.real-estate.faq.taxes.text",
					},
					{
						titleKey: "Services.montenegro.real-estate.faq.permanent.title",
						textKey: "Services.montenegro.real-estate.faq.permanent.text",
					},
					{
						titleKey: "Services.montenegro.real-estate.faq.residencyTime.title",
						textKey: "Services.montenegro.real-estate.faq.residencyTime.text",
					},
				],
			},
		},
	},
};
