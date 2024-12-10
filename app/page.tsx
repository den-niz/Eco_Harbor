import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-24 bg-cover bg-center text-emerald-900 relative overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/top-view-paper-spring-foliage-with-copy-space_23-2148413815.jpg-oli7GAB4xMXgMlcEe9TzNIyMUrB0R8.jpeg"
          alt="Decorative green leaves background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/95 to-emerald-50/80"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl font-bold mb-6 animate-fade-in">Welcome to Eco Harbor</h1>
            <p className="text-2xl mb-8 max-w-3xl text-emerald-800">Discover eco-friendly products with transparent eco-ratings, empowering you to make sustainable choices for a greener future.</p>
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-4 text-emerald-800">Our Mission</h2>
              <p className="text-lg mb-4 text-emerald-700">At Eco Harbor, we&#39;re committed to promoting sustainable living through carefully curated eco-friendly products. Our mission is to make it easy for consumers to make environmentally conscious choices without compromising on quality or style.</p>
              <p className="text-lg mb-4 text-emerald-700">We believe in transparency, which is why we&#39;ve developed our unique Eco-Rating system. This helps you understand the environmental impact of each product, from materials used to end-of-life recyclability.</p>
            </div>
            <Link 
              href="/products" 
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-500 transition-all duration-300 hover:shadow-lg inline-block hover:-translate-y-0.5"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-emerald-800">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-emerald-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/water-bottle.jpg-Qa6Awxd6m3ac5BMRc2LtLwIK2HOQyg.jpeg" 
              alt="Eco-Friendly Water Bottle" 
              width={300} 
              height={300} 
              className="mb-6 rounded-lg object-cover w-full h-[300px]"
            />
            <h3 className="text-xl font-semibold mb-3 text-emerald-800">Eco-Friendly Water Bottle</h3>
            <p className="mb-4 text-emerald-600">Stay hydrated sustainably with our bamboo water bottle. Keeps drinks at the perfect temperature while reducing plastic waste.</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-emerald-600">$25</span>
              <Link href="/products/1" className="text-emerald-600 hover:text-emerald-500 hover:underline transition-colors">
                Learn More
              </Link>
            </div>
          </div>
          <div className="border border-emerald-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AM-Natural-Living-Bamboo-Toothbrush-Set-1000x1000.jpg-lZBJ1PDDmzhFMt8gETn3ksP72bD7Ps.jpeg" 
              alt="Bamboo Toothbrush Set" 
              width={300} 
              height={300} 
              className="mb-6 rounded-lg object-cover w-full h-[300px]" 
            />
            <h3 className="text-xl font-semibold mb-3 text-emerald-800">Bamboo Toothbrush Set</h3>
            <p className="mb-4 text-emerald-600">Make your daily routine more sustainable with our premium bamboo toothbrush set. Reduce plastic waste while maintaining oral hygiene.</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-emerald-600">$15</span>
              <Link href="/products/2" className="text-emerald-600 hover:text-emerald-500 hover:underline transition-colors">
                Learn More
              </Link>
            </div>
          </div>
          <div className="border border-emerald-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/produce%20bags.jpg-Gc6DasmfOygIA3al3YiUaLaKuhrMTh.jpeg" 
              alt="Reusable Produce Bags" 
              width={300} 
              height={300} 
              className="mb-6 rounded-lg object-cover w-full h-[300px]" 
            />
            <h3 className="text-xl font-semibold mb-3 text-emerald-800">Reusable Produce Bags</h3>
            <p className="mb-4 text-emerald-600">Make your grocery shopping more sustainable with our set of reusable produce bags. Perfect for fruits, vegetables, and bulk items.</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-emerald-600">$20</span>
              <Link href="/products/3" className="text-emerald-600 hover:text-emerald-500 hover:underline transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-emerald-800">Our Eco-Rating System</h2>
          <p className="text-xl mb-8 text-emerald-700">
            We believe in transparency. Our eco-rating system helps you make informed decisions about the products you buy.
          </p>
          <Link 
            href="/about" 
            className="text-emerald-600 hover:text-emerald-500 hover:underline inline-flex items-center gap-2 text-lg font-medium transition-colors"
          >
            Learn More About Our Ratings
            <span className="text-xl">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

