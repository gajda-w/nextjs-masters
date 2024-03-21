import { ProductsList } from "@/components/organisms/ProductsList";
import { CollectionsList } from "@/components/organisms/CollectionsList";
import { CategoriesList } from "@/components/organisms/CategoriesList";
import { getCategories, getCollections, getProducts } from "@/utils/products";

export default async function Home() {
	const products = await getProducts(4);
	const categories = await getCategories(3);
	const collections = await getCollections(3);

	return (
		<>
			<section>
				<h2>Most popular</h2>
				<ProductsList products={products.data} />
			</section>
			<section className="mt-24">
				<h2>Most popular categories</h2>
				<CategoriesList categories={categories} />
			</section>
			<section className="mt-24">
				<h2>Our Collections</h2>
				<CollectionsList collections={collections} />
			</section>
		</>
	);
}
