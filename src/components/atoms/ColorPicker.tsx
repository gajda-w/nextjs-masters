"use client";

import clsx from "clsx";
import { useState } from "react";

export const ColorPicker = () => {
	const colors = [
		{
			value: "black",
			color: "black",
		},
		{
			value: "white",
			color: "white",
		},
		{
			value: "red",
			color: "red-500",
		},
	];

	const [activeColor, setActiveColor] = useState<string | null>(null);

	return (
		<fieldset className="mt-3">
			<div className="flex items-center space-x-3">
				{colors.map((color) => (
					<label
						title={`${color.value.split("")[0]?.toLocaleUpperCase()}${color.value.slice(1)}`}
						key={color.color}
						className={clsx(
							"relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 transition-all duration-200 focus:outline-none",
							`ring-${color.color}`,
							activeColor === color.value
								? "ring ring-offset-1"
								: "hover:ring-2 hover:ring-gray-400",
						)}
					>
						<input
							type="radio"
							name="color-choice"
							value={color.value}
							className="sr-only"
							aria-labelledby="color-choice-0-label"
							onChange={() => setActiveColor(color.value)}
						/>
						<span
							aria-hidden="true"
							className={clsx(
								"h-6 w-6 rounded-full border border-black border-opacity-10",
								`bg-${color.color}`,
							)}
						></span>
					</label>
				))}
			</div>
		</fieldset>
	);
};
