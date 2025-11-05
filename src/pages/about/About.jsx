import './About.css'

function About() {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Empowering businesses with innovative software solutions</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              At SoftwarePro, we are dedicated to providing cutting-edge software solutions
              that help businesses streamline their operations, increase productivity, and
              achieve sustainable growth. Our mission is to empower organizations of all sizes
              with the tools they need to succeed in today's digital landscape.
            </p>
          </div>

          <div className="about-section">
            <h2>What We Offer</h2>
            <div className="offerings-grid">
              <div className="offering-card">
                <h3>Enterprise Software</h3>
                <p>
                  Comprehensive solutions including CRM, HR management, and accounting software
                  designed for businesses of all sizes.
                </p>
              </div>
              <div className="offering-card">
                <h3>Point of Sale Systems</h3>
                <p>
                  Modern POS solutions for retail and hospitality businesses with real-time
                  inventory management and analytics.
                </p>
              </div>
              <div className="offering-card">
                <h3>Cloud-Based Solutions</h3>
                <p>
                  Secure, scalable cloud infrastructure ensuring your data is accessible
                  anywhere, anytime.
                </p>
              </div>
              <div className="offering-card">
                <h3>24/7 Support</h3>
                <p>
                  Round-the-clock customer support and training to ensure you get the most
                  out of our products.
                </p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Why Choose Us</h2>
            <div className="values-list">
              <div className="value-item">
                <h3>Experience</h3>
                <p>Over 10 years of experience in developing business software solutions</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>Constantly evolving our products with the latest technologies</p>
              </div>
              <div className="value-item">
                <h3>Reliability</h3>
                <p>99.9% uptime guarantee with enterprise-grade security</p>
              </div>
              <div className="value-item">
                <h3>Customer Focus</h3>
                <p>Dedicated to your success with personalized support and training</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
