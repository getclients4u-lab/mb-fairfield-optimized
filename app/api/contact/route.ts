import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, interest, message } = body

    // Validate
    if (!name || !email || !interest) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // In production: append to GitHub CSV
    // const owner = process.env.GITHUB_OWNER
    // const repo = process.env.GITHUB_REPO
    // const token = process.env.GITHUB_TOKEN
    // Follow the pattern in skills/aeo-seo-geo-optimizer/api/contact.ts

    console.log('Lead captured:', { name, email, phone, interest, message, date: new Date().toISOString() })

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will be in touch shortly.'
    })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
