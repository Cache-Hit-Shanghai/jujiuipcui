'use client';

import { IconBack } from '@/jujiu-ui-components/core';
import { IpcMain } from '@/jujiu-ui-components/ipc/common';
import { PostEditForm } from '@/jujiu-ui-components/ipc/help-feedback';
import { useJuJiuT } from '@/state/translate';
import { Box, Heading } from 'grommet';

function NewPostPage() {
	const t = useJuJiuT();

	return (
		<IpcMain>
			<Box direction='row' align='center' gap='small'>
				<IconBack />
				<Heading level='2'>{t('新建问题')}</Heading>
			</Box>
			<PostEditForm />
		</IpcMain>
	);
}

export { NewPostPage };
