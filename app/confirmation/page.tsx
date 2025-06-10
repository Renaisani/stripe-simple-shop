import Link from 'next/link';

export default function Confirmation() {
    return (
        <main>
            <h1>Thank you for your order!</h1>
            <Link href="/">Return Home</Link>
        </main>
    );
}