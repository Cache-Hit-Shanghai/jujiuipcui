'use client';

import {
	HelpFeedbackSearchBox,
	HelpFeedbackList,
	HelpFeedbackPagination,
	HelpFeedbackMenu,
} from '@/jujiu-ui-components/ipc/help-feedback';
import { useJuJiuT } from '@/state/translate';
import { Box, Heading, Nav } from 'grommet';

function getUsername(datum) {
	return datum?.user?.nickname ?? '';
}

function getCreatedAt(datum) {
	return datum?.createdAt ?? '';
}

function HorizontalNoflexBox({ children, ...props }) {
	return (
		<Box fill='horizontal' flex={false} {...props}>
			{children}
		</Box>
	);
}

function HelpFeedbackPage({ list }) {
	const t = useJuJiuT();

	return (
		<Box fill>
			<HorizontalNoflexBox>
				<Box direction='row' justify='between'>
					<Heading level='2'>{`${t('帮助与反馈')} - ${t('全部问题')}`}</Heading>
					<HelpFeedbackMenu />
				</Box>
				<HelpFeedbackSearchBox />
			</HorizontalNoflexBox>
			<Box flex={{ grow: 10, shrink: 1 }} overflow={{ vertical: 'scroll' }}>
				<HorizontalNoflexBox>
					<HelpFeedbackList data={list} {...{ getUsername, getCreatedAt }} />
				</HorizontalNoflexBox>
			</Box>
			<HorizontalNoflexBox>
				<HelpFeedbackPagination numberItems={97} page={1} step={20} />
			</HorizontalNoflexBox>
		</Box>
	);
}

export { HelpFeedbackPage };
