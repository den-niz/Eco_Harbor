'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useCart } from '../../contexts/CartContext'

const products = [
  { 
    id: 1, 
    name: 'Eco-Friendly Water Bottle', 
    price: 25, 
    rating: 4.5, 
    description: 'Stay hydrated sustainably with our bamboo water bottle. Made from natural bamboo with a stainless steel cap, this durable bottle keeps your drinks at the perfect temperature while reducing plastic waste. The sleek design and natural bamboo texture make it both stylish and eco-friendly.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/water-bottle.jpg-Qa6Awxd6m3ac5BMRc2LtLwIK2HOQyg.jpeg',
    details: [
      'Made from natural bamboo material',
      'Stainless steel cap for durability',
      '500ml capacity',
      'Perfect for hot and cold beverages',
      'Eco-friendly and sustainable',
      'Easy to clean and maintain'
    ]
  },
  { 
    id: 2, 
    name: 'Bamboo Toothbrush Set', 
    price: 15, 
    rating: 4.8, 
    description: 'Make your daily routine more sustainable with our premium bamboo toothbrush set. Each toothbrush is crafted from 100% biodegradable bamboo with high-quality charcoal-infused bristles. The ergonomic design ensures comfortable brushing while minimizing environmental impact.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AM-Natural-Living-Bamboo-Toothbrush-Set-1000x1000.jpg-lZBJ1PDDmzhFMt8gETn3ksP72bD7Ps.jpeg',
    details: [
      '100% biodegradable bamboo handle',
      'Charcoal-infused bristles for better cleaning',
      'Set of 4 toothbrushes',
      'Ergonomic design for comfortable use',
      'Plastic-free packaging',
      'Natural antimicrobial properties'
    ]
  },
  { 
    id: 3, 
    name: 'Reusable Produce Bags', 
    price: 20, 
    rating: 4.2, 
    description: 'Make your grocery shopping more sustainable with our set of 9 reusable produce bags. Made from durable, washable mesh material with secure drawstring closures, these bags are perfect for fruits, vegetables, and bulk items. Each bag features a tare weight tag for easy checkout.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/produce%20bags.jpg-Gc6DasmfOygIA3al3YiUaLaKuhrMTh.jpeg',
    details: [
      'Set of 9 reusable bags',
      'Durable mesh material',
      'Secure drawstring closure',
      'Machine washable',
      'Tare weight tagged for easy checkout',
      'Various sizes for different produce'
    ]
  },
  { 
    id: 4, 
    name: 'Solar-Powered Charger', 
    price: 50, 
    rating: 4.7, 
    description: 'Stay powered sustainably with our portable solar charger. This efficient dual-panel solar charger features two USB ports for simultaneous charging of your devices. Perfect for outdoor activities, travel, or as an eco-friendly backup power solution. The foldable design makes it easy to carry and store.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/solar%20charger.jpg-JEkqffFA3a53FPFVMaQwcC6chMEkK4.jpeg',
    details: [
      'Dual USB ports for simultaneous charging',
      'High-efficiency solar panels',
      'Foldable, portable design',
      'Weather-resistant construction',
      'Compatible with most USB devices',
      'Includes built-in stand for optimal sun exposure'
    ]
  },
  { 
    id: 5, 
    name: 'Biodegradable Phone Case', 
    price: 30, 
    rating: 4.0, 
    description: 'Protect your device with our eco-friendly phone case featuring a stunning tropical leaf design. This biodegradable case combines style with sustainability, showcasing vibrant monstera leaves and palm fronds on a natural background. Perfect for nature lovers who want to make an environmental impact without compromising on style.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/phone%20case-Aj3WnPGlWOfSaox7squNYUjfwEud4d.webp',
    details: [
      'Fully biodegradable materials',
      'Tropical leaf pattern design',
      'Durable protection for your device',
      'Compatible with iPhone dual camera models',
      'Eco-friendly packaging',
      'Minimal environmental impact'
    ]
  },
  { 
    id: 6, 
    name: 'Recycled Plastic Backpack', 
    price: 80, 
    rating: 4.6, 
    description: 'Our sleek two-tone backpack combines style with sustainability, crafted from recycled plastic bottles. The navy and black design offers a modern aesthetic while helping to reduce plastic waste. Perfect for daily commutes or casual outings, featuring durable construction and practical storage.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bag.jpg-Y2EiSItrAL0wsxIfMm6WhiupCCWvVo.jpeg',
    details: [
      'Made from recycled plastic bottles',
      'Durable water-resistant construction',
      'Two-tone navy and black design',
      'Comfortable padded straps',
      'Spacious main compartment',
      'Each bag saves approximately 20 plastic bottles from landfills'
    ]
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const product = products.find(p => p.id === parseInt(params.id))

  if (!product) {
    router.push('/products')
    return null
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity
    })
    alert(`Added ${quantity} ${product.name}(s) to cart!`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image 
            src={product.image || `/placeholder.svg?text=${product.name}`}
            alt={product.name} 
            width={500} 
            height={500} 
            className="rounded-lg object-cover w-full h-[500px]"
            priority
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4 text-emerald-800">{product.name}</h1>
          <p className="text-xl mb-4">${product.price}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{product.rating}/5</span>
          </div>
          <p className="mb-6">{product.description}</p>
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2">Quantity:</label>
            <input 
              type="number" 
              id="quantity" 
              min="1" 
              value={quantity} 
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
              className="border rounded px-2 py-1 w-16"
            />
          </div>
          <button 
            onClick={handleAddToCart}
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-emerald-700">Product Details</h2>
        <ul className="list-disc list-inside">
          {product.details ? (
            product.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))
          ) : (
            <li>Product details coming soon</li>
          )}
        </ul>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-emerald-700">Customer Reviews</h2>
        <div className="bg-emerald-50 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 mr-1">★★★★★</span>
            <span className="font-bold">
              {product.id === 1 ? 'Beautiful and Functional!' : 
               product.id === 2 ? 'Excellent Eco-Friendly Alternative!' :
               product.id === 3 ? 'Perfect for Plastic-Free Shopping!' :
               product.id === 4 ? 'Amazing Sustainable Power Solution!' :
               product.id === 5 ? 'Stylish and Eco-Conscious!' :
               'Great Sustainable Choice!'}
            </span>
          </div>
          <p>
            {product.id === 1 
              ? 'Love this water bottle! The bamboo exterior is beautiful and the bottle keeps my drinks at the right temperature. Knowing it\'s eco-friendly makes it even better.'
              : product.id === 2 
              ? 'These toothbrushes are amazing! They\'re comfortable to use, look great in my bathroom, and I love knowing I\'m reducing plastic waste. Will definitely buy again!'
              : product.id === 3
              ? 'These produce bags are exactly what I needed! They\'re sturdy, easy to clean, and the checkout staff love that they have the tare weight right on the tag. No more plastic bags for me!'
              : product.id === 4
              ? 'This solar charger is a game-changer! I use it for camping and emergency backup power. The dual USB ports are super convenient, and it charges my devices surprisingly fast in good sunlight.'
              : product.id === 5
              ? 'This phone case is perfect! It protects my phone well, looks great with the geometric pattern, and I love knowing it will completely biodegrade when I\'m done with it. The water-based inks are a nice touch too!'
              : 'Great product that helps reduce environmental impact while maintaining quality!'}
          </p>
        </div>
      </div>
    </div>
  )
}

