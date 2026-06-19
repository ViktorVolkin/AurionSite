"use client";

import styles from "./HeaderPartial.module.css";
import { HeaderProps } from "../Header.types";
import { ScrollViewButton } from "@/app/components/shared/ScrollViewButton";
import LanguageSwitcher from "@/app/components/shared/LanguageSwitcher";
import OpenPopupButton from "@/app/components/shared/OpenPopupButton";
import clsx from "clsx";
import OpenHeaderPhone from "@/app/components/shared/OpenHeaderPhone";
import Logo from "@/app/components/shared/Logo";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
export default function HeaderPartial({
	blocks,
	openPopup,
	isMoved,
}: HeaderProps) {
	const t = useTranslations();
	return (
		<header
			className={clsx(styles.header, { [styles.header__moved]: isMoved })}>
			<Logo />

			<ul className={styles.block__list}>
				{blocks.map((block) => {
					return (
						<li
							key={block.id}
							style={{ position: "relative", listStyle: "none" }}>
							<Link
								href={block.id}
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
					<ul className={styles.block__list_phone}>
						{blocks.map((block) => (
							<li key={block.id}>
								<ScrollViewButton
									text={block.text}
									href={block.id}
									className={styles.block__list_item_phone}
								/>
							</li>
						))}
					</ul>
				</OpenHeaderPhone>
			</div>
		</header>
	);
}
