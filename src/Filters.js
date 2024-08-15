import React, { useState } from 'react';

function Filters({ onFilter }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterChange = () => {
    onFilter({
      category: selectedCategory,
      company: selectedCompany,
      minPrice,
      maxPrice,
    });
  };

  return (
    <div className="filters">
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {/* Add options for categories */}
      </select>
      <select value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
        <option value="">All Companies</option>
        {/* Add options for companies */}
      </select>
      <input type="number" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      <input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      <button onClick={handleFilterChange}>Filter</button>
    </div>
  );
}

export default Filters;