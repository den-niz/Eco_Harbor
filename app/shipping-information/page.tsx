export default function ShippingInformation() {
  return (
    <div className="min-h-screen bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-emerald-800 mb-8">Shipping Information</h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Our Shipping Policy</h2>
            <p className="text-emerald-600 mb-4">
              At Eco Harbor, we strive to deliver your eco-friendly products as quickly and sustainably as possible. Here's what you need to know about our shipping:
            </p>
            <ul className="list-disc list-inside mb-4 text-emerald-600">
              <li>Free shipping on orders over $50</li>
              <li>Standard shipping (3-5 business days): $5.99</li>
              <li>Express shipping (1-2 business days): $12.99</li>
              <li>We ship to all 50 states and select international destinations</li>
              <li>All orders are processed within 1-2 business days</li>
            </ul>
            <p className="text-emerald-600 mb-4">
              We use eco-friendly packaging materials to minimize our environmental impact. If you have any questions about your shipment, please don't hesitate to contact our customer service team.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

