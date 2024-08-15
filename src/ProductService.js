import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test';

const getProductData = async (company, category, topN, minPrice, maxPrice) => {
  const response = await axios.get(`${BASE_URL}/companies/${company}/categories/${category}/products/top-n`, {
    params: {
      top: topN,
      minPrice,
      maxPrice,
    },
  });
  const products = response.data.map((product) => ({
    ...product,
    id: Math.random().toString(36).substring(2, 15), // Generate unique product ID
  }));
  return products;
};

export default { getProductData };