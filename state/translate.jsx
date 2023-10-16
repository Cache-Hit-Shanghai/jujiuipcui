import { useTranslations, useLocale } from 'next-intl';
import Link from 'next-intl/link';
import { useRouter, usePathname } from 'next-intl/client';

export default Link;
export { useRouter, usePathname, useLocale };

export function useJuJiuT() {
	return useTranslations('Index');
}
export { Link };
