'use client';

import { useRef, useState } from 'react';
import {
	Text,
	Box,
	Main,
	Grid,
	Stack,
	Video,
	Nav,
	Select,
	Menu,
	Heading,
	Layer,
	Button,
	TextInput,
	CheckBox,
	List,
	Accordion,
	AccordionPanel,
} from 'grommet';
import {
	Add,
	User,
	Next,
	More,
	Robot,
	Expand,
	Logout,
	Webcam,
	System,
	Calendar,
	Previous,
	FormEdit,
	FormTrash,
	FormClose,
	Transaction,
	ContactInfo,
	ShareRounded,
	CircleInformation,
} from 'grommet-icons';
import { Group } from '@styled-icons/fluentui-system-regular/Group';
import { SettingsOutline } from '@styled-icons/evaicons-outline/SettingsOutline';
import { ButtonLink } from '@/jujiu-ui-components/core/core-ui';
import { WiFiBinding, DeviceBinding } from '@/jujiu-ui-components/ipc/device/binding';
import {
	ScreenCopyControl,
	ChatControl,
	MuteControl,
	RecordControl,
	PanLayer,
	ResolutionControl,
	ZoomControl,
} from '@/jujiu-ui-components/ipc/video/control';
import { IpcCardRaw } from '@/jujiu-ui-components/ipc/device/avatar';
import { DeviceInformation } from '@/jujiu-ui-components/ipc/device/information';
import { DeviceSettings } from '@/jujiu-ui-components/ipc/device/settings';
import { JuJiuTagFromShared, JuJiuTagSharing } from '@/jujiu-ui-components/core/core-tag';
import { IpcLogo } from '@/jujiu-ui-components/ipc/about/brand';
import Link, { useRouter, usePathname, useLocale, useJuJiuT } from '@/state/translate';
import { JJIconCloudUpload, JJIconGallery } from '@/jujiu-ui-components/ipc/icons';

export function LanguageChanger() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const languages = [
		{ locale: 'cn', label: '简体中文' },
		{ locale: 'en', label: 'English' },
	];

	return (
		<Box width='small'>
			<Select
				plain
				options={languages}
				labelKey='label'
				valueKey={{ key: 'locale', reduce: true }}
				value={locale}
				onChange={(e) => router.push(pathname, { locale: e.target.value })}
			/>
		</Box>
	);
}

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

function PCLogo() {
	const t = useJuJiuT();
	return (
		<Link href={'/'} passHref legacyBehavior>
			<Box>
				<IpcLogo />
			</Box>
		</Link>
	);
}

export function PCNav() {
	const t = useJuJiuT();
	const [openAddDevice, setOpenAddDevice] = useState(false);
	const [openDeviceGroup, setOpenDeviceGroup] = useState(false);
	const [stage, setStage] = useState(0);

	return (
		<Nav direction='row' background='background' pad='small' justify='between' flex={false}>
			<PCLogo />
			<Box direction='row' gap='small' align='center'>
				<LanguageChanger />
				<Menu
					label={<User />}
					dropProps={{ align: { top: 'bottom', left: 'left' } }}
					items={[
						{
							label: t('添加设备'),
							icon: <Add />,
							gap: 'small',
							onClick: () => setOpenAddDevice(true),
						},
						{
							label: t('设备分组'),
							icon: <Group size='24' />,
							gap: 'small',
							onClick: () => setOpenDeviceGroup(true),
						},
						{ label: t('退出登录'), icon: <Logout />, gap: 'small' },
					]}
				/>
			</Box>
			{openAddDevice && (
				<Layer
					onEsc={() => setOpenAddDevice(false)}
					onClickOutside={() => setOpenAddDevice(false)}
					position='top'
				>
					{stage === 0 && (
						<Box border width='medium' pad='small' gap='medium'>
							<Heading level={3} alignSelf='center' margin='none'>
								{t('添加设备')}
							</Heading>
							<WiFiBinding />
							<Box direction='row' justify='end'>
								<Button label={t('下一步')} onClick={() => setStage(1)} />
							</Box>
						</Box>
					)}
					{stage === 1 && (
						<Box border width='medium' pad='small' gap='medium'>
							<Heading level={3} alignSelf='center' margin='none'>
								{t('添加设备')}
							</Heading>
							<DeviceBinding />
							<Box direction='row'>
								<Button label={t('上一步')} onClick={() => setStage(0)} />
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
							{t('设备分组')}
						</Heading>
						<Box direction='row' gap='small' align='center'>
							<TextInput placeholder={t('请输入分组名……')} />
							<Button primary icon={<Add />} tip={t('添加分组')} />
						</Box>
						<Box>
							<List
								data={[
									{ name: t('默认分组'), disabled: true },
									{ name: '办公室', disabled: false },
								]}
							>
								{(datum) => (
									<Box direction='row' align='center' justify='between'>
										<Text color={datum.disabled ? 'status-disabled' : 'undefined'}>{datum.name}</Text>
										<Box direction='row'>
											<Button disabled={datum.disabled} icon={<FormEdit />} tip={t('编辑分组')} />
											<Button disabled={datum.disabled} icon={<FormTrash />} tip={t('删除分组')} />
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

function FlexLinkListItem({ label, shrink, ...props }) {
	if (shrink) {
		return <ButtonLink tip={label} {...props} />;
	} else {
		return (
			<ButtonLink
				alignSelf='start'
				plain
				label={label}
				margin={{ vertical: 'small', horizontal: 'medium' }}
				{...props}
			/>
		);
	}
}

export function PCSideBar() {
	const t = useJuJiuT();
	const PCSideBarData = [
		{
			icon: <Webcam />,
			label: t('实时视频'),
			href: '/',
		},
		{
			icon: <System />,
			label: t('系统设置'),
			href: '/settings/',
		},
		{
			icon: <JJIconGallery />,
			label: t('相册'),
			href: '/gallery/',
		},
		{
			icon: <JJIconCloudUpload />,
			label: t('云存储'),
			href: '/cloud-storage/',
		},
	];

	const [shrink, setShrink] = useState(true);
	const pathname = usePathname();

	return (
		<Box background='background' flex={false} pad='none'>
			<Nav gap='small' flex={{ grow: 1, shrink: 1 }} overflow='auto' pad={{ top: 'small' }}>
				{PCSideBarData.map((datum) => (
					<Box key={datum.href} background={pathname === datum.href ? 'control' : 'transparent'}>
						<FlexLinkListItem icon={datum.icon} label={datum.label} href={datum.href} shrink={shrink} />
					</Box>
				))}
			</Nav>
			<Box flex={false} border='top' />
			<Box flex={false} pad='small' direction='row' justify='end'>
				<Button
					icon={shrink ? <Next color='control' /> : <Previous color='control' />}
					onClick={() => setShrink(!shrink)}
				/>
			</Box>
		</Box>
	);
}

function IpcCardMenu({ menuData, onClick }) {
	const t = useJuJiuT();
	const items = menuData.map((item) => ({
		label: t(item.label),
		icon: item.icon,
		gap: 'small',
		onClick: () => onClick(item),
	}));
	return <Menu dropProps={{ align: { top: 'bottom', right: 'right' } }} icon={<More />} items={items} />;
}

const menuItemData = [
	{
		label: '设备设置',
		icon: <SettingsOutline size='24' />,
		panel: DeviceSettings,
	},
	{
		label: '设备信息',
		icon: <CircleInformation />,
		panel: DeviceInformation,
	},
	{
		label: '设备分享',
		icon: <ShareRounded />,
		panel: Box,
	},
	{
		label: '设备转移',
		icon: <Transaction />,
		panel: Box,
	},
	{
		label: '通讯录',
		icon: <ContactInfo />,
		panel: Box,
	},
	{
		label: '日程提醒',
		icon: <Calendar />,
		panel: Box,
	},
];

const menuItemDataFixedCamera = [menuItemData[0], menuItemData[1], menuItemData[2], menuItemData[3]];
const menuItemDataRobot = [...menuItemData];

const IpcCardMenuMap = new Map([
	['ipc', menuItemDataFixedCamera],
	['robot', menuItemDataRobot],
]);

export function IpcCardSelectable({ type = 'ipc', usn, onSelect, selected = false, onClick, ...passProps }) {
	const t = useJuJiuT();
	const ref = useRef();
	const [menuItem, setMenuItem] = useState();
	const Panel = menuItem?.panel;

	return (
		<Stack anchor='top-right'>
			<IpcCardRaw {...passProps}>
				<IpcCardMenu menuData={IpcCardMenuMap.get(type)} onClick={(item) => setMenuItem(item)} />
			</IpcCardRaw>
			<Box pad='small'>
				<CheckBox checked={selected} onChange={(e) => onSelect?.(e.target.checked)} />
			</Box>
			{menuItem && (
				<Layer
					full='vertical'
					onEsc={() => setMenuItem()}
					onClickOutside={() => setMenuItem()}
					position='right'
				>
					<Box width='medium' pad='small' gap='small' ref={ref} overflow='auto'>
						<Heading level={3} alignSelf='center'>
							{t(menuItem.label)}
						</Heading>
						<Panel gap='small' />
					</Box>
				</Layer>
			)}
		</Stack>
	);
}

export function CameraList() {
	const t = useJuJiuT();

	return (
		<Box flex={false} width='medium' overflow='auto' pad='none' background='background'>
			<Accordion>
				<AccordionPanel label={<Text margin='small'>{t('默认分组')}</Text>}>
					<Box gap='medium' margin='small'>
						<IpcCardSelectable
							label={
								<Box direction='row' align='center' gap='small'>
									<Webcam />
									<Text>客厅</Text>
									<JuJiuTagFromShared />
								</Box>
							}
							imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.f54c83f04442cec528a250d251251ce6?rik=JE7BoZk5xK4iEg&riu=http%3a%2f%2fpic4.bbzhi.com%2ffengjingbizhi%2fgaoqingxifengjingzhuomianbizhixiazai%2fgaoqingxifengjingzhuomianbizhixiazai_366146_18.jpg&ehk=YvUnl11nBp%2fGJssQUbYqkXLo7fchkD%2fEQ8BGpW2Urjs%3d&risl=&pid=ImgRaw&r=0'
						/>
						<IpcCardSelectable
							label={
								<Box direction='row' align='center' gap='small'>
									<Robot />
									<Text>PixelBot</Text>
									<JuJiuTagSharing />
								</Box>
							}
							type='robot'
							online
							cloudStorage='expired'
							imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.0c8bf36e099654aadaf5f127ef1a3f1b?rik=uHrB%2blGez03%2fAA&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102445_a1cff.jpg&ehk=EeF%2fioqRM6NfQqkCgXw%2bwLvO1%2fxZgeZ2pof7ALNLGsg%3d&risl=&pid=ImgRaw&r=0'
						/>
					</Box>
				</AccordionPanel>
				<AccordionPanel label={<Text margin='small'>办公室</Text>}>
					<Box gap='medium' margin='small'>
						<IpcCardSelectable
							key={1}
							label={
								<Box direction='row' align='center' gap='small'>
									<Webcam />
									<Text>办公室3</Text>
								</Box>
							}
							imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.4894a961ab87e3459babae4ef8a2f4fa?rik=1P7ZI7Evnz4Pqg&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0830%2fxiaguang2.jpg&ehk=Ok%2fjrv35R0L218oT%2flliRL8DJc52pARVnWU%2bXOpUwq4%3d&risl=&pid=ImgRaw&r=0'
						/>
						<IpcCardSelectable
							key={2}
							label={
								<Box direction='row' align='center' gap='small'>
									<Webcam />
									<Text>办公室5</Text>
								</Box>
							}
							imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.f54c83f04442cec528a250d251251ce6?rik=JE7BoZk5xK4iEg&riu=http%3a%2f%2fpic4.bbzhi.com%2ffengjingbizhi%2fgaoqingxifengjingzhuomianbizhixiazai%2fgaoqingxifengjingzhuomianbizhixiazai_366146_18.jpg&ehk=YvUnl11nBp%2fGJssQUbYqkXLo7fchkD%2fEQ8BGpW2Urjs%3d&risl=&pid=ImgRaw&r=0'
						/>
						<IpcCardSelectable
							key={3}
							label={
								<Box direction='row' align='center' gap='small'>
									<Webcam />
									<Text>办公室7</Text>
								</Box>
							}
							imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.3edbd350d03c25ed988236c50d0733e6?rik=txi3%2f%2b%2fVYUJofg&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0802%2fwmdqfj4.jpg&ehk=TY9%2f90VQn6m3NYCoiPX2UyRYQIT7dkGJtTJli1W7pfo%3d&risl=&pid=ImgRaw&r=0'
						/>
						<IpcCardSelectable
							key={4}
							label={
								<Box direction='row' align='center' gap='small'>
									<Webcam />
									<Text>办公室9</Text>
								</Box>
							}
							imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.0c8bf36e099654aadaf5f127ef1a3f1b?rik=uHrB%2blGez03%2fAA&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102445_a1cff.jpg&ehk=EeF%2fioqRM6NfQqkCgXw%2bwLvO1%2fxZgeZ2pof7ALNLGsg%3d&risl=&pid=ImgRaw&r=0'
						/>
					</Box>
				</AccordionPanel>
			</Accordion>
		</Box>
	);
}

function VideoPlayer({ ...prop }) {
	const t = useJuJiuT();
	const ref = useRef();
	return (
		<Box fill background='black' {...prop} ref={ref}>
			<Stack fill interactiveChild='last'>
				<Video controls={false} />
				<Stack fill>
					<Box fill justify='between'>
						<Stack>
							<Box pad='small' direction='row' justify='center'>
								<Text>云探1</Text>
							</Box>
							<Box direction='row' justify='end'>
								<Button icon={<FormClose />} tip={t('关闭')} />
							</Box>
						</Stack>
						<Box direction='row' justify='end' gap='small' pad={{ horizontal: 'small' }}>
							<ScreenCopyControl showTitle={false} />
							<RecordControl showTitle={false} />
							<ChatControl showTitle={false} />
							<MuteControl showTitle={false} />
							<PanLayer target={ref} />
							<ResolutionControl showTitle={false} />
							<ZoomControl showTitle={false} />
							<Button icon={<Expand />} tip={t('全屏')} />
						</Box>
					</Box>
				</Stack>
			</Stack>
		</Box>
	);
}

export function VideoGrid() {
	return (
		<Main>
			<Grid
				fill
				columns='640px'
				align='center'
				justify='center'
				style={{
					gridAutoFlow: 'row dense',
					gridAutoRows: '480px',
					gap: '12px',
				}}
			>
				{Array.from({ length: 20 }, (_, index) => index).map((item) => (
					<VideoPlayer key={item} />
				))}
			</Grid>
		</Main>
	);
}
