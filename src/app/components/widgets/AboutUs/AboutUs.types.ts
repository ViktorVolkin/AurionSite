import { StaticImageData } from "next/image";

export interface AboutUsProps {
	eyebrow: string;
	primaryImage: StaticImageData;
	secondaryImage: StaticImageData;
	title: string;
	text: string;
	items: { title: string; text: string }[];
}
