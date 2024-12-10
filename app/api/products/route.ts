import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Fetch products from an external API
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()
    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Error fetching products' }, { status: 500 })
  }
}

