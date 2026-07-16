import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { routing } from "@/i18n/routing";

type Params = Promise<{ locale: string; slug: string }>;

export async function generateStaticParams() {
	const locales = routing.locales;
	const params: { locale: string; slug: string }[] = [];

	locales.forEach((locale) => {
		const dirPath = path.join(process.cwd(), "src/content/blog", locale);

		if (fs.existsSync(dirPath)) {
			const files = fs.readdirSync(dirPath);
			files.forEach((file) => {
				if (file.endsWith(".mdx")) {
					params.push({
						locale,
						slug: file.replace(".mdx", ""),
					});
				}
			});
		}
	});

	return params;
}

export default async function ArticlePage({ params }: { params: Params }) {
	const { locale, slug } = await params;

	try {
		const { default: PostContent } = await import(
			`@/content/blog/${locale}/${slug}.mdx`
		);

		return <PostContent />;
	} catch (error) {
		notFound();
	}
}
