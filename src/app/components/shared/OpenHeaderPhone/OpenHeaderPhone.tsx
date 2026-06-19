"use client";
import { useState } from "react";
import styles from "./OpenHeaderPhone.module.css";
import { OpenHeaderPhoneProps } from "./OpenHeaderPhone.types";
import BurgerIconSvg from "../svg/BurgerIconSvg";
import clsx from "clsx";
import { Popup } from "../Popup";

export default function OpenHeaderPhone({
	className,
	children,
}: OpenHeaderPhoneProps) {
	const [isOpened, setOpen] = useState<boolean>(false);
	return (
		<>
			<div
				className={clsx(styles.burgerIcon, className)}
				onClick={() => setOpen(true)}>
				<BurgerIconSvg />
			</div>
			<Popup
				isOpen={isOpened}
				onClose={() => setOpen(false)}>
				<div
					onClick={() => setOpen(false)}
					className={styles.inherit}>
					{children}
				</div>
			</Popup>
		</>
	);
}
