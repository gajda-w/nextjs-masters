import { executeGraphql } from "@/api/graphqlApi";
import {
	type CartFragmentFragment,
	CartGetByIdDocument,
	CartFindOrCreateDocument,
	type CartListItemFragmentFragment,
	CartChangeItemQuantityDocument,
	CartAddItemDocument,
	CartRemoveItemDocument,
} from "@/gql/graphql";

export const getCartById = async (cartId: CartFragmentFragment["id"]) => {
	const graphqlResponse = await executeGraphql({
		query: CartGetByIdDocument,
		variables: {
			cartId,
		},
		next: {
			tags: ["cart"],
		},
	});

	return graphqlResponse.cart as CartFragmentFragment;
};

export const findOrCreateCart = async (
	productId: CartListItemFragmentFragment["product"]["id"],
	cartId: CartFragmentFragment["id"],
) => {
	const cart = await executeGraphql({
		query: CartFindOrCreateDocument,
		variables: {
			productId,
			cartId: cartId ?? "",
		},
	});

	return cart.cartFindOrCreate;
};

export const changeItemQuantity = async (
	productId: CartListItemFragmentFragment["product"]["id"],
	cartId: CartFragmentFragment["id"],
	quantity: number,
) => {
	await executeGraphql({
		query: CartChangeItemQuantityDocument,
		variables: {
			cartId,
			productId,
			quantity,
		},
	});
};

export const addItemToCart = async (
	productId: CartListItemFragmentFragment["product"]["id"],
	cartId: CartFragmentFragment["id"],
	quantity: number,
) => {
	await executeGraphql({
		query: CartAddItemDocument,
		variables: {
			productId: productId,
			cartId,
			quantity,
		},
	});
};

export const removeItemFromCart = async (
	productId: CartListItemFragmentFragment["product"]["id"],
	cartId: CartFragmentFragment["id"],
) => {
	const cart = await executeGraphql({
		query: CartRemoveItemDocument,
		variables: {
			productId,
			cartId,
		},
	});

	return cart.cartRemoveItem;
};
