import { ComponentPropsWithoutRef } from "react";
import { CustomButtonProps } from "../CustomButton/CustomButton.types";

export type ScrollViewButtonPropsBase = ComponentPropsWithoutRef<"button"> & {
	href: string;
	className?: string;
};

export interface ScrollViewCustomButton extends Omit<
	ScrollViewButtonPropsBase,
	"children"
> {
	button: CustomButtonProps;
	text?: never;
}

export interface ScrollViewButtonPropsDefault extends Omit<
	ScrollViewButtonPropsBase,
	"children"
> {
	button?: never;
	text: string;
}

export type ScrollViewButtonProps =
	| ScrollViewButtonPropsDefault
	| ScrollViewCustomButton;
