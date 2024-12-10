export default function ReturnsAndExchanges() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Returns & Exchanges</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Return Policy</h2>
          <p>We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return it within 30 days of receipt for a full refund or exchange.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Conditions for Returns</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Items must be unused and in their original packaging</li>
            <li>All tags and labels must be attached</li>
            <li>You must include the original receipt or proof of purchase</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">How to Initiate a Return or Exchange</h2>
          <ol className="list-decimal list-inside ml-4">
            <li>Log into your account and go to the "Order History" section</li>
            <li>Select the item you wish to return or exchange</li>
            <li>Choose whether you want a refund or an exchange</li>
            <li>Print the prepaid return label</li>
            <li>Pack the item securely and attach the return label</li>
            <li>Drop off the package at your nearest post office or schedule a pickup</li>
          </ol>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Refund Process</h2>
          <p>Once we receive and inspect your return, we will process your refund within 5-7 business days. The refund will be credited to your original method of payment.</p>
        </section>
      </div>
    </div>
  )
}

