import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../Types/types';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
    console.log('Products in ProductList:', products);  // Verifică dacă produsele sunt transmise corect
  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
