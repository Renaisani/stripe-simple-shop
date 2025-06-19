'use client';
import { useEffect, useState } from 'react';
import { useCart } from '@/stripe-cart-kit';

export function useGetCartPrices() {
    const { cartItems } = useCart();
    const [priceMap, setPriceMap] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (cartItems.length === 0) return;

        const fetchPrices = async () => {
            setLoading(true);
            const ids = cartItems.map(item => item.id).join(',');
            const res = await fetch(`/api/price-data?ids=${ids}`);
            const data = await res.json();
            setPriceMap(data.prices || {});
            setLoading(false);
        };

        fetchPrices();
    }, [cartItems.length]);

    return { priceMap, loading };
}
