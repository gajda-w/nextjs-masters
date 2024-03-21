import { executeGraphql } from "@/api/graphqlApi";
import {
	ReviewCreateDocument,
	ReviewsGetListByProductIdDocument,
} from "@/gql/graphql";

export const getReviewsByProductId = async (id: string) => {
	const graphqlResponse = await executeGraphql({
		query: ReviewsGetListByProductIdDocument,
		variables: {
			id,
		},
		next: {
			tags: ["reviews"],
		},
	});

	return graphqlResponse.product
		? graphqlResponse.product.reviews
		: [];
};

export const createReview = async (
	productId: string,
	author: string,
	title: string,
	description: string,
	rating: number,
	email: string,
) => {
	await executeGraphql({
		query: ReviewCreateDocument,
		variables: {
			productId,
			author,
			title,
			description,
			rating,
			email,
		},
	});
};
