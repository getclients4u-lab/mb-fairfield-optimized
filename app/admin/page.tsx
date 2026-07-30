'use client'
import { useState, FormEvent } from 'react'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [leads, setLeads] = useState<Record<string, string>[]>([])
  const [error, setError] = useState('')

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (!res.ok) {
        setError('Invalid password')
        return
      }
      setLoggedIn(true)
      // Fetch leads
      const leadsRes = await fetch('/api/admin/leads')
      if (leadsRes.ok) {
        const data = await leadsRes.json()
        setLeads(data.leads || [])
      }
    } catch {
      setError('Connection error')
    }
  }

  if (!loggedIn) {
    return (
      <div style={{ maxWidth: '400px', margin: '4rem auto', padding: '2rem' }}>
        <h1 style={{ marginBottom: '1.5rem' }}>Admin Dashboard</h1>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                width: '100%', padding: '0.8rem', border: '2px solid #e0e0e0',
                borderRadius: '8px', fontSize: '1rem'
              }}
              required
            />
          </div>
          {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
          <button type="submit" style={{
            width: '100%', padding: '0.9rem', background: '#00a8e0', color: 'white',
            border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer'
          }}>
            Login
          </button>
        </form>
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <a href="/" style={{ color: '#00a8e0', fontSize: '0.9rem' }}>← Back to site</a>
        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '2rem auto', padding: '1rem' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>Admin Dashboard</h1>
      <h2 style={{ marginBottom: '1rem' }}>Lead Submissions</h2>
      {leads.length === 0 ? (
        <p style={{ color: '#666' }}>No leads yet.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f5f5f5', textAlign: 'left' }}>
              <th style={{ padding: '0.8rem', borderBottom: '2px solid #e0e0e0' }}>Name</th>
              <th style={{ padding: '0.8rem', borderBottom: '2px solid #e0e0e0' }}>Email</th>
              <th style={{ padding: '0.8rem', borderBottom: '2px solid #e0e0e0' }}>Phone</th>
              <th style={{ padding: '0.8rem', borderBottom: '2px solid #e0e0e0' }}>Interest</th>
              <th style={{ padding: '0.8rem', borderBottom: '2px solid #e0e0e0' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, i) => (
              <tr key={i}>
                <td style={{ padding: '0.8rem', borderBottom: '1px solid #e0e0e0' }}>{lead.name}</td>
                <td style={{ padding: '0.8rem', borderBottom: '1px solid #e0e0e0' }}>{lead.email}</td>
                <td style={{ padding: '0.8rem', borderBottom: '1px solid #e0e0e0' }}>{lead.phone}</td>
                <td style={{ padding: '0.8rem', borderBottom: '1px solid #e0e0e0' }}>{lead.interest}</td>
                <td style={{ padding: '0.8rem', borderBottom: '1px solid #e0e0e0' }}>{lead.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div style={{ marginTop: '2rem' }}>
        <a href="/" style={{ color: '#00a8e0' }}>← Back to site</a>
      </div>
    </div>
  )
}
