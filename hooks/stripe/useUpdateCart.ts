'use client';
import { useCart } from '@/stripe-cart-kit';

export function useUpdateCart() {
    const { updateItemQuantity, removeItem } = useCart();

    const handleQuantityChange = (id: string, value: string) => {
        const number = parseInt(value, 10);
        if (!isNaN(number) && number >= 1) {
            updateItemQuantity(id, number);
        }
    };

    const increment = (id: string, currentQty: number) => {
        updateItemQuantity(id, currentQty + 1);
    };

    const decrement = (id: string, currentQty: number) => {
        if (currentQty > 1) {
            updateItemQuantity(id, currentQty - 1);
        }
    };

    return {
        handleQuantityChange,
        increment,
        decrement,
        removeItem,
    };
}
