"use client";
function Item({ name, quantity, category }) { 
    return ( 
      
    <li className="p-5 border rounded-lg bg-black flex flex-col w-3/4">
      <span className="font-semibold text-white">{name}</span>
      <span className="text-white">Quantity: {quantity}</span>
      <span className="text-white font-medium">Category: {category}</span>
    </li>
  );
}

export default Item;

