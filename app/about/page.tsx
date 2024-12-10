export default function About() {
  return (
    <div className="min-h-screen bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-emerald-800 mb-8">About Eco Harbor</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Our Mission</h2>
            <p className="text-emerald-600 mb-4">
              At Eco Harbor, we're committed to promoting sustainable living through eco-friendly products. 
              Our mission is to make it easy for consumers to make environmentally conscious choices without 
              compromising on quality or style.
            </p>
            <p className="text-emerald-600">
              We carefully curate our product selection, partnering with brands that share our values and 
              commitment to sustainability. Every product on our platform undergoes rigorous evaluation to 
              ensure it meets our high standards for eco-friendliness and quality.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Our Eco-Rating System</h2>
            <p className="text-emerald-600 mb-4">
              We believe in transparency, which is why we've developed our unique Eco-Rating system. This 
              system takes into account various factors including:
            </p>
            <ul className="list-disc list-inside mb-4 text-emerald-600">
              <li>Materials used</li>
              <li>Manufacturing process</li>
              <li>Packaging</li>
              <li>Product lifespan</li>
              <li>End-of-life recyclability</li>
            </ul>
            <p className="text-emerald-600">
              Our Eco-Rating provides you with a quick and easy way to understand the environmental impact 
              of each product, helping you make informed decisions about your purchases.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

