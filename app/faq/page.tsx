export default function FAQ() {
  return (
    <div className="min-h-screen bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-emerald-800 mb-8">Frequently Asked Questions</h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-emerald-700 mb-2">What makes Eco Harbor products eco-friendly?</h2>
              <p className="text-emerald-600">
                All our products are made from sustainable materials, produced using environmentally friendly processes, and designed for longevity and recyclability. We carefully vet our suppliers to ensure they meet our strict eco-standards.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-emerald-700 mb-2">How does your Eco-Rating system work?</h2>
              <p className="text-emerald-600">
                Our Eco-Rating system evaluates products based on materials used, manufacturing process, packaging, product lifespan, and end-of-life recyclability. Each product receives a score from 1 to 5, with 5 being the most eco-friendly.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-emerald-700 mb-2">Do you ship internationally?</h2>
              <p className="text-emerald-600">
                Yes, we ship to select international destinations. Shipping costs and delivery times vary by location. Please check our Shipping Information page for more details.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-emerald-700 mb-2">How can I track my order?</h2>
              <p className="text-emerald-600">
                Once your order is shipped, you'll receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

