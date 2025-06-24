const StatsSection = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div>
                        <h3 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">50K+</h3>
                        <p className="text-lg text-gray-600 mt-2">Professional Photographers</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">500+</h3>
                        <p className="text-lg text-gray-600 mt-2">Camera Models</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">15+</h3>
                        <p className="text-lg text-gray-600 mt-2">Years Experience</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">99%</h3>
                        <p className="text-lg text-gray-600 mt-2">Customer Satisfaction</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;