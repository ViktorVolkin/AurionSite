import { SERVICE_PAGES_DATA } from "@/app/components/shared/lib/constants/ServicePageContent";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
	return Object.keys(SERVICE_PAGES_DATA).flatMap((country) => {
		const grounds = Object.keys(SERVICE_PAGES_DATA[country] || {});
		return grounds.flatMap((ground) =>
			routing.locales.map((locale) => ({
				locale,
				country,
				ground,
			})),
		);
	});
}

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return <>{children}</>;
}
