import clsx from "clsx";
import { Star } from "lucide-react";

export const Rating = ({
	rate,
	size = 20,
	displayNumber,
}: {
	rate: number;
	size?: number;
	displayNumber?: boolean;
}) => {
	const ratingScale = [1, 2, 3, 4, 5];
	return (
		<div className="flex items-center">
			{displayNumber && <div data-testid="product-rating">{rate}</div>}
			{ratingScale.map((index) => (
				<Star
					size={size}
					className={clsx(
						"fill-current",
						Math.ceil(rate) >= index ? "text-orange-500" : "text-gray-500",
					)}
					key={index}
				/>
			))}
		</div>
	);
};
