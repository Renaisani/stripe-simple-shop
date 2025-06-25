'use client';
import { useStripeCheckoutConfirmation } from '@/hooks/stripe/useStripeCheckoutConfirmation';
import { Suspense } from 'react';
import PaidConfirmationPage from './order-paid';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import VerifyingConfirmationPage from './order-verifying';
import UnknownConfirmationPage from './no-order';
import ConfirmationFailurePage from './order-failed';

function ConfirmationContent() {
    const { status, order } = useStripeCheckoutConfirmation();

    return (
        <>
            <Header />
            <main className='products-page'>
                {status === 'verifying' && <VerifyingConfirmationPage />}
                {status === 'non-payment' && <UnknownConfirmationPage />}
                {status === 'paid' && <PaidConfirmationPage order={order} />}
                {status === 'failed' && <ConfirmationFailurePage />}
            </main>
            <Footer />
        </>
    );
}

function ConfirmationFallback() {

    return (
        <>
            <Header />
            <main className='products-page'>
                <VerifyingConfirmationPage />
            </main>
            <Footer />
        </>
    );
}


export default function ConfirmationPage() {
    return (
        <Suspense fallback={<ConfirmationFallback />}>
            <ConfirmationContent />
        </Suspense>
    );
}
