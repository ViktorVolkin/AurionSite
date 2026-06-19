"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ru from "react-phone-number-input/locale/ru.json";
import styles from "./ConsultationForm.module.css";
import CustomButton from "../../shared/CustomButton";
import CountrySelect from "../../shared/CountrySelect";
import { ConsultationFormProps } from "./ConsultationForm.types";
import { ConsultFormData, createConsultSchema } from "./ConsultationSchema";

export default function ConsultationForm({
	className,
	countries,
	methods,
	defaultCountry = "spain",
	defaultMethod = "telegram",
	translationKeys,
}: ConsultationFormProps) {
	const t = useTranslations("Consultation");
	const consultSchema = createConsultSchema(t);

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		clearErrors,
		formState: { errors, isSubmitting },
	} = useForm<ConsultFormData>({
		resolver: zodResolver(consultSchema),
		defaultValues: {
			name: "",
			country: defaultCountry,
			method: defaultMethod,
			phoneContact: "",
			messengerContact: "",
		},
	});

	const currentMethod = watch("method");
	const currentMessengerValue = watch("messengerContact");
	const currentPhoneValue = watch("phoneContact");
	const currentCountryValue = watch("country");

	const isPhoneMethod =
		currentMethod === "phone" || currentMethod === "whatsapp";

	const activeMethodConfig = methods.find((m) => m.value === currentMethod);

	const contactPlaceholder = activeMethodConfig
		? t(activeMethodConfig.placeholderKey) ||
			activeMethodConfig.defaultPlaceholder
		: "";

	useEffect(() => {
		if (isPhoneMethod) {
			setValue("messengerContact", "");
			clearErrors("messengerContact");
			return;
		}

		clearErrors("phoneContact");
		setValue("phoneContact", "");

		if (
			currentMethod === "telegram" &&
			currentMessengerValue &&
			!currentMessengerValue.startsWith("@") &&
			currentMessengerValue.trim() !== ""
		) {
			setValue("messengerContact", `@${currentMessengerValue}`);
		}
	}, [
		currentMethod,
		isPhoneMethod,
		currentMessengerValue,
		setValue,
		clearErrors,
	]);

	const contactError = errors.phoneContact || errors.messengerContact;

	const handleFormSubmit = async (data: ConsultFormData) => {
		const finalContact = isPhoneMethod
			? data.phoneContact
			: data.messengerContact;

		console.log("Submitted Zero-Hardcode Data:", {
			...data,
			contact: finalContact,
		});
	};

	return (
		<form
			className={clsx(styles.form, className)}
			onSubmit={handleSubmit(handleFormSubmit)}
			noValidate>
			<div className={styles.fieldGroup}>
				<label htmlFor="name-input">{t(translationKeys.nameLabel)}</label>
				<input
					id="name-input"
					type="text"
					placeholder={t(translationKeys.namePlaceholder)}
					className={clsx(styles.field, { [styles.fieldError]: errors.name })}
					{...register("name")}
				/>
				{errors.name && (
					<span className={styles.errorMessage}>{errors.name.message}</span>
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
						onChange={(value) => setValue("country", value)}
						error={!!errors.country}
					/>
				</div>

				<div className={styles.fieldGroup}>
					<label htmlFor="contact-method">
						{t(translationKeys.methodLabel)}
					</label>
					<div className={styles.selectWrapper}>
						<select
							id="contact-method"
							className={styles.field}
							{...register("method")}>
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
						defaultCountry="ME"
						international
						withCountryCallingCode
						labels={ru}
						value={currentPhoneValue}
						onChange={(value) => setValue("phoneContact", value || "")}
						className={clsx(styles.field, styles.phoneField, {
							[styles.fieldError]: errors.phoneContact,
						})}
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
						{...register("messengerContact")}
					/>
				)}

				{contactError && (
					<span className={styles.errorMessage}>{contactError.message}</span>
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
			/>

			<div className={styles.privacy}>
				<span>{t(translationKeys.privacyRu)}</span>
				<span>{t(translationKeys.privacyEn)}</span>
			</div>
		</form>
	);
}
