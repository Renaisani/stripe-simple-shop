import Link from "next/link";
import CartButton from "./CartButton";


const Header = () => {

    return (
        <header className="header">
            <nav className="nav">
                <Link href="#" className="logo">
                    <div className="logo-icon">📷</div>
                    CapturePro
                </Link>
                <ul className="nav-links">
                    <li><Link href="/" className="active">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    {/* <li><Link href="#">Explore</Link></li>
                    <li><Link href="#">Blog</Link></li>
                    <li><Link href="#">About</Link></li> */}
                </ul>
                <div className="nav-right">
                    {/* <span className="nav-icon">🔍</span>
                    <span className="nav-icon">❤️</span>
                    <span className="nav-icon">👤</span> */}
                    <CartButton />
                </div>
            </nav>
        </header>
    );
};

export default Header;