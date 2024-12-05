import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../Components/ProductList';
import FilterSortBar from '../Components/FilterSortBar';
import { Product } from '../Types/types';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        console.log('Data fetched:', response.data);
        console.log(response.data);
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleFilter = (category: string) => {
    setFilteredProducts(category ? products.filter(p => p.category === category) : products);
  };

  const handleSort = (order: 'asc' | 'desc') => {
    setFilteredProducts([...filteredProducts].sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price));
  };

  const handleAddToCart = (product: Product) => {
    console.log('Added to cart:', product);
  };

  return (
    <div>
      <FilterSortBar onFilter={handleFilter} onSort={handleSort} />
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default HomePage;


  