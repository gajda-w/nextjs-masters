import { ProductListItem } from "@/components/ProductListItem";

const products = [
	{
		id: 1,
		name: "Product 1",
		image:
			"https://storefront-nextjs-wine.vercel.app/_next/image?url=https%3A%2F%2Fstore-jibjen8y.eu.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fsaleor-ascii-shirt-front_thumbnail_4096.png&w=256&q=75",
		price: 100,
		category: "Category 1",
	},
	{
		image:
			"https://storefront-nextjs-wine.vercel.app/_next/image?url=https%3A%2F%2Fstore-jibjen8y.eu.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fsaleor-ascii-shirt-front_thumbnail_4096.png&w=256&q=75",
		id: 2,
		name: "Product 2",
		price: 200,
		category: "Category 1",
	},
	{
		image:
			"https://storefront-nextjs-wine.vercel.app/_next/image?url=https%3A%2F%2Fstore-jibjen8y.eu.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fsaleor-ascii-shirt-front_thumbnail_4096.png&w=256&q=75",
		id: 3,
		name: "Product 3",
		price: 300,
		category: "Category 2",
	},
	{
		image:
			"https://storefront-nextjs-wine.vercel.app/_next/image?url=https%3A%2F%2Fstore-jibjen8y.eu.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fsaleor-ascii-shirt-front_thumbnail_4096.png&w=256&q=75",
		id: 3,
		name: "Product 3",
		price: 300,
		category: "Category 2",
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ul data-testid="products-list" className="flex flex-wrap gap-[20px]">
				{products.map((product) => (
					<ProductListItem product={product} key={product.id} />
				))}
			</ul>
		</main>
	);
}
