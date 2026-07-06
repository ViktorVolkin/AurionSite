import { BlogCardProps } from "@/app/components/pages/BlogPage/components/BlogCard/BlogCard.types";
import image from "@/../public/MainPageSmall.avif";
import { BlogPageProps } from "@/app/components/pages/BlogPage/BlogPage.types";
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
			tagSlug: ["spain"],
			tags: ["blog.tags.spain"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.spainNomad.createdAt",
				timeToRead: "blog.articles.spainNomad.timeToRead",
			},
		},
		{
			title: "blog.articles.cyprusPms.title",
			leadsTo: "/blog/articles/cyprus-pms",
			tagSlug: ["cyprus"],
			tags: ["blog.tags.cyprus"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.cyprusPms.createdAt",
				timeToRead: "blog.articles.cyprusPms.timeToRead",
			},
		},
		{
			title: "blog.articles.uaeInvest.title",
			leadsTo: "/blog/articles/uae-invest",
			tagSlug: ["uae"],
			tags: ["blog.tags.uae"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.uaeInvest.createdAt",
				timeToRead: "blog.articles.uaeInvest.timeToRead",
			},
		},
		{
			title: "blog.articles.portugalD7.title",
			leadsTo: "/blog/articles/portugal-d7",
			tagSlug: ["portugal"],
			tags: ["blog.tags.portugal"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.portugalD7.createdAt",
				timeToRead: "blog.articles.portugalD7.timeToRead",
			},
		},
		{
			title: "blog.articles.startupVisa.title",
			leadsTo: "/blog/articles/startup-visa",
			tagSlug: ["startup"],
			tags: ["blog.tags.startup"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.startupVisa.createdAt",
				timeToRead: "blog.articles.startupVisa.timeToRead",
			},
		},
		{
			title: "blog.articles.vanuatuPassport.title",
			leadsTo: "/blog/articles/vanuatu",
			tagSlug: ["citizenship"],
			tags: ["blog.tags.citizenship"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.vanuatuPassport.createdAt",
				timeToRead: "blog.articles.vanuatuPassport.timeToRead",
			},
		},
		{
			title: "blog.articles.franceTalent.title",
			leadsTo: "/blog/articles/france-talent",
			tagSlug: ["france"],
			tags: ["blog.tags.france"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.franceTalent.createdAt",
				timeToRead: "blog.articles.franceTalent.timeToRead",
			},
		},
		{
			title: "blog.articles.serbiaRelocation.title",
			leadsTo: "/blog/articles/serbia",
			tagSlug: ["serbia"],
			tags: ["blog.tags.serbia"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.serbiaRelocation.createdAt",
				timeToRead: "blog.articles.serbiaRelocation.timeToRead",
			},
		},
		{
			title: "blog.articles.usaEb5.title",
			leadsTo: "/blog/articles/usa-eb5",
			tagSlug: ["usa"],
			tags: ["blog.tags.usa"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.usaEb5.createdAt",
				timeToRead: "blog.articles.usaEb5.timeToRead",
			},
		},
		{
			title: "blog.articles.argentinaBirth.title",
			leadsTo: "/blog/articles/argentina",
			tagSlug: ["argentina", "citizenship"], // И Аргентина, и Второе гражданство
			tags: ["blog.tags.argentina", "blog.tags.citizenship"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.argentinaBirth.createdAt",
				timeToRead: "blog.articles.argentinaBirth.timeToRead",
			},
		},
		{
			title: "blog.articles.italyResidence.title",
			leadsTo: "/blog/articles/italy",
			tagSlug: ["italy"],
			tags: ["blog.tags.italy"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.italyResidence.createdAt",
				timeToRead: "blog.articles.italyResidence.timeToRead",
			},
		},
		{
			title: "blog.articles.nomadTaxes.title",
			leadsTo: "/blog/articles/nomad-taxes",
			tagSlug: ["taxes"],
			tags: ["blog.tags.taxes"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.nomadTaxes.createdAt",
				timeToRead: "blog.articles.nomadTaxes.timeToRead",
			},
		},
		{
			title: "blog.articles.montenegroCompany.title",
			leadsTo: "/blog/articles/montenegro-company",
			tagSlug: ["montenegro"],
			tags: ["blog.tags.montenegro"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.montenegroCompany.createdAt",
				timeToRead: "blog.articles.montenegroCompany.timeToRead",
			},
		},
		{
			title: "blog.articles.hungaryCard.title",
			leadsTo: "/blog/articles/hungary-national-card",
			tagSlug: ["hungary"],
			tags: ["blog.tags.hungary"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.hungaryCard.createdAt",
				timeToRead: "blog.articles.hungaryCard.timeToRead",
			},
		},
		{
			title: "blog.articles.greeceGolden.title",
			leadsTo: "/blog/articles/greece-golden-visa",
			tagSlug: ["greece"],
			tags: ["blog.tags.greece"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.greeceGolden.createdAt",
				timeToRead: "blog.articles.greeceGolden.timeToRead",
			},
		},
		{
			title: "blog.articles.maltaMprp.title",
			leadsTo: "/blog/articles/malta-mprp",
			tagSlug: ["malta"],
			tags: ["blog.tags.malta"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.maltaMprp.createdAt",
				timeToRead: "blog.articles.maltaMprp.timeToRead",
			},
		},
		{
			title: "blog.articles.armeniaIt.title",
			leadsTo: "/blog/articles/armenia-it-relocation",
			tagSlug: ["armenia", "startup"], // И Армения, и Стартап тематика
			tags: ["blog.tags.armenia", "blog.tags.startup"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.armeniaIt.createdAt",
				timeToRead: "blog.articles.armeniaIt.timeToRead",
			},
		},
		{
			title: "blog.articles.spainProperty.title",
			leadsTo: "/blog/articles/spain-golden-visa",
			tagSlug: ["spain"],
			tags: ["blog.tags.spain"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.spainProperty.createdAt",
				timeToRead: "blog.articles.spainProperty.timeToRead",
			},
		},
		{
			title: "blog.articles.cyprusDigital.title",
			leadsTo: "/blog/articles/cyprus-nomad",
			tagSlug: ["cyprus"],
			tags: ["blog.tags.cyprus"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.cyprusDigital.createdAt",
				timeToRead: "blog.articles.cyprusDigital.timeToRead",
			},
		},
		{
			title: "blog.articles.uaeFreelance.title",
			leadsTo: "/blog/articles/uae-freelance",
			tagSlug: ["uae"],
			tags: ["blog.tags.uae"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.uaeFreelance.createdAt",
				timeToRead: "blog.articles.uaeFreelance.timeToRead",
			},
		},
		{
			title: "blog.articles.franceVisitor.title",
			leadsTo: "/blog/articles/france-visiteur",
			tagSlug: ["france"],
			tags: ["blog.tags.france"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.franceVisitor.createdAt",
				timeToRead: "blog.articles.franceVisitor.timeToRead",
			},
		},
		{
			title: "blog.articles.serbiaRealEstate.title",
			leadsTo: "/blog/articles/serbia-property",
			tagSlug: ["serbia"],
			tags: ["blog.tags.serbia"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.serbiaRealEstate.createdAt",
				timeToRead: "blog.articles.serbiaRealEstate.timeToRead",
			},
		},
		{
			title: "blog.articles.hungaryWhite.title",
			leadsTo: "/blog/articles/hungary-white-card",
			tagSlug: ["hungary"],
			tags: ["blog.tags.hungary"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.hungaryWhite.createdAt",
				timeToRead: "blog.articles.hungaryWhite.timeToRead",
			},
		},
		{
			title: "blog.articles.montenegroRealEstate.title",
			leadsTo: "/blog/articles/montenegro-property-vnzh",
			tagSlug: ["montenegro"],
			tags: ["blog.tags.montenegro"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.montenegroRealEstate.createdAt",
				timeToRead: "blog.articles.montenegroRealEstate.timeToRead",
			},
		},
		{
			title: "blog.articles.greeceFinancially.title",
			leadsTo: "/blog/articles/greece-fip",
			tagSlug: ["greece"],
			tags: ["blog.tags.greece"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.greeceFinancially.createdAt",
				timeToRead: "blog.articles.greeceFinancially.timeToRead",
			},
		},
		{
			title: "blog.articles.maltaNomad.title",
			leadsTo: "/blog/articles/malta-nomad",
			tagSlug: ["malta"],
			tags: ["blog.tags.malta"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.maltaNomad.createdAt",
				timeToRead: "blog.articles.maltaNomad.timeToRead",
			},
		},
		{
			title: "blog.articles.armeniaBusiness.title",
			leadsTo: "/blog/articles/armenia-business-registration",
			tagSlug: ["armenia"],
			tags: ["blog.tags.armenia"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.armeniaBusiness.createdAt",
				timeToRead: "blog.articles.armeniaBusiness.timeToRead",
			},
		},
		{
			title: "blog.articles.spainNonLucrative.title",
			leadsTo: "/blog/articles/spain-nlv",
			tagSlug: ["spain"],
			tags: ["blog.tags.spain"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.spainNonLucrative.createdAt",
				timeToRead: "blog.articles.spainNonLucrative.timeToRead",
			},
		},
		{
			title: "blog.articles.cyprusCompany.title",
			leadsTo: "/blog/articles/cyprus-it-company",
			tagSlug: ["cyprus"],
			tags: ["blog.tags.cyprus"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.cyprusCompany.createdAt",
				timeToRead: "blog.articles.cyprusCompany.timeToRead",
			},
		},
		{
			title: "blog.articles.uaeCorporateTax.title",
			leadsTo: "/blog/articles/uae-corporate-tax",
			tagSlug: ["uae", "taxes"], // И ОАЭ, и Налоги
			tags: ["blog.tags.uae", "blog.tags.taxes"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.uaeCorporateTax.createdAt",
				timeToRead: "blog.articles.uaeCorporateTax.timeToRead",
			},
		},
		{
			title: "blog.articles.franceBusiness.title",
			leadsTo: "/blog/articles/france-entrepreneur",
			tagSlug: ["france"],
			tags: ["blog.tags.france"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.franceBusiness.createdAt",
				timeToRead: "blog.articles.franceBusiness.timeToRead",
			},
		},
		{
			title: "blog.articles.serbiaBanking.title",
			leadsTo: "/blog/articles/serbia-bank-account",
			tagSlug: ["serbia"],
			tags: ["blog.tags.serbia"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.serbiaBanking.createdAt",
				timeToRead: "blog.articles.serbiaBanking.timeToRead",
			},
		},
		{
			title: "blog.articles.italyDigital.title",
			leadsTo: "/blog/articles/italy-digital-nomad",
			tagSlug: ["italy"],
			tags: ["blog.tags.italy"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.italyDigital.createdAt",
				timeToRead: "blog.articles.italyDigital.timeToRead",
			},
		},
		{
			title: "blog.articles.portugalNomad.title",
			leadsTo: "/blog/articles/portugal-digital-nomad",
			tagSlug: ["portugal"],
			tags: ["blog.tags.portugal"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.portugalNomad.createdAt",
				timeToRead: "blog.articles.portugalNomad.timeToRead",
			},
		},
		{
			title: "blog.articles.montenegroTaxes.title",
			leadsTo: "/blog/articles/montenegro-tax-system",
			tagSlug: ["montenegro", "taxes"], // И Черногория, и Налоги
			tags: ["blog.tags.montenegro", "blog.tags.taxes"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.montenegroTaxes.createdAt",
				timeToRead: "blog.articles.montenegroTaxes.timeToRead",
			},
		},
		{
			title: "blog.articles.spainTaxBeckham.title",
			leadsTo: "/blog/articles/spain-beckham-law",
			tagSlug: ["spain", "taxes"], // И Испания, и Налоги
			tags: ["blog.tags.spain", "blog.tags.taxes"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.spainTaxBeckham.createdAt",
				timeToRead: "blog.articles.spainTaxBeckham.timeToRead",
			},
		},
		{
			title: "blog.articles.cyprusYellowCard.title",
			leadsTo: "/blog/articles/cyprus-eu-citizens",
			tagSlug: ["cyprus"],
			tags: ["blog.tags.cyprus"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.cyprusYellowCard.createdAt",
				timeToRead: "blog.articles.cyprusYellowCard.timeToRead",
			},
		},
		{
			title: "blog.articles.uaeGoldenVisaFamily.title",
			leadsTo: "/blog/articles/uae-golden-visa-family",
			tagSlug: ["uae"],
			tags: ["blog.tags.uae"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.uaeGoldenVisaFamily.createdAt",
				timeToRead: "blog.articles.uaeGoldenVisaFamily.timeToRead",
			},
		},
		{
			title: "blog.articles.franceTalentCompany.title",
			leadsTo: "/blog/articles/france-talent-passport-business",
			tagSlug: ["france", "startup"], // И Франция, и Стартап
			tags: ["blog.tags.france", "blog.tags.startup"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.franceTalentCompany.createdAt",
				timeToRead: "blog.articles.franceTalentCompany.timeToRead",
			},
		},
		{
			title: "blog.articles.serbiaTaxResident.title",
			leadsTo: "/blog/articles/serbia-tax-residency",
			tagSlug: ["serbia", "taxes"], // И Сербия, и Налоги
			tags: ["blog.tags.serbia", "blog.tags.taxes"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.serbiaTaxResident.createdAt",
				timeToRead: "blog.articles.serbiaTaxResident.timeToRead",
			},
		},
		{
			title: "blog.articles.hungaryRealEstateNew.title",
			leadsTo: "/blog/articles/hungary-investor-visa",
			tagSlug: ["hungary"],
			tags: ["blog.tags.hungary"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.hungaryRealEstateNew.createdAt",
				timeToRead: "blog.articles.hungaryRealEstateNew.timeToRead",
			},
		},
		{
			title: "blog.articles.greeceGoldenChanges.title",
			leadsTo: "/blog/articles/greece-golden-visa-2026",
			tagSlug: ["greece"],
			tags: ["blog.tags.greece"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.greeceGoldenChanges.createdAt",
				timeToRead: "blog.articles.greeceGoldenChanges.timeToRead",
			},
		},
		{
			title: "blog.articles.maltaPermanentBenefits.title",
			leadsTo: "/blog/articles/malta-prp-benefits",
			tagSlug: ["malta"],
			tags: ["blog.tags.malta"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.maltaPermanentBenefits.createdAt",
				timeToRead: "blog.articles.maltaPermanentBenefits.timeToRead",
			},
		},
		{
			title: "blog.articles.armeniaBankingCompliance.title",
			leadsTo: "/blog/articles/armenia-bank-compliance",
			tagSlug: ["armenia"],
			tags: ["blog.tags.armenia"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.armeniaBankingCompliance.createdAt",
				timeToRead: "blog.articles.armeniaBankingCompliance.timeToRead",
			},
		},
		{
			title: "blog.articles.passportPowerIndex.title",
			leadsTo: "/blog/articles/passport-power-2026",
			tagSlug: ["citizenship"],
			tags: ["blog.tags.citizenship"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.passportPowerIndex.createdAt",
				timeToRead: "blog.articles.passportPowerIndex.timeToRead",
			},
		},
		{
			title: "blog.articles.cryptoTaxesEurope.title",
			leadsTo: "/blog/articles/crypto-taxes-eu",
			tagSlug: ["taxes"],
			tags: ["blog.tags.taxes"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.cryptoTaxesEurope.createdAt",
				timeToRead: "blog.articles.cryptoTaxesEurope.timeToRead",
			},
		},
		{
			title: "blog.articles.euDualCitizenship.title",
			leadsTo: "/blog/articles/eu-dual-citizenship",
			tagSlug: ["citizenship"],
			tags: ["blog.tags.citizenship"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.euDualCitizenship.createdAt",
				timeToRead: "blog.articles.euDualCitizenship.timeToRead",
			},
		},
		{
			title: "blog.articles.caribbeanPassports2026.title",
			leadsTo: "/blog/articles/caribbean-changes",
			tagSlug: ["citizenship"],
			tags: ["blog.tags.citizenship"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.caribbeanPassports2026.createdAt",
				timeToRead: "blog.articles.caribbeanPassports2026.timeToRead",
			},
		},
		{
			title: "blog.articles.exitTaxEurope.title",
			leadsTo: "/blog/articles/exit-tax-eu",
			tagSlug: ["taxes"],
			tags: ["blog.tags.taxes"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.exitTaxEurope.createdAt",
				timeToRead: "blog.articles.exitTaxEurope.timeToRead",
			},
		},
		{
			title: "blog.articles.schengenRules2026.title",
			leadsTo: "/blog/articles/schengen-new-rules",
			tagSlug: ["startup"],
			tags: ["blog.tags.startup"],
			imgSrc: image,
			cardDetails: {
				createdAt: "blog.articles.schengenRules2026.createdAt",
				timeToRead: "blog.articles.schengenRules2026.timeToRead",
			},
		},
	],
};
