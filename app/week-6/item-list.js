import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = itemsData.slice().sort((a, b) =>
    sortBy === 'name' ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
  );

  return (
    <div className="mb-4">
     <button 
          onClick={() => setSortBy('name')} 
          className={`px-4 py-2 mr-6 mb-5 rounded ${sortBy === 'name' ? 'bg-gray-400' : 'bg-gray-200'}`}
        >
          Sort by Name
        </button>
        <button 
          onClick={() => setSortBy('category')} 
          className={`px-4 py-2 rounded ${sortBy === 'category' ? 'bg-gray-400' : 'bg-gray-200'}`}
        >
          Sort by Category
        </button>
      <ul>
        {sortedItems.map(({ id, name, quantity, category }) => (
          <Item key={id} name={name} quantity={quantity} category={category} />
        ))}
      </ul>
    </div>
  );
}