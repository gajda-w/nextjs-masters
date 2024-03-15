"use client";

import { useOptimistic } from "react";
import { type ReviewListItemFragmentFragment } from "@/gql/graphql";
import { ReviewListItem } from "@/components/molecules/ReviewListItem";
import { AddNewReviewForm } from "@/components/molecules/AddNewReviewForm";

export const ReviewList = ({
	productId,
	reviews,
}: {
	productId: string;
	reviews: ReviewListItemFragmentFragment[];
}) => {
	const [optimisticReviews, setOptimisticReviews] = useOptimistic(
		reviews,
		(state: ReviewListItemFragmentFragment[], newReview: ReviewListItemFragmentFragment) => [
			...state,
			newReview,
		],
	);

	const handleAddReview = (review: ReviewListItemFragmentFragment) => {
		setOptimisticReviews(review);
	};

	return (
		<div className="gap-x-12 lg:grid lg:grid-cols-12">
			<div className="mb-16 lg:col-span-4 lg:mb-0">
				<AddNewReviewForm productId={productId} handleAddReview={handleAddReview} />
			</div>
			<div className="lg:col-span-8">
				<div className="flow-root">
					<div className="-my-12 divide-y divide-gray-200">
						{optimisticReviews.map((review) => (
							<ReviewListItem key={review.id} review={review} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
