import { CloudStorageCard, CloudStorageHead } from '@/jujiu-ui-components/ipc/cloud-storage';
import { Box } from 'grommet';

export default function Page() {
	const devices = Array.from({ length: 20 }, (v, k) => ({ usn: k.toString(), desc: 'test' + k.toString() }));
	const vipData = { 0: true };

	return (
		<Box fill background={'white'} overflow={{ vertical: 'scroll' }} pad='medium'>
			<Box width='100%' gap='small' flex={false}>
				<CloudStorageHead />
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
	);
}
