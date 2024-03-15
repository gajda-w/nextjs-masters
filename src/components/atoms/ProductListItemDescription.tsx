import { type ProductListItemFragmentFragment } from "@/gql/graphql";
import { Rating } from "@/components/atoms/Rating";
import { formatPrice } from "@/utils";

export const ProductListItemDescription = ({
	product: { categories, name, price, rating },
}: {
	product: ProductListItemFragmentFragment;
}) => {
	return (
		<div className="mt-2">
			<div className="flex items-center justify-between">
				<h3>{name}</h3>
				<p data-testid="product-price">{formatPrice(price)}</p>
			</div>
			<div className="mt-1 flex items-center justify-between">
				{categories[0] && <p>{categories[0].name}</p>}
				{rating && <Rating rate={Number(rating.toFixed(2))} size={16} displayNumber={true} />}
			</div>
		</div>
	);
};
