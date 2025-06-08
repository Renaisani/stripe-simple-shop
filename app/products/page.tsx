'use client'
import { useCart } from "@/stripe-cart-kit";

const products = [
    { id: '1', name: 'Canon EOS R5', price: 389900 },
    { id: '2', name: 'Sony A7 IV', price: 249900 },
    { id: '3', name: 'Nikon Z6 II', price: 199900 },
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
        </main>
    );
}
