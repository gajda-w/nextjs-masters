import Link from "next/link";
import { ProductListItemDescription } from "@/components/atoms/ProductListItemDescription";
import { ProductImage } from "@/components/atoms/ProductImage";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

export const ProductListItem = ({ product }: { product: ProductListItemFragmentFragment }) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article className="group">
					{product.images[0] && (
						<ProductImage
							src={product.images[0].url}
							alt={product.images[0].alt}
							width={256}
							height={256}
						/>
					)}
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
