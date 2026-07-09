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
						title: "Services.montenegro.real-estate.tariffs.full.title",
						additional:
							"Services.montenegro.real-estate.tariffs.full.additional",
						isFeatured: true,
						featuredBadge: "Services.montenegro.real-estate.tariffs.full.badge",
						price: {
							price: "€550",
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
							price: "€300",
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
						text: "Services.montenegro.real-estate.roadmap.steps.0.text",
					},
					{
						title: "Services.montenegro.real-estate.roadmap.steps.1.title",
						text: "Services.montenegro.real-estate.roadmap.steps.1.text",
					},
					{
						title: "Services.montenegro.real-estate.roadmap.steps.2.title",
						text: "Services.montenegro.real-estate.roadmap.steps.2.text",
					},
					{
						title: "Services.montenegro.real-estate.roadmap.steps.3.title",
						text: "Services.montenegro.real-estate.roadmap.steps.3.text",
					},
					{
						title: "Services.montenegro.real-estate.roadmap.steps.4.title",
						text: "Services.montenegro.real-estate.roadmap.steps.4.text",
					},
				],
			},
			faq: {
				variant: "flat",
				questions: [
					{
						titleKey: "Services.montenegro.business.faq.duration.title",
						textKey: "Services.montenegro.business.faq.duration.text",
					},
					{
						titleKey: "Services.montenegro.business.faq.taxes.title",
						textKey: "Services.montenegro.business.faq.taxes.text",
					},
					{
						titleKey: "Services.montenegro.business.faq.permanent.title",
						textKey: "Services.montenegro.business.faq.permanent.text",
					},
					{
						titleKey: "Services.montenegro.business.faq.residencyTime.title",
						textKey: "Services.montenegro.business.faq.residencyTime.text",
					},
				],
			},
		},
		business: {
			intro: {
				eyebrow: "Services.montenegro.business.intro.eyebrow",
				title: "Services.montenegro.business.intro.title",
				info: "Services.montenegro.business.intro.info",
				firstButton: {
					text: "Services.montenegro.business.intro.firstButton.text",
				},
			},
			advantages: {
				title: "Services.montenegro.business.overview.title",
				firstText: "Services.montenegro.business.overview.firstText",
				secondText: "Services.montenegro.business.overview.secondText",
				card: {
					title: "Services.montenegro.business.overview.card.title",
					elements: [
						{
							title: "Services.montenegro.business.overview.card.typeLabel",
							text: "Services.montenegro.business.overview.card.typeValue",
						},
						{
							title:
								"Services.montenegro.business.overview.card.processingLabel",
							text: "Services.montenegro.business.overview.card.processingValue",
						},
						{
							title: "Services.montenegro.business.overview.card.financeLabel",
							text: "Services.montenegro.business.overview.card.financeValue",
						},
						{
							title: "Services.montenegro.business.overview.card.validityLabel",
							text: "Services.montenegro.business.overview.card.validityValue",
						},
						{
							title: "Services.montenegro.business.overview.card.pathLabel",
							text: "Services.montenegro.business.overview.card.pathValue",
						},
						{
							title: "Services.montenegro.business.overview.card.familyLabel",
							text: "Services.montenegro.business.overview.card.familyValue",
						},
					],
				},
			},
			tariffs: {
				eyebrow: "Services.montenegro.business.tariffs.eyebrow",
				title: "Services.montenegro.business.tariffs.title",
				additionalText: "Services.montenegro.business.tariffs.additionalText",
				PS: "Services.montenegro.business.tariffs.PS",
				cards: [
					{
						title: "Services.montenegro.business.tariffs.essential.title",
						additional:
							"Services.montenegro.business.tariffs.essential.additional",
						price: {
							price: "€1 100",
							detail:
								"Services.montenegro.business.tariffs.essential.priceDetail",
						},
						keyPoints: [
							"Services.montenegro.business.tariffs.essential.points.point1",
							"Services.montenegro.business.tariffs.essential.points.point2",
							"Services.montenegro.business.tariffs.essential.points.point3",
							"Services.montenegro.business.tariffs.essential.points.point4",
							"Services.montenegro.business.tariffs.essential.points.point5",
						],
					},
					{
						title: "Services.montenegro.business.tariffs.full.title",
						additional: "Services.montenegro.business.tariffs.full.additional",
						isFeatured: true,
						featuredBadge: "Services.montenegro.business.tariffs.full.badge",
						price: {
							price: "€1 200",
							detail: "Services.montenegro.business.tariffs.full.priceDetail",
						},
						keyPoints: [
							"Services.montenegro.business.tariffs.full.points.point1",
							"Services.montenegro.business.tariffs.full.points.point2",
							"Services.montenegro.business.tariffs.full.points.point3",
							"Services.montenegro.business.tariffs.full.points.point4",
						],
					},
					{
						title: "Services.montenegro.business.tariffs.family.title",
						additional:
							"Services.montenegro.business.tariffs.family.additional",
						price: {
							price: "€300",
							detail: "Services.montenegro.business.tariffs.family.priceDetail",
						},
						keyPoints: [
							"Services.montenegro.business.tariffs.family.points.point1",
							"Services.montenegro.business.tariffs.family.points.point2",
							"Services.montenegro.business.tariffs.family.points.point3",
							"Services.montenegro.business.tariffs.family.points.point4",
							"Services.montenegro.business.tariffs.family.points.point5",
						],
					},
				],
			},
			tabsSwitcher: {
				eyebrow: "Services.montenegro.business.requirements.eyebrow",
				title: "Services.montenegro.business.requirements.title",
				tabs: [
					{
						reason: "main-applicant",
						text: "Services.montenegro.business.requirements.tabs.mainApplicant",
					},
					{
						reason: "family",
						text: "Services.montenegro.business.requirements.tabs.family",
					},
					{
						reason: "finances",
						text: "Services.montenegro.business.requirements.tabs.finances",
					},
					{
						reason: "documents",
						text: "Services.montenegro.business.requirements.tabs.documents",
					},
				],
				list: {
					"main-applicant": [
						{
							title:
								"Services.montenegro.business.requirements.main-applicant.age.title",
							text: "Services.montenegro.business.requirements.main-applicant.age.text",
						},
						{
							title:
								"Services.montenegro.business.requirements.main-applicant.cleanRecord.title",
							text: "Services.montenegro.business.requirements.main-applicant.cleanRecord.text",
						},
						{
							title:
								"Services.montenegro.business.requirements.main-applicant.passport.title",
							text: "Services.montenegro.business.requirements.main-applicant.passport.text",
						},
						{
							title:
								"Services.montenegro.business.requirements.main-applicant.entry.title",
							text: "Services.montenegro.business.requirements.main-applicant.entry.text",
						},
					],
					family: [
						{
							title:
								"Services.montenegro.business.requirements.family.spouse.title",
							text: "Services.montenegro.business.requirements.family.spouse.text",
						},
						{
							title:
								"Services.montenegro.business.requirements.family.children.title",
							text: "Services.montenegro.business.requirements.family.children.text",
						},
						{
							title:
								"Services.montenegro.business.requirements.family.financeCondition.title",
							text: "Services.montenegro.business.requirements.family.financeCondition.text",
						},
					],
					finances: [
						{
							title:
								"Services.montenegro.business.requirements.finances.income.title",
							text: "Services.montenegro.business.requirements.finances.income.text",
						},
						{
							title:
								"Services.montenegro.business.requirements.finances.statement.title",
							text: "Services.montenegro.business.requirements.finances.statement.text",
						},
						{
							title:
								"Services.montenegro.business.requirements.finances.housing.title",
							text: "Services.montenegro.business.requirements.finances.housing.text",
						},
						{
							title:
								"Services.montenegro.business.requirements.finances.insurance.title",
							text: "Services.montenegro.business.requirements.finances.insurance.text",
						},
					],
					documents: [
						{
							title:
								"Services.montenegro.business.requirements.documents.cleanRecordDoc.title",
							text: "Services.montenegro.business.requirements.documents.cleanRecordDoc.text",
						},
						{
							title:
								"Services.montenegro.business.requirements.documents.civilDocs.title",
							text: "Services.montenegro.business.requirements.documents.civilDocs.text",
						},
						{
							title:
								"Services.montenegro.business.requirements.documents.notary.title",
							text: "Services.montenegro.business.requirements.documents.notary.text",
						},
						{
							title:
								"Services.montenegro.business.requirements.documents.incomeProof.title",
							text: "Services.montenegro.business.requirements.documents.incomeProof.text",
						},
					],
				},
			},
			roadmap: {
				eyebrow: "Services.montenegro.business.roadmap.eyebrow",
				title: "Services.montenegro.business.roadmap.title",
				additionalInfo: "Services.montenegro.business.roadmap.additionalInfo",
				steps: [
					{
						title: "Services.montenegro.business.roadmap.steps.0.title",
						text: "Services.montenegro.business.roadmap.steps.0.text",
					},
					{
						title: "Services.montenegro.business.roadmap.steps.1.title",
						text: "Services.montenegro.business.roadmap.steps.1.text",
					},
					{
						title: "Services.montenegro.business.roadmap.steps.2.title",
						text: "Services.montenegro.business.roadmap.steps.2.text",
					},
					{
						title: "Services.montenegro.business.roadmap.steps.3.title",
						text: "Services.montenegro.business.roadmap.steps.3.text",
					},
				],
			},
			faq: {
				variant: "flat",
				questions: [
					{
						titleKey: "Services.montenegro.business.faq.duration.title",
						textKey: "Services.montenegro.business.faq.duration.text",
					},
					{
						titleKey: "Services.montenegro.business.faq.taxes.title",
						textKey: "Services.montenegro.business.faq.taxes.text",
					},
					{
						titleKey: "Services.montenegro.business.faq.permanent.title",
						textKey: "Services.montenegro.business.faq.permanent.text",
					},
					{
						titleKey: "Services.montenegro.business.faq.residencyTime.title",
						textKey: "Services.montenegro.business.faq.residencyTime.text",
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
						title: "Services.montenegro.digital-nomad.tariffs.full.title",
						additional:
							"Services.montenegro.digital-nomad.tariffs.full.additional",
						isFeatured: true,
						featuredBadge:
							"Services.montenegro.digital-nomad.tariffs.full.badge",
						price: {
							price: "€1 200",
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
							price: "€300",
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
						text: "Services.montenegro.digital-nomad.roadmap.steps.0.text",
					},
					{
						title: "Services.montenegro.digital-nomad.roadmap.steps.1.title",
						text: "Services.montenegro.digital-nomad.roadmap.steps.1.text",
					},
					{
						title: "Services.montenegro.digital-nomad.roadmap.steps.2.title",
						text: "Services.montenegro.digital-nomad.roadmap.steps.2.text",
					},
					{
						title: "Services.montenegro.digital-nomad.roadmap.steps.3.title",
						text: "Services.montenegro.digital-nomad.roadmap.steps.3.text",
					},
					{
						title: "Services.montenegro.digital-nomad.roadmap.steps.4.title",
						text: "Services.montenegro.digital-nomad.roadmap.steps.4.text",
					},
				],
			},
			faq: {
				variant: "flat",
				questions: [
					{
						titleKey: "Services.montenegro.business.faq.duration.title",
						textKey: "Services.montenegro.business.faq.duration.text",
					},
					{
						titleKey: "Services.montenegro.business.faq.taxes.title",
						textKey: "Services.montenegro.business.faq.taxes.text",
					},
					{
						titleKey: "Services.montenegro.business.faq.permanent.title",
						textKey: "Services.montenegro.business.faq.permanent.text",
					},
					{
						titleKey: "Services.montenegro.business.faq.residencyTime.title",
						textKey: "Services.montenegro.business.faq.residencyTime.text",
					},
				],
			},
		},
	},
	spain: {
		"digital-nomad": {
			intro: {
				eyebrow: "Services.spain.digital-nomad.intro.eyebrow",
				title: "Services.spain.digital-nomad.intro.title",
				info: "Services.spain.digital-nomad.intro.info",
				firstButton: {
					text: "Services.spain.digital-nomad.intro.firstButton.text",
				},
			},
			advantages: {
				title: "Services.spain.digital-nomad.overview.title",
				firstText: "Services.spain.digital-nomad.overview.firstText",
				secondText: "Services.spain.digital-nomad.overview.secondText",
				card: {
					title: "Services.spain.digital-nomad.overview.card.title",
					elements: [
						{
							title: "Services.spain.digital-nomad.overview.card.typeLabel",
							text: "Services.spain.digital-nomad.overview.card.typeValue",
						},
						{
							title:
								"Services.spain.digital-nomad.overview.card.processingLabel",
							text: "Services.spain.digital-nomad.overview.card.processingValue",
						},
						{
							title: "Services.spain.digital-nomad.overview.card.financeLabel",
							text: "Services.spain.digital-nomad.overview.card.financeValue",
						},
						{
							title: "Services.spain.digital-nomad.overview.card.validityLabel",
							text: "Services.spain.digital-nomad.overview.card.validityValue",
						},
						{
							title: "Services.spain.digital-nomad.overview.card.pathLabel",
							text: "Services.spain.digital-nomad.overview.card.pathValue",
						},
						{
							title: "Services.spain.digital-nomad.overview.card.familyLabel",
							text: "Services.spain.digital-nomad.overview.card.familyValue",
						},
					],
				},
			},
			tariffs: {
				eyebrow: "Services.spain.digital-nomad.tariffs.eyebrow",
				title: "Services.spain.digital-nomad.tariffs.title",
				additionalText: "Services.spain.digital-nomad.tariffs.additionalText",
				PS: "Services.spain.digital-nomad.tariffs.PS",
				cards: [
					{
						title: "Services.spain.digital-nomad.tariffs.full.title",
						additional: "Services.spain.digital-nomad.tariffs.full.additional",
						isFeatured: true,
						featuredBadge: "Services.spain.digital-nomad.tariffs.full.badge",
						price: {
							price: "€4 600",
							detail: "Services.spain.digital-nomad.tariffs.full.priceDetail",
						},
						keyPoints: [
							"Services.spain.digital-nomad.tariffs.full.points.point1",
							"Services.spain.digital-nomad.tariffs.full.points.point2",
							"Services.spain.digital-nomad.tariffs.full.points.point3",
							"Services.spain.digital-nomad.tariffs.full.points.point4",
							"Services.spain.digital-nomad.tariffs.full.points.point5",
						],
					},
					{
						title: "Services.spain.digital-nomad.tariffs.family.title",
						additional:
							"Services.spain.digital-nomad.tariffs.family.additional",
						price: {
							price: "€1 100",
							detail: "Services.spain.digital-nomad.tariffs.family.priceDetail",
						},
						keyPoints: [
							"Services.spain.digital-nomad.tariffs.family.points.point1",
							"Services.spain.digital-nomad.tariffs.family.points.point2",
							"Services.spain.digital-nomad.tariffs.family.points.point3",
							"Services.spain.digital-nomad.tariffs.family.points.point4",
							"Services.spain.digital-nomad.tariffs.family.points.point5",
						],
					},
					{
						title: "Services.spain.digital-nomad.tariffs.kids.title",
						additional: "Services.spain.digital-nomad.tariffs.kids.additional",
						price: {
							price: "€350",
							detail: "Services.spain.digital-nomad.tariffs.kids.priceDetail",
						},
						keyPoints: [
							"Services.spain.digital-nomad.tariffs.kids.points.point1",
							"Services.spain.digital-nomad.tariffs.kids.points.point2",
							"Services.spain.digital-nomad.tariffs.kids.points.point3",
							"Services.spain.digital-nomad.tariffs.kids.points.point4",
							"Services.spain.digital-nomad.tariffs.kids.points.point5",
						],
					},
				],
			},
			tabsSwitcher: {
				eyebrow: "Services.spain.digital-nomad.requirements.eyebrow",
				title: "Services.spain.digital-nomad.requirements.title",
				tabs: [
					{
						reason: "main-applicant",
						text: "Services.spain.digital-nomad.requirements.tabs.mainApplicant",
					},
					{
						reason: "family",
						text: "Services.spain.digital-nomad.requirements.tabs.family",
					},
					{
						reason: "finances",
						text: "Services.spain.digital-nomad.requirements.tabs.finances",
					},
					{
						reason: "documents",
						text: "Services.spain.digital-nomad.requirements.tabs.documents",
					},
				],
				list: {
					"main-applicant": [
						{
							title:
								"Services.spain.digital-nomad.requirements.main-applicant.age.title",
							text: "Services.spain.digital-nomad.requirements.main-applicant.age.text",
						},
						{
							title:
								"Services.spain.digital-nomad.requirements.main-applicant.cleanRecord.title",
							text: "Services.spain.digital-nomad.requirements.main-applicant.cleanRecord.text",
						},
						{
							title:
								"Services.spain.digital-nomad.requirements.main-applicant.passport.title",
							text: "Services.spain.digital-nomad.requirements.main-applicant.passport.text",
						},
						{
							title:
								"Services.spain.digital-nomad.requirements.main-applicant.remote.title",
							text: "Services.spain.digital-nomad.requirements.main-applicant.remote.text",
						},
					],
					family: [
						{
							title:
								"Services.spain.digital-nomad.requirements.family.spouse.title",
							text: "Services.spain.digital-nomad.requirements.family.spouse.text",
						},

						{
							title:
								"Services.spain.digital-nomad.requirements.family.financeCondition.title",
							text: "Services.spain.digital-nomad.requirements.family.financeCondition.text",
						},
					],
					finances: [
						{
							title:
								"Services.spain.digital-nomad.requirements.finances.income.title",
							text: "Services.spain.digital-nomad.requirements.finances.income.text",
						},
						{
							title:
								"Services.spain.digital-nomad.requirements.finances.statement.title",
							text: "Services.spain.digital-nomad.requirements.finances.statement.text",
						},
						{
							title:
								"Services.spain.digital-nomad.requirements.finances.housing.title",
							text: "Services.spain.digital-nomad.requirements.finances.housing.text",
						},
						{
							title:
								"Services.spain.digital-nomad.requirements.finances.insurance.title",
							text: "Services.spain.digital-nomad.requirements.finances.insurance.text",
						},
					],
					documents: [
						{
							title:
								"Services.spain.digital-nomad.requirements.documents.cleanRecordDoc.title",
							text: "Services.spain.digital-nomad.requirements.documents.cleanRecordDoc.text",
						},
						{
							title:
								"Services.spain.digital-nomad.requirements.documents.civilDocs.title",
							text: "Services.spain.digital-nomad.requirements.documents.civilDocs.text",
						},
						{
							title:
								"Services.spain.digital-nomad.requirements.documents.notary.title",
							text: "Services.spain.digital-nomad.requirements.documents.notary.text",
						},
						{
							title:
								"Services.spain.digital-nomad.requirements.documents.incomeProof.title",
							text: "Services.spain.digital-nomad.requirements.documents.incomeProof.text",
						},
					],
				},
			},
			roadmap: {
				eyebrow: "Services.spain.digital-nomad.roadmap.eyebrow",
				title: "Services.spain.digital-nomad.roadmap.title",
				additionalInfo: "Services.spain.digital-nomad.roadmap.additionalInfo",
				steps: [
					{
						title: "Services.spain.digital-nomad.roadmap.steps.0.title",
						text: "Services.spain.digital-nomad.roadmap.steps.0.text",
					},
					{
						title: "Services.spain.digital-nomad.roadmap.steps.1.title",
						text: "Services.spain.digital-nomad.roadmap.steps.1.text",
					},
					{
						title: "Services.spain.digital-nomad.roadmap.steps.2.title",
						text: "Services.spain.digital-nomad.roadmap.steps.2.text",
					},
					{
						title: "Services.spain.digital-nomad.roadmap.steps.3.title",
						text: "Services.spain.digital-nomad.roadmap.steps.3.text",
					},
					{
						title: "Services.spain.digital-nomad.roadmap.steps.4.title",
						text: "Services.spain.digital-nomad.roadmap.steps.4.text",
					},
				],
			},
			faq: {
				variant: "flat",
				questions: [
					{
						titleKey: "Services.spain.business.faq.duration.title",
						textKey: "Services.spain.business.faq.duration.text",
					},
					{
						titleKey: "Services.spain.business.faq.taxes.title",
						textKey: "Services.spain.business.faq.taxes.text",
					},
					{
						titleKey: "Services.spain.business.faq.permanent.title",
						textKey: "Services.spain.business.faq.permanent.text",
					},
					{
						titleKey: "Services.spain.business.faq.residencyTime.title",
						textKey: "Services.spain.business.faq.residencyTime.text",
					},
				],
			},
		},
	},
};
