import { Inter, Cormorant_Garamond } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { routing } from "@/i18n/routing";
import Providers from "../Providers";
import { getMessages, setRequestLocale } from "next-intl/server";
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

	const titles: Record<string, string> = {
		en: "Landostat - Modern land management",
		ru: "Landostat - Современное управление землей",
	};

	const descriptions: Record<string, string> = {
		en: "Landostat is a modern land management system that helps you manage your land efficiently and effectively.",
		ru: "Landostat - это современная система управления землей, которая помогает вам эффективно управлять своей землей.",
	};

	return {
		title: titles[locale] || titles.en,
		description: descriptions[locale] || descriptions.en,
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

	return (
		<html
			lang={locale}
			className={clsx(inter.variable, cormorantGaramond.variable)}>
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
