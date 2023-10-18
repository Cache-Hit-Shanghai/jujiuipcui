'use client';

import { useMemo, useState } from 'react';
import { Text, Box, Nav, Select, Menu, Heading, Layer, Button, TextInput, List } from 'grommet';
import { Add, User, Next, Logout, Webcam, System, Previous, FormEdit, FormTrash } from 'grommet-icons';
import { Group } from '@styled-icons/fluentui-system-regular/Group';
import { ButtonLink } from '@/jujiu-ui-components/core/core-ui';
import { WiFiBinding, DeviceBinding } from '@/jujiu-ui-components/ipc/device/binding';
import { IpcLogo } from '@/jujiu-ui-components/ipc/about/brand';
import Link, { useRouter, usePathname, useLocale, useJuJiuT } from '@/state/translate';
import {
	JJIconCloudUpload,
	JJIconGallery,
	JJIconPersonFeedback,
	JJIconShareRounded,
	JJIconUpgrade,
} from '@/jujiu-ui-components/ipc/icons';
import { NextIntlClientProvider } from 'next-intl';

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
	if (shrink) return <ButtonLink tip={label} {...props} />;

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

function makePCSideBarItems(t) {
	return [
		{
			icon: <Webcam />,
			label: t('实时视频'),
			href: '/stream',
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
		{
			icon: <JJIconUpgrade />,
			label: t('固件升级'),
			href: '/ota/',
		},
		{
			icon: <JJIconShareRounded />,
			label: t('我的分享'),
			href: '/sharing/',
		},
		{
			icon: <JJIconPersonFeedback size='24' />,
			label: t('帮助与反馈'),
			href: '/help-feedback/',
		},
	];
}

export function PCSideBar() {
	const t = useJuJiuT();
	const PCSideBarData = useMemo(() => makePCSideBarItems(t), [t]);
	const [shrink, setShrink] = useState(true);
	const pathname = usePathname();

	return (
		<Box background='background' flex={false} pad='none'>
			<Nav gap='small' flex={{ grow: 1, shrink: 1 }} overflow='auto' pad={{ top: 'small' }}>
				<Box fill='horizontal' flex={false}>
					{PCSideBarData.map((datum) => {
						const isFocus = !!pathname.match(new RegExp(`^${datum.href}`));
						const bg = isFocus ? 'control' : 'transparent';

						return (
							<Box key={datum.href} background={bg}>
								<FlexLinkListItem icon={datum.icon} label={datum.label} href={datum.href} shrink={shrink} />
							</Box>
						);
					})}
				</Box>
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

function getMessageFallback({ namespace, key, error }) {
	if (namespace) return key;
	return key.slice(key.indexOf('.') + 1);
}

function IntlProvider({ children, ...props }) {
	return (
		<NextIntlClientProvider {...{ getMessageFallback }} {...props}>
			{children}
		</NextIntlClientProvider>
	);
}

export { IntlProvider };
