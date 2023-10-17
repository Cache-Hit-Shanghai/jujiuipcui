import { IpcMain } from '@/jujiu-ui-components/ipc/common';
import { OtaPage } from './components';
import { Box, Main } from 'grommet';

export default function Page() {
	return (
		<IpcMain overflow={{ vertical: 'scroll' }}>
			<OtaPage />
		</IpcMain>
	);
}
