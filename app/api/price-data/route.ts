import { NextResponse } from 'next/server';
import { getPriceMap } from '@/lib/stripe/productService';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const idsParam = searchParams.get('ids');

    if (!idsParam) {
        return NextResponse.json({ error: 'Missing ids param' }, { status: 400 });
    }

    const slugs = idsParam.split(',');
    const prices = await getPriceMap(slugs);

    return NextResponse.json({ prices });
}
