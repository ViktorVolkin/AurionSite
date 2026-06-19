export interface CountryOption {
	value: string;
	translationKey: string;
	defaultText: string;
}

export interface CountrySelectProps {
	options: CountryOption[];
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	className?: string;
	error?: boolean;
}
