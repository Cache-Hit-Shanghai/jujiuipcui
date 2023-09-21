import { Heading, Tabs, Tab, Main } from 'grommet';
import { AccountSettings, NotificationSettings, UiSettings } from './components';

export default function Page() {
	return (
		<Main background='background' pad='medium' flex={{ grow: 1, shrink: 1 }}>
			<Heading level={2}>应用设置</Heading>
			<Tabs>
				<Tab title='账号设置'>
					<AccountSettings />
				</Tab>
				<Tab title='通知设置'>
					<NotificationSettings />
				</Tab>
				<Tab title='界面设置'>
					<UiSettings />
				</Tab>
			</Tabs>
		</Main>
	);
}
