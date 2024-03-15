"use client";

import clsx from "clsx";
import { useState } from "react";

export const SizePicker = () => {
	const sizes = [
		{
			value: "xs",
		},
		{
			value: "m",
		},
		{
			value: "xl",
		},
	];

	const [activeSize, setActiveSize] = useState<string | null>(null);

	return (
		<fieldset className="mt-3">
			<div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
				{sizes.map((size) => (
					<label
						title={size.value.toUpperCase()}
						key={size.value}
						className={clsx(
							"flex cursor-pointer items-center justify-center border px-2 py-3 uppercase transition-all focus:outline-none sm:flex-1",
							activeSize === size.value ? "ring ring-offset-1" : "hover:border-gray-400",
						)}
					>
						<input
							type="radio"
							name="size-choice"
							value="XS"
							className="sr-only"
							onChange={() => setActiveSize(size.value)}
						/>
						<span id="size-choice-1-label">{size.value.toLocaleUpperCase()}</span>
					</label>
				))}
			</div>
		</fieldset>
	);
};
