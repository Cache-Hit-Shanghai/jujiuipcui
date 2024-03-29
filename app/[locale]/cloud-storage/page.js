import { CloudStorageCard, CloudStorageHead } from '@/jujiu-ui-components/ipc/cloud-storage';
import { IpcMain } from '@/jujiu-ui-components/ipc/common';
import { Box, Grid } from 'grommet';

export default function Page() {
	const devices = Array.from({ length: 37 }, (v, k) => ({ usn: k.toString(), desc: 'test' + k.toString() }));
	const vipData = { 0: true };

	return (
		<IpcMain style={{ rowGap: '24px' }}>
			<CloudStorageHead />
			<Box flex={true} overflow={{ vertical: 'scroll' }}>
				<Grid columns='medium' fill='horizontal' gap='small' pad={{ vertical: 'small' }}>
					{devices.map((device) => (
						<CloudStorageCard
							key={device.usn}
							hasVip={vipData[device.usn]}
							expireAt={'2024-01-01'}
							{...{ device }}
						/>
					))}
				</Grid>
			</Box>
		</IpcMain>
	);
}
