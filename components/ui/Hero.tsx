
const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-20 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                        Professional Photography<br />
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Redefined</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">Experience the future of photography with our cutting-edge cameras and lenses. Designed for professionals who demand excellence in every shot.</p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="#" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition duration-300">Explore Collection</a>
                        <a href="#" className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-100 transition duration-300">Watch Demo</a>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-xl flex items-center justify-center text-6xl text-gray-400">📷</div>
            </div>
        </section>
    );
};

export default Hero;