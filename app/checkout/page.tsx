'use client'

import { useState } from 'react'
import { useCart } from '../contexts/CartContext'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Checkout() {
  const { cartItems, clearCart } = useCart()
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
  })
  const [paymentMethod, setPaymentMethod] = useState('credit')

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleShippingInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Here you would typically send the order to your backend
      // Simulate order processing
      setTimeout(() => {
        clearCart()
        alert('Order placed successfully!')
        router.push('/')
      }, 1000)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-emerald-800">Checkout</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <Card className="border-emerald-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-700">
                {step === 1 ? 'Review Your Order' : step === 2 ? 'Shipping Information' : 'Payment'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <span>{item.name} x {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="font-bold text-lg">
                      Total: ${total.toFixed(2)}
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={shippingInfo.fullName}
                        onChange={handleShippingInfoChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        type="text"
                        id="address"
                        name="address"
                        value={shippingInfo.address}
                        onChange={handleShippingInfoChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        type="text"
                        id="city"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleShippingInfoChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input
                        type="text"
                        id="country"
                        name="country"
                        value={shippingInfo.country}
                        onChange={handleShippingInfoChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={shippingInfo.postalCode}
                        onChange={handleShippingInfoChange}
                        required
                      />
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div className="space-y-4">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="credit" id="credit" />
                        <Label htmlFor="credit">Credit Card</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal">PayPal</Label>
                      </div>
                    </RadioGroup>
                    {paymentMethod === 'credit' && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required />
                        </div>
                        <div className="flex space-x-4">
                          <div className="w-1/2">
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input type="text" id="expiryDate" placeholder="MM/YY" required />
                          </div>
                          <div className="w-1/2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input type="text" id="cvv" placeholder="123" required />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <CardFooter className="flex justify-between mt-6">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={() => setStep(step - 1)} className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                      Back
                    </Button>
                  )}
                  <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                    {step < 3 ? 'Continue' : 'Place Order'}
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="w-full md:w-1/3">
          <Card className="border-emerald-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-700">Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

