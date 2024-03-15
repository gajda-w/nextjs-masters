"use client";

import clsx from "clsx";
import { Star } from "lucide-react";
import { Fragment, type Ref, forwardRef, useImperativeHandle, useState } from "react";

export const StarsRadioButtons = forwardRef(function StarsRadioButtons(
	{ range }: { range: number },
	ref: Ref<{ resetState: () => void }>,
) {
	const [rating, setRating] = useState<number | null>(null);
	const [hover, setHover] = useState<number | null>(null);

	useImperativeHandle(
		ref,
		() => {
			return {
				resetState() {
					setRating(null);
				},
			};
		},
		[],
	);

	return (
		<fieldset className="flex">
			{Array.from({ length: range }, (value, _index) => value).map((_, index) => {
				const currentRating = index + 1;

				return (
					<Fragment key={currentRating}>
						<input
							type="radio"
							className="sr-only"
							id={`rating-${currentRating}`}
							name="rating"
							value={currentRating}
							required
							onChange={() => setRating(currentRating)}
						></input>
						<label
							htmlFor={`rating-${currentRating}`}
							className="cursor-pointer"
							onMouseEnter={() => setHover(currentRating)}
							onMouseLeave={() => setHover(null)}
						>
							<Star
								size={22}
								className={clsx(
									"fill-current",
									currentRating <= ((hover as number) || (rating as number))
										? "text-yellow-400"
										: "text-gray-300",
								)}
							/>
						</label>
					</Fragment>
				);
			})}
		</fieldset>
	);
});
