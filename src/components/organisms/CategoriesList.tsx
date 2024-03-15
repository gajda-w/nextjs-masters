import { type CategoryListItemFragmentFragment } from "@/gql/graphql";
import { CategoryListItem } from "@/components/molecules/CategoryListItem";

export const CategoriesList = ({
	categories,
}: {
	categories: CategoryListItemFragmentFragment[];
}) => {
	return (
		<ul className="grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
			{categories.map((category) => (
				<CategoryListItem category={category} key={category.id} />
			))}
		</ul>
	);
};
