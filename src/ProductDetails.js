import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { productId } = useParams();

  // You would typically fetch product details based on productId here

  return (
    <div>
      {/* Display product details */}
    </div>
  );
}

export default ProductDetails;