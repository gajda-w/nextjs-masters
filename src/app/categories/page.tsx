import { getCategories } from "@/api/products";
import { CategoriesList } from "@/components/organisms/CategoriesList";

export default async function Collections() {
	const categories = await getCategories(0);
	return (
		<>
			<h2>Categories</h2>
			<CategoriesList categories={categories} />
		</>
	);
}
