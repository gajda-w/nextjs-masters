import { type Route } from "next";
import { getProducts, getProductsByOrder } from "@/api/products";
import { type InputMaybe, type ProductSortBy, type SortDirection } from "@/gql/graphql";
import { SortSelect } from "@/components/atoms/SortSelect";
import { paginationItemsPerPage } from "@/consts";
import { Pagination } from "@/components/molecules/Pagination";
import { ProductsList } from "@/components/organisms/ProductsList";

export async function generateStaticParams() {
	const products = await getProducts(paginationItemsPerPage);

	const numberOfStaticPages = 3;
	const total = products.data.length;

	if (total <= 0) {
		return [];
	}

	const numberOfAllPages = Math.ceil(total / paginationItemsPerPage);

	const loopCount = Math.min(numberOfStaticPages, numberOfAllPages);

	return Array.from({ length: loopCount }, (_value, index) => {
		return {
			pageNumber: (index + 1).toString(),
		};
	});
}

export default async function ProductsPage({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { orderBy: string; order: string };
}) {
	const skip = (Number(params.pageNumber) - 1) * paginationItemsPerPage;

	const { orderBy, order } = searchParams;

	const products =
		orderBy && order
			? await getProductsByOrder(
					paginationItemsPerPage,
					skip,
					orderBy as InputMaybe<ProductSortBy>,
					order as InputMaybe<SortDirection> | undefined,
				)
			: await getProducts(paginationItemsPerPage, skip);

	return (
		<>
			<div className="mb-8 flex items-center justify-between">
				<h2>All products</h2>
				<SortSelect
					type={searchParams.orderBy}
					direction={searchParams.order}
					pageNumber={params.pageNumber}
				/>
			</div>
			<ProductsList products={products.data} />
			<Pagination
				total={products.meta.total}
				itemsPerPage={paginationItemsPerPage}
				route={"/products" as Route}
				searchParams={
					searchParams.orderBy && searchParams.order
						? `?orderBy=${searchParams.orderBy}&order=${searchParams.order}`
						: ""
				}
			/>
		</>
	);
}
