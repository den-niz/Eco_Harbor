import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const product = await res.json()
    return NextResponse.json(product)
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json({ error: 'Error fetching product' }, { status: 500 })
  }
}

