'use client'
import { createContext, useEffect, useState, ReactNode } from 'react';
import { CartItem } from './types';

type CartContextType = {
    cartItems: CartItem[];
    addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
    updateItemQuantity: (id: string, quantity: number) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('cart');
            return stored ? JSON.parse(stored) : [];
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

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
        <CartContext.Provider value={{ cartItems, addItem, updateItemQuantity, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
