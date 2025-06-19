'use client';
import { useState } from 'react';
import { useCart } from '@/stripe-cart-kit';
import { useGetCartPrices } from './useGetCartPrices';

export function useStripeCheckout() {
    const { cartItems, isHydrated } = useCart();
    const { priceMap, loading: pricesLoading } = useGetCartPrices();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleCheckout = async () => {
        if (pricesLoading || cartItems.length === 0) return;
        setIsLoading(true);
        setError(null);

        try {
            const line_items = cartItems
                .filter(item => priceMap[item.id])
                .map(item => ({
                    price: priceMap[item.id],
                    quantity: item.quantity,
                }));


            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ line_items }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Failed to create checkout session');
            }

            const { url } = await res.json();
            window.location.href = url;
        } catch (err) {
            const message =
                err instanceof Error ? err.message : 'An unexpected error occurred';
            console.error('[Checkout Error]', message);
            setError(message);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        handleCheckout,
        isLoading: isLoading || pricesLoading,
        error,
        isCartEmpty: cartItems.length === 0,
        isHydrated,
    };
}
