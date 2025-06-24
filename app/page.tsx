import FeaturedBanner from "@/components/ui/FeaturedBanner";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import ProductsSection from "@/components/ui/ProductsSection";
import StatsSection from "@/components/ui/StatsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductsSection />
        <FeaturedBanner />
        <StatsSection />
        {/* <h1>Welcome to CamGear</h1>
        <Link href="/products">Browse Products</Link>
        <Link href="/cart">View Cart</Link> */}
      </main>
      <Footer />
    </>
  );
}
