"use client";
import styles from "./BlogCards.module.css";
import { useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import { BlogCardsProps } from "./BlogCards.types";
import { BLOG_FILTERS } from "@/app/components/shared/lib/constants";
import BlogCard from "../BlogCard/BlogCard";
const PAGE_SIZE = 9;

export default function BlogCards({ title, cards }: BlogCardsProps) {
	const t = useTranslations();
	const router = useRouter();
	const searchParams = useSearchParams();

	const country = searchParams.get("country") ?? "all";
	const page = Number(searchParams.get("page") ?? 1);

	const filtered = useMemo(
		() => cards.filter((c) => country === "all" || c.tagSlug === country),
		[cards, country],
	);

	const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
	const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

	const setFilter = (value: string) => {
		const params = new URLSearchParams();
		params.set("country", value);
		params.set("page", "1");
		router.replace(`?${params.toString()}`, { scroll: false });
	};

	const setPage = (value: number) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("page", String(value));
		router.replace(`?${params.toString()}`, { scroll: false });
	};

	return (
		<section className={styles.wrapper}>
			<h1 className={styles.title}>{t(title)}</h1>

			<div className={styles.filters}>
				{BLOG_FILTERS.map((f) => (
					<button
						key={f}
						onClick={() => setFilter(f)}
						data-active={country === f}>
						{t(`blog.filters.${f}`)}
					</button>
				))}
			</div>

			<ul className={styles.list}>
				{paginated.map((card) => (
					<li key={card.leadsTo}>
						<BlogCard {...card} />
					</li>
				))}
			</ul>

			{totalPages > 1 && (
				<div className={styles.pagination}>
					{Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
						<button
							key={p}
							onClick={() => setPage(p)}
							data-active={p === page}>
							{p}
						</button>
					))}
				</div>
			)}
		</section>
	);
}
