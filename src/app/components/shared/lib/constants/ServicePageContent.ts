import { RelocationGroundsProps } from "@/app/components/pages/ServicePage/components/RelocationGrounds/RelocationGrounds.types";
import { IntroBlockProps } from "@/app/components/widgets/IntroBlock/IntroBlock.types";
interface TabProps {
	text: string;
	reason: string;
}
interface TabsProps {
	tabs: TabProps[];
}
export const SERVICE_PAGES = ["montenegro", "spain", "hungary"];

export const IntroBlockServicePageContent: IntroBlockProps = {
	eyebrow: "mainPage.intro.eyebrow",
	title: "mainPage.intro.title",
	info: "mainPage.intro.info",
	firstButton: {
		text: "mainPage.intro.firstButton.text",
	},
};

export const TabsContent: TabsProps = {
	tabs: [
		{
			text: "Services.Montenegro.requirements.tabMainApplicant",
			reason: "main-applicant",
		},
		{
			text: "Services.Montenegro.requirements.tabFamilyMembers",
			reason: "family-members",
		},
		{
			text: "Services.Montenegro.requirements.tabFinances",
			reason: "finances",
		},
		{
			text: "Services.Montenegro.requirements.tabDocuments",
			reason: "documents",
		},
	],
};

export const RelocationGroundsServicePageContent: Omit<
	RelocationGroundsProps,
	"children"
> = {
	eyebrow: "Services.Montenegro.requirements.eyebrow",
	title: "Services.Montenegro.requirements.title",
};
