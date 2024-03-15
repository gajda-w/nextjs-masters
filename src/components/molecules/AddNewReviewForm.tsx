import { useRef } from "react";
import { type ReviewListItemFragmentFragment } from "@/gql/graphql";
import { createReviewAction } from "@/actions/reviews";
import { StarsRadioButtons } from "@/components/atoms/StarsRadioButton";

export const AddNewReviewForm = ({
	productId,
	handleAddReview,
}: {
	productId: string;
	handleAddReview: (review: ReviewListItemFragmentFragment) => void;
}) => {
	const formRef = useRef<HTMLFormElement>(null);
	const starsRadioButtonsRef = useRef<{ resetState: () => void }>(null);

	async function handleCreateReview(formData: FormData) {
		const author = formData.get("name") as string;
		const title = formData.get("headline") as string;
		const description = formData.get("content") as string;
		const rating = formData.get("rating") as string;
		const email = formData.get("email") as string;

		handleAddReview({
			id: productId,
			author,
			title,
			description,
			rating: +rating,
			email,
		});

		await createReviewAction(productId, author, title, description, +rating, email);

		formRef.current?.reset();
		starsRadioButtonsRef.current?.resetState();
	}

	return (
		<form ref={formRef} data-testid="add-review-form" action={handleCreateReview}>
			<div className="mb-4">
				<label htmlFor="headline" className="block text-sm font-medium leading-6 text-gray-900">
					Headline
				</label>
				<div className="mt-1">
					<input
						required
						type="text"
						name="headline"
						id="headline"
						className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 outline-none ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 focus:drop-shadow-md sm:text-sm"
					/>
				</div>
			</div>

			<div className="mb-4">
				<label htmlFor="content" className="block text-sm font-medium leading-6 text-gray-900">
					Content
				</label>
				<div className="mt-1">
					<textarea
						required
						name="content"
						id="content"
						className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 outline-none ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 focus:drop-shadow-md sm:text-sm"
					/>
				</div>
			</div>

			<div className="mb-4">
				<label htmlFor="rating" className="block text-sm font-medium leading-6 text-gray-900">
					Rating
				</label>
				<div className="mt-1">
					<StarsRadioButtons range={5} ref={starsRadioButtonsRef} />
				</div>
			</div>

			<div className="mb-4">
				<label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
					Name
				</label>
				<div className="mt-1">
					<input
						required
						type="text"
						name="name"
						id="name"
						className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 outline-none ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 focus:drop-shadow-md sm:text-sm"
					/>
				</div>
			</div>

			<div>
				<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
					Email
				</label>
				<div className="mt-1">
					<input
						required
						type="email"
						name="email"
						id="email"
						className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 outline-none ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 focus:drop-shadow-md sm:text-sm"
					/>
				</div>
			</div>
			<div className="mt-8">
				<button
					type="submit"
					className="block w-full rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold leading-6 text-white transition-colors duration-200 hover:bg-orange-600"
				>
					Submit review
				</button>
			</div>
		</form>
	);
};
