'use client'
import { useCart } from "@/stripe-cart-kit";

export default function CartPage() {
    const { cartItems, removeItem } = useCart();

    const handleCheckout = async () => {
        const res = await fetch('/api/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cartItems }),
        });

        const { url } = await res.json();
        window.location.href = url;
    };

    return (
        <main>
            <h1>Your Cart</h1>
            {cartItems.map(item => (
                <div key={item.id}>
                    <span>{item.name} x {item.quantity}</span>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
            ))}
            <button onClick={handleCheckout}>Checkout</button>
        </main>
    );
}
