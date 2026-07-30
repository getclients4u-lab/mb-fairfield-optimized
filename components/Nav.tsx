'use client'

export default function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" className="logo">
          <span>Mercedes-Benz</span> of Fairfield
        </a>
        <ul className="nav-links">
          <li><a href="#inventory">Inventory</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#financing">Financing</a></li>
          <li><a href="#why-us">Why Us</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
