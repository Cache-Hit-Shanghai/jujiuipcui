'use client';

import { OtaDeviceList } from '@/jujiu-ui-components/ipc/ota';

function OtaPage() {
	const list = Array.from({ length: 30 }, (v, i) => {
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

	return <OtaDeviceList parseSize={() => '5MB'} data={list} />;
}

export { OtaPage };
