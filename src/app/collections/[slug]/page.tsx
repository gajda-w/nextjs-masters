import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { SingleCollection } from "@/components/organisms/SingleCollection";
import { getProductsByCollectionSlug } from "@/api/products";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const collection = await getProductsByCollectionSlug(params.slug);

	if (!collection) {
		return {};
	}

	return {
		title: collection.name,
	};
}

export default async function SingleCollectionPage({ params }: { params: { slug: string } }) {
	const collection = await getProductsByCollectionSlug(params.slug);

	if (!collection) {
		notFound();
	}

	return <SingleCollection collection={collection} />;
}
