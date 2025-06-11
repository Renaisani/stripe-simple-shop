import Link from 'next/link';

export default function Confirmation() {

    //If the time of the confirmation happened within 2 minutes of this page loading, wipe the cart
    return (
        <main>
            <h1>Thank you for your order!</h1>
            <Link href="/">Return Home</Link>
        </main>
    );
}