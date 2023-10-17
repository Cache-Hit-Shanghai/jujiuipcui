import { SharedDeviceList, SharingDeviceList, SharingTabs } from '@/jujiu-ui-components/ipc/sharing';
import { Box } from 'grommet';

function Container({ children }) {
	return (
		<Box fill overflow={{ vertical: 'scroll' }}>
			<Box fill='horizontal'>{children}</Box>
		</Box>
	);
}

export default function Page() {
	const devices = Array.from({ length: 30 }, (v, i) => {
		const _id = i.toString();
		return { _id, usn: _id, shareCount: 4, desc: 'test' + _id, sharedBy: 'somebody' };
	});

	return (
		<Box fill>
			<SharingTabs
				sharing={
					<Container>
						<SharingDeviceList data={devices} />
					</Container>
				}
				shared={
					<Container>
						<SharedDeviceList data={devices} />
					</Container>
				}
			/>
		</Box>
	);
}
