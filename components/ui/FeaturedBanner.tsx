const FeaturedBanner = () => {
    return (
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
                        Next-Generation<br />
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Camera Technology</span>
                    </h2>
                    <p className="text-xl mb-8 text-gray-300">Experience unparalleled image quality with our latest professional cameras featuring cutting-edge sensors and advanced processing power.</p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center space-x-2 text-lg">
                            <span className="text-green-400">✓</span>
                            <span>45MP Resolution</span>
                        </div>
                        <div className="flex items-center space-x-2 text-lg">
                            <span className="text-green-400">✓</span>
                            <span>8K Video Recording</span>
                        </div>
                        <div className="flex items-center space-x-2 text-lg">
                            <span className="text-green-400">✓</span>
                            <span>Advanced AF System</span>
                        </div>
                        <div className="flex items-center space-x-2 text-lg">
                            <span className="text-green-400">✓</span>
                            <span>Weather Sealed</span>
                        </div>
                    </div>
                    <a href="#" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition duration-300">Learn More</a>
                </div>
                <div className="bg-white bg-opacity-10 rounded-2xl p-8 shadow-lg backdrop-filter backdrop-blur-lg border border-gray-700 flex items-center justify-center text-5xl">📷</div>
            </div>
        </section>
    );
};

export default FeaturedBanner;