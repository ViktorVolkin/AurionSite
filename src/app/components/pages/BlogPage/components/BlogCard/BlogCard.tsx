"use client";
import styles from "./BlogCard.module.css";
import { BlogCardProps } from "./BlogCard.types";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Tag from "@/app/components/shared/Tag";
import CardDetails from "@/app/components/shared/CardDetails/CardDetails";
import { useTranslations } from "next-intl";
export default function BlogCard({
	imgSrc,
	title,
	leadsTo,
	tag,
	cardDetails,
}: BlogCardProps) {
	const t = useTranslations();
	return (
		<article className={styles.wrapper}>
			{imgSrc && (
				<Link
					href={leadsTo}
					className={styles.image__container}>
					<Image
						src={imgSrc}
						alt={t(title)}
						fill
						className={styles.image}
					/>
				</Link>
			)}
			<div className={styles.data__container}>
				<Tag>{t(tag)}</Tag>
				<Link
					href={leadsTo}
					className={styles.link}>
					<span className={styles.title}>{t(title)}</span>
				</Link>
				<CardDetails
					createdAt={t(cardDetails.createdAt)}
					timeToRead={t(cardDetails.timeToRead)}
				/>
			</div>
		</article>
	);
}
