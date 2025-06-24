const Header = () => {
    return (
        <header className="bg-white shadow-sm fixed w-full top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
                <a href="#" className="text-2xl font-extrabold text-gray-900 flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white text-lg">📷</div>
                    <span>CapturePro</span>
                </a>
                <ul className="hidden md:flex space-x-8">
                    <li><a href="#" className="text-gray-800 hover:text-gray-900 font-medium">Home</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Shop</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Explore</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Blog</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900 font-medium">About</a></li>
                </ul>
                <div className="flex items-center space-x-4">
                    <span className="text-gray-600 hover:text-gray-900 cursor-pointer">🔍</span>
                    <span className="text-gray-600 hover:text-gray-900 cursor-pointer">❤️</span>
                    <span className="text-gray-600 hover:text-gray-900 cursor-pointer">👤</span>
                    <span className="text-gray-600 hover:text-gray-900 cursor-pointer">🛒</span>
                </div>
            </nav>
        </header>
    );
};

export default Header;