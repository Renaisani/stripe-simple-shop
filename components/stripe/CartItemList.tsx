'use client';

import { useCart } from '@/stripe-cart-kit';
import { useUpdateCart } from '@/hooks/stripe/useUpdateCart';

export function CartItemList() {
    const { cartItems, removeItem } = useCart();
    const { increment, decrement, handleQuantityChange } = useUpdateCart();

    if (cartItems.length === 0) {
        return (
            <div>
                <p>Your cart is empty.</p>
            </div>
        );
    }

    return (
        <div>
            {cartItems.map((item) => (
                <div key={item.id} style={{ marginBottom: '1rem' }}>
                    <span>{item.name}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <button onClick={() => decrement(item.id, item.quantity)}>-</button>
                        <input
                            type="number"
                            min={1}
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            style={{ width: '50px', textAlign: 'center' }}
                        />
                        <button onClick={() => increment(item.id, item.quantity)}>+</button>
                        <button
                            onClick={() => removeItem(item.id)}
                            style={{ marginLeft: '1rem' }}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
