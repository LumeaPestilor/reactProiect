import React from 'react';

interface FilterSortBarProps {
  onFilter: (category: string) => void;
  onSort: (order: 'asc' | 'desc') => void;
}

const FilterSortBar: React.FC<FilterSortBarProps> = ({ onFilter, onSort }) => {
  return (
    <div>
      <select onChange={e => onFilter(e.target.value)}>
        <option value="">All</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
      <button onClick={() => onSort('asc')}>Sort Ascending</button>
      <button onClick={() => onSort('desc')}>Sort Descending</button>
    </div>
  );
};

export default FilterSortBar;
