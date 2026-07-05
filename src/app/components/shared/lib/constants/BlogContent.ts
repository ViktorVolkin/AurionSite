import { BlogCardProps } from "@/app/components/pages/BlogPage/components/BlogCard/BlogCard.types";
import image from "@/../public/MainPageSmall.avif";
export const BLOG_FILTERS = [
	"all",
	"spain",
	"montenegro",
	"france",
	"hungary",
	"greece",
	"UAE",
	"us",
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
			leadsTo: "/blog/articles/spain-nomad",
			tag: "blog.tags.spain",
			tagSlug: "spain",
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.spainNomad.createdAt",
				timeToRead: "blog.articles.spainNomad.timeToRead",
			},
		},
		{
			title: "blog.articles.cyprusPms.title",
			leadsTo: "/blog/articles/cyprus-pms",
			tag: "blog.tags.cyprus",
			tagSlug: "cyprus",
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.cyprusPms.createdAt",
				timeToRead: "blog.articles.cyprusPms.timeToRead",
			},
		},
		{
			title: "blog.articles.uaeInvest.title",
			leadsTo: "/blog/articles/uae-invest",
			tag: "blog.tags.uae",
			tagSlug: "uae",
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.uaeInvest.createdAt",
				timeToRead: "blog.articles.uaeInvest.timeToRead",
			},
		},
		{
			title: "blog.articles.portugalD7.title",
			leadsTo: "/blog/articles/portugal-d7",
			tag: "blog.tags.portugal",
			tagSlug: "portugal",
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.portugalD7.createdAt",
				timeToRead: "blog.articles.portugalD7.timeToRead",
			},
		},
		{
			title: "blog.articles.startupVisa.title",
			leadsTo: "/blog/articles/startup-visa",
			tag: "blog.tags.startup",
			tagSlug: "startup",
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.startupVisa.createdAt",
				timeToRead: "blog.articles.startupVisa.timeToRead",
			},
		},
		{
			title: "blog.articles.vanuatuPassport.title",
			leadsTo: "/blog/articles/vanuatu",
			tag: "blog.tags.citizenship",
			tagSlug: "citizenship",
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.vanuatuPassport.createdAt",
				timeToRead: "blog.articles.vanuatuPassport.timeToRead",
			},
		},
		{
			title: "blog.articles.franceTalent.title",
			leadsTo: "/blog/articles/france-talent",
			tag: "blog.tags.france",
			tagSlug: "france",
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.franceTalent.createdAt",
				timeToRead: "blog.articles.franceTalent.timeToRead",
			},
		},
		{
			title: "blog.articles.serbiaRelocation.title",
			leadsTo: "/blog/articles/serbia",
			tag: "blog.tags.serbia",
			tagSlug: "serbia",
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.serbiaRelocation.createdAt",
				timeToRead: "blog.articles.serbiaRelocation.timeToRead",
			},
		},
		{
			title: "blog.articles.usaEb5.title",
			leadsTo: "/blog/articles/usa-eb5",
			tag: "blog.tags.usa",
			tagSlug: "usa",
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.usaEb5.createdAt",
				timeToRead: "blog.articles.usaEb5.timeToRead",
			},
		},
		{
			title: "blog.articles.argentinaBirth.title",
			leadsTo: "/blog/articles/argentina",
			tag: "blog.tags.argentina",
			tagSlug: "argentina",
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.argentinaBirth.createdAt",
				timeToRead: "blog.articles.argentinaBirth.timeToRead",
			},
		},
		{
			title: "blog.articles.italyResidence.title",
			leadsTo: "/blog/articles/italy",
			tag: "blog.tags.italy",
			tagSlug: "italy",
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.italyResidence.createdAt",
				timeToRead: "blog.articles.italyResidence.timeToRead",
			},
		},
		{
			title: "blog.articles.nomadTaxes.title",
			leadsTo: "/blog/articles/nomad-taxes",
			tag: "blog.tags.taxes",
			tagSlug: "taxes",
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.nomadTaxes.createdAt",
				timeToRead: "blog.articles.nomadTaxes.timeToRead",
			},
		},
	],
};
