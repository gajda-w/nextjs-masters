"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import {
	addItemToCart,
	changeItemQuantity,
	findOrCreateCart,
	getCartById,
	removeItemFromCart,
} from "@/utils/cart";

export async function addProductToCartAction(formData: FormData) {
	const productId = formData.get("productId") as string;
	const cartId = cookies().get("cartId")?.value as string;

	if (!cartId) {
		await createCartWithAddedProduct(productId, cartId);
	} else {
		await addOrUpdateProductToCart(productId, cartId);
	}

	revalidateTag("cart");
}

export async function removeProductFromCartAction(productId: string) {
	const cartId = cookies().get("cartId")?.value as string;

	if (!cartId) {
		redirect("/");
	}

	const cart = await removeItemFromCart(productId, cartId);

	revalidateTag("cart");

	if (cart.items.length === 0) {
		cookies().delete("cartId");
		redirect("/");
	}
}

export async function changeProductQuantityAction(productId: string, quantity: number) {
	const cartId = cookies().get("cartId")?.value as string;

	if (!cartId) {
		redirect("/");
	}

	await changeItemQuantity(productId, cartId, quantity);

	revalidateTag("cart");
}

async function createCartWithAddedProduct(productId: string, cartId: string) {
	const cart = await findOrCreateCart(productId, cartId);

	if (!cart) {
		throw new Error("Failed to create cart!");
	}

	cookies().set("cartId", cart.id, {
		httpOnly: true,
		sameSite: "lax",
		// secure: true // on production
	});

	return cart;
}

async function addOrUpdateProductToCart(productId: string, cartId: string) {
	const cart = await getCartById(cartId);

	if (!cart) {
		throw new Error("Failed to get cart!");
	}

	const item = cart.items.find((item) => item.product.id === productId);

	if (item) {
		await changeItemQuantity(productId, cart.id, item.quantity + 1);
	} else {
		await addItemToCart(productId, cartId, 1);
	}
}
