"use client";

import clsx from "clsx";
import styles from "./ScrollViewButton.module.css";
import { ScrollViewButtonProps } from "./ScrollViewButton.types";
import { useCallback } from "react";
import CustomButton from "../CustomButton";
import { useTranslations } from "next-intl";

export function ScrollViewButton(props: ScrollViewButtonProps) {
	const { href, className } = props;
	const t = useTranslations();

	const handleScroll = useCallback(
		(e: React.MouseEvent) => {
			e.preventDefault();

			const targetId = href.startsWith("#") ? href.slice(1) : href;
			const el = document.getElementById(targetId);

			if (el) {
				el.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		},
		[href],
	);

	if ("button" in props && props.button) {
		const { button, ...rest } = props;
		return (
			<CustomButton
				variant="transparent"
				{...button}
				className={clsx(className, button.className)}
				onClick={handleScroll}
				{...(rest as any)}
			/>
		);
	}

	const { text, ...rest } = props;
	return (
		<button
			type="button"
			className={clsx(styles.button, className)}
			onClick={handleScroll}
			{...rest}>
			{t(text)}
		</button>
	);
}
