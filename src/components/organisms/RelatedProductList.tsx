import { getProductsByCategorySlug } from "@/api/products";
import { ProductsList } from "@/components/organisms/ProductsList";

export const RelatedProductList = async ({ slug }: { slug: string }) => {
	const category = await getProductsByCategorySlug(slug);

	return (
		category && (
			<div className="mb-20 mt-10" data-testid="related-products">
				<h2>Related products</h2>
				<ProductsList products={category.products.slice(0, 4)} />
			</div>
		)
	);
};
