'use client';
import { useCart } from "@/stripe-cart-kit";
import Link from "next/link";

export default function CartPage() {
    const { cartItems, removeItem, updateItemQuantity } = useCart();

    const handleCheckout = async () => {
        const res = await fetch('/api/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cartItems }),
        });

        const { url } = await res.json();
        window.location.href = url;
    };

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

    return (
        <main>
            <h1>Your Cart</h1>
            {cartItems.length === 0 && <p>Your cart is empty.</p>}
            <Link href="/products">Back to Products</Link>
            {cartItems.map(item => (
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
                        <button onClick={() => removeItem(item.id)} style={{ marginLeft: '1rem' }}>
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            <button
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
                style={{
                    marginTop: '1rem',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    backgroundColor: cartItems.length === 0 ? '#ccc' : '#000',
                    color: cartItems.length === 0 ? '#666' : '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer',
                    opacity: cartItems.length === 0 ? 0.6 : 1,
                    transition: 'opacity 0.2s ease',
                }}
            >
                Checkout
            </button>

        </main>
    );
}
