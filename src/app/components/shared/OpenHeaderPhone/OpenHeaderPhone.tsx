"use client";
import { useId, useState } from "react";
import styles from "./OpenHeaderPhone.module.css";
import { OpenHeaderPhoneProps } from "./OpenHeaderPhone.types";
import BurgerIconSvg from "../svg/BurgerIconSvg";
import clsx from "clsx";
import { Popup } from "../Popup";
import { useTranslations } from "next-intl";
import { OpenHeaderPhoneSEO } from "../lib/constants";
export default function OpenHeaderPhone({
	className,
	children,
}: OpenHeaderPhoneProps) {
	const t = useTranslations();
	const [isOpened, setOpen] = useState<boolean>(false);
	const menuId = useId();
	return (
		<>
			<button
				className={clsx(styles.burgerIcon, className)}
				onClick={() => setOpen(true)}
				aria-expanded={isOpened}
				aria-label={
					isOpened ? t(OpenHeaderPhoneSEO.close) : t(OpenHeaderPhoneSEO.open)
				}
				type="button"
				aria-controls={menuId}>
				<BurgerIconSvg />
			</button>
			<Popup
				isOpen={isOpened}
				onClose={() => setOpen(false)}>
				<div
					onClick={() => setOpen(false)}
					className={styles.inherit}
					id={menuId}>
					{children}
				</div>
			</Popup>
		</>
	);
}
