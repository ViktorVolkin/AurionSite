export interface BlogPageProps {
	cards: any[];
	params: Promise<{ locale: string; country: string }>;
}
