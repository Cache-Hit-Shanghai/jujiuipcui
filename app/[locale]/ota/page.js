import { OtaPage } from './components';
import { Box } from 'grommet';

export default function Page() {
	return (
		<Box fill overflow={{ vertical: 'scroll' }}>
			<OtaPage />
		</Box>
	);
}
