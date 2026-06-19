import { CustomButtonProps } from "../../shared/CustomButton/CustomButton.types";

export interface IntroBlockProps {
	eyebrow: string;
	title: string;
	info: string;
	firstButton: CustomButtonProps;
	decidedBy: { title: string; text: string }[];
}
