import BlogPage from "@/app/components/pages/BlogPage";
import { setRequestLocale } from "next-intl/server";

export default async function Page({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return <BlogPage />;
}
