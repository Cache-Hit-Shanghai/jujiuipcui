import { useTranslations, useLocale } from 'next-intl';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'cn'];

const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });

export default Link;
export { useRouter, usePathname, useLocale };

export function useJuJiuT() {
	return useTranslations('Index');
}
