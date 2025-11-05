import { useParams, Link } from 'react-router-dom'
import { products } from '../../data/products'
import './ProductDetail.css'

function ProductDetail() {
  const { productId } = useParams()
  const product = products.find(p => p.id === productId)

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Back to Products
        </Link>
      </div>
    )
  }

  return (
    <div className="product-detail">
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-content">
            <div className="product-hero-image">
              <div className="placeholder-image-large">
                <span>{product.name.charAt(0)}</span>
              </div>
            </div>
            <div className="product-hero-info">
              <span className="product-category">{product.category}</span>
              <h1>{product.name}</h1>
              <p className="product-description">{product.description}</p>
              <div className="product-pricing">
                <h3>Starting at</h3>
                <p className="price-large">{product.price}</p>
              </div>
              <div className="product-actions">
                <Link to="/contact" className="btn btn-primary">
                  Request Demo
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-list">
            {product.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-icon">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <h2>Pricing Plans</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <p className="pricing-price">{product.pricing.starter}</p>
              <p className="pricing-desc">Perfect for small teams</p>
              <Link to="/contact" className="btn btn-secondary">Get Started</Link>
            </div>
            <div className="pricing-card featured">
              <span className="popular-badge">Most Popular</span>
              <h3>Professional</h3>
              <p className="pricing-price">{product.pricing.professional}</p>
              <p className="pricing-desc">For growing businesses</p>
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <p className="pricing-price">{product.pricing.enterprise}</p>
              <p className="pricing-desc">Custom solutions for large organizations</p>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to transform your business?</h2>
            <p>Get started with {product.name} today</p>
            <Link to="/contact" className="btn btn-primary">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
