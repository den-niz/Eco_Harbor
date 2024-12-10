import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white p-4 mt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EcoHarbor-Ld86aFNDbpm6BzIvxcBIn53OF5exZW.jpeg"
              alt="EcoHarbor Logo"
              width={120}
              height={80}
              className="rounded-lg mb-4"
            />
            <p className="text-sm">Making sustainable living accessible</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/shipping-information" className="hover:text-emerald-300 transition-colors">Shipping Information</Link></li>
              <li><Link href="/returns-and-exchanges" className="hover:text-emerald-300 transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/faq" className="hover:text-emerald-300 transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-emerald-300 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: support@ecoharbor.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Green Street</li>
              <li>Eco City, EC 12345</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-emerald-700 mt-8 pt-4 text-center">
          <p>&copy; 2023 Eco Harbor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

