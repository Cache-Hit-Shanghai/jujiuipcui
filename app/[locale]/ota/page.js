import { OtaPage } from './components';
import { Box, Main } from 'grommet';

export default function Page() {
	return (
		<Main flex={true} overflow={{ vertical: 'scroll' }} background={'background'} pad='medium'>
			<OtaPage />
		</Main>
	);
}
