import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import './Style/App.css';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
      <div>
      <h1>Test App</h1>  {/* Verifică dacă acest mesaj este vizibil */}
      <HomePage />
    </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;

