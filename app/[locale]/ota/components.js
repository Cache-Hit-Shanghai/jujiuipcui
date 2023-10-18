'use client';

import { OtaDeviceCard, OtaDeviceList } from '@/jujiu-ui-components/ipc/ota';
import { Grid } from 'grommet';

function OtaContent({ devices = [] }) {
	return (
		<Grid columns='medium' rows='small' gap='small'>
			{devices.map(({ _id, desc, usn, ...otaInfo }) => (
				<OtaDeviceCard key={usn} device={{ _id, desc, usn }} parseSize={() => '5MB'} {...{ otaInfo }} />
			))}
		</Grid>
	);
}

export { OtaContent };
