import { IconBack } from '@/jujiu-ui-components/core';
import { IpcMain } from '@/jujiu-ui-components/ipc/common';
import { OtaUpgradeInfo } from '@/jujiu-ui-components/ipc/ota';
import { Box, Heading } from 'grommet';

export default function Page() {
	const device = { _id: '0', desc: 'test0' };
	const info = {
		currentVersion: '1.0.0',
		upgradeVersion: '2.0.0',
		updateLog: '1. fix bugs\n2. add new features',
	};

	return (
		<IpcMain>
			<Box direction='row' gap='small'>
				<IconBack />
				<Heading level='2'>固件升级信息 - {device.desc}</Heading>
			</Box>
			<OtaUpgradeInfo {...{ device, info }} />
		</IpcMain>
	);
}
