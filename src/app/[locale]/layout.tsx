import { Inter, Cormorant_Garamond } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { routing } from "@/i18n/routing";
import Providers from "../Providers";
import {
	getMessages,
	getTranslations,
	setRequestLocale,
} from "next-intl/server";
import Footer from "../components/widgets/Footer";
import { HEADER, FOOTER } from "../components/shared/lib/constants";
import Header from "../components/widgets/Header";

const inter = Inter({
	variable: "--inter",
	subsets: ["latin", "cyrillic"],
	style: "normal",
});

const cormorantGaramond = Cormorant_Garamond({
	subsets: ["cyrillic", "latin"],
	variable: "--cormorant",
	style: "normal",
	weight: ["400", "600", "700"],
});

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }> | { locale: string };
}) {
	const resolvedParams = await params;
	const locale = resolvedParams?.locale || routing.defaultLocale;

	const t = await getTranslations({ locale, namespace: "Metadata" });

	const baseUrl = (
		process.env.NEXT_PUBLIC_DOMAIN || "https://aurion.com"
	).replace(/\/$/, "");
	const ogImage = locale == "ru" ? "og-image-ru.png" : "og-image-en.png";
	return {
		title: t("title"),
		description: t("description"),
		metadataBase: new URL(baseUrl),

		openGraph: {
			title: t("title"),
			description: t("description"),
			url: `${baseUrl}/${locale}`,
			siteName: "Aurion",
			locale: locale === "ru" ? "ru_RU" : "en_US",
			type: "website",
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: t("ogImage"),
				},
			],
		},

		twitter: {
			card: "summary_large_image",
			title: t("title"),
			description: t("description"),
			images: [ogImage],
		},

		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
	};
}

export const viewport = {
	width: "device-width",
	initialScale: 1,
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	setRequestLocale(locale);

	const messages = await getMessages();

	const tJsonLd = await getTranslations({ locale, namespace: "SEO.jsonLd" });

	const baseUrlStr = (
		process.env.NEXT_PUBLIC_DOMAIN || "https://aurion.com"
	).replace(/\/$/, "");

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		name: tJsonLd("name"),
		legalName: tJsonLd("legalName"),
		description: tJsonLd("description"),
		url: `${baseUrlStr}/${locale}`,
		logo: `${baseUrlStr}/logo.png`,
		foundingDate: tJsonLd("foundingDate"),
		email: "info@aurion.club",
		priceRange: "$$$",
		address: {
			"@type": "PostalAddress",
			addressCountry: "ME",
			addressLocality: "Budva",
		},
		sameAs: ["https://t.me/aurion_channel"],
	};

	return (
		<html
			lang={locale}
			className={clsx(inter.variable, cormorantGaramond.variable)}>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
			</head>
			<body>
				<Providers messages={messages}>
					<Header {...HEADER} />
					{children}
					<Footer {...FOOTER} />
				</Providers>
			</body>
		</html>
	);
}
