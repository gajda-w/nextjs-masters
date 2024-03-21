import { getProductsBySearch } from "@/utils/products";
import { SEARCH_CHARACTERS_LIMIT } from "@/consts";
import { ProductsList } from "@/components/organisms/ProductsList";

export default async function SearchPage({ searchParams }: { searchParams: { query: string } }) {
	const products =
		searchParams.query && searchParams.query.length >= SEARCH_CHARACTERS_LIMIT
			? await getProductsBySearch(searchParams.query)
			: [];

	const total = products.length;

	return (
		<>
			<div>
				Found {total} items for phrase &quot;{searchParams.query}
				&quot;
			</div>
			<ProductsList products={products} />
		</>
	);
}
