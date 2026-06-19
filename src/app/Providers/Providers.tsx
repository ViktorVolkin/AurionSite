import { Lenis } from "lenis/react";
import { NextIntlClientProvider } from "next-intl";
export default function Providers({
	children,
	messages,
}: {
	children: React.ReactNode;
	messages: Record<string, string>;
}) {
	return (
		<>
			<NextIntlClientProvider messages={messages}>
				<Lenis
					root
					options={{
						duration: 2,
						lerp: 0.2,
						smoothWheel: true,
						syncTouch: true,
					}}>
					{children}
				</Lenis>
			</NextIntlClientProvider>
		</>
	);
}
