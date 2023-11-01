'use client';

import { useRef, useState } from 'react';
import {
	Text,
	Tag,
	Box,
	Main,
	Grid,
	Stack,
	Video,
	Menu,
	Heading,
	Layer,
	Button,
	CheckBox,
	Accordion,
	AccordionPanel,
} from 'grommet';
import {
	More,
	Robot,
	Expand,
	Webcam,
	Calendar,
	FormClose,
	Transaction,
	ContactInfo,
	ShareRounded,
	RadialSelected,
	CircleInformation,
} from 'grommet-icons';
import { SettingsOutline } from '@styled-icons/evaicons-outline/SettingsOutline';
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
import { useJuJiuT } from '@/state/translate';

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

function RecordControlDemo({ showTitle }) {
	const [recording, setRecording] = useState(false);

	return (
		<>
			<RecordControl showTitle={showTitle} onClick={() => setRecording(!recording)} />
			<Box
				align='center'
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					visibility: recording ? 'visible' : 'hidden',
				}}
			>
				<Tag
					margin='small'
					size='xsmall'
					border={false}
					background='status-critical'
					value={
						<Box direction='row' gap='small' align='center'>
							<RadialSelected size='small' />
							<Text size='xsmall'>0:41</Text>
						</Box>
					}
				/>
			</Box>
		</>
	);
}

function toggleFullScreen(setFullScreen) {
	if (document.fullscreenElement) {
		document.exitFullscreen();
		setFullScreen(false);
	} else {
		document.documentElement.requestFullscreen();
		setFullScreen(true);
	}
}

function VideoPlayer({ ...prop }) {
	const t = useJuJiuT();
	const ref = useRef();
	const [show, setShow] = useState(true);
	const [fullScreen, setFullScreen] = useState(false);
	const normalStyle = { position: 'relative', transform: 'scale(1)' };
	const fullScreenStyle = {
		position: 'fixed',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		zIndex: 1,
		transform: 'scale(1)',
	};

	return (
		<Box fill background='black' ref={ref} style={fullScreen ? fullScreenStyle : normalStyle} {...prop}>
			<Video fit='contain' controls={false} onClick={() => setShow(!show)} style={{ zIndex: 0 }} />
			<Box style={{ position: 'absolute', visibility: show ? 'visible' : 'hidden' }}>
				<Text margin='small'>云探1</Text>
			</Box>
			<Box
				direction='row'
				justify='center'
				gap='small'
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					visibility: show ? 'visible' : 'hidden',
				}}
			>
				<ScreenCopyControl showTitle={false} />
				<RecordControlDemo showTitle={false} />
				<ChatControl showTitle={false} />
				<MuteControl showTitle={false} />
				<PanLayer />
				<ResolutionControl showTitle={false} />
				<ZoomControl showTitle={false} />
				<Button icon={<Expand />} tip={t('全屏')} onClick={(e) => toggleFullScreen(setFullScreen)} />
			</Box>
			<Box style={{ position: 'absolute', right: 0, visibility: show ? 'visible' : 'hidden' }}>
				<Button icon={<FormClose />} tip={t('关闭')} />
			</Box>
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
