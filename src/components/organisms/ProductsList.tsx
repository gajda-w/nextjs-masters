import { type ProductListItemFragmentFragment } from "@/gql/graphql";
import { ProductListItem } from "@/components/molecules/ProductListItem";

export const ProductsList = ({ products }: { products: ProductListItemFragmentFragment[] }) => {
	return (
		<ul className="flex flex-wrap gap-6" data-testid="products-list">
			{products.map((product) => (
				<ProductListItem product={product} key={product.id} />
			))}
		</ul>
	);
};
