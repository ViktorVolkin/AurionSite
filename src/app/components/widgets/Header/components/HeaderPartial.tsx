"use client";

import styles from "./HeaderPartial.module.css";
import { HeaderProps } from "../Header.types";
import LanguageSwitcher from "@/app/components/shared/LanguageSwitcher";
import OpenPopupButton from "@/app/components/shared/OpenPopupButton";
import clsx from "clsx";
import OpenHeaderPhone from "@/app/components/shared/OpenHeaderPhone";
import Logo from "@/app/components/shared/Logo";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { HeaderPartialSEO } from "@/app/components/shared/lib/constants";

export default function HeaderPartial({
	blocks,
	openPopup,
	isMoved,
}: HeaderProps) {
	const t = useTranslations();

	return (
		<header
			className={clsx(styles.header, { [styles.header__moved]: isMoved })}
			role="banner">
			<nav
				className={styles.navContainer}
				aria-label={t(HeaderPartialSEO.nav)}>
				<Logo />

				<ul className={styles.block__list}>
					{blocks.map((block) => {
						const safeHref = `/#${block.id.replace("#", "")}`;

						return (
							<li
								key={block.id}
								style={{ position: "relative", listStyle: "none" }}>
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
						<ul
							className={styles.block__list_phone}
							role="menu">
							{blocks.map((block) => {
								const safeHref = `/#${block.id.replace("#", "")}`;
								return (
									<li
										key={block.id}
										role="none">
										<Link
											href={safeHref}
											className={styles.block__list_item_phone}
											role="menuitem">
											{t(block.text)}
										</Link>
									</li>
								);
							})}
						</ul>
					</OpenHeaderPhone>
				</div>
			</nav>
		</header>
	);
}
