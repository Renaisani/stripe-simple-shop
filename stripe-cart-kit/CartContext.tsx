'use client'
import { createContext, useEffect, useState, ReactNode } from 'react';
import { CartItem } from './types';

type CartContextType = {
    cartItems: CartItem[];
    addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
    updateItemQuantity: (id: string, quantity: number) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
    isHydrated: boolean;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isHydrated, setIsHydrated] = useState(false);

    // Load cart from localStorage on client only
    useEffect(() => {
        const stored = localStorage.getItem('cart');
        if (stored) {
            setCartItems(JSON.parse(stored));
        }
        setIsHydrated(true);
    }, []);

    useEffect(() => {
        if (isHydrated) {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }, [cartItems, isHydrated]);

    const addItem = (item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
        setCartItems(prev => {
            const existing = prev.find(p => p.id === item.id);
            if (existing) {
                return prev.map(p =>
                    p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
                );
            }
            return [...prev, { ...item, quantity }];
        });
    };

    const updateItemQuantity = (id: string, quantity: number) => {
        setCartItems(prev =>
            prev.map(p =>
                p.id === id ? { ...p, quantity: Math.max(1, quantity) } : p
            )
        );
    };


    const removeItem = (id: string) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addItem, updateItemQuantity, removeItem, clearCart, isHydrated }}>
            {children}
        </CartContext.Provider>
    );
};
