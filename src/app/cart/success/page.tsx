import Stripe from "stripe";
import { STRIPE_API_VERSION } from "@/consts";

export default async function CartSuccess({
	searchParams,
}: {
	searchParams: { session_id: string };
}) {
	if (!process.env.STRIPE_SECRET_KEY) {
		return null;
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: STRIPE_API_VERSION,
		typescript: true,
	});

	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(searchParams.session_id);

	return <div>{stripeCheckoutSession.payment_status}</div>;
}
