'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '../contexts/CartContext'

const Header = () => {
  const { cartItems } = useCart()
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-emerald-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 hover:text-emerald-300 transition-colors">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EcoHarbor-Ld86aFNDbpm6BzIvxcBIn53OF5exZW.jpeg"
            alt="EcoHarbor Logo"
            width={150}
            height={100}
            className="rounded-lg"
            priority
          />
        </Link>
        <ul className="flex justify-between items-center w-full max-w-4xl ml-8">
          <li className="px-4 py-2"><Link href="/" className="hover:text-emerald-300 transition-colors">Home</Link></li>
          <li className="px-4 py-2"><Link href="/products" className="hover:text-emerald-300 transition-colors">Products</Link></li>
          <li className="px-4 py-2"><Link href="/about" className="hover:text-emerald-300 transition-colors">About</Link></li>
          <li className="px-4 py-2"><Link href="/contact" className="hover:text-emerald-300 transition-colors">Contact</Link></li>
          <li className="px-4 py-2">
            <Link href="/cart" className="flex items-center hover:text-emerald-300 transition-colors">
              Cart
              {itemCount > 0 && (
                <span className="ml-1 bg-emerald-200 text-emerald-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                  {itemCount}
                </span>
              )}
            </Link>
          </li>
          <li className="px-4 py-2"><Link href="/login" className="hover:text-emerald-300 transition-colors">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

