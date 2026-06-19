"use client";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";

export const useLanguageSwitch = () => {
	const router = useRouter();
	const pathname = usePathname();
	const locale = useLocale();

	const switchLanguage = (lang: (typeof routing.locales)[number]) => {
		router.replace(pathname, { locale: lang });
	};

	return { currentLanguage: locale, switchLanguage };
};
