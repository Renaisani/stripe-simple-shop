'use client';
import Link from 'next/link';
import { useCart } from '@/stripe-cart-kit';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';


const CartButton = () => {
    const { cartItems } = useCart();
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <Link href="/cart">
            <span className="relative inline-block p-2 rounded-full hover:bg-gray-100 focus:outline-none cursor-pointer">
                <ShoppingBagIcon className="w-6 h-6 text-gray-600" />
                {totalQuantity > 0 && (
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                        {totalQuantity}
                    </span>
                )}
            </span>
        </Link>
    );
};

export default CartButton;