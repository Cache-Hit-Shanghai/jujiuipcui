import { IpcMain } from '@/jujiu-ui-components/ipc/common';
import { OtaContent } from './components';

export default function Page() {
	const devices = Array.from({ length: 97 }, (v, i) => {
		const _id = i.toString();
		return {
			_id,
			desc: 'test' + _id,
			usn: _id,
			currentVersion: '1.0.0',
			upgradeVersion: '2.0.0',
			upgradeSize: 0,
			updateLog: 'this is update log',
		};
	});

	return (
		<IpcMain overflow={{ vertical: 'scroll' }}>
			<OtaContent {...{ devices }} />
		</IpcMain>
	);
}
