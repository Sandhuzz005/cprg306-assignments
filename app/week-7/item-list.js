import { useState } from 'react';
import Item from './item';


export default function ItemList({items}) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) =>
    sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
  );


  return (
    <div className="mb-4">
     <button 
          onClick={() => setSortBy('name')} 
          className={`px-4 py-2 text-black mr-6 mb-5 rounded ${sortBy === 'name' ? 'bg-gray-400' : 'bg-gray-200'}`}
        >
          Sort by Name
        </button>
        <button 
          onClick={() => setSortBy('category')} 
          className={`px-4 py-2 text-black rounded ${sortBy === 'category' ? 'bg-gray-400' : 'bg-gray-200'}`}
        >
          Sort by Category
        </button>
      <ul>
      {sortedItems.map(({ id, name, quantity, category }) => (
          <li key={id}>
            {name} - {quantity} ({category})
          </li>
        ))}
      </ul>
    </div>
  );
}