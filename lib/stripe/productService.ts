import Stripe from 'stripe';
import { stripe } from './stripe';

/**
 * Get price map (slug → price_id) for given slugs.
 * Currently uses Stripe; ready to swap for DB lookup in Option 3.
 */
export async function getPriceMap(slugs: string[]) {
    const prices = await stripe.prices.list({
        active: true,
        expand: ['data.product'],
        limit: 100,
    });

    const map: Record<string, string> = {};

    for (const price of prices.data) {
        const product = price.product as Stripe.Product;
        const slug = product.metadata?.slug;

        if (slug && slugs.includes(slug)) {
            map[slug] = price.id;
        }
    }

    return map;
}
