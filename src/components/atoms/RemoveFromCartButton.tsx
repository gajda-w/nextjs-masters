import { X } from "lucide-react";
import { removeProductFromCartAction } from "@/actions/cart";

export const RemoveFromCartButton = ({
	productId,
	handleRemoveItem,
}: {
	productId: string;
	handleRemoveItem: (productId: string) => void;
}) => {
	return (
		<form>
			<button
				formAction={async () => {
					handleRemoveItem(productId);
					await removeProductFromCartAction(productId);
				}}
				type="submit"
				className="text-red-500 hover:text-red-700"
			>
				<X size="20" />
			</button>
		</form>
	);
};
