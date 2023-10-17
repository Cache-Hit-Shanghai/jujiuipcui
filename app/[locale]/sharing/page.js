import { IpcMain } from '@/jujiu-ui-components/ipc/common';
import { SharedDeviceList, SharingDeviceList, SharingTabs } from '@/jujiu-ui-components/ipc/sharing';
import { Box, Main } from 'grommet';

function Container({ children }) {
	return (
		<Box fill overflow={{ vertical: 'scroll' }}>
			<Box fill='horizontal'>{children}</Box>
		</Box>
	);
}

export default function Page() {
	const sharingDevices = Array.from({ length: 30 }, (v, i) => {
		const _id = i.toString();
		return { _id, usn: _id, shareCount: 3, desc: 'test' + _id, sharedBy: 'somebody' };
	});
	const sharedDevices = sharingDevices;

	return (
		<IpcMain>
			<SharingTabs
				sharing={
					<Container>
						<SharingDeviceList data={sharingDevices} />
					</Container>
				}
				shared={
					<Container>
						<SharedDeviceList data={sharedDevices} />
					</Container>
				}
			/>
		</IpcMain>
	);
}
