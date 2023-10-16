import { IconBack } from '@/jujiu-ui-components/core';
import {
	CloudStorageService,
	CloudStorageSets,
	CloudStorageTitle,
} from '@/jujiu-ui-components/ipc/cloud-storage';
import { Box } from 'grommet';

export default function Page() {
	const sets = Array.from({ length: 30 }, () => ({
		title: '7天月套餐',
		start: '2023-09-21 15:29:24',
		end: '2023-09-21 15:29:24',
	}));

	return (
		<Box fill background={'white'} overflow={{ vertical: 'scroll' }} pad='medium'>
			<Box width='100%' gap='small' flex={false}>
				<Box direction='row' gap='small'>
					<IconBack />
					<CloudStorageTitle text='云存储设置' />
				</Box>
				<CloudStorageService checked={true} />
				<CloudStorageSets list={sets} />
			</Box>
		</Box>
	);
}
