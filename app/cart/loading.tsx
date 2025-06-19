'use client';
import Link from "next/link";

export default function CartLoadingPage() {

    return (
        <main>
            <h1>Your Cart</h1>
            <Link href="/products">Back to Products</Link>
        </main>
    );
}
