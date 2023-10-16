import { PayPage } from './components';

export default function Page() {
	const priceList = Array.from({ length: 15 }, (v, k) => ({
		_id: k.toString(),
		price: 10000,
		discount: 3000,
		info: { month: 6, day: 7 },
	}));

	return <PayPage {...{ priceList }} />;
}
