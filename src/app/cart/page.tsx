import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CartList } from "@/components/organisms/CartList";
import { getCartById } from "@/api/cart";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	const cart = await getCartById(cartId);

	if (!cart) {
		redirect("/");
	}

	return (
		<>
			<h1>Order #{cart.id} summary</h1>
			<div className="mt-8 flow-root max-w-lg">
				<CartList items={cart.items} />
			</div>
		</>
	);
}
