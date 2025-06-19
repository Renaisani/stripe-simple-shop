import { stripe } from '@/lib/stripe/stripe';
import { NextResponse } from 'next/server';


export async function POST(request: Request) {
    try {
        const { line_items } = await request.json();

        if (!Array.isArray(line_items)) {
            return NextResponse.json({ error: 'First' }, { status: 400 });
        }

        if (line_items.length === 0) {
            return NextResponse.json({ error: 'Second' }, { status: 400 });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `${request.headers.get('origin')}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
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
