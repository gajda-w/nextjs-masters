import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";
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

	async function handleStripePaymentAction() {
		"use server";

		if (!process.env.STRIPE_SECRET_KEY) {
			throw new Error("Missing STRIPE_SECRET_KEY env variable");
		}

		const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
			apiVersion: "2023-10-16",
			typescript: true,
		});

		const cart = await getCartById(cartId || "");

		if (!cart) {
			return;
		}

		const session = await stripe.checkout.sessions.create({
			metadata: {
				cartId: cart.id,
			},
			line_items: cart.items.map((item) => ({
				price_data: {
					currency: "usd",
					product_data: {
						name: item.product.name,
						// TODO add product description
						description: item.product.name,
						images: item.product.images.map((i) => i.url),
					},
					unit_amount: item.product.price,
				},
				quantity: item.quantity,
			})),
			mode: "payment",
			success_url: `http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `http://localhost:3000/cart/canceled`,
		});
		if (session.url) {
			cookies().set("cartId", "");
			redirect(session.url);
		}
	}

	return (
		<>
			<h1>Order #{cart.id} summary</h1>
			<div className="mt-8 flow-root max-w-lg">
				<CartList items={cart.items} />
			</div>
			<form action={handleStripePaymentAction} className="ml-auto">
				<button
					type="submit"
					className="rounded-sm border  px-8 py-2 shadow-sm transition-colors hover:bg-slate-200"
				>
					Pay
				</button>
			</form>
		</>
	);
}
