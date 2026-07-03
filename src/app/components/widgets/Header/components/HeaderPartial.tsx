"use client";

import { useState } from "react";
import styles from "./HeaderPartial.module.css";
import { HeaderProps } from "../Header.types";
import LanguageSwitcher from "@/app/components/shared/LanguageSwitcher";
import OpenPopupButton from "@/app/components/shared/OpenPopupButton";
import clsx from "clsx";
import OpenHeaderPhone from "@/app/components/shared/OpenHeaderPhone";
import Logo from "@/app/components/shared/Logo";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
	HeaderDropdownContent,
	HeaderPartialSEO,
} from "@/app/components/shared/lib/constants";
import HeaderDropdown from "./HeaderDropdown";
import ChevronIcon from "@/app/components/shared/svg/ChevronIcon";

function CountryAccordionItem({
	countryItem,
	t,
}: {
	countryItem: any;
	t: any;
}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<li className={styles.countryLiItem}>
			<button
				type="button"
				className={clsx(styles.mobCountryLink, styles.mobCountryBtn)}
				onClick={(e) => {
					e.stopPropagation();
					setIsOpen(!isOpen);
				}}>
				<span>{t(countryItem.country)}</span>
				<ChevronIcon
					isOpen={isOpen}
					className={styles.subAccordionChevron}
				/>
			</button>

			<div
				className={clsx(
					styles.programsGridContainer,
					isOpen && styles.expanded,
				)}>
				<ul className={styles.mobProgramsList}>
					{countryItem.reasons?.map((reason: any) => (
						<li
							key={reason.slug}
							className={styles.mobProgramLi}>
							<Link
								href={`/services/${countryItem.slug}/${reason.slug}`}
								className={styles.mobProgramLink}>
								{t(reason.name)}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</li>
	);
}

export default function HeaderPartial({
	blocks,
	openPopup,
	isMoved,
}: HeaderProps) {
	const t = useTranslations();
	const [isMobServicesOpen, setIsMobServicesOpen] = useState(false);

	return (
		<header
			className={clsx(styles.header, { [styles.header__moved]: isMoved })}
			role="banner">
			<nav
				className={styles.navContainer}
				aria-label={t(HeaderPartialSEO.nav)}>
				<Logo />

				<ul className={styles.block__list}>
					<li>
						<HeaderDropdown {...HeaderDropdownContent} />
					</li>
					{blocks.map((block) => {
						const safeHref = `/${block.id.replace("#", "")}`;
						return (
							<li
								key={block.id}
								style={{ position: "relative" }}>
								<Link
									href={safeHref}
									className={styles.block__list_item}>
									{t(block.text)}
								</Link>
							</li>
						);
					})}
				</ul>

				<div className={styles.settings}>
					<LanguageSwitcher />

					<OpenPopupButton
						{...openPopup}
						className={styles.btn}
					/>

					<OpenHeaderPhone className={styles.phone}>
						<div className={styles.mobileScrollContainer}>
							<ul
								className={styles.block__list_phone}
								role="menu">
								{blocks.map((block) => {
									const safeHref = `/#${block.id.replace("#", "")}`;
									return (
										<li
											key={block.id}
											role="none"
											className={styles.mobMenuLi}>
											<Link
												href={safeHref}
												className={styles.block__list_item_phone}
												role="menuitem">
												{t(block.text)}
											</Link>
										</li>
									);
								})}

								<li
									role="none"
									className={clsx(styles.mobMenuLi, styles.accordionWrapper)}>
									<button
										type="button"
										className={styles.block__list_item_phone_btn}
										onClick={(e) => {
											e.stopPropagation();
											setIsMobServicesOpen(!isMobServicesOpen);
										}}
										aria-expanded={isMobServicesOpen}
										role="menuitem">
										<span className={styles.block__list_item_phone_btn}>
											{t("widgets.header.headerDropdown.title")}
										</span>
										<ChevronIcon
											isOpen={isMobServicesOpen}
											className={styles.accordionChevron}
										/>
									</button>

									<div
										className={clsx(
											styles.countriesGridContainer,
											isMobServicesOpen && styles.expanded,
										)}>
										<ul className={styles.mobCountriesList}>
											{HeaderDropdownContent.countries.map((countryItem) => {
												return (
													<CountryAccordionItem
														key={countryItem.slug}
														countryItem={countryItem}
														t={t}
													/>
												);
											})}
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</OpenHeaderPhone>
				</div>
			</nav>
		</header>
	);
}
