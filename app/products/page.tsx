import Image from 'next/image'
import Link from 'next/link'

const products = [
  { 
    id: 1, 
    name: 'Eco-Friendly Water Bottle', 
    price: 25, 
    rating: 4.5,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/water-bottle.jpg-Qa6Awxd6m3ac5BMRc2LtLwIK2HOQyg.jpeg'
  },
  { 
    id: 2, 
    name: 'Bamboo Toothbrush Set', 
    price: 15, 
    rating: 4.8,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AM-Natural-Living-Bamboo-Toothbrush-Set-1000x1000.jpg-lZBJ1PDDmzhFMt8gETn3ksP72bD7Ps.jpeg'
  },
  { 
    id: 3, 
    name: 'Reusable Produce Bags', 
    price: 20, 
    rating: 4.2,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/produce%20bags.jpg-Gc6DasmfOygIA3al3YiUaLaKuhrMTh.jpeg'
  },
  { 
    id: 4, 
    name: 'Solar-Powered Charger', 
    price: 50, 
    rating: 4.7,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/solar%20charger.jpg-JEkqffFA3a53FPFVMaQwcC6chMEkK4.jpeg'
  },
  { 
    id: 5, 
    name: 'Biodegradable Phone Case', 
    price: 30, 
    rating: 4.0,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/phone%20case-Aj3WnPGlWOfSaox7squNYUjfwEud4d.webp'
  },
  { 
    id: 6, 
    name: 'Recycled Plastic Backpack', 
    price: 80, 
    rating: 4.6,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bag.jpg-Y2EiSItrAL0wsxIfMm6WhiupCCWvVo.jpeg'
  },
]

export default function Products() {
  return (
    <div className="min-h-screen bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-emerald-800 mb-12">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Image 
                src={product.image || `/placeholder.svg?text=${product.name}`} 
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
                priority={product.id <= 3}
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-emerald-700 mb-2">{product.name}</h2>
                <p className="text-emerald-600 mb-2">${product.price}</p>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span className="text-emerald-600">{product.rating}/5</span>
                </div>
                <Link 
                  href={`/products/${product.id}`} 
                  className="block w-full text-center bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

