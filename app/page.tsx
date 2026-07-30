import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mercedes-Benz of Fairfield | New & Pre-Owned Luxury Vehicles',
  description: 'Visit Mercedes-Benz of Fairfield for new and certified pre-owned Mercedes-Benz vehicles, expert service, and financing in Fairfield, CA. Serving Solano County.',
  openGraph: {
    title: 'Mercedes-Benz of Fairfield | Luxury Vehicles in Fairfield, CA',
    description: 'Premier Mercedes-Benz dealership in Fairfield, CA offering new vehicles, certified pre-owned, expert service, and financing.',
    url: 'https://www.mercedesbenzoffairfield.com',
    siteName: 'Mercedes-Benz of Fairfield'
  }
}

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* HERO SECTION — SEO: H1, location-rich. AEO: clear answer to "what does this dealer offer?" GEO: quotable opener for AI citation */}
      <section className="hero">
        <div className="hero-content container">
          <h1>Your Premier <span>Mercedes-Benz</span> Dealership in Fairfield, CA</h1>
          <p>
            Experience the pinnacle of automotive luxury at Mercedes-Benz of Fairfield. 
            From the iconic S-Class to the agile GLC, discover new, certified pre-owned, 
            and exceptional service — all in Solano County.
          </p>
          <div className="hero-buttons">
            <a href="#inventory" className="btn btn-primary">Browse Inventory</a>
            <a href="#contact" className="btn btn-outline">Schedule Test Drive</a>
          </div>
        </div>
      </section>

      {/* INVENTORY PREVIEW */}
      <section id="inventory" className="section">
        <div className="container">
          <h2 className="section-title">Featured Vehicles</h2>
          <p className="section-subtitle">
            From sleek sedans to powerful SUVs, find your perfect Mercedes-Benz at our Fairfield dealership.
          </p>
          <div className="inventory-grid">
            {[
              { name: '2025 Mercedes-Benz S-Class', price: '$114,500', miles: 'New', specs: '4.0L V8 · 496 hp' },
              { name: '2025 Mercedes-Benz GLE 350', price: '$62,800', miles: 'New', specs: '2.0L I4 · 255 hp' },
              { name: '2024 Mercedes-Benz C-Class', price: '$48,450', miles: '8,200 mi', specs: '2.0L I4 · 255 hp' },
            ].map((v, i) => (
              <div className="inventory-card" key={i}>
                <div className="inventory-image">🏎️</div>
                <div className="inventory-info">
                  <h3>{v.name}</h3>
                  <div className="price">{v.price}</div>
                  <div className="details">
                    <span>{v.miles}</span>
                    <span>{v.specs}</span>
                  </div>
                  <a href="#contact" className="btn btn-primary">Inquire Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE SECTION */}
      <section id="service" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Mercedes-Benz Service &amp; Parts</h2>
          <p className="section-subtitle">
            Factory-trained technicians, genuine OEM parts, and state-of-the-art equipment — 
            your Mercedes-Benz deserves nothing less. We proudly serve Fairfield, Vacaville, Vallejo, and the greater Bay Area.
          </p>
          <div className="card-grid">
            {[
              { icon: '🔧', title: 'Factory-Trained Technicians', desc: 'Our ASE-certified technicians are trained specifically on Mercedes-Benz vehicles, using the latest diagnostic equipment.' },
              { icon: '🛡️', title: 'Genuine OEM Parts', desc: 'We use only genuine Mercedes-Benz parts — engineered for your vehicle. Backed by a manufacturer warranty.' },
              { icon: '⏱️', title: 'Express Service', desc: 'Schedule your appointment online. Most routine maintenance completed in under 90 minutes.' },
              { icon: '✅', title: 'Multi-Point Inspection', desc: 'Every service visit includes a complimentary 32-point inspection to catch issues before they become problems.' },
            ].map((s, i) => (
              <div className="card" key={i}>
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="#contact" className="btn btn-primary">Schedule Service</a>
          </div>
        </div>
      </section>

      {/* FINANCING SECTION */}
      <section id="financing" className="section">
        <div className="container">
          <h2 className="section-title">Financing Made Simple</h2>
          <p className="section-subtitle">
            Drive your dream Mercedes-Benz with flexible financing, leasing, and special offers. 
            Our finance team works with all credit profiles.
          </p>
          <div className="features-grid">
            {[
              { icon: '📊', title: 'Competitive Rates', desc: 'We partner with top lenders to secure the best rates for you.' },
              { icon: '📝', title: 'Online Pre-Approval', desc: 'Get pre-approved from home. Quick, secure, no obligation.' },
              { icon: '🔄', title: 'Lease & Finance', desc: 'Flexible terms from 24 to 72 months. Custom lease options available.' },
              { icon: '💰', title: 'Value Your Trade', desc: 'Get top dollar for your trade-in — any make, any model.' },
            ].map((f, i) => (
              <div className="feature" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US — GEO/AEO focus: authority signals */}
      <section id="why-us" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Choose Mercedes-Benz of Fairfield?</h2>
          <p className="section-subtitle">
            As a premier Mercedes-Benz dealer in Fairfield, CA, we are committed to exceptional customer service, 
            transparent pricing, and automotive excellence. Here is what sets us apart.
          </p>
          <div className="card-grid">
            {[
              { icon: '🏆', title: 'Solano County\'s Premier Mercedes-Benz Dealer', desc: 'We have been the trusted Mercedes-Benz dealership for Fairfield, Vacaville, Vallejo, Napa, and the Bay Area since 2005.' },
              { icon: '⭐', title: '5-Star Customer Satisfaction', desc: 'Rated 4.9/5 by our customers. We believe in transparent pricing, no-pressure sales, and lifelong relationships.' },
              { icon: '🔐', title: 'Certified Pre-Owned Excellence', desc: 'Every certified pre-owned Mercedes-Benz passes a 172-point inspection and comes with an extended warranty for peace of mind.' },
              { icon: '🌿', title: 'Sustainability & Innovation', desc: 'Explore our EQ electric vehicle lineup — combining Mercedes-Benz luxury with zero-emission driving.' },
            ].map((w, i) => (
              <div className="card" key={i}>
                <div className="card-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION — AEO/GEO key: structured Q&A for AI answers */}
      <section id="faq" className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Quick answers to common questions about Mercedes-Benz of Fairfield — 
            the premier Mercedes-Benz dealer serving Fairfield, CA and Solano County.
          </p>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { q: 'What type of service does Mercedes-Benz of Fairfield offer?', a: 'Mercedes-Benz of Fairfield offers comprehensive services including new and certified pre-owned vehicle sales, factory-trained maintenance and repair, genuine Mercedes-Benz parts, and customized financing options for customers throughout Fairfield, Vacaville, Vallejo, and the greater Solano County area.' },
              { q: 'Do you service Mercedes-Benz vehicles from other dealerships?', a: 'Yes. Our factory-trained technicians service any Mercedes-Benz vehicle regardless of where it was purchased. We use genuine OEM parts and follow Mercedes-Benz manufacturer specifications for all maintenance and repairs.' },
              { q: 'What financing options are available at your Fairfield dealership?', a: 'We offer flexible financing through Mercedes-Benz Financial Services, competitive bank and credit union loans, lease options, and special manufacturer incentives. Our finance team works with all credit profiles to find the best solution.' },
              { q: 'How do I schedule a test drive in Fairfield?', a: 'You can schedule a test drive online through our website, call us directly, or simply visit our showroom at 123 Auto Mall Drive in Fairfield, CA. We recommend scheduling in advance to ensure your preferred model is available.' },
              { q: 'Where is Mercedes-Benz of Fairfield located?', a: 'We are located at 123 Auto Mall Drive, Fairfield, CA 94533, just off Highway 12 in the Auto Mall district. We are easily accessible from I-80, serving Fairfield, Vacaville, Vallejo, Napa, and the greater Bay Area.' },
              { q: 'What Mercedes-Benz models do you carry?', a: 'We carry the full Mercedes-Benz lineup including the A-Class, C-Class, E-Class, S-Class sedans, GLA, GLB, GLC, GLE, GLS SUVs, the EQ electric lineup, AMG performance models, and the Metris and Sprinter vans.' },
            ].map((faq, i) => (
              <div className="faq-item" key={i}>
                <div className="faq-question">
                  {faq.q}
                  <span style={{ fontSize: '1.2rem' }}>+</span>
                </div>
                <div className="faq-answer">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Ready to find your perfect Mercedes-Benz? Visit our showroom in Fairfield, CA, 
            call us, or send a message below. We look forward to serving you.
          </p>
          <ContactForm />
          <div style={{ textAlign: 'center', marginTop: '2rem', color: '#666' }}>
            <p><strong>Mercedes-Benz of Fairfield</strong></p>
            <p>123 Auto Mall Drive, Fairfield, CA 94533</p>
            <p>Phone: (707) 555-0100 | Email: info@mercedesbenzoffairfield.com</p>
          </div>
        </div>
      </section>

      {/* ADMIN LOGIN LINK */}
      <div style={{ textAlign: 'center', padding: '1rem' }}>
        <a href="/admin" style={{ color: '#999', fontSize: '0.8rem', textDecoration: 'none' }}>Admin Dashboard</a>
      </div>

      <Footer />
    </>
  )
}
