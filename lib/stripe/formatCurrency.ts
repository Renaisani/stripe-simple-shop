export function formatCurrency(cents: number, currency: string = 'usd') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        maximumFractionDigits: 2,
    }).format(cents / 100);
}
