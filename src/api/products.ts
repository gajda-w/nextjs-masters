import { executeGraphql } from "@/api/graphqlApi";
import {
	type CategoryListItemFragmentFragment,
	ProductsGetListByCategorySlugDocument,
	CategoriesGetListDocument,
	ProductsGetListByCollectionSlugDocument,
	CollectionsGetListDocument,
	ProductsGetItemDocument,
	ProductsGetListDocument,
	ProductsGetListBySearchDocument,
	ProductsGetListByOrderDocument,
	type InputMaybe,
	type ProductSortBy,
	type SortDirection,
} from "@/gql/graphql";

export const getProductById = async (id: string) => {
	const { product } = await executeGraphql({
		query: ProductsGetItemDocument,
		variables: {
			id,
		},
	});

	return product;
};

export const getProductsByCategorySlug = async (
	slug: CategoryListItemFragmentFragment["slug"],
) => {
	const { category } = await executeGraphql({
		query: ProductsGetListByCategorySlugDocument,
		variables: {
			slug,
		},
	});

	return category;
};

export const getProductsByCollectionSlug = async (
	slug: CategoryListItemFragmentFragment["slug"],
) => {
	const { collection } = await executeGraphql({
		query: ProductsGetListByCollectionSlugDocument,
		variables: {
			slug,
		},
	});

	return collection;
};

export const getProductsBySearch = async (query: string) => {
	const { products } = await executeGraphql({
		query: ProductsGetListBySearchDocument,
		variables: {
			search: query,
		},
	});

	return products.data;
};

export const getProductsByOrder = async (
	take: number,
	skip: number,
	orderBy: InputMaybe<ProductSortBy>,
	order: InputMaybe<SortDirection> | undefined,
) => {
	const { products } = await executeGraphql({
		query: ProductsGetListByOrderDocument,
		variables: {
			take,
			skip,
			orderBy,
			order,
		},
	});

	return products;
};

export const getProducts = async (take: number, skip?: number) => {
	const { products } = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			take,
			...(skip && { skip }),
		},
	});

	return products;
};

export const getCategories = async (take: number, skip?: number) => {
	const { categories } = await executeGraphql({
		query: CategoriesGetListDocument,
		variables: {
			take,
			...(skip && { skip }),
		},
	});

	return categories.data;
};

export const getCollections = async (take: number, skip?: number) => {
	const { collections } = await executeGraphql({
		query: CollectionsGetListDocument,
		variables: {
			take,
			...(skip && { skip }),
		},
	});

	return collections.data;
};
