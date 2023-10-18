import { PostPage } from './components';

export default function Page() {
	const post = { _id: '0', title: 'just another normal post' };
	const tagData = Object.fromEntries(['bug', '建议', '功能', '文档', '帮助'].map((key) => [key, true]));
	const messages = Array.from({ length: 11 }, (v, k) => {
		return {
			user: { nickname: 'user0' },
			text: '1. first\n2. second\n\n- list\n- list\n\n`this is code`',
			createdAt: '2023-07-28 11:06:04',
		};
	});

	return <PostPage {...{ post, tagData, messages }} />;
}
