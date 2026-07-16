import { TariffCardProps } from "../../shared/TariffCard/TariffCard.types";

export interface TariffsProps {
	eyebrow: string;
	title: string;
	additionalText: string;
	cards: TariffCardProps[];
	PS?: string;
}
