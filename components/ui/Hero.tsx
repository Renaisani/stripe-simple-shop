import Link from "next/link";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1>
                        Professional Photography<br />
                        <span className="highlight">Redefined</span>
                    </h1>
                    <p>Experience the future of photography with our cutting-edge cameras and lenses. Designed for professionals who demand excellence in every shot.</p>
                    <div className="hero-buttons">
                        <Link href="/products" className="btn-primary">Explore Collection</Link>
                        {/* <Link href="#" className="btn-secondary">Watch Demo</Link> */}
                    </div>
                </div>
                <div className="hero-image">📷</div>
            </div>
        </section>
    );
};

export default Hero;