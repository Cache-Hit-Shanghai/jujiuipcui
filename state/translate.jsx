import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { useRouter } from 'next-intl/client';

export default Link;
export { useRouter };

export function useJuJiuT() {
  return useTranslations('Index');
}