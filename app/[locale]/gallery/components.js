'use client';

import { JuJiuLayer } from '@/jujiu-ui-components/core';
import {
	DateCard,
	ImageView,
	LinkBoxImage,
	LinkBoxVideo,
	VideoView,
} from '@/jujiu-ui-components/ipc/gallery';
import { Box } from 'grommet';
import { useState } from 'react';

const IMAGE_URL = 'https://pic35.photophoto.cn/20150511/0034034892281415_b.jpg';
const ELEMENT_WIDTH = '112.57px';

function MediaLayer({ isOpen, type, url, close }) {
	return (
		isOpen && (
			<JuJiuLayer position='center' onClickOutside={close}>
				<Box width='100%' height='80vh'>
					{
						{
							image: <ImageView {...{ url }} onShare={() => {}} onDelete={() => {}} />,
							video: <VideoView {...{ url }} />,
						}[type]
					}
				</Box>
			</JuJiuLayer>
		)
	);
}

function GalleryPage() {
	const [mediaLayer, setMediaLayer] = useState({ isOpen: false });

	return (
		<Box fill overflow={{ vertical: 'scroll' }}>
			<Box width='100%' flex={false} gap='small'>
				<DateCard title='2023/01/01' elWidth={ELEMENT_WIDTH}>
					{Array.from({ length: 60 }, (v, i) => (
						<LinkBoxImage
							key={i}
							url={IMAGE_URL}
							onClick={() => setMediaLayer({ url: IMAGE_URL, type: 'image', isOpen: true })}
						/>
					))}
				</DateCard>
				<DateCard title='2023/01/02' elWidth={ELEMENT_WIDTH}>
					{Array.from({ length: 30 }, (v, i) => (
						<LinkBoxVideo
							key={i}
							url={IMAGE_URL}
							onClick={() => setMediaLayer({ url: IMAGE_URL, type: 'video', isOpen: true })}
						/>
					))}
				</DateCard>
				<DateCard title='2023/01/03' elWidth={ELEMENT_WIDTH}>
					{Array.from({ length: 30 }, (v, i) => (
						<LinkBoxVideo
							key={i}
							url={IMAGE_URL}
							onClick={() => setMediaLayer({ url: IMAGE_URL, type: 'video', isOpen: true })}
						/>
					))}
				</DateCard>
			</Box>
			<MediaLayer {...mediaLayer} close={() => setMediaLayer({ isOpen: false })} />
		</Box>
	);
}

export { GalleryPage };
