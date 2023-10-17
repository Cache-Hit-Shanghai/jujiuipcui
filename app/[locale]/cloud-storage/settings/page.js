import { IconBack } from '@/jujiu-ui-components/core';
import {
	CloudStorageService,
	CloudStorageSets,
	CloudStorageTitle,
} from '@/jujiu-ui-components/ipc/cloud-storage';
import { IpcMain } from '@/jujiu-ui-components/ipc/common';
import { Box } from 'grommet';

export default function Page() {
	const sets = Array.from({ length: 30 }, () => ({
		title: '7天月套餐',
		start: '2023-09-21 15:29:24',
		end: '2023-09-21 15:29:24',
	}));

	return (
		<IpcMain gap='small'>
			<Box width='100%' gap='small' flex={false}>
				<Box direction='row' gap='small'>
					<IconBack />
					<CloudStorageTitle text='云存储设置' />
				</Box>
				<CloudStorageService checked={true} />
			</Box>
			<Box flex={true} overflow='auto'>
				<Box fill='horizontal' flex={false} pad={{ vertical: 'small' }}>
					<CloudStorageSets list={sets} />
				</Box>
			</Box>
		</IpcMain>
	);
}
