import { StaticImageData } from "next/image";

export interface BlogCardProps {
	imgSrc?: StaticImageData;
	title: string;
	createdAt: string;
	timeToRead: string;
}
