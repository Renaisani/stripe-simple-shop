'use client';
import { OrderTypes } from '@/hooks/stripe/useStripeCheckoutConfirmation';
import { formatCurrency } from '@/lib/stripe/formatCurrency';
import Link from 'next/link';

type OrderProps = {
    order: OrderTypes | null,
}

export default function PaidConfirmationPage({ order }: OrderProps) {

    if (order === null) {
        return (
            <div className="confirmation-container">
                <h1>An error occured</h1>
                <div className="confirmation-order-summary">

                </div>
                <div className="item-list">

                </div>
                <Link href="/" className="home-button">Return to Home</Link>
            </div>
        )
    }

    const orderDate = new Date(order.created * 1000).toLocaleDateString(undefined, {
        year: 'numeric', month: 'long', day: 'numeric',
    });

    return (
        <div className="confirmation-container">
            <h1>Order Confirmation</h1>
            <div className="confirmation-order-summary">
                <div className="confirmation-summary-item">
                    <span className="confirmation-summary-label">Order Number:</span>
                    <span className="confirmation-summary-value">{order.created}</span>
                </div>
                <div className="confirmation-summary-item">
                    <span className="confirmation-summary-label">Order Date:</span>
                    <span className="confirmation-summary-value">{orderDate}</span>
                </div>
                <div className="confirmation-summary-item">
                    <span className="confirmation-summary-label">Total Amount:</span>
                    <span className="confirmation-summary-value">
                        {formatCurrency(order.amount!, order.currency)}
                    </span>
                </div>
            </div>
            <div className="item-list">
                <h2>Purchased Items:</h2>
                {order.items.map((itm, idx) => (
                    <div className="item" key={idx}>
                        <span className="item-name">{itm.name}</span>
                        <span className="item-price">
                            {formatCurrency(itm.total!, order.currency)}
                        </span>
                        <span className='item-qty'>× {itm.quantity}</span>
                    </div>
                ))}
            </div>
            <Link href="/" className="home-button">Return to Home</Link>
        </div>
    );
}
