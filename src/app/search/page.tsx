import { getProductsBySearch } from "@/api/products";
import { searchCharactersLimit } from "@/consts";
import { ProductsList } from "@/components/organisms/ProductsList";

export default async function SearchPage({ searchParams }: { searchParams: { query: string } }) {
	const products =
		searchParams.query && searchParams.query.length >= searchCharactersLimit
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
