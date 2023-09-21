'use client';

import { Heading, Box, Tabs, Tab, Avatar, Main } from 'grommet';
import { User } from 'grommet-icons';
import { ChangeAvatar, ChangeNickname, ChangePassword } from '@/jujiu-ui-components/ipc/settings/account';
import { ChangeNotification, ChangeAIAlarm } from '@/jujiu-ui-components/ipc/settings/notification';
import { ChangeUI } from '@/jujiu-ui-components/ipc/settings/ui';

export function AccountSettings() {
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
					修改密码
				</Heading>
				<ChangePassword />
			</Box>
		</Box>
	);
}

export function NotificationSettings() {
	return (
		<Box wrap direction='row' gap='small'>
			<Box border width='medium' gap='small' pad='medium' round='small'>
				<Heading level={3} alignSelf='center' margin='none'>
					修改消息通知
				</Heading>
				<ChangeNotification />
			</Box>
			<Box border width='medium' gap='small' pad='medium' round='small'>
				<Heading level={3} alignSelf='center' margin='none'>
					修改AI报警事件类型
				</Heading>
				<ChangeAIAlarm />
			</Box>
		</Box>
	);
}

export function UiSettings() {
	return (
		<Box wrap direction='row' gap='small'>
			<Box border width='medium' gap='small' pad='medium' round='small'>
				<Heading level={3} alignSelf='center' margin='none'>
					修改界面
				</Heading>
				<ChangeUI />
			</Box>
		</Box>
	);
}
