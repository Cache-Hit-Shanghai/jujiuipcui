'use client';

import { IconBack } from '@/jujiu-ui-components/core';
import {
	CloudStorageAvailableSets,
	CloudStorageTitle,
	PayFooter,
} from '@/jujiu-ui-components/ipc/cloud-storage';
import { Box } from 'grommet';
import { Alipay } from '@styled-icons/remix-fill/Alipay';
import { WechatPay } from '@styled-icons/remix-line/WechatPay';

function PayPage({ priceList }) {
	const combo = { _id: '0', price: 10000, discount: 3000, info: { month: 6, day: 7 } };
	const paymentList = [
		{ payment: 'wx', Icon: WechatPay, background: '#1aad19' },
		{ payment: 'ali', Icon: Alipay, background: '#1678ff' },
	];

	return (
		<Box fill background={'white'} pad='medium'>
			<Box direction='row' gap='small' width='100%' flex={false}>
				<IconBack />
				<CloudStorageTitle text='套餐选择' />
			</Box>
			<Box flex={{ grow: 10, shrink: 1 }} overflow={{ vertical: 'scroll' }} border>
				<Box width='100%' flex={false} gap='small'>
					<CloudStorageAvailableSets selectedCombo={combo} {...{ priceList }} />
				</Box>
			</Box>
			<Box flex={false}>
				<PayFooter {...{ paymentList, combo }} />
			</Box>
		</Box>
	);
}

export { PayPage };
