import { ComponentPropsWithRef, ReactNode, RefObject } from "react";
import { Link } from "@/i18n/navigation";

interface BaseButtonProps {
	text?: string;
	className?: string;
	iconBefore?: ReactNode;
	iconAfter?: ReactNode;
	shouldTranslate?: boolean;
	variant?: "highlighted" | "transparent";
	iconContainerClassName?: string;
	innerRef?:
		| RefObject<HTMLButtonElement | HTMLAnchorElement | null>
		| ((node: any) => void);
}

export interface ButtonProps
	extends
		BaseButtonProps,
		Omit<ComponentPropsWithRef<"button">, keyof BaseButtonProps> {
	href?: never;
}

export interface LinkProps
	extends
		BaseButtonProps,
		Omit<ComponentPropsWithRef<typeof Link>, keyof BaseButtonProps | "href"> {
	href: string;
}

export type CustomButtonProps = ButtonProps | LinkProps;
