'use client'
import { useCart } from "@/stripe-cart-kit";
import Link from "next/link";

const products = [
    { id: 'canon-eos-r5', name: 'Canon EOS R5', price: 389900 },
    { id: 'sony-a7-iv', name: 'Sony A7 IV', price: 249900 },
    { id: 'nikon-z6-ii', name: 'Nikon Z6 II', price: 199900 },
];

export default function Products() {
    const { addItem } = useCart();

    return (
        <main>
            <h1>Products</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>${(product.price / 100).toFixed(2)}</p>
                    <button onClick={() => addItem(product)}>Add to Cart</button>
                </div>
            ))}
            <Link href="/cart">View Cart</Link>
        </main>
    );
}
