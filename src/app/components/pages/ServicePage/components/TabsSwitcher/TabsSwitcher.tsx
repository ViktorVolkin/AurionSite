"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Eyebrow from "@/app/components/shared/Eyebrow";
import Tab from "@/app/components/shared/Tab";
import styles from "./TabsSwitcher.module.css";
import { TabsSwitcherProps } from "./TabsSwitcher.types";

export default function TabsSwitcher({
	eyebrow,
	title,
	tabs,
	list,
}: TabsSwitcherProps) {
	const t = useTranslations();

	const [activeReason, setActiveReason] = useState("main-applicant");

	const currentList = list[activeReason] || [];

	return (
		<section className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.head}>
					<Eyebrow eyebrow={eyebrow} />
					<h2 className={styles.title}>{t(title)}</h2>
				</div>

				<div className={styles.tabs_container}>
					<div className={styles.tabs_nav}>
						{tabs.map((tab) => (
							<Tab
								key={tab.reason}
								text={tab.text}
								reason={tab.reason}
								isActive={activeReason === tab.reason}
								onTabClick={setActiveReason}
							/>
						))}
					</div>
				</div>

				<div className={styles.grid}>
					{currentList.map((item, index) => (
						<article
							className={styles.grid_item}
							key={`${activeReason}-${index}`}>
							<div
								className={styles.dc_mark}
								aria-hidden="true">
								<span></span>
							</div>

							<div className={styles.item_content}>
								<h3 className={styles.item_title}>{t(item.title)}</h3>
								<p className={styles.item_text}>{t(item.text)}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
