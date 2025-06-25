'use client'
import Header from "@/components/ui/Header";
import { useCart } from "@/stripe-cart-kit";

const products = [
    { id: 'canon-eos-r5', name: 'Canon EOS R5', price: 389900 },
    { id: 'nikon-z6-ii', name: 'Nikon Z6 II', price: 199900 },
    { id: 'sony-a7-iv', name: 'Sony A7 IV', price: 249900 },
];

export default function Products() {
    const { addItem } = useCart();

    return (
        // <main>
        //     <h1>Products</h1>
        //     {products.map((product) => (
        //         <div key={product.id}>
        //             <h3>{product.name}</h3>
        //             <p>${(product.price / 100).toFixed(2)}</p>
        //             <button onClick={() => addItem(product)}>Add to Cart</button>
        //         </div>
        //     ))}
        //     <Link href="/cart">View Cart</Link>
        // </main>\
        <>
            <Header />
            <main className="products-page">
                <div className="container">
                    <div className="page-header">
                        <h1>Our Products</h1>
                        <p>Discover our handpicked selection of professional-grade cameras and lenses, each designed to elevate your photography to new heights.</p>
                    </div>
                    <div className="products-grid">
                        <div className="product-card">
                            <div className="product-image">
                                <div className="product-badge">Bestseller</div>
                                📷
                            </div>
                            <div className="product-info">
                                <div className="product-category">Mirrorless Camera</div>
                                <h3>Canon EOS R5</h3>
                                <p>Professional 45MP full-frame mirrorless camera with 8K video recording and advanced autofocus system.</p>
                                <div className="product-footer">
                                    <div className="product-price">$3,899</div>
                                    <div className="product-action">
                                        {/* <button className="wishlist-btn">♡</button> */}
                                        <button
                                            className="add-btn"
                                            onClick={() => addItem(products[0])}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <div className="product-badge">New</div>
                                📷
                            </div>
                            <div className="product-info">
                                <div className="product-category">Full Frame Camera</div>
                                <h3>Nikon Z6 II</h3>
                                <p>Versatile 24MP camera perfect for both photography and videography with dual card slots.</p>
                                <div className="product-footer">
                                    <div className="product-price">$1,999</div>
                                    <div className="product-action">
                                        {/* <button className="wishlist-btn">♡</button> */}
                                        <button
                                            className="add-btn"
                                            onClick={() => addItem(products[1])}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <div className="product-badge">Pro Choice</div>
                                📷
                            </div>
                            <div className="product-info">
                                <div className="product-category">Professional Lens</div>
                                <h3>Sony A7 IV</h3>
                                <p>Advanced 33MP full-frame camera with 4K 60p video, 10fps burst shooting, and improved autofocus.</p>
                                <div className="product-footer">
                                    <div className="product-price">$2,499</div>
                                    <div className="product-action">
                                        {/* <button className="wishlist-btn">♡</button> */}
                                        <button
                                            className="add-btn"
                                            onClick={() => addItem(products[2])}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
