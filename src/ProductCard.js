import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={`https://picsum.photos/200?random=${product.id}`} alt={product.name} className="product-image" />
      </Link>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-company">Company: {product.company}</p>
        <p className="product-category">Category: {product.category}</p>
        <p className="product-price">
          Price: ${product.price} ({product.discount > 0 ? `${product.discount}% off` : 'No discount'})
        </p>
        <p className="product-rating">Rating: {product.rating} stars</p>
        <p className="product-availability">Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
      </div>
    </div>
  );
}

export default ProductCard;