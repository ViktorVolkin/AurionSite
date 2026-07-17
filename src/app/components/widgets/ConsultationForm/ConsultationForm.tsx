"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import clsx from "clsx";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ru from "react-phone-number-input/locale/ru.json";
import en from "react-phone-number-input/locale/en.json";
import styles from "./ConsultationForm.module.css";
import CustomButton from "../../shared/CustomButton";
import CountrySelect from "../../shared/CountrySelect";
import { ConsultationFormProps } from "./ConsultationForm.types";
import { ConsultFormData, createConsultSchema } from "./ConsultationSchema";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

const mappedLanguages = {
	en: en,
	ru: ru,
};

export default function ConsultationForm({
	className,
	countries,
	methods,
	defaultCountry = "",
	defaultMethod = "telegram",
	translationKeys,
}: ConsultationFormProps) {
	const t = useTranslations("Consultation");
	const consultSchema = createConsultSchema(t);
	const lang = useLocale() as (typeof routing.locales)[number];

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		clearErrors,
		trigger,
		formState: { errors, isSubmitting, isSubmitted },
	} = useForm<ConsultFormData>({
		resolver: zodResolver(consultSchema),
		mode: "onSubmit",
		reValidateMode: "onChange",
		defaultValues: {
			name: "",
			country: defaultCountry,
			method: defaultMethod,
			phoneContact: "",
			messengerContact: "",
			acceptedPolicy: undefined,
		},
	});

	const currentMethod = watch("method");
	const currentPhoneValue = watch("phoneContact");
	const currentCountryValue = watch("country");

	const isPhoneMethod =
		currentMethod === "phone" || currentMethod === "whatsapp";
	const activeMethodConfig = methods.find((m) => m.value === currentMethod);

	const contactPlaceholder = activeMethodConfig
		? t(activeMethodConfig.placeholderKey) ||
			activeMethodConfig.defaultPlaceholder
		: "";

	const handleMethodChange = async (
		e: React.ChangeEvent<HTMLSelectElement>,
	) => {
		const nextMethod = e.target.value;
		const nextIsPhone = nextMethod === "phone" || nextMethod === "whatsapp";

		setValue("method", nextMethod);

		if (nextIsPhone) {
			setValue("messengerContact", "");
			clearErrors("messengerContact");
		} else {
			setValue("phoneContact", "");
			clearErrors("phoneContact");
		}

		if (isSubmitted) {
			await trigger(nextIsPhone ? "phoneContact" : "messengerContact");
		}
	};

	const handleMessengerBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const val = e.target.value.trim();
		if (currentMethod === "telegram" && val && !val.startsWith("@")) {
			setValue("messengerContact", `@${val}`);

			if (isSubmitted) trigger("messengerContact");
		}
	};

	const handleCountryChange = (value: string) => {
		setValue("country", value, { shouldValidate: isSubmitted });
	};

	const contactError = isPhoneMethod
		? errors.phoneContact
		: errors.messengerContact;

	const handleFormSubmit = async (data: ConsultFormData) => {
		const finalContact = isPhoneMethod
			? data.phoneContact
			: data.messengerContact;
		const formData = {
			access_key: process.env.NEXT_PUBLIC_MAIL_KEY,
			subject: `New Consultation Request from ${data.name}`,
			from_name: "Aurion Relocation Website",
			name: data.name,
			country: data.country,
			contact_method: data.method,
			contact_value: finalContact,
		};

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json();
		} catch (error) {
			console.error("Network error while submitting form:", error);
		}
	};

	return (
		<form
			className={clsx(styles.form, className)}
			onSubmit={handleSubmit(handleFormSubmit)}
			noValidate>
			<input
				type="hidden"
				{...register("country")}
			/>

			<div className={styles.fieldGroup}>
				<label htmlFor="name-input">{t(translationKeys.nameLabel)}</label>
				<input
					id="name-input"
					type="text"
					placeholder={t(translationKeys.namePlaceholder)}
					className={clsx(styles.field, { [styles.fieldError]: errors.name })}
					aria-invalid={!!errors.name}
					aria-describedby={errors.name ? "name-error" : undefined}
					{...register("name")}
				/>
				{errors.name && (
					<span
						id="name-error"
						className={styles.errorMessage}
						aria-live="assertive">
						{errors.name.message}
					</span>
				)}
			</div>

			<div className={styles.formRow}>
				<div className={styles.fieldGroup}>
					<label htmlFor="country-select">
						{t(translationKeys.countryLabel)}
					</label>
					<CountrySelect
						options={countries}
						value={currentCountryValue}
						onChange={handleCountryChange}
						error={!!errors.country}
					/>
					{errors.country && (
						<span
							className={styles.errorMessage}
							aria-live="assertive">
							{errors.country.message}
						</span>
					)}
				</div>

				<div className={styles.fieldGroup}>
					<label htmlFor="contact-method">
						{t(translationKeys.methodLabel)}
					</label>
					<div className={styles.selectWrapper}>
						<select
							id="contact-method"
							className={styles.field}
							value={currentMethod}
							onChange={handleMethodChange}>
							{methods.map(({ value, label, translationKey, defaultText }) => (
								<option
									key={value}
									value={value}>
									{translationKey ? t(translationKey) || defaultText : label}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>

			<div className={styles.fieldGroup}>
				<label htmlFor="contact-input">{t(translationKeys.contactLabel)}</label>

				{isPhoneMethod ? (
					<PhoneInput
						key="phone"
						id="contact-input"
						defaultCountry="ME"
						international
						withCountryCallingCode
						labels={mappedLanguages[lang]}
						value={currentPhoneValue}
						onChange={(value) =>
							setValue("phoneContact", value || "", {
								shouldValidate: isSubmitted,
							})
						}
						className={clsx(styles.field, styles.phoneField, {
							[styles.fieldError]: errors.phoneContact,
						})}
						aria-invalid={!!errors.phoneContact}
						aria-describedby={errors.phoneContact ? "contact-error" : undefined}
					/>
				) : (
					<input
						key="text"
						id="contact-input"
						type="text"
						placeholder={contactPlaceholder}
						className={clsx(styles.field, {
							[styles.fieldError]: errors.messengerContact,
						})}
						aria-invalid={!!errors.messengerContact}
						aria-describedby={
							errors.messengerContact ? "contact-error" : undefined
						}
						{...register("messengerContact", {
							onBlur: handleMessengerBlur,
						})}
					/>
				)}

				{contactError && (
					<span
						id="contact-error"
						className={styles.errorMessage}
						aria-live="assertive">
						{contactError.message}
					</span>
				)}
			</div>

			<div className={styles.privacyCheckboxGroup}>
				<label
					htmlFor="policy"
					className={styles.checkboxLabel}>
					<input
						type="checkbox"
						id="policy"
						className={styles.checkbox}
						{...register("acceptedPolicy")}
					/>
					<span className={styles.checkboxText}>
						{t("acceptPolicy")}{" "}
						<Link
							href="/privacy"
							target="_blank"
							className={styles.privacyLink}>
							{t("policy")}
						</Link>
					</span>
				</label>

				{errors.acceptedPolicy && (
					<span
						className={styles.errorMessage}
						aria-live="assertive">
						{errors.acceptedPolicy.message}
					</span>
				)}
			</div>
			<CustomButton
				type="submit"
				text={
					isSubmitting
						? translationKeys.submitButtonLoading
						: translationKeys.submitButton
				}
				className={styles.submitBtn}
				disabled={isSubmitting}
			/>

			<div className={styles.privacy}>
				<span>{t(translationKeys.privacyRu)}</span>
				<span>{t(translationKeys.privacyEn)}</span>
			</div>
		</form>
	);
}
