import { Sidebar, Nav, Select, Box, Menu, Text } from 'grommet';
import { Add, User, Logout, Webcam, System, CloudComputer } from 'grommet-icons';
import { Group } from '@styled-icons/fluentui-system-regular/Group';
import { ButtonLink } from '@/jujiu-ui-components/core/core-ui';

export function PCNav({ onAddDevice, onDeviceGroup }) {
	return (
		<Nav direction='row' background='background' pad='small' justify='between' flex={false}>
			<Box direction='row' align='center' gap='small'>
				<CloudComputer size='large' />
				<Text size='xlarge' weight='bold'>
					雎鸠云视觉
				</Text>
			</Box>
			<Select options={['简体中文', 'English']} value='简体中文' />
			<Menu
				label={<User />}
				dropProps={{ align: { top: 'bottom', left: 'left' } }}
				items={[
					{
						label: '添加设备',
						icon: <Add />,
						gap: 'small',
						onClick: onAddDevice,
					},
					{
						label: '设备分组',
						icon: <Group size='24' />,
						gap: 'small',
						onClick: onDeviceGroup,
					},
					{ label: '退出登录', icon: <Logout />, gap: 'small' },
				]}
			/>
		</Nav>
	);
}

export function PCSideBar() {
	return (
		<Sidebar background='background' flex={false}>
			<Nav gap='small'>
				<ButtonLink icon={<Webcam />} href='/' tip='实时视频' />
				<ButtonLink icon={<System />} href='/settings' tip='系统设置' />
			</Nav>
		</Sidebar>
	);
}
