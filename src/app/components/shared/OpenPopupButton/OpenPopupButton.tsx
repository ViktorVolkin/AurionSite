"use client";
import { useState } from "react";
import styles from "./OpenPopupButton.module.css";
import { Popup } from "../Popup";
import clsx from "clsx";
import { OpenPopupButtonProps } from "./OpenPopupButton.types";
import CorporateLoginForm from "../../widgets/ConsultationForm";
import CustomButton from "../CustomButton";
import { CorporationLoginContent } from "../lib/constants";
export default function OpenPopupButton({
	buttonAttributes,
	className,
	text,
	iconAfter,
	iconBefore,
}: OpenPopupButtonProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<CustomButton
				{...buttonAttributes}
				onClick={() => setIsOpen(true)}
				text={text}
				className={clsx(styles.button, className)}
				iconAfter={iconAfter}
				iconBefore={iconBefore}
			/>
			<Popup
				isOpen={isOpen}
				onClose={() => {
					setIsOpen(false);
				}}>
				<CorporateLoginForm {...CorporationLoginContent} />
			</Popup>
		</>
	);
}
