import React from 'react';
import { Product } from '../Types/types';

interface ShoppingCartProps {
  cart: { product: Product; quantity: number }[];
  onIncrease: (product: Product) => void;
  onDecrease: (product: Product) => void;
  onDelete: (product: Product) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cart, onIncrease, onDecrease, onDelete }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(({ product, quantity }) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{quantity}</td>
              <td>
                <button onClick={() => onDecrease(product)}>-</button>
                <button onClick={() => onIncrease(product)}>+</button>
                <button onClick={() => onDelete(product)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;
