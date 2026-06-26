import { SERVICE_PAGES } from "@/app/components/shared/lib/constants";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export function generateStaticParams() {
	return SERVICE_PAGES.flatMap((item) =>
		routing.locales.map((locale) => ({
			locale: locale,
			slug: item,
		})),
	);
}

interface Props {
	children: React.ReactNode;
	params: Promise<{ slug: string }>;
}

export default async function Layout({ children, params }: Props) {
	const { slug } = await params;
	if (!SERVICE_PAGES.includes(slug)) {
		return notFound();
	}
	return <>{children}</>;
}
