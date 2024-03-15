import { type ReviewListItemFragmentFragment } from "@/gql/graphql";
import { Rating } from "@/components/atoms/Rating";

export const ReviewListItem = ({ review }: { review: ReviewListItemFragmentFragment }) => {
	return (
		<div className="py-12">
			<div className="flex items-center">
				<div>
					<h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
					<div className="mt-2 flex items-center">
						<Rating rate={review.rating} />
					</div>
				</div>
			</div>

			<div className="mt-4 space-y-6 text-base font-bold italic text-gray-600">
				<p>{review.title}</p>
			</div>

			<div className="mt-4 space-y-6 text-base italic text-gray-600">
				<p>{review.description}</p>
			</div>
		</div>
	);
};
