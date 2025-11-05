import { Link } from 'react-router-dom'
import ProductCard from '../../components/products/ProductCard'
import { products } from '../../data/products'
import './Home.css'

function Home() {
  const featuredProducts = products.slice(0, 3)

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Transform Your Business with Our Software Solutions</h1>
            <p>
              Discover powerful software products designed to streamline your operations,
              boost productivity, and drive growth. From CRM to HR management, POS systems
              to inventory management - we have the tools your business needs.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary">
                Explore Products
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Our Solutions?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Easy to Use</h3>
              <p>Intuitive interfaces designed for users of all technical levels</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Reliable</h3>
              <p>Enterprise-grade security to protect your business data</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Scalable</h3>
              <p>Grow your business without worrying about outgrowing your software</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support to help you succeed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <p className="section-subtitle">
            Explore our most popular software solutions
          </p>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="view-all">
            <Link to="/products" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>
              Join thousands of businesses that trust our software solutions
            </p>
            <Link to="/contact" className="btn btn-primary">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
