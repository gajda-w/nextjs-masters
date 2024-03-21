import { getReviewsByProductId } from "@/utils/reviews";
import { ReviewList } from "@/components/organisms/ReviewList";

export const Reviews = async ({ productId }: { productId: string }) => {
	const reviews = await getReviewsByProductId(productId);

	return (
		<div>
			<h2>Reviews</h2>
			<ReviewList productId={productId} reviews={reviews} />
		</div>
	);
};
