'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useCart } from '@/stripe-cart-kit';

type ConfirmationStatus = 'verifying' | 'paid' | 'failed' | 'non-payment';

export function useStripeCheckoutConfirmation(): ConfirmationStatus {
    const { clearCart } = useCart();
    const searchParams = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const [status, setStatus] = useState<ConfirmationStatus>('verifying');
    const hasVerified = useRef(false);

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
                hasVerified.current = true;
            } catch {
                setStatus('failed');
            }
        };

        verifySession();
    }, [sessionId, clearCart]);

    return status;
}
