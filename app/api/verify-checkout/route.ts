import { stripe } from '@/lib/stripe/stripe';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';


export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
        return NextResponse.json({ success: false, error: 'Missing session_id' }, { status: 400 });
    }

    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        const lineItems = await stripe.checkout.sessions.listLineItems(sessionId, {
            limit: 100,
            expand: ['data.price.product'],
        });

        if (session.payment_status === 'paid') {
            return NextResponse.json({
                success: true,
                session: {
                    id: session.id,
                    created: session.created,          // unix-seconds
                    amount: session.amount_total,     // in cents
                    currency: session.currency,
                },
                items: lineItems.data.map(li => ({
                    name: (li.price!.product as Stripe.Product).name,
                    quantity: li.quantity,
                    unit_price: li.amount_total / li.quantity!,
                    total: li.amount_total,
                })),
            });
        } else {
            return NextResponse.json({ success: false });
        }
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        console.error('[Stripe Verify Error]', message);

        return NextResponse.json(
            { success: false, error: message },
            { status: 500 }
        );
    }

}
