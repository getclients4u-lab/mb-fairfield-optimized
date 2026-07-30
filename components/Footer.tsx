export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Mercedes-Benz of Fairfield</h4>
            <ul>
              <li>123 Auto Mall Drive</li>
              <li>Fairfield, CA 94533</li>
              <li>Phone: (707) 555-0100</li>
              <li>Email: info@mercedesbenzoffairfield.com</li>
            </ul>
          </div>
          <div>
            <h4>Inventory</h4>
            <ul>
              <li><a href="#inventory">New Vehicles</a></li>
              <li><a href="#inventory">Certified Pre-Owned</a></li>
              <li><a href="#inventory">Special Offers</a></li>
              <li><a href="#inventory">Value Your Trade</a></li>
            </ul>
          </div>
          <div>
            <h4>Service & Parts</h4>
            <ul>
              <li><a href="#service">Schedule Service</a></li>
              <li><a href="#service">Service Offers</a></li>
              <li><a href="#service">Genuine Parts</a></li>
              <li><a href="#service">Service Tips</a></li>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              <li>Mon-Thu: 9:00 AM - 8:00 PM</li>
              <li>Friday: 9:00 AM - 7:00 PM</li>
              <li>Saturday: 10:00 AM - 6:00 PM</li>
              <li>Sunday: 11:00 AM - 5:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mercedes-Benz of Fairfield. All rights reserved.</p>
          <p style={{marginTop: '0.5rem'}}>Disclaimer: All pricing and vehicle information is subject to change without notice. See dealer for details.</p>
        </div>
      </div>
    </footer>
  )
}
