import { ReactNode } from "react";

interface SwiperItem {
	key: string;
	node: ReactNode;
}

export interface CustomSwiperProps {
	items: SwiperItem[];
	withButtons?: boolean;
	spaceBetween?: number;
	slideClassName?: string;
}
