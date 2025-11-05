import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <div className="placeholder-image">
          <span>{product.name.charAt(0)}</span>
        </div>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-tagline">{product.tagline}</p>
        <div className="product-footer">
          <span className="product-price">{product.price}</span>
          <Link to={`/products/${product.id}`} className="btn btn-primary">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
