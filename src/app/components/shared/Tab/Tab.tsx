"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import styles from "./Tab.module.css";
import { TabProps } from "./Tab.types";

export default function Tab({ text, className, reason }: TabProps) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const t = useTranslations();

	const currentReason = searchParams.get("reason") || "main-applicant";
	const isActive = currentReason === reason;

	const handleTabClick = () => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("reason", reason);

		router.replace(`${pathname}?${params.toString()}`, { scroll: false });
	};

	return (
		<button
			type="button"
			onClick={handleTabClick}
			className={clsx(styles.btn, className, {
				[styles.btn_active]: isActive,
			})}>
			{t(text)}
		</button>
	);
}
