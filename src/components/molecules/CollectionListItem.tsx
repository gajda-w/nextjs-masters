import Link from "next/link";
import { type Route } from "next";
import { type CollectionListItemFragmentFragment } from "@/gql/graphql";

export const CollectionListItem = ({
	collection,
}: {
	collection: CollectionListItemFragmentFragment;
}) => {
	return (
		<li className="group relative">
			<Link href={`/collections/${collection.slug}` as Route} className="group">
				<article className="flex h-[200px] items-center justify-center bg-slate-500 hover:bg-slate-600">
					<h3>{collection.name}</h3>
				</article>
			</Link>
		</li>
	);
};
