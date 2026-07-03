export interface TabProps {
	text: string;
	reason: string;
	className?: string;
	isActive?: boolean;
	onTabClick?: (reason: string) => void;
}
