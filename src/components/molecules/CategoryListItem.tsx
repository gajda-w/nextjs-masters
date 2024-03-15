import Link from "next/link";
import { type Route } from "next";
import { type CategoryListItemFragmentFragment } from "@/gql/graphql";

export const CategoryListItem = ({ category }: { category: CategoryListItemFragmentFragment }) => {
	return (
		<li className="group relative ">
			<Link href={`/categories/${category.slug}` as Route}>
				<article className="flex h-[200px] items-center justify-center bg-slate-500 hover:bg-slate-600">
					<div></div>
					<p>{category.name}</p>
					{/* <p>{category.description}</p> */}
				</article>
			</Link>
		</li>
	);
};
