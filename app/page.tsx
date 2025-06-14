import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to CamGear</h1>
      <Link href="/products">Browse Products</Link>
      <Link href="/cart">View Cart</Link>
    </main>
  );
}
