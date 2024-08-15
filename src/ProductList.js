import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Filters from './Filters';
import ProductService from './ProductService'; // Import your ProductService

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const { company, category, minPrice, maxPrice } = filters;
      const productsData = await ProductService.getProductData(company, category, 10, minPrice, maxPrice); // Adjust topN as needed
      setProducts(productsData);
    };

    fetchProducts();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <Filters onFilter={handleFilterChange} />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;