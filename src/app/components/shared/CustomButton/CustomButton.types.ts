import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "@/i18n/navigation";

interface BaseButtonProps {
	text: string;
	className?: string;
	iconBefore?: ReactNode;
	iconAfter?: ReactNode;
	variant?: "highlighted" | "transparent";
	iconContainerClassName?: string;
}

export interface ButtonProps
	extends BaseButtonProps, ComponentPropsWithoutRef<"button"> {
	href?: never;
}

export interface LinkProps
	extends BaseButtonProps, ComponentPropsWithoutRef<typeof Link> {
	href: string;
}

export type CustomButtonProps = ButtonProps | LinkProps;
