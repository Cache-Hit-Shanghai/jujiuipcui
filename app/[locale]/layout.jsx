import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import GrommetRoot from '@/jujiu-ui-components/layout/grommet';
import { IntlProvider, MainFrame } from './components';

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
					<GrommetRoot themeMode='light'>
						<MainFrame>{children}</MainFrame>
					</GrommetRoot>
				</IntlProvider>
			</body>
		</html>
	);
}
