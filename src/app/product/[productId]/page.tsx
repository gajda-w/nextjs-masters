import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { SingleProduct } from "@/components/organisms/SingleProduct";
import { RelatedProductList } from "@/components/organisms/RelatedProductList";
import { getProductById } from "@/api/products";
import { Reviews } from "@/components/organisms/Reviews";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);

	if (!product) {
		return {};
	}

	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			type: "website",
		},
	};
}

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	if (!product) {
		notFound();
	}

	return (
		<>
			<SingleProduct product={product} />
			<Suspense>
				<RelatedProductList slug={product.categories[0] ? product.categories[0].slug : ""} />
			</Suspense>
			<Suspense>
				<Reviews productId={params.productId} />
			</Suspense>
		</>
	);
}
