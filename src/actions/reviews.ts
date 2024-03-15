"use server";

import { revalidateTag } from "next/cache";
import { createReview } from "@/api/reviews";

export async function createReviewAction(
	productId: string,
	author: string,
	title: string,
	description: string,
	rating: number,
	email: string,
) {
	await createReview(
		productId,
		author,
		title,
		description,
		rating,
		email,
	);

	revalidateTag("reviews");
}
