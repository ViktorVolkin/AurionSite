export interface CountryOption {
	value: string;
	translationKey: string;
	defaultText: string;
}

export interface MethodOption {
	value: string;
	label: string;
	translationKey?: string;
	defaultText?: string;
	placeholderKey: string;
	defaultPlaceholder: string;
}

export interface ConsultationFormProps {
	className?: string;
	countries: CountryOption[];
	methods: MethodOption[];
	defaultCountry?: string;
	defaultMethod?: string;
	translationKeys: {
		nameLabel: string;
		namePlaceholder: string;
		countryLabel: string;
		methodLabel: string;
		contactLabel: string;
		submitButton: string;
		submitButtonLoading: string;
		privacyRu: string;
		privacyEn: string;
	};
}
