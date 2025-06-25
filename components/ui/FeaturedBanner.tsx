const FeaturedBanner = () => {
    return (
        <section className="featured-banner">
            <div className="container">
                <div className="banner-content">
                    <div className="banner-text">
                        <h2>
                            Next-Generation<br />
                            <span className="highlight">Camera Technology</span>
                        </h2>
                        <p>Experience unparalleled image quality with our latest professional cameras featuring cutting-edge sensors and advanced processing power.</p>
                        <div className="feature-grid">
                            <div className="feature-item">45MP Resolution</div>
                            <div className="feature-item">8K Video Recording</div>
                            <div className="feature-item">Advanced AF System</div>
                            <div className="feature-item">Weather Sealed</div>
                        </div>
                        <a href="#" className="btn-primary">Learn More</a>
                    </div>
                    <div className="banner-image">📷</div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedBanner;