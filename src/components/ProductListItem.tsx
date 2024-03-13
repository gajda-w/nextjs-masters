import Image from "next/image";

type ProductListItemProps = {
	product: {
		id: number;
		image: string;
		name: string;
		price: number;
		category: string;
	};
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="mb-6 max-w-[300px] overflow-hidden rounded-lg bg-white shadow-md">
			<div className="relative h-48">
				<Image
					className="object-cover object-center"
					height={200}
					width={200}
					src={product.image}
					alt={product.name}
				/>
			</div>
			<div className="p-6">
				<h4 className="text-xl font-bold">{product.name}</h4>
				<p className="text-gray-700">{product.category}</p>
				<p className="text-lg font-semibold text-gray-900">{product.price}</p>
			</div>
		</li>
	);
};

ProductListItem.displayName = "ProductListItem";
