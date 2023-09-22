import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { useRouter, usePathname } from 'next-intl/client';

export default Link;
export { useRouter, usePathname };

export function useJuJiuT() {
	return useTranslations('Index');
}
