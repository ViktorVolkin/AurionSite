"use client";

import { useTranslations } from "next-intl";
import styles from "./CustomButton.module.css";
import { CustomButtonProps } from "./CustomButton.types";
import clsx from "clsx";
import { Link } from "@/i18n/navigation";

export default function CustomButton({
	text,
	variant = "highlighted",
	className,
	iconBefore,
	iconAfter,
	onClick,
	href,
	iconContainerClassName,
}: CustomButtonProps) {
	const t = useTranslations();

	const sharedClass = clsx(styles.button, styles[variant], className);

	const renderContent = () => (
		<>
			{iconBefore && (
				<div className={clsx(styles.icon__container, iconContainerClassName)}>
					{iconBefore}
				</div>
			)}
			{t(text)}
			{iconAfter && (
				<div
					className={clsx(
						styles.icon__container,
						styles.icon__after,
						iconContainerClassName,
					)}>
					{iconAfter}
				</div>
			)}
		</>
	);

	return href ? (
		<Link
			className={sharedClass}
			href={href}>
			{renderContent()}
		</Link>
	) : (
		<button
			className={sharedClass}
			onClick={onClick as React.MouseEventHandler}>
			{renderContent()}
		</button>
	);
}
