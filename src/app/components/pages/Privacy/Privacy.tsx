import { getTranslations } from "next-intl/server";
import styles from "./Privacy.module.css";

export default async function PrivacyPage() {
	const t = await getTranslations("Privacy");

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>{t("title")}</h1>
			<p className={styles.subtitle}>{t("subtitle")}</p>

			<p className={styles.description}>{t("description")}</p>

			<div className={styles.content}>
				<section className={styles.section}>
					<h2>{t("sections.data.title")}</h2>
					<p>{t("sections.data.text")}</p>
				</section>

				<section className={styles.section}>
					<h2>{t("sections.purpose.title")}</h2>
					<p>{t("sections.purpose.text")}</p>
				</section>

				<section className={styles.section}>
					<h2>{t("sections.transit.title")}</h2>
					<p>{t("sections.transit.text")}</p>
				</section>

				<section className={styles.section}>
					<h2>{t("sections.rights.title")}</h2>
					<p>{t("sections.rights.text")}</p>
				</section>

				<section className={styles.contacts}>
					<h2>{t("sections.contacts.title")}</h2>
					<p>{t("sections.contacts.text")}</p>
					<div className={styles.contactsBlock}>
						<p>
							<strong>Email:</strong> aurionrelocation@gmail.com
						</p>
						<p>
							<strong>Location:</strong> Budva, Montenegro
						</p>
					</div>
				</section>
			</div>
		</main>
	);
}
