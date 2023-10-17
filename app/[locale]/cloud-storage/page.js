import { CloudStorageCard, CloudStorageHead } from '@/jujiu-ui-components/ipc/cloud-storage';
import { IpcMain } from '@/jujiu-ui-components/ipc/common';
import { Box, Main } from 'grommet';

export default function Page() {
	const devices = Array.from({ length: 20 }, (v, k) => ({ usn: k.toString(), desc: 'test' + k.toString() }));
	const vipData = { 0: true };

	return (
		<IpcMain gap='small'>
			<CloudStorageHead />
			<Box fill='horizontal' flex={true} overflow={{ vertical: 'scroll' }}>
				<Box fill='horizontal' flex={false} gap='small' pad={{ vertical: 'small' }}>
					{devices.map((device) => (
						<CloudStorageCard
							key={device.usn}
							hasVip={vipData[device.usn]}
							expireAt={'2024-01-01'}
							{...{ device }}
						/>
					))}
				</Box>
			</Box>
		</IpcMain>
	);
}
