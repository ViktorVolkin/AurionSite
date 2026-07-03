import ServicePage from "@/app/components/pages/ServicePage";
import { setRequestLocale } from "next-intl/server";

export default async function ServiceGroundPage({
	params,
}: {
	params: Promise<{ locale: string; country: string; ground: string }>;
}) {
	const { locale, country } = await params;
	setRequestLocale(locale);

	return <ServicePage params={params} />;
}
