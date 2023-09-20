import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import GrommetRoot from '@/jujiu-ui-components/layout/grommet';

export function generateStaticParams() {
	return [{ locale: 'en' }, { locale: 'cn' }];
}

export default async function RootLayout({ children, params: { locale } }) {
	let messages;
	try {
		messages = (await import(`@/messages/${locale}.json`)).default;
	} catch (error) {
		notFound();
	}

	return (
		<html>
			<body>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<GrommetRoot>{children}</GrommetRoot>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
