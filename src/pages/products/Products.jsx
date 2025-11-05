import { useState } from 'react'
import ProductCard from '../../components/products/ProductCard'
import { products, categories } from '../../data/products'
import './Products.css'

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="products-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>Comprehensive software solutions for your business needs</p>
        </div>
      </section>

      <section className="products-content">
        <div className="container">
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Products
