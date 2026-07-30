import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret'

export async function GET(req: NextRequest) {
  // Verify admin token
  const token = req.cookies.get('admin_token')?.value
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    jwt.verify(token, JWT_SECRET)
  } catch {
    return NextResponse.json({ error: 'Token expired' }, { status: 401 })
  }

  // In production: fetch leads from GitHub CSV
  // For now return empty
  return NextResponse.json({ leads: [] })
}
