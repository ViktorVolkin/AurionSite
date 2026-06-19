import { getTranslations } from "next-intl/server";
import styles from "./Footer.module.css";
import { FooterProps, BlockProps } from "./Footer.types";
import { Link } from "@/i18n/navigation";
import clsx from "clsx";
import LanguageSwitcher from "../../shared/LanguageSwitcher";
import Logo from "../../shared/Logo";
export default async function Footer({
	company,
	description,
	methodology,
	product,
	sources,
	email,
}: FooterProps) {
	const t = await getTranslations("widgets.footer");

	const renderBlock = (block: BlockProps) => {
		if (!block || !block.links || block.links.length === 0) return null;

		return (
			<div className={styles.block}>
				<h5 className={styles.block__title}>{t(block.title)}</h5>
				<ul className={styles.link__list}>
					{block.links.map((link) => (
						<li
							key={link.text}
							className={clsx({
								[styles.desktopOnly]: link.desktopOnly,
							})}>
							<Link href={link.href}>{t(link.text)}</Link>
						</li>
					))}
				</ul>
			</div>
		);
	};

	return (
		<footer className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.top}>
					<div className={styles.header}>
						<Logo />
						<p className={styles.description}>{t(description)}</p>
					</div>

					<nav className={styles.navigation}>
						{renderBlock(product)}
						{renderBlock(methodology)}
						{renderBlock(sources)}
						{renderBlock(company)}
					</nav>

					<div className={styles.language__container}>
						<p className={styles.language__text}>{t("bottom.language")}</p>
						<LanguageSwitcher className={styles.language__switcher} />
					</div>
				</div>
				<div className={styles.bottom}>
					<span className={styles.bottom__text}>{t("bottom.copyright")}</span>
					<span className={styles.bottom__text}>{t("bottom.privacy")}</span>
					<span className={styles.bottom__text}>{t("bottom.terms")}</span>
					{email && (
						<span className={styles.bottom__text}>
							<a href={`mailto:${email}`}>{email}</a>
						</span>
					)}
				</div>
			</div>
		</footer>
	);
}
