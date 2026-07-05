import { ReactNode } from "react";

export interface OpenPopupButtonProps {
	text?: string;
	className?: string;
	buttonAttributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
	children?: React.ReactNode;
	iconBefore?: ReactNode;
	iconAfter?: ReactNode;
}
