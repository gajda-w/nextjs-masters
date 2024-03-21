import { getCollections } from "@/utils/products";
import { CollectionsList } from "@/components/organisms/CollectionsList";

export default async function Collections() {
	const collections = await getCollections(0);
	return (
		<>
			<CollectionsList collections={collections} />
		</>
	);
}
