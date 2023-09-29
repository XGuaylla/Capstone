import React from 'react';
import Select from 'react-select';
import { useState } from 'react';
import { fetchProducts } from './API';

const productData = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];

const sortOptions = [
  { value: 'ascending', label: 'Price: Low to High' },
  { value: 'descending', label: 'Price: High to Low' }
];

export default function ClothingPage() {
  const [sortedData, setSortedData] = useState([...productData]);

  const handleSortChange = option => {
    switch (option.value) {
      case 'ascending':
        setSortedData([...productData].sort((a, b) => a.price - b.price));
        break;
      case 'descending':
        setSortedData([...productData].sort((a, b) => b.price - a.price));
        break;
      default:
        break;
    }
  };

  return (
    <div className="products-page">
      <Select options={sortOptions} onChange={handleSortChange} />
      <div className="products-grid">
        {sortedData.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
