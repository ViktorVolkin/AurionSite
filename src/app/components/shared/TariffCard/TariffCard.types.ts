interface Price {
	price: string;
	detail: string;
}
export interface TariffCardProps {
	title: string;
	additional: string;
	price: Price;
	keyPoints: string[];
	isFeatured?: boolean;
	featuredBadge?: string;
}
