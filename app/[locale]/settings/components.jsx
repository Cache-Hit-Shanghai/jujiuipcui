'use client';

import { Heading, Box, Avatar } from 'grommet';
import { User } from 'grommet-icons';
import { ChangeAvatar, ChangeNickname, ChangePassword } from '@/jujiu-ui-components/ipc/settings/account';
import { ChangeNotification, ChangeAIAlarm } from '@/jujiu-ui-components/ipc/settings/notification';
import { ChangeUI } from '@/jujiu-ui-components/ipc/settings/ui';
import { useJuJiuT } from '@/state/translate';
import { useChangeThemeMode, useThemeMode } from '@/jujiu-ui-components/layout/ui';

export function AccountSettings() {
	const t = useJuJiuT();
	return (
		<Box wrap direction='row' gap='small'>
			<Box border width='medium' gap='small' pad='medium' round='small'>
				<ChangeAvatar />
				<Avatar background='background-contrast' alignSelf='center'>
					<User color='text-xweak' />
				</Avatar>
			</Box>
			<Box border width='medium' gap='small' pad='medium' round='small'>
				<ChangeNickname />
			</Box>
			<Box border width='medium' gap='small' pad='medium' round='small'>
				<Heading level={3} alignSelf='center' margin='none'>
					{t('修改密码')}
				</Heading>
				<ChangePassword />
			</Box>
		</Box>
	);
}

export function NotificationSettings() {
	const t = useJuJiuT();
	return (
		<Box wrap direction='row' gap='small'>
			<Box border width='medium' gap='small' pad='medium' round='small'>
				<Heading level={3} alignSelf='center' margin='none'>
					{t('通知设置')}
				</Heading>
				<ChangeNotification />
			</Box>
			<Box border width='medium' gap='small' pad='medium' round='small'>
				<Heading level={3} alignSelf='center' margin='none'>
					{t('AI报警事件类型设置')}
				</Heading>
				<ChangeAIAlarm />
			</Box>
		</Box>
	);
}

export function UiSettings() {
	const t = useJuJiuT();

	const themeMode = useThemeMode();
	const changeThemeMode = useChangeThemeMode();

	return (
		<Box wrap direction='row' gap='small'>
			<Box border width='medium' gap='small' pad='medium' round='small'>
				<Heading level={3} alignSelf='center' margin='none'>
					{t('界面设置')}
				</Heading>
				<ChangeUI themeProps={{ value: themeMode, onChange: (e) => changeThemeMode(e.target.value) }} />
			</Box>
		</Box>
	);
}
