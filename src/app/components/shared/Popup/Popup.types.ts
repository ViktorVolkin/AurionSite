export interface PopupProps {
	children?: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
	className?: string;
}
