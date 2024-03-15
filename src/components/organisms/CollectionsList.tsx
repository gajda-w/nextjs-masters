import { type CollectionListItemFragmentFragment } from "@/gql/graphql";
import { CollectionListItem } from "@/components/molecules/CollectionListItem";

export const CollectionsList = ({
	collections,
}: {
	collections: CollectionListItemFragmentFragment[];
}) => {
	return (
		<ul className="grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
			{collections.map((collection) => (
				<CollectionListItem collection={collection} key={collection.id} />
			))}
		</ul>
	);
};
