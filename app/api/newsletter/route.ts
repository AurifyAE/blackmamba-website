import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, email, ...formData } = body

    // Validate based on type
    if (type === 'newsletter' && !email) {
      return NextResponse.json(
        { status: 'error', message: 'Email is required' },
        { status: 400 }
      )
    }

    // Proxy request to Google Apps Script
    const res = await fetch('https://script.google.com/macros/s/AKfycbwtKM5ae-SuT8BMsiRu6cAo6MTOIa15-hM71bcPwqeA4ih9x9plVv75JpR7edsuNi_z/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    const data = await res.json()

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { status: 'error', message: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}

