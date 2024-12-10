'use client'

import { useCart } from '../contexts/CartContext'
import Link from 'next/link'

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart()

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-emerald-800 mb-12">Your Cart</h1>
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-xl text-emerald-600 mb-8">Your cart is empty.</p>
            <Link 
              href="/products" 
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-6 border-b border-emerald-100">
                  <div>
                    <h2 className="text-xl font-semibold text-emerald-700">{item.name}</h2>
                    <p className="text-emerald-600">${item.price}</p>
                  </div>
                  <div className="flex items-center">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                      className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-l hover:bg-emerald-200 transition-colors duration-300"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-emerald-50 text-emerald-700">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                      className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-r hover:bg-emerald-200 transition-colors duration-300"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => removeFromCart(item.id)} 
                      className="ml-4 text-red-500 hover:text-red-700 transition-colors duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-semibold text-emerald-700">Total:</span>
                <span className="text-2xl font-bold text-emerald-700">${total.toFixed(2)}</span>
              </div>
              <Link 
                href="/checkout" 
                className="block w-full text-center bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

