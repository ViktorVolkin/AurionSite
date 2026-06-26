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
