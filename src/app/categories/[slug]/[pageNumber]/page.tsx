import { notFound } from "next/navigation";
import { type Route, type Metadata } from "next";
import { Pagination } from "@/components/molecules/Pagination";
import { ProductsList } from "@/components/organisms/ProductsList";
import { getProductsByCategorySlug } from "@/api/products";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const category = await getProductsByCategorySlug(params.slug);

	if (!category) {
		return {};
	}

	return {
		title: category.name,
	};
}

export default async function SingleCategoryPage({
	params,
}: {
	params: { slug: string; pageNumber: string };
}) {
	const category = await getProductsByCategorySlug(params.slug);

	if (!category) {
		notFound();
	}

	const total = category.products.length;

	return (
		<>
			<h2>{category.name}</h2>
			<ProductsList products={category.products} />
			<Pagination total={total} itemsPerPage={10} route={`/categories/${params.slug}` as Route} />
		</>
	);
}
