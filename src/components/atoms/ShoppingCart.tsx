import { ShoppingBag } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import { getCartById } from "@/utils/cart";

export const ShoppingCart = async () => {
	const cartId = cookies().get("cartId")?.value as string;

	const cart = cartId ? await getCartById(cartId) : null;

	const totalQuantity = cart ? cart.items.reduce((acc, item) => acc + item.quantity, 0) : 0;

	return (
		<Link href="/cart" className="flex gap-2 text-gray-700">
			<ShoppingBag size={24} />
			<span>{totalQuantity}</span>
		</Link>
	);
};
