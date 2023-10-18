import { ButtonLink, IconBack } from '@/jujiu-ui-components/core';
import { IpcMain } from '@/jujiu-ui-components/ipc/common';
import { OtaUpgradeView } from '@/jujiu-ui-components/ipc/ota';
import { Box, Heading } from 'grommet';

export default function Page() {
	const device = { usn: '0', desc: 'test0' };
	const progress = 100;
	const maxProgress = 100;

	return (
		<IpcMain align='center' gap='small'>
			<Box direction='row' gap='small' fill='horizontal'>
				<IconBack />
				<Heading level='2'>固件升级</Heading>
			</Box>
			<OtaUpgradeView {...{ device, progress, maxProgress }}>
				<ButtonLink href='/ota' label='返回列表' primary={true} />
			</OtaUpgradeView>
		</IpcMain>
	);
}
