"use client";

import { useTranslations } from "next-intl";
import styles from "./CustomButton.module.css";
import {
	CustomButtonProps,
	ButtonProps,
	LinkProps,
} from "./CustomButton.types";
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
	innerRef,
	type,
	...rest
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
			{text && t(text)}
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

	if (href) {
		const linkProps = rest as Omit<LinkProps, "href">;

		return (
			<Link
				className={sharedClass}
				href={href}
				ref={innerRef as any}
				{...(linkProps as any)}>
				{renderContent()}
			</Link>
		);
	}

	const buttonProps = rest as ButtonProps;

	return (
		<button
			type={(type as "button" | "submit" | "reset") || "button"}
			className={sharedClass}
			onClick={onClick as React.MouseEventHandler}
			ref={innerRef as any}
			{...(buttonProps as any)}>
			{renderContent()}
		</button>
	);
}
