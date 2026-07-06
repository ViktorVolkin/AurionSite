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
				eyebrow: "Services.montenegro.real-estate.intro.eyebrow",
				title: "Services.montenegro.real-estate.intro.title",
				info: "Services.montenegro.real-estate.intro.info",
				firstButton: {
					text: "Services.montenegro.real-estate.intro.firstButton.text",
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
		company: {
			intro: {
				eyebrow: "Services.montenegro.company.intro.eyebrow",
				title: "Services.montenegro.company.intro.title",
				info: "Services.montenegro.company.intro.info",
				firstButton: {
					text: "Services.montenegro.company.intro.firstButton.text",
				},
			},
			advantages: {
				title: "Services.montenegro.company.overview.title",
				firstText: "Services.montenegro.company.overview.firstText",
				secondText: "Services.montenegro.company.overview.secondText",
				card: {
					title: "Services.montenegro.company.overview.card.title",
					elements: [
						{
							title: "Services.montenegro.company.overview.card.typeLabel",
							text: "Services.montenegro.company.overview.card.typeValue",
						},
						{
							title:
								"Services.montenegro.company.overview.card.processingLabel",
							text: "Services.montenegro.company.overview.card.processingValue",
						},
						{
							title: "Services.montenegro.company.overview.card.financeLabel",
							text: "Services.montenegro.company.overview.card.financeValue",
						},
						{
							title: "Services.montenegro.company.overview.card.validityLabel",
							text: "Services.montenegro.company.overview.card.validityValue",
						},
						{
							title: "Services.montenegro.company.overview.card.pathLabel",
							text: "Services.montenegro.company.overview.card.pathValue",
						},
						{
							title: "Services.montenegro.company.overview.card.familyLabel",
							text: "Services.montenegro.company.overview.card.familyValue",
						},
					],
				},
			},
			tariffs: {
				eyebrow: "Services.montenegro.company.tariffs.eyebrow",
				title: "Services.montenegro.company.tariffs.title",
				additionalText: "Services.montenegro.company.tariffs.additionalText",
				PS: "Services.montenegro.company.tariffs.PS",
				cards: [
					{
						title: "Services.montenegro.company.tariffs.essential.title",
						additional:
							"Services.montenegro.company.tariffs.essential.additional",
						price: {
							price: "€1 900",
							detail:
								"Services.montenegro.company.tariffs.essential.priceDetail",
						},
						keyPoints: [
							"Services.montenegro.company.tariffs.essential.points.point1",
							"Services.montenegro.company.tariffs.essential.points.point2",
							"Services.montenegro.company.tariffs.essential.points.point3",
							"Services.montenegro.company.tariffs.essential.points.point4",
							"Services.montenegro.company.tariffs.essential.points.point5",
						],
					},
					{
						title: "Services.montenegro.company.tariffs.full.title",
						additional: "Services.montenegro.company.tariffs.full.additional",
						isFeatured: true,
						featuredBadge: "Services.montenegro.company.tariffs.full.badge",
						price: {
							price: "€3 900",
							detail: "Services.montenegro.company.tariffs.full.priceDetail",
						},
						keyPoints: [
							"Services.montenegro.company.tariffs.full.points.point1",
							"Services.montenegro.company.tariffs.full.points.point2",
							"Services.montenegro.company.tariffs.full.points.point3",
							"Services.montenegro.company.tariffs.full.points.point4",
							"Services.montenegro.company.tariffs.full.points.point5",
						],
					},
					{
						title: "Services.montenegro.company.tariffs.family.title",
						additional: "Services.montenegro.company.tariffs.family.additional",
						price: {
							price: "€5 900",
							detail: "Services.montenegro.company.tariffs.family.priceDetail",
						},
						keyPoints: [
							"Services.montenegro.company.tariffs.family.points.point1",
							"Services.montenegro.company.tariffs.family.points.point2",
							"Services.montenegro.company.tariffs.family.points.point3",
							"Services.montenegro.company.tariffs.family.points.point4",
							"Services.montenegro.company.tariffs.family.points.point5",
						],
					},
				],
			},
			tabsSwitcher: {
				eyebrow: "Services.montenegro.company.requirements.eyebrow",
				title: "Services.montenegro.company.requirements.title",
				tabs: [
					{
						reason: "main-applicant",
						text: "Services.montenegro.company.requirements.tabs.mainApplicant",
					},
					{
						reason: "family",
						text: "Services.montenegro.company.requirements.tabs.family",
					},
					{
						reason: "finances",
						text: "Services.montenegro.company.requirements.tabs.finances",
					},
					{
						reason: "documents",
						text: "Services.montenegro.company.requirements.tabs.documents",
					},
				],
				list: {
					"main-applicant": [
						{
							title:
								"Services.montenegro.company.requirements.main-applicant.age.title",
							text: "Services.montenegro.company.requirements.main-applicant.age.text",
						},
						{
							title:
								"Services.montenegro.company.requirements.main-applicant.cleanRecord.title",
							text: "Services.montenegro.company.requirements.main-applicant.cleanRecord.text",
						},
						{
							title:
								"Services.montenegro.company.requirements.main-applicant.passport.title",
							text: "Services.montenegro.company.requirements.main-applicant.passport.text",
						},
						{
							title:
								"Services.montenegro.company.requirements.main-applicant.entry.title",
							text: "Services.montenegro.company.requirements.main-applicant.entry.text",
						},
					],
					family: [
						{
							title:
								"Services.montenegro.company.requirements.family.spouse.title",
							text: "Services.montenegro.company.requirements.family.spouse.text",
						},
						{
							title:
								"Services.montenegro.company.requirements.family.children.title",
							text: "Services.montenegro.company.requirements.family.children.text",
						},
						{
							title:
								"Services.montenegro.company.requirements.family.students.title",
							text: "Services.montenegro.company.requirements.family.students.text",
						},
						{
							title:
								"Services.montenegro.company.requirements.family.financeCondition.title",
							text: "Services.montenegro.company.requirements.family.financeCondition.text",
						},
					],
					finances: [
						{
							title:
								"Services.montenegro.company.requirements.finances.income.title",
							text: "Services.montenegro.company.requirements.finances.income.text",
						},
						{
							title:
								"Services.montenegro.company.requirements.finances.statement.title",
							text: "Services.montenegro.company.requirements.finances.statement.text",
						},
						{
							title:
								"Services.montenegro.company.requirements.finances.housing.title",
							text: "Services.montenegro.company.requirements.finances.housing.text",
						},
						{
							title:
								"Services.montenegro.company.requirements.finances.insurance.title",
							text: "Services.montenegro.company.requirements.finances.insurance.text",
						},
					],
					documents: [
						{
							title:
								"Services.montenegro.company.requirements.documents.cleanRecordDoc.title",
							text: "Services.montenegro.company.requirements.documents.cleanRecordDoc.text",
						},
						{
							title:
								"Services.montenegro.company.requirements.documents.civilDocs.title",
							text: "Services.montenegro.company.requirements.documents.civilDocs.text",
						},
						{
							title:
								"Services.montenegro.company.requirements.documents.notary.title",
							text: "Services.montenegro.company.requirements.documents.notary.text",
						},
						{
							title:
								"Services.montenegro.company.requirements.documents.incomeProof.title",
							text: "Services.montenegro.company.requirements.documents.incomeProof.text",
						},
					],
				},
			},
			roadmap: {
				eyebrow: "Services.montenegro.company.roadmap.eyebrow",
				title: "Services.montenegro.company.roadmap.title",
				additionalInfo: "Services.montenegro.company.roadmap.additionalInfo",
				steps: [
					{
						title: "Services.montenegro.company.roadmap.steps.0.title",
						important: "Services.montenegro.company.roadmap.steps.0.important",
						text: "Services.montenegro.company.roadmap.steps.0.text",
					},
					{
						title: "Services.montenegro.company.roadmap.steps.1.title",
						important: "Services.montenegro.company.roadmap.steps.1.important",
						text: "Services.montenegro.company.roadmap.steps.1.text",
					},
					{
						title: "Services.montenegro.company.roadmap.steps.2.title",
						important: "Services.montenegro.company.roadmap.steps.2.important",
						text: "Services.montenegro.company.roadmap.steps.2.text",
					},
					{
						title: "Services.montenegro.company.roadmap.steps.3.title",
						important: "Services.montenegro.company.roadmap.steps.3.important",
						text: "Services.montenegro.company.roadmap.steps.3.text",
					},
					{
						title: "Services.montenegro.company.roadmap.steps.4.title",
						important: "Services.montenegro.company.roadmap.steps.4.important",
						text: "Services.montenegro.company.roadmap.steps.4.text",
					},
				],
			},
			faq: {
				items: [
					{
						titleKey: "Services.montenegro.company.faq.property.title",
						textKey: "Services.montenegro.company.faq.property.text",
					},
					{
						titleKey: "Services.montenegro.company.faq.duration.title",
						textKey: "Services.montenegro.company.faq.duration.text",
					},
					{
						titleKey: "Services.montenegro.company.faq.taxes.title",
						textKey: "Services.montenegro.company.faq.taxes.text",
					},
					{
						titleKey: "Services.montenegro.company.faq.permanent.title",
						textKey: "Services.montenegro.company.faq.permanent.text",
					},
					{
						titleKey: "Services.montenegro.company.faq.residencyTime.title",
						textKey: "Services.montenegro.company.faq.residencyTime.text",
					},
				],
			},
		},
		"digital-nomad": {
			intro: {
				eyebrow: "Services.montenegro.digital-nomad.intro.eyebrow",
				title: "Services.montenegro.digital-nomad.intro.title",
				info: "Services.montenegro.digital-nomad.intro.info",
				firstButton: {
					text: "Services.montenegro.digital-nomad.intro.firstButton.text",
				},
			},
			advantages: {
				title: "Services.montenegro.digital-nomad.overview.title",
				firstText: "Services.montenegro.digital-nomad.overview.firstText",
				secondText: "Services.montenegro.digital-nomad.overview.secondText",
				card: {
					title: "Services.montenegro.digital-nomad.overview.card.title",
					elements: [
						{
							title:
								"Services.montenegro.digital-nomad.overview.card.typeLabel",
							text: "Services.montenegro.digital-nomad.overview.card.typeValue",
						},
						{
							title:
								"Services.montenegro.digital-nomad.overview.card.processingLabel",
							text: "Services.montenegro.digital-nomad.overview.card.processingValue",
						},
						{
							title:
								"Services.montenegro.digital-nomad.overview.card.financeLabel",
							text: "Services.montenegro.digital-nomad.overview.card.financeValue",
						},
						{
							title:
								"Services.montenegro.digital-nomad.overview.card.validityLabel",
							text: "Services.montenegro.digital-nomad.overview.card.validityValue",
						},
						{
							title:
								"Services.montenegro.digital-nomad.overview.card.pathLabel",
							text: "Services.montenegro.digital-nomad.overview.card.pathValue",
						},
						{
							title:
								"Services.montenegro.digital-nomad.overview.card.familyLabel",
							text: "Services.montenegro.digital-nomad.overview.card.familyValue",
						},
					],
				},
			},
			tariffs: {
				eyebrow: "Services.montenegro.digital-nomad.tariffs.eyebrow",
				title: "Services.montenegro.digital-nomad.tariffs.title",
				additionalText:
					"Services.montenegro.digital-nomad.tariffs.additionalText",
				PS: "Services.montenegro.digital-nomad.tariffs.PS",
				cards: [
					{
						title: "Services.montenegro.digital-nomad.tariffs.essential.title",
						additional:
							"Services.montenegro.digital-nomad.tariffs.essential.additional",
						price: {
							price: "€1 900",
							detail:
								"Services.montenegro.digital-nomad.tariffs.essential.priceDetail",
						},
						keyPoints: [
							"Services.montenegro.digital-nomad.tariffs.essential.points.point1",
							"Services.montenegro.digital-nomad.tariffs.essential.points.point2",
							"Services.montenegro.digital-nomad.tariffs.essential.points.point3",
							"Services.montenegro.digital-nomad.tariffs.essential.points.point4",
							"Services.montenegro.digital-nomad.tariffs.essential.points.point5",
						],
					},
					{
						title: "Services.montenegro.digital-nomad.tariffs.full.title",
						additional:
							"Services.montenegro.digital-nomad.tariffs.full.additional",
						isFeatured: true,
						featuredBadge:
							"Services.montenegro.digital-nomad.tariffs.full.badge",
						price: {
							price: "€3 900",
							detail:
								"Services.montenegro.digital-nomad.tariffs.full.priceDetail",
						},
						keyPoints: [
							"Services.montenegro.digital-nomad.tariffs.full.points.point1",
							"Services.montenegro.digital-nomad.tariffs.full.points.point2",
							"Services.montenegro.digital-nomad.tariffs.full.points.point3",
							"Services.montenegro.digital-nomad.tariffs.full.points.point4",
							"Services.montenegro.digital-nomad.tariffs.full.points.point5",
						],
					},
					{
						title: "Services.montenegro.digital-nomad.tariffs.family.title",
						additional:
							"Services.montenegro.digital-nomad.tariffs.family.additional",
						price: {
							price: "€5 900",
							detail:
								"Services.montenegro.digital-nomad.tariffs.family.priceDetail",
						},
						keyPoints: [
							"Services.montenegro.digital-nomad.tariffs.family.points.point1",
							"Services.montenegro.digital-nomad.tariffs.family.points.point2",
							"Services.montenegro.digital-nomad.tariffs.family.points.point3",
							"Services.montenegro.digital-nomad.tariffs.family.points.point4",
							"Services.montenegro.digital-nomad.tariffs.family.points.point5",
						],
					},
				],
			},
			tabsSwitcher: {
				eyebrow: "Services.montenegro.digital-nomad.requirements.eyebrow",
				title: "Services.montenegro.digital-nomad.requirements.title",
				tabs: [
					{
						reason: "main-applicant",
						text: "Services.montenegro.digital-nomad.requirements.tabs.mainApplicant",
					},
					{
						reason: "family",
						text: "Services.montenegro.digital-nomad.requirements.tabs.family",
					},
					{
						reason: "finances",
						text: "Services.montenegro.digital-nomad.requirements.tabs.finances",
					},
					{
						reason: "documents",
						text: "Services.montenegro.digital-nomad.requirements.tabs.documents",
					},
				],
				list: {
					"main-applicant": [
						{
							title:
								"Services.montenegro.digital-nomad.requirements.main-applicant.age.title",
							text: "Services.montenegro.digital-nomad.requirements.main-applicant.age.text",
						},
						{
							title:
								"Services.montenegro.digital-nomad.requirements.main-applicant.cleanRecord.title",
							text: "Services.montenegro.digital-nomad.requirements.main-applicant.cleanRecord.text",
						},
						{
							title:
								"Services.montenegro.digital-nomad.requirements.main-applicant.passport.title",
							text: "Services.montenegro.digital-nomad.requirements.main-applicant.passport.text",
						},
						{
							title:
								"Services.montenegro.digital-nomad.requirements.main-applicant.remote.title",
							text: "Services.montenegro.digital-nomad.requirements.main-applicant.remote.text",
						},
					],
					family: [
						{
							title:
								"Services.montenegro.digital-nomad.requirements.family.spouse.title",
							text: "Services.montenegro.digital-nomad.requirements.family.spouse.text",
						},
						{
							title:
								"Services.montenegro.digital-nomad.requirements.family.children.title",
							text: "Services.montenegro.digital-nomad.requirements.family.children.text",
						},
						{
							title:
								"Services.montenegro.digital-nomad.requirements.family.students.title",
							text: "Services.montenegro.digital-nomad.requirements.family.students.text",
						},
						{
							title:
								"Services.montenegro.digital-nomad.requirements.family.financeCondition.title",
							text: "Services.montenegro.digital-nomad.requirements.family.financeCondition.text",
						},
					],
					finances: [
						{
							title:
								"Services.montenegro.digital-nomad.requirements.finances.income.title",
							text: "Services.montenegro.digital-nomad.requirements.finances.income.text",
						},
						{
							title:
								"Services.montenegro.digital-nomad.requirements.finances.statement.title",
							text: "Services.montenegro.digital-nomad.requirements.finances.statement.text",
						},
						{
							title:
								"Services.montenegro.digital-nomad.requirements.finances.housing.title",
							text: "Services.montenegro.digital-nomad.requirements.finances.housing.text",
						},
						{
							title:
								"Services.montenegro.digital-nomad.requirements.finances.insurance.title",
							text: "Services.montenegro.digital-nomad.requirements.finances.insurance.text",
						},
					],
					documents: [
						{
							title:
								"Services.montenegro.digital-nomad.requirements.documents.cleanRecordDoc.title",
							text: "Services.montenegro.digital-nomad.requirements.documents.cleanRecordDoc.text",
						},
						{
							title:
								"Services.montenegro.digital-nomad.requirements.documents.civilDocs.title",
							text: "Services.montenegro.digital-nomad.requirements.documents.civilDocs.text",
						},
						{
							title:
								"Services.montenegro.digital-nomad.requirements.documents.notary.title",
							text: "Services.montenegro.digital-nomad.requirements.documents.notary.text",
						},
						{
							title:
								"Services.montenegro.digital-nomad.requirements.documents.incomeProof.title",
							text: "Services.montenegro.digital-nomad.requirements.documents.incomeProof.text",
						},
					],
				},
			},
			roadmap: {
				eyebrow: "Services.montenegro.digital-nomad.roadmap.eyebrow",
				title: "Services.montenegro.digital-nomad.roadmap.title",
				additionalInfo:
					"Services.montenegro.digital-nomad.roadmap.additionalInfo",
				steps: [
					{
						title: "Services.montenegro.digital-nomad.roadmap.steps.0.title",
						important:
							"Services.montenegro.digital-nomad.roadmap.steps.0.important",
						text: "Services.montenegro.digital-nomad.roadmap.steps.0.text",
					},
					{
						title: "Services.montenegro.digital-nomad.roadmap.steps.1.title",
						important:
							"Services.montenegro.digital-nomad.roadmap.steps.1.important",
						text: "Services.montenegro.digital-nomad.roadmap.steps.1.text",
					},
					{
						title: "Services.montenegro.digital-nomad.roadmap.steps.2.title",
						important:
							"Services.montenegro.digital-nomad.roadmap.steps.2.important",
						text: "Services.montenegro.digital-nomad.roadmap.steps.2.text",
					},
					{
						title: "Services.montenegro.digital-nomad.roadmap.steps.3.title",
						important:
							"Services.montenegro.digital-nomad.roadmap.steps.3.important",
						text: "Services.montenegro.digital-nomad.roadmap.steps.3.text",
					},
					{
						title: "Services.montenegro.digital-nomad.roadmap.steps.4.title",
						important:
							"Services.montenegro.digital-nomad.roadmap.steps.4.important",
						text: "Services.montenegro.digital-nomad.roadmap.steps.4.text",
					},
				],
			},
			faq: {
				items: [
					{
						titleKey: "Services.montenegro.digital-nomad.faq.property.title",
						textKey: "Services.montenegro.digital-nomad.faq.property.text",
					},
					{
						titleKey: "Services.montenegro.digital-nomad.faq.duration.title",
						textKey: "Services.montenegro.digital-nomad.faq.duration.text",
					},
					{
						titleKey: "Services.montenegro.digital-nomad.faq.taxes.title",
						textKey: "Services.montenegro.digital-nomad.faq.taxes.text",
					},
					{
						titleKey: "Services.montenegro.digital-nomad.faq.permanent.title",
						textKey: "Services.montenegro.digital-nomad.faq.permanent.text",
					},
					{
						titleKey:
							"Services.montenegro.digital-nomad.faq.residencyTime.title",
						textKey: "Services.montenegro.digital-nomad.faq.residencyTime.text",
					},
				],
			},
		},
	},
};
