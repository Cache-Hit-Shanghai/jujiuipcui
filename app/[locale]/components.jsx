'use client';

import { useState } from 'react';
import { Text, Box, Sidebar, Nav, Select, Menu, Heading, Layer, Button, TextInput, List } from 'grommet';
import { Add, User, Logout, Webcam, System, CloudComputer, FormEdit, FormTrash } from 'grommet-icons';
import { Group } from '@styled-icons/fluentui-system-regular/Group';
import { ButtonLink } from '@/jujiu-ui-components/core/core-ui';
import { WiFiBinding, DeviceBinding } from '@/jujiu-ui-components/ipc/device/binding';

export function MainFrame({ children }) {
	return (
		<Box fill gap='small' background='background-contrast'>
			<PCNav />
			<Box direction='row' flex={{ grow: 1, shrink: 1 }} gap='small'>
				<PCSideBar />
				{children}
			</Box>
		</Box>
	);
}

export function PCNav() {
	const [openAddDevice, setOpenAddDevice] = useState(false);
	const [openDeviceGroup, setOpenDeviceGroup] = useState(false);
	const [stage, setStage] = useState(0);

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
						onClick: () => setOpenAddDevice(true),
					},
					{
						label: '设备分组',
						icon: <Group size='24' />,
						gap: 'small',
						onClick: () => setOpenDeviceGroup(true),
					},
					{ label: '退出登录', icon: <Logout />, gap: 'small' },
				]}
			/>
			{openAddDevice && (
				<Layer
					onEsc={() => setOpenAddDevice(false)}
					onClickOutside={() => setOpenAddDevice(false)}
					position='top'
				>
					{stage === 0 && (
						<Box border width='medium' pad='small' gap='medium'>
							<Heading level={3} alignSelf='center' margin='none'>
								添加设备
							</Heading>
							<WiFiBinding />
							<Box direction='row' justify='end'>
								<Button label='下一步' onClick={() => setStage(1)} />
							</Box>
						</Box>
					)}
					{stage === 1 && (
						<Box border width='medium' pad='small' gap='medium'>
							<Heading level={3} alignSelf='center' margin='none'>
								添加设备
							</Heading>
							<DeviceBinding />
							<Box direction='row'>
								<Button label='上一步' onClick={() => setStage(0)} />
							</Box>
						</Box>
					)}
				</Layer>
			)}
			{openDeviceGroup && (
				<Layer
					onEsc={() => setOpenDeviceGroup(false)}
					onClickOutside={() => setOpenDeviceGroup(false)}
					position='top'
				>
					<Box border width='medium' pad='small' gap='medium'>
						<Heading level={3} alignSelf='center' margin='none'>
							设备分组
						</Heading>
						<Box direction='row' gap='small' align='center'>
							<TextInput placeholder='请输入分组名……' />
							<Button label='添加分组' />
						</Box>
						<Box>
							<List
								data={[
									{ name: '默认分组', disabled: true },
									{ name: '办公室', disabled: false },
								]}
							>
								{(datum) => (
									<Box direction='row' align='center' justify='between'>
										<Text color={datum.disabled ? 'status-disabled' : 'undefined'}>{datum.name}</Text>
										<Box direction='row'>
											<Button disabled={datum.disabled} icon={<FormEdit />} />
											<Button disabled={datum.disabled} icon={<FormTrash />} />
										</Box>
									</Box>
								)}
							</List>
						</Box>
					</Box>
				</Layer>
			)}
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
