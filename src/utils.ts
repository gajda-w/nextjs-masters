export const formatPrice = (price: number): string => {
	return new Intl.NumberFormat("pl-PL", {
		style: "currency",
		currency: "PLN",
	}).format(price / 100);
};

export const debounce = (callback: () => void, delay: number) => {
	let timeoutId: ReturnType<typeof setTimeout>;

	return function () {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(callback, delay);
	};
};

export const avarageRating = (reviews: { rating: number }[]): string => {
	const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
	return (sum / reviews.length).toFixed(2);
};
