import { BlogCardProps } from "@/app/components/pages/BlogPage/components/BlogCard/BlogCard.types";
import digitalNomad from "@/../public/digital-nomad-spain.avif";
import dnvIncome from "@/../public/dnv-income-spain.avif";
import whereToMove from "@/../public/where-to-move.avif";
export const BLOG_FILTERS = [
	"all",
	"spain",
	"montenegro",
	"greece",
	"armenia",
	"serbia",
] as const;

export interface BlogContentData {
	title: string;
	cards: BlogCardProps[];
}

export const BLOG_CONTENT = {
	title: "blog.title",
	cards: [
		{
			title: "blog.articles.spainNomad.title",
			leadsTo: "/blog/articles/spain-digital-nomad",
			tagSlug: ["spain"],
			tags: ["blog.tags.spain"],
			imgSrc: digitalNomad,
			cardDetails: {
				createdAt: "01.03.2026",
				timeToRead: "blog.articles.spainNomad.timeToRead",
			},
		},
		{
			title: "blog.articles.dnv-income.title",
			leadsTo: "/blog/articles/spain-dnv-income",
			tagSlug: ["spain"],
			tags: ["blog.tags.spain"],
			imgSrc: dnvIncome,
			cardDetails: {
				createdAt: "13.05.2026",
				timeToRead: "blog.articles.dnv-income.timeToRead",
			},
		},
		{
			title: "blog.articles.where-to-move.title",
			leadsTo: "/blog/articles/where-to-move",
			tagSlug: [],
			tags: [],
			imgSrc: whereToMove,
			cardDetails: {
				createdAt: "03.07.2026",
				timeToRead: "blog.articles.where-to-move.timeToRead",
			},
		},
	],
};
