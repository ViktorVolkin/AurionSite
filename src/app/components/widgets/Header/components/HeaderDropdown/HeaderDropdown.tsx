"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import styles from "./HeaderDropdown.module.css";
import { HeaderDropdownProps } from "./HeaderDropdown.types";
import ArrowRightIcon from "@/app/components/shared/svg/ArrowRightIcon";
import ChevronIcon from "@/app/components/shared/svg/ChevronIcon";

export default function HeaderDropdown({
	countries,
	name,
	titlePrefix,
}: HeaderDropdownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [activeCountryIndex, setActiveCountryIndex] = useState(0);
	const t = useTranslations();

	const activeCountry = countries[activeCountryIndex];

	return (
		<div
			className={styles.wrapper}
			onMouseLeave={() => setIsOpen(false)}>
			<button
				type="button"
				className={styles.navLink}
				onClick={() => setIsOpen(!isOpen)}
				onMouseEnter={() => setIsOpen(true)}>
				{t(name)}{" "}
				<span className={styles.dot}>
					<ChevronIcon isOpen={isOpen} />
				</span>
			</button>

			{isOpen && (
				<div
					className={styles.dropdownOverlay}
					data-lenis-prevent>
					<div className={styles.dropdownContainer}>
						<ul className={styles.countriesList}>
							{countries.map((item, index) => (
								<li key={item.slug}>
									<button
										type="button"
										className={clsx(styles.countryBtn, {
											[styles.activeCountry]: index === activeCountryIndex,
										})}
										onClick={() => setActiveCountryIndex(index)}>
										{t(item.country)}
									</button>
								</li>
							))}
						</ul>

						<div className={styles.reasonsContent}>
							<h3 className={styles.reasonsTitle}>
								{t(titlePrefix)} {t(activeCountry.country)}
							</h3>
							<ul className={styles.reasonsList}>
								{activeCountry.reasons.map((reason) => (
									<li key={reason.slug}>
										<Link
											href={`/services/${activeCountry.slug}/${reason.slug}`}
											onClick={() => setIsOpen(false)}
											className={styles.reasonLink}>
											{t(reason.name)}
											<span className={styles.arrow}>
												<ArrowRightIcon />
											</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
