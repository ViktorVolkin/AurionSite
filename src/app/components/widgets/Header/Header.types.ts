import { OpenPopupButtonProps } from "../../shared/OpenPopupButton/OpenPopupButton.types";

export interface HeaderProps {
	blocks: { text: string; id: string }[];
	openPopup: OpenPopupButtonProps;
	isMoved?: boolean;
}
