'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useCart } from '@/stripe-cart-kit';

type ConfirmationStatus = 'verifying' | 'paid' | 'failed' | 'non-payment';
export type OrderTypes = {
    id: string,
    created: number,
    amount: number | null,
    currency: string | undefined,
    items: LineItem[],
}
type LineItem = {
    name: string,
    quantity: number | null,
    unit_price: number,
    total: number | null,
}
type StripeCheckoutData = {
    status: ConfirmationStatus,
    order: OrderTypes | null,
}

export function useStripeCheckoutConfirmation(): StripeCheckoutData {
    const { clearCart } = useCart();
    const searchParams = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const [status, setStatus] = useState<ConfirmationStatus>('verifying');
    const hasVerified = useRef(false);
    const [order, setOrder] = useState<OrderTypes | null>(null);


    useEffect(() => {
        if (!sessionId) {
            setStatus('non-payment');
            return;
        }

        if (hasVerified.current) return;

        const verifySession = async () => {
            try {
                const res = await fetch(`/api/verify-checkout?session_id=${sessionId}`);
                const data = await res.json();

                const stored = sessionStorage.getItem('handledSessionIds');
                const handledIds: string[] = stored ? JSON.parse(stored) : [];

                const hasHandled = handledIds.includes(sessionId);

                if (data.success && !hasHandled) {
                    clearCart();
                    sessionStorage.setItem(
                        'handledSessionIds',
                        JSON.stringify([...handledIds, sessionId])
                    );
                }

                setStatus(data.success ? 'paid' : 'failed');

                if (data.success) {
                    setOrder({
                        ...data.session,
                        items: data.items as LineItem[],
                    });
                }

                hasVerified.current = true;
            } catch {
                setStatus('failed');
            }
        };

        verifySession();
    }, [sessionId, clearCart]);

    return { status, order };
}
