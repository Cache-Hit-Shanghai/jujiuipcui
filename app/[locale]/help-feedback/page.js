import { HelpFeedbackPage } from './components';

export default function Page() {
	const list = Array.from({ length: 20 }, (v, k) => {
		const _id = k.toString();
		return {
			_id,
			title: 'post' + _id,
			tags: ['bug', '建议', '功能', '文档', '帮助'],
			user: { nickname: 'user0' },
			createdAt: '2023-07-28 11:05:55',
		};
	});

	return <HelpFeedbackPage {...{ list }} />;
}
