import { setRequestLocale } from "next-intl/server";
import MainPage from "../components/pages/MainPage";

export default async function Home({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	return <MainPage />;
}
