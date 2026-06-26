"use client";

import { useState, useRef } from "react";
import styles from "./OpenPopupButton.module.css";
import { Popup } from "../Popup";
import clsx from "clsx";
import { OpenPopupButtonProps } from "./OpenPopupButton.types";
import CorporateLoginForm from "../../widgets/ConsultationForm";
import CustomButton from "../CustomButton";
import { ConsultationFormContent } from "../lib/constants";

export default function OpenPopupButton({
	buttonAttributes,
	className,
	text,
	iconAfter,
	iconBefore,
}: OpenPopupButtonProps) {
	const [isOpen, setIsOpen] = useState(false);

	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);

		setTimeout(() => {
			buttonRef.current?.focus();
		}, 50);
	};

	return (
		<>
			<CustomButton
				{...buttonAttributes}
				innerRef={buttonRef}
				onClick={handleOpen}
				text={text}
				className={clsx(styles.button, className)}
				iconAfter={iconAfter}
				iconBefore={iconBefore}
				aria-haspopup="dialog"
				aria-expanded={isOpen}
			/>

			<Popup
				isOpen={isOpen}
				onClose={handleClose}>
				<CorporateLoginForm {...ConsultationFormContent} />
			</Popup>
		</>
	);
}
