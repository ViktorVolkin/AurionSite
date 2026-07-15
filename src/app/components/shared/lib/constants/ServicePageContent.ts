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
								"Services.montenegro.real-estate.requirements.main-applicant.property.title",
							text: "Services.montenegro.real-estate.requirements.main-applicant.property.text",
						},
						{
							title:
								"Services.montenegro.real-estate.requirements.main-applicant.funds.title",
							text: "Services.montenegro.real-estate.requirements.main-applicant.funds.text",
						},
						{
							title:
								"Services.montenegro.real-estate.requirements.main-applicant.housing.title",
							text: "Services.montenegro.real-estate.requirements.main-applicant.housing.text",
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
					documents: [
						{
							title:
								"Services.montenegro.real-estate.requirements.documents.passport.title",
							text: "Services.montenegro.real-estate.requirements.documents.passport.text",
						},
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
					{
						titleKey:
							"Services.montenegro.real-estate.faq.permamentResidence.title",
						textKey:
							"Services.montenegro.real-estate.faq.permamentResidence.text",
					},
					{
						titleKey: "Services.montenegro.real-estate.faq.time.title",
						textKey: "Services.montenegro.real-estate.faq.time.text",
					},
					{
						titleKey:
							"Services.montenegro.real-estate.faq.possibilityToDecline.title",
						textKey:
							"Services.montenegro.real-estate.faq.possibilityToDecline.text",
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
								"Services.montenegro.business.requirements.main-applicant.basis.title",
							text: "Services.montenegro.business.requirements.main-applicant.basis.text",
						},
						{
							title:
								"Services.montenegro.business.requirements.main-applicant.vat.title",
							text: "Services.montenegro.business.requirements.main-applicant.vat.text",
						},
						{
							title:
								"Services.montenegro.business.requirements.main-applicant.activity.title",
							text: "Services.montenegro.business.requirements.main-applicant.activity.text",
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

					documents: [
						{
							title:
								"Services.montenegro.business.requirements.documents.passport.title",
							text: "Services.montenegro.business.requirements.documents.passport.text",
						},
						{
							title:
								"Services.montenegro.business.requirements.documents.cleanRecordDoc.title",
							text: "Services.montenegro.business.requirements.documents.cleanRecordDoc.text",
						},
						{
							title:
								"Services.montenegro.business.requirements.documents.educationDoc.title",
							text: "Services.montenegro.business.requirements.documents.educationDoc.text",
						},

						{
							title:
								"Services.montenegro.business.requirements.documents.civilDocs.title",
							text: "Services.montenegro.business.requirements.documents.civilDocs.text",
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
						titleKey: "Services.montenegro.business.faq.eligibility.title",
						textKey: "Services.montenegro.business.faq.eligibility.text",
					},
					{
						titleKey: "Services.montenegro.business.faq.ownershipShare.title",
						textKey: "Services.montenegro.business.faq.ownershipShare.text",
					},
					{
						titleKey: "Services.montenegro.business.faq.realActivity.title",
						textKey: "Services.montenegro.business.faq.realActivity.text",
					},
					{
						titleKey:
							"Services.montenegro.business.faq.renewalRequirements.title",
						textKey:
							"Services.montenegro.business.faq.renewalRequirements.text",
					},
					{
						titleKey: "Services.montenegro.business.faq.residencyTime.title",
						textKey: "Services.montenegro.business.faq.residencyTime.text",
					},
					{
						titleKey: "Services.montenegro.business.faq.family.title",
						textKey: "Services.montenegro.business.faq.family.text",
					},
					{
						titleKey: "Services.montenegro.business.faq.permanent.title",
						textKey: "Services.montenegro.business.faq.permanent.text",
					},
					{
						titleKey: "Services.montenegro.business.faq.processingTime.title",
						textKey: "Services.montenegro.business.faq.processingTime.text",
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
								"Services.montenegro.digital-nomad.requirements.main-applicant.remote.title",
							text: "Services.montenegro.digital-nomad.requirements.main-applicant.remote.text",
						},
						{
							title:
								"Services.montenegro.digital-nomad.requirements.main-applicant.income.title",
							text: "Services.montenegro.digital-nomad.requirements.main-applicant.income.text",
						},
						{
							title:
								"Services.montenegro.digital-nomad.requirements.main-applicant.housing.title",
							text: "Services.montenegro.digital-nomad.requirements.main-applicant.housing.text",
						},
						{
							title:
								"Services.montenegro.digital-nomad.requirements.main-applicant.entry.title",
							text: "Services.montenegro.digital-nomad.requirements.main-applicant.entry.text",
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
					documents: [
						{
							title:
								"Services.montenegro.digital-nomad.requirements.documents.passport.title",
							text: "Services.montenegro.digital-nomad.requirements.documents.passport.text",
						},
						{
							title:
								"Services.montenegro.digital-nomad.requirements.documents.cleanRecordDoc.title",
							text: "Services.montenegro.digital-nomad.requirements.documents.cleanRecordDoc.text",
						},
						{
							title:
								"Services.montenegro.digital-nomad.requirements.documents.incomeProof.title",
							text: "Services.montenegro.digital-nomad.requirements.documents.incomeProof.text",
						},
						{
							title:
								"Services.montenegro.digital-nomad.requirements.documents.notary.title",
							text: "Services.montenegro.digital-nomad.requirements.documents.notary.text",
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
						titleKey: "Services.montenegro.digital-nomad.faq.eligibility.title",
						textKey: "Services.montenegro.digital-nomad.faq.eligibility.text",
					},
					{
						titleKey: "Services.montenegro.digital-nomad.faq.workProof.title",
						textKey: "Services.montenegro.digital-nomad.faq.workProof.text",
					},
					{
						titleKey:
							"Services.montenegro.digital-nomad.faq.residencyTime.title",
						textKey: "Services.montenegro.digital-nomad.faq.residencyTime.text",
					},
					{
						titleKey: "Services.montenegro.digital-nomad.faq.family.title",
						textKey: "Services.montenegro.digital-nomad.faq.family.text",
					},
					{
						titleKey: "Services.montenegro.digital-nomad.faq.permanent.title",
						textKey: "Services.montenegro.digital-nomad.faq.permanent.text",
					},
					{
						titleKey: "Services.montenegro.digital-nomad.faq.duration.title",
						textKey: "Services.montenegro.digital-nomad.faq.duration.text",
					},
					{
						titleKey:
							"Services.montenegro.digital-nomad.faq.processingTime.title",
						textKey:
							"Services.montenegro.digital-nomad.faq.processingTime.text",
					},
					{
						titleKey:
							"Services.montenegro.digital-nomad.faq.possibilityToDecline.title",
						textKey:
							"Services.montenegro.digital-nomad.faq.possibilityToDecline.text",
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
							price: "€5 500", // Исправлено согласно актуальному прайсу
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
							price: "€1 200", // Исправлено согласно актуальному прайсу
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
								"Services.spain.digital-nomad.requirements.family.children.title",
							text: "Services.spain.digital-nomad.requirements.family.children.text",
						},
						{
							title:
								"Services.spain.digital-nomad.requirements.family.parents.title",
							text: "Services.spain.digital-nomad.requirements.family.parents.text",
						},
						{
							title:
								"Services.spain.digital-nomad.requirements.family.workRight.title",
							text: "Services.spain.digital-nomad.requirements.family.workRight.text",
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
								"Services.spain.digital-nomad.requirements.finances.allowance.title",
							text: "Services.spain.digital-nomad.requirements.finances.allowance.text",
						},
						{
							title:
								"Services.spain.digital-nomad.requirements.finances.statement.title",
							text: "Services.spain.digital-nomad.requirements.finances.statement.text",
						},
						{
							title:
								"Services.spain.digital-nomad.requirements.finances.savings.title",
							text: "Services.spain.digital-nomad.requirements.finances.savings.text",
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
						titleKey:
							"Services.spain.digital-nomad.faq.incomeRequirements.title",
						textKey: "Services.spain.digital-nomad.faq.incomeRequirements.text",
					},
					{
						titleKey: "Services.spain.digital-nomad.faq.whoCanGet.title",
						textKey: "Services.spain.digital-nomad.faq.whoCanGet.text",
					},
					{
						titleKey:
							"Services.spain.digital-nomad.faq.requiredDocuments.title",
						textKey: "Services.spain.digital-nomad.faq.requiredDocuments.text",
					},
					{
						titleKey: "Services.spain.digital-nomad.faq.processingTime.title",
						textKey: "Services.spain.digital-nomad.faq.processingTime.text",
					},
					{
						titleKey:
							"Services.spain.digital-nomad.faq.familyApplication.title",
						textKey: "Services.spain.digital-nomad.faq.familyApplication.text",
					},
					{
						titleKey: "Services.spain.digital-nomad.faq.taxation.title",
						textKey: "Services.spain.digital-nomad.faq.taxation.text",
					},
					{
						titleKey: "Services.spain.digital-nomad.faq.stayRequirement.title",
						textKey: "Services.spain.digital-nomad.faq.stayRequirement.text",
					},
					{
						titleKey:
							"Services.spain.digital-nomad.faq.consulateVsInside.title",
						textKey: "Services.spain.digital-nomad.faq.consulateVsInside.text",
					},
					{
						titleKey: "Services.spain.digital-nomad.faq.localCompanies.title",
						textKey: "Services.spain.digital-nomad.faq.localCompanies.text",
					},
					{
						titleKey: "Services.spain.digital-nomad.faq.prAndCitizenship.title",
						textKey: "Services.spain.digital-nomad.faq.prAndCitizenship.text",
					},
				],
			},
		},
		"non-lucrative": {
			intro: {
				eyebrow: "Services.spain.no-lucrative.intro.eyebrow",
				title: "Services.spain.no-lucrative.intro.title",
				info: "Services.spain.no-lucrative.intro.info",
				firstButton: {
					text: "Services.spain.no-lucrative.intro.firstButton.text",
				},
			},
			advantages: {
				title: "Services.spain.no-lucrative.overview.title",
				firstText: "Services.spain.no-lucrative.overview.firstText",
				secondText: "Services.spain.no-lucrative.overview.secondText",
				card: {
					title: "Services.spain.no-lucrative.overview.card.title",
					elements: [
						{
							title: "Services.spain.no-lucrative.overview.card.typeLabel",
							text: "Services.spain.no-lucrative.overview.card.typeValue",
						},
						{
							title:
								"Services.spain.no-lucrative.overview.card.processingLabel",
							text: "Services.spain.no-lucrative.overview.card.processingValue",
						},
						{
							title: "Services.spain.no-lucrative.overview.card.financeLabel",
							text: "Services.spain.no-lucrative.overview.card.financeValue",
						},
						{
							title: "Services.spain.no-lucrative.overview.card.validityLabel",
							text: "Services.spain.no-lucrative.overview.card.validityValue",
						},
						{
							title: "Services.spain.no-lucrative.overview.card.pathLabel",
							text: "Services.spain.no-lucrative.overview.card.pathValue",
						},
						{
							title: "Services.spain.no-lucrative.overview.card.familyLabel",
							text: "Services.spain.no-lucrative.overview.card.familyValue",
						},
					],
				},
			},
			tariffs: {
				eyebrow: "Services.spain.no-lucrative.tariffs.eyebrow",
				title: "Services.spain.no-lucrative.tariffs.title",
				additionalText: "Services.spain.no-lucrative.tariffs.additionalText",
				PS: "Services.spain.no-lucrative.tariffs.PS",
				cards: [
					{
						title: "Services.spain.no-lucrative.tariffs.full.title",
						additional: "Services.spain.no-lucrative.tariffs.full.additional",
						isFeatured: true,
						featuredBadge: "Services.spain.no-lucrative.tariffs.full.badge",
						price: {
							price: "€5 500",
							detail: "Services.spain.no-lucrative.tariffs.full.priceDetail",
						},
						keyPoints: [
							"Services.spain.no-lucrative.tariffs.full.points.point1",
							"Services.spain.no-lucrative.tariffs.full.points.point2",
							"Services.spain.no-lucrative.tariffs.full.points.point3",
							"Services.spain.no-lucrative.tariffs.full.points.point4",
							"Services.spain.no-lucrative.tariffs.full.points.point5",
						],
					},
					{
						title: "Services.spain.no-lucrative.tariffs.family.title",
						additional: "Services.spain.no-lucrative.tariffs.family.additional",
						price: {
							price: "€1 500",
							detail: "Services.spain.no-lucrative.tariffs.family.priceDetail",
						},
						keyPoints: [
							"Services.spain.no-lucrative.tariffs.family.points.point1",
							"Services.spain.no-lucrative.tariffs.family.points.point2",
							"Services.spain.no-lucrative.tariffs.family.points.point3",
							"Services.spain.no-lucrative.tariffs.family.points.point4",
							"Services.spain.no-lucrative.tariffs.family.points.point5",
						],
					},
					{
						title: "Services.spain.no-lucrative.tariffs.children.title",
						additional:
							"Services.spain.no-lucrative.tariffs.children.additional",
						price: {
							price: "€1 200",
							detail:
								"Services.spain.no-lucrative.tariffs.children.priceDetail",
						},
						keyPoints: [
							"Services.spain.no-lucrative.tariffs.children.points.point1",
							"Services.spain.no-lucrative.tariffs.children.points.point2",
							"Services.spain.no-lucrative.tariffs.children.points.point3",
							"Services.spain.no-lucrative.tariffs.children.points.point4",
							"Services.spain.no-lucrative.tariffs.children.points.point5",
						],
					},
				],
			},
			tabsSwitcher: {
				eyebrow: "Services.spain.no-lucrative.requirements.eyebrow",
				title: "Services.spain.no-lucrative.requirements.title",
				tabs: [
					{
						reason: "main-applicant",
						text: "Services.spain.no-lucrative.requirements.tabs.mainApplicant",
					},
					{
						reason: "family",
						text: "Services.spain.no-lucrative.requirements.tabs.family",
					},
					{
						reason: "finances",
						text: "Services.spain.no-lucrative.requirements.tabs.finances",
					},
					{
						reason: "documents",
						text: "Services.spain.no-lucrative.requirements.tabs.documents",
					},
				],
				list: {
					"main-applicant": [
						{
							title:
								"Services.spain.no-lucrative.requirements.main-applicant.age.title",
							text: "Services.spain.no-lucrative.requirements.main-applicant.age.text",
						},
						{
							title:
								"Services.spain.no-lucrative.requirements.main-applicant.passport.title",
							text: "Services.spain.no-lucrative.requirements.main-applicant.passport.text",
						},
						{
							title:
								"Services.spain.no-lucrative.requirements.main-applicant.cleanRecord.title",
							text: "Services.spain.no-lucrative.requirements.main-applicant.cleanRecord.text",
						},
						{
							title:
								"Services.spain.no-lucrative.requirements.main-applicant.legalStatus.title",
							text: "Services.spain.no-lucrative.requirements.main-applicant.legalStatus.text",
						},
					],
					family: [
						{
							title:
								"Services.spain.no-lucrative.requirements.family.spouse.title",
							text: "Services.spain.no-lucrative.requirements.family.spouse.text",
						},
						{
							title:
								"Services.spain.no-lucrative.requirements.family.children.title",
							text: "Services.spain.no-lucrative.requirements.family.children.text",
						},
						{
							title:
								"Services.spain.no-lucrative.requirements.family.dependence.title",
							text: "Services.spain.no-lucrative.requirements.family.dependence.text",
						},
					],
					finances: [
						{
							title:
								"Services.spain.no-lucrative.requirements.finances.capital.title",
							text: "Services.spain.no-lucrative.requirements.finances.capital.text",
						},
						{
							title:
								"Services.spain.no-lucrative.requirements.finances.passiveIncome.title",
							text: "Services.spain.no-lucrative.requirements.finances.passiveIncome.text",
						},
						{
							title:
								"Services.spain.no-lucrative.requirements.finances.regularity.title",
							text: "Services.spain.no-lucrative.requirements.finances.regularity.text",
						},
					],
					documents: [
						{
							title:
								"Services.spain.no-lucrative.requirements.documents.housing.title",
							text: "Services.spain.no-lucrative.requirements.documents.housing.text",
						},
						{
							title:
								"Services.spain.no-lucrative.requirements.documents.insurance.title",
							text: "Services.spain.no-lucrative.requirements.documents.insurance.text",
						},
						{
							title:
								"Services.spain.no-lucrative.requirements.documents.legalization.title",
							text: "Services.spain.no-lucrative.requirements.documents.legalization.text",
						},
					],
				},
			},
			roadmap: {
				eyebrow: "Services.spain.no-lucrative.roadmap.eyebrow",
				title: "Services.spain.no-lucrative.roadmap.title",
				additionalInfo: "Services.spain.no-lucrative.roadmap.additionalInfo",
				steps: [
					{
						title: "Services.spain.no-lucrative.roadmap.steps.0.title",
						text: "Services.spain.no-lucrative.roadmap.steps.0.text",
					},
					{
						title: "Services.spain.no-lucrative.roadmap.steps.1.title",
						text: "Services.spain.no-lucrative.roadmap.steps.1.text",
					},
					{
						title: "Services.spain.no-lucrative.roadmap.steps.2.title",
						text: "Services.spain.no-lucrative.roadmap.steps.2.text",
					},
					{
						title: "Services.spain.no-lucrative.roadmap.steps.3.title",
						text: "Services.spain.no-lucrative.roadmap.steps.3.text",
					},
					{
						title: "Services.spain.no-lucrative.roadmap.steps.4.title",
						text: "Services.spain.no-lucrative.roadmap.steps.4.text",
					},
				],
			},
			faq: {
				variant: "flat",
				questions: [
					{
						titleKey: "Services.spain.no-lucrative.faq.ipremCalc.title",
						textKey: "Services.spain.no-lucrative.faq.ipremCalc.text",
					},
					{
						titleKey: "Services.spain.no-lucrative.faq.rentalIncome.title",
						textKey: "Services.spain.no-lucrative.faq.rentalIncome.text",
					},
					{
						titleKey: "Services.spain.no-lucrative.faq.renewalDocs.title",
						textKey: "Services.spain.no-lucrative.faq.renewalDocs.text",
					},
					{
						titleKey: "Services.spain.no-lucrative.faq.schoolRequirement.title",
						textKey: "Services.spain.no-lucrative.faq.schoolRequirement.text",
					},
					{
						titleKey: "Services.spain.no-lucrative.faq.dividendsIncome.title",
						textKey: "Services.spain.no-lucrative.faq.dividendsIncome.text",
					},
					{
						titleKey: "Services.spain.no-lucrative.faq.wealthTax.title",
						textKey: "Services.spain.no-lucrative.faq.wealthTax.text",
					},
					{
						titleKey: "Services.spain.no-lucrative.faq.bankAccountRemote.title",
						textKey: "Services.spain.no-lucrative.faq.bankAccountRemote.text",
					},
					{
						titleKey: "Services.spain.no-lucrative.faq.rejectionReasons.title",
						textKey: "Services.spain.no-lucrative.faq.rejectionReasons.text",
					},
					{
						titleKey: "Services.spain.no-lucrative.faq.rentOutProperty.title",
						textKey: "Services.spain.no-lucrative.faq.rentOutProperty.text",
					},
					{
						titleKey: "Services.spain.no-lucrative.faq.goldVisaDiff.title",
						textKey: "Services.spain.no-lucrative.faq.goldVisaDiff.text",
					},
				],
			},
		},
	},
	serbia: {
		business: {
			intro: {
				eyebrow: "Services.serbia.business.intro.eyebrow",
				title: "Services.serbia.business.intro.title",
				info: "Services.serbia.business.intro.info",
				firstButton: {
					text: "Services.serbia.business.intro.firstButton.text",
				},
			},
			advantages: {
				title: "Services.serbia.business.overview.title",
				firstText: "Services.serbia.business.overview.firstText",
				secondText: "Services.serbia.business.overview.secondText",
				card: {
					title: "Services.serbia.business.overview.card.title",
					elements: [
						{
							title: "Services.serbia.business.overview.card.typeLabel",
							text: "Services.serbia.business.overview.card.typeValue",
						},
						{
							title: "Services.serbia.business.overview.card.processingLabel",
							text: "Services.serbia.business.overview.card.processingValue",
						},
						{
							title: "Services.serbia.business.overview.card.financeLabel",
							text: "Services.serbia.business.overview.card.financeValue",
						},
						{
							title: "Services.serbia.business.overview.card.validityLabel",
							text: "Services.serbia.business.overview.card.validityValue",
						},
						{
							title: "Services.serbia.business.overview.card.pathLabel",
							text: "Services.serbia.business.overview.card.pathValue",
						},
						{
							title: "Services.serbia.business.overview.card.familyLabel",
							text: "Services.serbia.business.overview.card.familyValue",
						},
					],
				},
			},
			tariffs: {
				eyebrow: "Services.serbia.business.tariffs.eyebrow",
				title: "Services.serbia.business.tariffs.title",
				additionalText: "Services.serbia.business.tariffs.additionalText",
				PS: "Services.serbia.business.tariffs.PS",
				cards: [
					{
						title: "Services.serbia.business.tariffs.full.title",
						additional: "Services.serbia.business.tariffs.full.additional",
						isFeatured: true,
						featuredBadge: "Services.serbia.business.tariffs.full.badge",
						price: {
							price: "€2 200",
							detail: "Services.serbia.business.tariffs.full.priceDetail",
						},
						keyPoints: [
							"Services.serbia.business.tariffs.full.points.point1",
							"Services.serbia.business.tariffs.full.points.point2",
							"Services.serbia.business.tariffs.full.points.point3",
							"Services.serbia.business.tariffs.full.points.point4",
							"Services.serbia.business.tariffs.full.points.point5",
						],
					},
					{
						title: "Services.serbia.business.tariffs.family.title",
						additional: "Services.serbia.business.tariffs.family.additional",
						price: {
							price: "€800",
							detail: "Services.serbia.business.tariffs.family.priceDetail",
						},
						keyPoints: [
							"Services.serbia.business.tariffs.family.points.point1",
							"Services.serbia.business.tariffs.family.points.point2",
							"Services.serbia.business.tariffs.family.points.point3",
							"Services.serbia.business.tariffs.family.points.point4",
							"Services.serbia.business.tariffs.family.points.point5",
						],
					},
				],
			},
			tabsSwitcher: {
				eyebrow: "Services.serbia.business.requirements.eyebrow",
				title: "Services.serbia.business.requirements.title",
				tabs: [
					{
						reason: "main-applicant",
						text: "Services.serbia.business.requirements.tabs.mainApplicant",
					},
					{
						reason: "family",
						text: "Services.serbia.business.requirements.tabs.family",
					},
					{
						reason: "finances",
						text: "Services.serbia.business.requirements.tabs.finances",
					},
					{
						reason: "documents",
						text: "Services.serbia.business.requirements.tabs.documents",
					},
				],
				list: {
					"main-applicant": [
						{
							title:
								"Services.serbia.business.requirements.main-applicant.age.title",
							text: "Services.serbia.business.requirements.main-applicant.age.text",
						},
						{
							title:
								"Services.serbia.business.requirements.main-applicant.cleanRecord.title",
							text: "Services.serbia.business.requirements.main-applicant.cleanRecord.text",
						},
						{
							title:
								"Services.serbia.business.requirements.main-applicant.passport.title",
							text: "Services.serbia.business.requirements.main-applicant.passport.text",
						},
						{
							title:
								"Services.serbia.business.requirements.main-applicant.remote.title",
							text: "Services.serbia.business.requirements.main-applicant.remote.text",
						},
					],
					family: [
						{
							title:
								"Services.serbia.business.requirements.family.spouse.title",
							text: "Services.serbia.business.requirements.family.spouse.text",
						},
						{
							title:
								"Services.serbia.business.requirements.family.children.title",
							text: "Services.serbia.business.requirements.family.children.text",
						},
						{
							title:
								"Services.serbia.business.requirements.family.parents.title",
							text: "Services.serbia.business.requirements.family.parents.text",
						},
						{
							title:
								"Services.serbia.business.requirements.family.workRight.title",
							text: "Services.serbia.business.requirements.family.workRight.text",
						},
					],
					finances: [
						{
							title:
								"Services.serbia.business.requirements.finances.income.title",
							text: "Services.serbia.business.requirements.finances.income.text",
						},
						{
							title:
								"Services.serbia.business.requirements.finances.allowance.title",
							text: "Services.serbia.business.requirements.finances.allowance.text",
						},
						{
							title:
								"Services.serbia.business.requirements.finances.statement.title",
							text: "Services.serbia.business.requirements.finances.statement.text",
						},
						{
							title:
								"Services.serbia.business.requirements.finances.savings.title",
							text: "Services.serbia.business.requirements.finances.savings.text",
						},
					],
					documents: [
						{
							title:
								"Services.serbia.business.requirements.documents.cleanRecordDoc.title",
							text: "Services.serbia.business.requirements.documents.cleanRecordDoc.text",
						},
						{
							title:
								"Services.serbia.business.requirements.documents.civilDocs.title",
							text: "Services.serbia.business.requirements.documents.civilDocs.text",
						},
						{
							title:
								"Services.serbia.business.requirements.documents.notary.title",
							text: "Services.serbia.business.requirements.documents.notary.text",
						},
						{
							title:
								"Services.serbia.business.requirements.documents.incomeProof.title",
							text: "Services.serbia.business.requirements.documents.incomeProof.text",
						},
					],
				},
			},
			roadmap: {
				eyebrow: "Services.serbia.business.roadmap.eyebrow",
				title: "Services.serbia.business.roadmap.title",
				additionalInfo: "Services.serbia.business.roadmap.additionalInfo",
				steps: [
					{
						title: "Services.serbia.business.roadmap.steps.0.title",
						text: "Services.serbia.business.roadmap.steps.0.text",
					},
					{
						title: "Services.serbia.business.roadmap.steps.1.title",
						text: "Services.serbia.business.roadmap.steps.1.text",
					},
					{
						title: "Services.serbia.business.roadmap.steps.2.title",
						text: "Services.serbia.business.roadmap.steps.2.text",
					},
					{
						title: "Services.serbia.business.roadmap.steps.3.title",
						text: "Services.serbia.business.roadmap.steps.3.text",
					},
					{
						title: "Services.serbia.business.roadmap.steps.4.title",
						text: "Services.serbia.business.roadmap.steps.4.text",
					},
				],
			},
			faq: {
				variant: "flat",
				questions: [
					{
						titleKey: "Services.serbia.business.faq.incomeRequirements.title",
						textKey: "Services.serbia.business.faq.incomeRequirements.text",
					},
					{
						titleKey: "Services.serbia.business.faq.whoCanGet.title",
						textKey: "Services.serbia.business.faq.whoCanGet.text",
					},
					{
						titleKey: "Services.serbia.business.faq.requiredDocuments.title",
						textKey: "Services.serbia.business.faq.requiredDocuments.text",
					},
					{
						titleKey: "Services.serbia.business.faq.processingTime.title",
						textKey: "Services.serbia.business.faq.processingTime.text",
					},
					{
						titleKey: "Services.serbia.business.faq.familyApplication.title",
						textKey: "Services.serbia.business.faq.familyApplication.text",
					},
					{
						titleKey: "Services.serbia.business.faq.taxation.title",
						textKey: "Services.serbia.business.faq.taxation.text",
					},
					{
						titleKey: "Services.serbia.business.faq.stayRequirement.title",
						textKey: "Services.serbia.business.faq.stayRequirement.text",
					},
					{
						titleKey: "Services.serbia.business.faq.consulateVsInside.title",
						textKey: "Services.serbia.business.faq.consulateVsInside.text",
					},
					{
						titleKey: "Services.serbia.business.faq.localCompanies.title",
						textKey: "Services.serbia.business.faq.localCompanies.text",
					},
					{
						titleKey: "Services.serbia.business.faq.prAndCitizenship.title",
						textKey: "Services.serbia.business.faq.prAndCitizenship.text",
					},
				],
			},
		},
		"real-estate": {
			intro: {
				eyebrow: "Services.serbia.real-estate.intro.eyebrow",
				title: "Services.serbia.real-estate.intro.title",
				info: "Services.serbia.real-estate.intro.info",
				firstButton: {
					text: "Services.serbia.real-estate.intro.firstButton.text",
				},
			},
			advantages: {
				title: "Services.serbia.real-estate.overview.title",
				firstText: "Services.serbia.real-estate.overview.firstText",
				secondText: "Services.serbia.real-estate.overview.secondText",
				card: {
					title: "Services.serbia.real-estate.overview.card.title",
					elements: [
						{
							title: "Services.serbia.real-estate.overview.card.typeLabel",
							text: "Services.serbia.real-estate.overview.card.typeValue",
						},
						{
							title:
								"Services.serbia.real-estate.overview.card.processingLabel",
							text: "Services.serbia.real-estate.overview.card.processingValue",
						},
						{
							title: "Services.serbia.real-estate.overview.card.financeLabel",
							text: "Services.serbia.real-estate.overview.card.financeValue",
						},
						{
							title: "Services.serbia.real-estate.overview.card.validityLabel",
							text: "Services.serbia.real-estate.overview.card.validityValue",
						},
						{
							title: "Services.serbia.real-estate.overview.card.pathLabel",
							text: "Services.serbia.real-estate.overview.card.pathValue",
						},
						{
							title: "Services.serbia.real-estate.overview.card.familyLabel",
							text: "Services.serbia.real-estate.overview.card.familyValue",
						},
					],
				},
			},
			tariffs: {
				eyebrow: "Services.serbia.real-estate.tariffs.eyebrow",
				title: "Services.serbia.real-estate.tariffs.title",
				additionalText: "Services.serbia.real-estate.tariffs.additionalText",
				PS: "Services.serbia.real-estate.tariffs.PS",
				cards: [
					{
						title: "Services.serbia.real-estate.tariffs.full.title",
						additional: "Services.serbia.real-estate.tariffs.full.additional",
						isFeatured: true,
						featuredBadge: "Services.serbia.real-estate.tariffs.full.badge",
						price: {
							price: "€2 200",
							detail: "Services.serbia.real-estate.tariffs.full.priceDetail",
						},
						keyPoints: [
							"Services.serbia.real-estate.tariffs.full.points.point1",
							"Services.serbia.real-estate.tariffs.full.points.point2",
							"Services.serbia.real-estate.tariffs.full.points.point3",
							"Services.serbia.real-estate.tariffs.full.points.point4",
							"Services.serbia.real-estate.tariffs.full.points.point5",
						],
					},
					{
						title: "Services.serbia.real-estate.tariffs.family.title",
						additional: "Services.serbia.real-estate.tariffs.family.additional",
						price: {
							price: "€400",
							detail: "Services.serbia.real-estate.tariffs.family.priceDetail",
						},
						keyPoints: [
							"Services.serbia.real-estate.tariffs.family.points.point1",
							"Services.serbia.real-estate.tariffs.family.points.point2",
							"Services.serbia.real-estate.tariffs.family.points.point3",
							"Services.serbia.real-estate.tariffs.family.points.point4",
							"Services.serbia.real-estate.tariffs.family.points.point5",
						],
					},
				],
			},
			tabsSwitcher: {
				eyebrow: "Services.serbia.real-estate.requirements.eyebrow",
				title: "Services.serbia.real-estate.requirements.title",
				tabs: [
					{
						reason: "main-applicant",
						text: "Services.serbia.real-estate.requirements.tabs.mainApplicant",
					},
					{
						reason: "family",
						text: "Services.serbia.real-estate.requirements.tabs.family",
					},
					{
						reason: "finances",
						text: "Services.serbia.real-estate.requirements.tabs.finances",
					},
					{
						reason: "documents",
						text: "Services.serbia.real-estate.requirements.tabs.documents",
					},
				],
				list: {
					"main-applicant": [
						{
							title:
								"Services.serbia.real-estate.requirements.main-applicant.anyValue.title",
							text: "Services.serbia.real-estate.requirements.main-applicant.anyValue.text",
						},
						{
							title:
								"Services.serbia.real-estate.requirements.main-applicant.ownership.title",
							text: "Services.serbia.real-estate.requirements.main-applicant.ownership.text",
						},
						{
							title:
								"Services.serbia.real-estate.requirements.main-applicant.whiteCard.title",
							text: "Services.serbia.real-estate.requirements.main-applicant.whiteCard.text",
						},
						{
							title:
								"Services.serbia.real-estate.requirements.main-applicant.validity.title",
							text: "Services.serbia.real-estate.requirements.main-applicant.validity.text",
						},
					],
					family: [
						{
							title:
								"Services.serbia.real-estate.requirements.family.spouse.title",
							text: "Services.serbia.real-estate.requirements.family.spouse.text",
						},
						{
							title:
								"Services.serbia.real-estate.requirements.family.finSupport.title",
							text: "Services.serbia.real-estate.requirements.family.finSupport.text",
						},
						{
							title:
								"Services.serbia.real-estate.requirements.family.workRight.title",
							text: "Services.serbia.real-estate.requirements.family.workRight.text",
						},
						{
							title:
								"Services.serbia.real-estate.requirements.family.familyDocs.title",
							text: "Services.serbia.real-estate.requirements.family.familyDocs.text",
						},
					],
					finances: [
						{
							title:
								"Services.serbia.real-estate.requirements.finances.personalAccount.title",
							text: "Services.serbia.real-estate.requirements.finances.personalAccount.text",
						},
						{
							title:
								"Services.serbia.real-estate.requirements.finances.purchaseTaxes.title",
							text: "Services.serbia.real-estate.requirements.finances.purchaseTaxes.text",
						},
						{
							title:
								"Services.serbia.real-estate.requirements.finances.livingExpenses.title",
							text: "Services.serbia.real-estate.requirements.finances.livingExpenses.text",
						},
						{
							title:
								"Services.serbia.real-estate.requirements.finances.fees.title",
							text: "Services.serbia.real-estate.requirements.finances.fees.text",
						},
					],
					documents: [
						{
							title:
								"Services.serbia.real-estate.requirements.documents.cadastreExtract.title",
							text: "Services.serbia.real-estate.requirements.documents.cadastreExtract.text",
						},
						{
							title:
								"Services.serbia.real-estate.requirements.documents.passportDoc.title",
							text: "Services.serbia.real-estate.requirements.documents.passportDoc.text",
						},
						{
							title:
								"Services.serbia.real-estate.requirements.documents.courtTranslation.title",
							text: "Services.serbia.real-estate.requirements.documents.courtTranslation.text",
						},
						{
							title:
								"Services.serbia.real-estate.requirements.documents.insuranceDoc.title",
							text: "Services.serbia.real-estate.requirements.documents.insuranceDoc.text",
						},
					],
				},
			},
			roadmap: {
				eyebrow: "Services.serbia.real-estate.roadmap.eyebrow",
				title: "Services.serbia.real-estate.roadmap.title",
				additionalInfo: "Services.serbia.real-estate.roadmap.additionalInfo",
				steps: [
					{
						title: "Services.serbia.real-estate.roadmap.steps.0.title",
						text: "Services.serbia.real-estate.roadmap.steps.0.text",
					},
					{
						title: "Services.serbia.real-estate.roadmap.steps.1.title",
						text: "Services.serbia.real-estate.roadmap.steps.1.text",
					},
					{
						title: "Services.serbia.real-estate.roadmap.steps.2.title",
						text: "Services.serbia.real-estate.roadmap.steps.2.text",
					},
					{
						title: "Services.serbia.real-estate.roadmap.steps.3.title",
						text: "Services.serbia.real-estate.roadmap.steps.3.text",
					},
					{
						title: "Services.serbia.real-estate.roadmap.steps.4.title",
						text: "Services.serbia.real-estate.roadmap.steps.4.text",
					},
				],
			},
			faq: {
				variant: "flat",
				questions: [
					{
						titleKey:
							"Services.serbia.real-estate.faq.minPriceRequirements.title",
						textKey:
							"Services.serbia.real-estate.faq.minPriceRequirements.text",
					},
					{
						titleKey: "Services.serbia.real-estate.faq.hiddenThreshold.title",
						textKey: "Services.serbia.real-estate.faq.hiddenThreshold.text",
					},
					{
						titleKey:
							"Services.serbia.real-estate.faq.commercialRealEstate.title",
						textKey:
							"Services.serbia.real-estate.faq.commercialRealEstate.text",
					},
					{
						titleKey: "Services.serbia.real-estate.faq.taxObligations.title",
						textKey: "Services.serbia.real-estate.faq.taxObligations.text",
					},
					{
						titleKey: "Services.serbia.real-estate.faq.rentalPossibility.title",
						textKey: "Services.serbia.real-estate.faq.rentalPossibility.text",
					},
					{
						titleKey:
							"Services.serbia.real-estate.faq.reciprocityAndCitizenship.title",
						textKey:
							"Services.serbia.real-estate.faq.reciprocityAndCitizenship.text",
					},
					{
						titleKey: "Services.serbia.real-estate.faq.workAuthorization.title",
						textKey: "Services.serbia.real-estate.faq.workAuthorization.text",
					},
					{
						titleKey: "Services.serbia.real-estate.faq.prAndPassport.title",
						textKey: "Services.serbia.real-estate.faq.prAndPassport.text",
					},
				],
			},
		},
	},
};
