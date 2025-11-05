import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SoftwarePro</h3>
            <p>Providing cutting-edge software solutions for businesses worldwide.</p>
          </div>
          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><Link to="/products">CRM System</Link></li>
              <li><Link to="/products">HR Management</Link></li>
              <li><Link to="/products">POS System</Link></li>
              <li><Link to="/products">Inventory Management</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>Email: info@softwarepro.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Business St, Tech City</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 SoftwarePro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
