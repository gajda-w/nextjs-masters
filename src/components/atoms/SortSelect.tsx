"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

export const SortSelect = ({
	type,
	direction,
	pageNumber,
}: {
	type: string;
	direction: string;
	pageNumber: string;
}) => {
	const router = useRouter();
	const ref = useRef<HTMLSelectElement>(null);

	function handleChange() {
		const selectedOption = (ref.current as HTMLSelectElement).value.split("|");

		const orderBy = selectedOption[0];
		const order = selectedOption[1];

		router.push(`/products/${pageNumber}?orderBy=${orderBy}&order=${order}`);
	}

	return (
		<select
			onChange={handleChange}
			ref={ref}
			defaultValue={`${type}|${direction}`}
			className="bg-ri mt-2 block w-48 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
		>
			<option value="" hidden className="text-gray-300">
				- Sort -
			</option>
			<option value="PRICE|ASC" data-testid="sort-by-price">
				Price (Low to High)
			</option>
			<option value="PRICE|DESC" data-testid="sort-by-price">
				Price (High to Low)
			</option>
			<option value="RATING|ASC" data-testid="sort-by-rating">
				Rating (Low to High)
			</option>
			<option value="RATING|DESC" data-testid="sort-by-rating">
				Rating (High to Low)
			</option>
		</select>
	);
};
