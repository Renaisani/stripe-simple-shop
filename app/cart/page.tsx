'use client';
// import { CartItemList } from '@/components/stripe/CartItemList';
import { useStripeCheckout } from '@/hooks/stripe/useStripeCheckout';
// import Link from "next/link";
import CartLoadingPage from './loading';
import Header from '@/components/ui/Header';
import { useCart } from '@/stripe-cart-kit';
import { useUpdateCart } from '@/hooks/stripe/useUpdateCart';
import { MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function CartPage() {
    const { handleCheckout, isLoading, error, isCartEmpty, isHydrated } = useStripeCheckout();
    const { cartItems, removeItem } = useCart();
    const { increment, decrement, handleQuantityChange } = useUpdateCart();

    if (!isHydrated) return <CartLoadingPage />;

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0) / 100;

    // const taxRate = 0.065
    // const tax = parseFloat((subtotal * taxRate).toFixed(2));
    const total = subtotal;

    return (
        <>
            <Header />
            <main className="cart-section">
                <div className="container">
                    <div className="cart-header">
                        <h2>Shopping Cart</h2>
                    </div>
                    {cartItems.length === 0 ? (
                        <p className="text-lg text-gray-600">Your cart is empty.</p>
                    ) : (
                        <>
                            <table className="cart-table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item.id} className="cart-item">
                                            <td>
                                                <div className="cart-product-info">
                                                    <div className="cart-product-image">📷</div>
                                                    <span className="cart-product-name">{item.name}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart-product-price">${item.price / 100}</div>
                                            </td>
                                            <td>
                                                <div className="quantity-control">
                                                    <button onClick={() => decrement(item.id, item.quantity)} className="quantity-btn">
                                                        <MinusIcon className="w-4 h-4 text-gray-600" />
                                                    </button>
                                                    <input
                                                        type="number"
                                                        value={item.quantity}
                                                        min="1"
                                                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                                        className="quantity-input"
                                                    />
                                                    <button onClick={() => increment(item.id, item.quantity)} className="quantity-btn">
                                                        <PlusIcon className="w-4 h-4 text-gray-600" />
                                                    </button>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cart-product-total">${item.price * item.quantity / 100}</div>
                                            </td>
                                            <td>
                                                <button onClick={() => removeItem(item.id)} className="remove-btn">
                                                    <XMarkIcon className="w-5 h-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="cart-summary">
                                <div className="summary-card">
                                    <div className="summary-row">
                                        <div className="summary-label">Subtotal</div>
                                        <div className="summary-value">${subtotal}</div>
                                    </div>
                                    <div className="summary-row">
                                        <div className="summary-label">Shipping</div>
                                        <div className="summary-value">Free</div>
                                    </div>
                                    <div className="summary-row">
                                        <div className="summary-label">Tax</div>
                                        <div className="summary-value">$0.00</div>
                                    </div>
                                    <div className="summary-row total-row">
                                        <div className="summary-label">Total</div>
                                        <div className="summary-value">${total}</div>
                                    </div>
                                    <button onClick={handleCheckout} disabled={isCartEmpty || isLoading} className="checkout-btn">
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </main>

            {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
        </>
    );
}
