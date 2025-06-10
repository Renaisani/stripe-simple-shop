import { CartItem } from '@/stripe-cart-kit';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2025-05-28.basil',
});

export async function POST(request: Request) {
    try {
        const { cartItems } = await request.json();

        if (!Array.isArray(cartItems) || cartItems.length === 0) {
            return NextResponse.json({ error: 'Cart is empty or invalid' }, { status: 400 });
        }

        const line_items = (cartItems as CartItem[]).map((item: CartItem) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price, // cents
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `${request.headers.get('origin')}/confirmation`,
            cancel_url: `${request.headers.get('origin')}/cart`,
        });

        return NextResponse.json({ url: session.url });
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error('[Stripe Checkout Error]', err.message);
        } else {
            console.error('[Stripe Checkout Error]', err);
        }

        return NextResponse.json(
            { error: 'Failed to create Stripe checkout session' },
            { status: 500 }
        );
    }
}
