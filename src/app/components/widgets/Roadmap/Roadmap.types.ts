interface IStep {
	title: string;
	text: string;
	important?: string;
}
export interface RoadmapProps {
	eyebrow: string;
	title: string;
	additionalInfo: string;
	steps: IStep[];
}
