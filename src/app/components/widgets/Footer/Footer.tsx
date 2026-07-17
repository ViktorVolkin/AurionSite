import { getTranslations } from "next-intl/server";
import styles from "./Footer.module.css";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "../../shared/LanguageSwitcher";
import Logo from "../../shared/Logo";

interface FooterProps {
	email: string;
}

export default async function Footer({ email }: FooterProps) {
	const t = await getTranslations("widgets.footer");

	return (
		<footer className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.leftColumn}>
					<div className={styles.header}>
						<Logo />
						<p className={styles.description}>{t("description")}</p>
					</div>
					<div className={styles.language__container}>
						<LanguageSwitcher className={styles.language__switcher} />
					</div>
				</div>

				<div className={styles.rightColumn}>
					<span className={styles.legalText}>{t("bottom.copyright")}</span>
					<Link
						href="/privacy"
						className={styles.legalLink}>
						{t("bottom.privacy")}
					</Link>
					{email && (
						<a
							href={`mailto:${email}`}
							className={styles.legalLink}>
							{email}
						</a>
					)}
				</div>
			</div>
		</footer>
	);
}
