import { type CollectionListItemFragmentFragment } from "@/gql/graphql";
import { ProductsList } from "@/components/organisms/ProductsList";

export const SingleCollection = ({
	collection,
}: {
	collection: CollectionListItemFragmentFragment;
}) => {
	return (
		<>
			<p>Collection</p>
			<h1>{collection.name}</h1>
			<p>{collection.description}</p>
			<ProductsList products={collection.products} />
		</>
	);
};
