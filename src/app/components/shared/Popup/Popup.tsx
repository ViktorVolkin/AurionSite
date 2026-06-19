"use client";

import styles from "./Popup.module.css";
import { PopupProps } from "./Popup.types";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import clsx from "clsx";
import CloseIcon from "../svg/CloseIcon";

export function Popup({ children, isOpen, onClose, className }: PopupProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	const [isAnimatingClose, setIsAnimatingClose] = useState(false);

	const lenis = useLenis();

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		let fallbackTimeout: NodeJS.Timeout;

		if (isOpen) {
			setIsAnimatingClose(false);
			if (!dialog.open) {
				dialog.showModal();
			}
			if (lenis) lenis.stop();
			document.body.style.overflow = "hidden";
			contentRef.current?.focus();
		} else if (dialog.open) {
			setIsAnimatingClose(true);

			const finalizeClose = () => {
				if (dialog.open) {
					dialog.close();
				}
				setIsAnimatingClose(false);
				if (lenis) lenis.start();
				document.body.style.overflow = "";
				clearTimeout(fallbackTimeout);
			};

			const handleTransitionEnd = (e: TransitionEvent) => {
				if (e.target === dialog || e.target === contentRef.current) {
					finalizeClose();
				}
			};

			dialog.addEventListener("transitionend", handleTransitionEnd, {
				once: true,
			});

			fallbackTimeout = setTimeout(() => {
				finalizeClose();
				dialog.removeEventListener("transitionend", handleTransitionEnd);
			}, 500);

			return () => {
				dialog.removeEventListener("transitionend", handleTransitionEnd);
				clearTimeout(fallbackTimeout);
			};
		}
	}, [isOpen, lenis]);

	const initiateClose = () => {
		if (!isAnimatingClose) {
			onClose();
		}
	};

	const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
		if (e.target === dialogRef.current) {
			initiateClose();
		}
	};

	const handleCancel = (e: React.SyntheticEvent<HTMLDialogElement>) => {
		e.preventDefault();
		initiateClose();
	};

	const animationClass =
		isOpen && !isAnimatingClose
			? styles.open
			: isAnimatingClose
				? styles.closing
				: "";

	return (
		<dialog
			ref={dialogRef}
			className={clsx(styles.dialog, animationClass, className)}
			onCancel={handleCancel}
			onClick={handleBackdropClick}>
			<div
				ref={contentRef}
				tabIndex={-1}
				className={styles.content}
				onClick={(e) => e.stopPropagation()}
				data-lenis-prevent>
				{children}
				<button
					onClick={initiateClose}
					className={styles.closeButton}>
					<CloseIcon />
				</button>
			</div>
		</dialog>
	);
}
