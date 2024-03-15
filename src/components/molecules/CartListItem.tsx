import { type CartListItemFragmentFragment } from "@/gql/graphql";
import { ChangeQuantityButtons } from "@/components/atoms/ChangeQuantityButtons";
import { ProductImage } from "@/components/atoms/ProductImage";
import { RemoveFromCartButton } from "@/components/atoms/RemoveFromCartButton";
import { formatPrice } from "@/utils";

export const CartListItem = ({
	item,
	handleRemoveItem,
}: {
	item: CartListItemFragmentFragment;
	handleRemoveItem: (productId: string) => void;
}) => {
	return (
		<li className="flex py-6" key={item.product.id}>
			<div className="mr-4 hidden h-24 w-24 flex-shrink-0 overflow-hidden sm:block">
				{item.product.images[0] && (
					<ProductImage
						src={item.product.images[0].url}
						alt={item.product.images[0].alt}
						width={256}
						height={256}
					/>
				)}
			</div>

			<div className="flex flex-1 flex-col">
				<div>
					<div className="flex justify-between">
						<h3>{item.product.name}</h3>
						<p className="ml-4">{formatPrice(item.product.price)}</p>
					</div>
					<p>{item.product.categories[0] && item.product.categories[0].name}</p>
				</div>
				<div className="flex flex-1 items-end justify-between">
					<ChangeQuantityButtons productId={item.product.id} quantity={item.quantity} />
					<RemoveFromCartButton productId={item.product.id} handleRemoveItem={handleRemoveItem} />
				</div>
			</div>
		</li>
	);
};
