import { useTranslations } from "next-intl";
import { isValidPhoneNumber } from "react-phone-number-input";
import z from "zod";

export const createConsultSchema = (t: ReturnType<typeof useTranslations>) =>
	z
		.object({
			name: z.string().min(2, { message: t("errors.nameMin") }),
			country: z.string(),
			method: z.string(),
			phoneContact: z.string().optional(),
			messengerContact: z.string().optional(),
		})
		.superRefine((data, ctx) => {
			const isPhoneMethod =
				data.method === "phone" || data.method === "whatsapp";

			if (isPhoneMethod) {
				if (!data.phoneContact || !isValidPhoneNumber(data.phoneContact)) {
					ctx.addIssue({
						code: "custom",
						message: t("errors.invalidPhone"),
						path: ["phoneContact"],
					});
				}
			} else {
				if (!data.messengerContact || data.messengerContact.trim().length < 2) {
					ctx.addIssue({
						code: "custom",
						message: t("errors.contactRequired"),
						path: ["messengerContact"],
					});
				}
			}
		});

export type ConsultFormData = z.infer<ReturnType<typeof createConsultSchema>>;
