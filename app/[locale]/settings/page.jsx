'use client';

import { Heading, Tabs, Tab, Main } from 'grommet';
import { AccountSettings, NotificationSettings, UiSettings } from './components';
import { useJuJiuT } from '@/state/translate';

export default function Page() {
	const t = useJuJiuT();
	return (
		<Main background='background' pad='medium' flex={{ grow: 1, shrink: 1 }}>
			<Heading level={2}>{t('系统设置')}</Heading>
			<Tabs alignControls='start'>
				<Tab title={t('账号设置')} margin={{ bottom: 'small' }}>
					<AccountSettings />
				</Tab>
				<Tab title={t('通知设置')} margin={{ bottom: 'small' }}>
					<NotificationSettings />
				</Tab>
				<Tab title={t('界面设置')} margin={{ bottom: 'small' }}>
					<UiSettings />
				</Tab>
			</Tabs>
		</Main>
	);
}
