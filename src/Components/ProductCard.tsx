import React from 'react';
import { Product } from '../Types/types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>${product.price}</td>
      <td>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </td>
    </tr>
  );
};

export default ProductCard;
