import { addProductToCartAction } from "@/actions/cart";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";
import { AddToCartButton } from "@/components/organisms/AddToCartButton";
import { ColorPicker } from "@/components/atoms/ColorPicker";
import { ProductImage } from "@/components/atoms/ProductImage";
import { SizePicker } from "@/components/atoms/SizePicker";
import { formatPrice } from "@/utils";

export const SingleProduct = ({ product }: { product: ProductListItemFragmentFragment }) => {
	return (
		<article className="sm:grid sm:grid-cols-2 sm:gap-8">
			{product.images[0] && (
				<ProductImage
					src={product.images[0].url}
					alt={product.images[0].alt}
					width={256}
					height={256}
				/>
			)}
			<div className="mt-8 sm:mt-0">
				<div className="mb-8">
					<h1>{product.name}</h1>
					{product.categories[0] && <span>{product.categories[0].name}</span>}
				</div>
				<p>{formatPrice(product.price)}</p>
				<div className="mt-5">
					<h2>Color</h2>
					<ColorPicker />
				</div>
				<div className="mt-5">
					<h2>Size</h2>
					<SizePicker />
				</div>
				<p>{product.description}</p>
				<form action={addProductToCartAction}>
					<input type="hidden" name="productId" value={product.id} />
					<AddToCartButton />
				</form>
			</div>
		</article>
	);
};
