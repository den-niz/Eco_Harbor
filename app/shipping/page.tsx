export default function ShippingInformation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shipping Information</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Delivery Options</h2>
          <p>We offer the following shipping methods:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Standard Shipping (5-7 business days)</li>
            <li>Express Shipping (2-3 business days)</li>
            <li>Next Day Delivery (order before 2 PM for next-day delivery)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Shipping Costs</h2>
          <p>Shipping costs are calculated based on the weight of your order and your location. You can view the exact shipping cost at checkout before completing your purchase.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Free Shipping</h2>
          <p>We offer free standard shipping on orders over $50 within the continental United States.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">International Shipping</h2>
          <p>We currently ship to select countries. International shipping rates and delivery times vary depending on the destination. Please note that customers are responsible for any import duties or taxes imposed by their country.</p>
        </section>
      </div>
    </div>
  )
}

