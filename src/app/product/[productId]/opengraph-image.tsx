import { ImageResponse } from "next/og";
import { getProductById } from "@/utils/products";

export const runtime = "edge";

export const alt = "Product image for social sharing";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	if (!product) {
		return null;
	}

	return new ImageResponse(
		(
			<div tw="font-sans w-full text-white h-full flex flex-col justify-center items-center p-5">
				{product.images[0] && (
					<img src={product.images[0].url} alt={product.images[0].alt} width="150" height="150" />
				)}
				<p tw="uppercase m-6 text-5xl leading-4">{product.name}</p>
				{product.categories[0] && <p tw="mt-4 text-2xl">{product.categories[0].name}</p>}
				<p tw="mt-2 text-lg text-center">{product.description}</p>
			</div>
		),
	);
}
