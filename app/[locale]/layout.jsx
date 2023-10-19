import { notFound } from 'next/navigation';
import { IntlProvider, MainFrame } from './components';
import { UiPack } from '@/jujiu-ui-components/layout/ui';

export function generateStaticParams() {
	return [{ locale: 'en' }, { locale: 'cn' }];
}

export default async function RootLayout({ children, params: { locale } }) {
	let messages;
	try {
		messages = (await import(`@/jujiu-ui-components/messages/${locale}.json`)).default;
	} catch (error) {
		notFound();
	}

	return (
		<html lang={locale}>
			<body>
				<IntlProvider {...{ locale, messages }}>
					<UiPack>
						<MainFrame>{children}</MainFrame>
					</UiPack>
				</IntlProvider>
			</body>
		</html>
	);
}
