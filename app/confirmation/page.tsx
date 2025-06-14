'use client';
import { useStripeCheckoutConfirmation } from '@/hooks/stripe/useStripeCheckoutConfirmation';
import Link from 'next/link';
import { Suspense } from 'react';

function ConfirmationContent() {
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


export default function ConfirmationPage() {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <ConfirmationContent />
        </Suspense>
    );
}
