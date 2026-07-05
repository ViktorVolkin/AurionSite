import { CardDetailsProps } from "@/app/components/shared/CardDetails/CardDetails.types";
import { StaticImageData } from "next/image";

export interface BlogCardProps {
	imgSrc?: StaticImageData;
	title: string;
	cardDetails: CardDetailsProps;
	tagSlug: string;
	leadsTo: string;
	tag: string;
}
