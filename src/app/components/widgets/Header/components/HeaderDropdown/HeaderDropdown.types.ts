interface CountryGround {
	name: string;
	slug: string;
}

interface CountryOption {
	country: string;
	slug: string;
	reasons: CountryGround[];
}

export interface HeaderDropdownProps {
	name: string;
	titlePrefix: string;
	countries: CountryOption[];
}
