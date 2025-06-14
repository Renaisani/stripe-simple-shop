import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2025-05-28.basil',
});

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
        return NextResponse.json({ success: false, error: 'Missing session_id' }, { status: 400 });
    }

    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (session.payment_status === 'paid') {
            return NextResponse.json({
                success: true,
                created: session.created, // ⏱️ Unix timestamp in seconds
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
