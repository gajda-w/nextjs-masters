import { ShoppingBag } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
// import { getCardById } from "@/api/cart";

export const ShoppingCart = async () => {
	const cartId = cookies().get("cartId")?.value as string;

	console.log(cartId);

	// const cart = cartId ? await getCardById(cartId) : null;

	// const totalQuantity = cart ? cart.items.reduce((acc, item) => acc + item.quantity, 0) : 0;

	return (
		<Link
			href="/cart"
			className="flex gap-x-2 py-2 pl-3 text-gray-700 transition-colors duration-300 ease-in-out hover:text-orange-500"
		>
			<ShoppingBag size={24} />
			<span className="relative -top-1 font-medium">{/* {totalQuantity} */}1</span>
		</Link>
	);
};
