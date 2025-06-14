'use client';
import { useStripeCheckoutConfirmation } from '@/hooks/stripe/useStripeCheckoutConfirmation';
import Link from 'next/link';


export default function Confirmation() {
    const status = useStripeCheckoutConfirmation();

    return (
        <main>
            {status === 'verifying' && <h1>Verifying your payment...</h1>}
            {status === 'non-payment' && <h1>No order confirmation found</h1>}
            {status === 'paid' && <h1>Thank you for your order!</h1>}
            {status === 'failed' && <h1>Could not verify payment.</h1>}
            <Link href="/">Return Home</Link>
        </main>
    );
}
