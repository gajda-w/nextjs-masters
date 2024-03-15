"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const status = useFormStatus();

	return (
		<button
			data-testid="add-to-cart-button"
			type="submit"
			disabled={status.pending}
			className="mt-8 flex w-full items-center justify-center bg-slate-500 px-8 py-3 text-base"
		>
			{status.pending ? (
				<>
					<Loader2 className="mr-2 animate-spin" /> Processing...
				</>
			) : (
				"Add to cart"
			)}
		</button>
	);
};
