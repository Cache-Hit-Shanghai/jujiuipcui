'use client';

import { ButtonLink, IconBack } from '@/jujiu-ui-components/core';
import { IpcMain } from '@/jujiu-ui-components/ipc/common';
import { PostBody, PostHead, PostTagController, PostTags } from '@/jujiu-ui-components/ipc/help-feedback';
import { IpcMarkDownInput } from '@/jujiu-ui-components/ipc/markdown';
import { useJuJiuT } from '@/state/translate';
import { Box, Heading, Button, Card } from 'grommet';

const markDownComponents = {
	img: {
		props: {
			style: {
				width: '100%',
				objectFit: 'contain',
			},
		},
	},
};

function PostPage({ post, tagData, messages }) {
	const t = useJuJiuT();

	return (
		<IpcMain>
			<RowBox justify='between' flex={false}>
				<RowBox>
					<IconBack />
					<Heading level='2'>{post.title}</Heading>
					<PostTags {...{ tagData }} />
				</RowBox>
				<RowBox>
					<ButtonLink href='/help-feedback/edit' label={t('编辑')} />
					<PostTagController {...{ tagData }} />
				</RowBox>
			</RowBox>
			<Box flex={true} overflow='auto'>
				<Box fill='horizontal' pad={{ vertical: 'small' }} gap='small' flex={false}>
					<PostBody parseTime={(v) => v} {...{ messages }} />
					<Card background='background-contrast' pad='small'>
						<IpcMarkDownInput upload={<Button label={t('上传本地图片')} />} {...{ markDownComponents }} />
						<Button label={t('发布')} />
					</Card>
				</Box>
			</Box>
		</IpcMain>
	);
}

function RowBox({ children, ...props }) {
	return (
		<Box direction='row' gap='small' align='center' wrap={true} {...props}>
			{children}
		</Box>
	);
}

export { PostPage };
