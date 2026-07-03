"use client";

import { useTranslations } from "next-intl";
import clsx from "clsx";
import styles from "./Tab.module.css";

interface TabComponentProps {
	text: string;
	reason: string;
	className?: string;
	isActive: boolean;
	onTabClick: (reason: string) => void;
}

export default function Tab({
	text,
	className,
	reason,
	isActive,
	onTabClick,
}: TabComponentProps) {
	const t = useTranslations();

	return (
		<button
			type="button"
			onClick={() => onTabClick(reason)}
			className={clsx(styles.btn, className, {
				[styles.btn_active]: isActive,
			})}>
			{t(text)}
		</button>
	);
}
