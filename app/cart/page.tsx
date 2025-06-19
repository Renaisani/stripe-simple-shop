'use client';
import { CartItemList } from '@/components/stripe/CartItemList';
import { useStripeCheckout } from '@/hooks/stripe/useStripeCheckout';
import Link from "next/link";
import CartLoadingPage from './loading';

export default function CartPage() {
    const { handleCheckout, isLoading, error, isCartEmpty, isHydrated } = useStripeCheckout();

    if (!isHydrated) return <CartLoadingPage />;

    return (
        <main>
            <h1>Your Cart</h1>
            <Link href="/products">Back to Products</Link>
            <CartItemList />
            <button
                onClick={handleCheckout}
                disabled={isCartEmpty || isLoading}
                style={{
                    marginTop: '1rem',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    backgroundColor: isCartEmpty || isLoading ? '#ccc' : '#000',
                    color: isCartEmpty || isLoading ? '#666' : '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: isCartEmpty || isLoading ? 'not-allowed' : 'pointer',
                    opacity: isCartEmpty || isLoading ? 0.6 : 1,
                    transition: 'opacity 0.2s ease',
                }}
            >
                Checkout
            </button>

            {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}

        </main>
    );
}
