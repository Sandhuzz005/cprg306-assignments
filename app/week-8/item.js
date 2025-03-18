"use client";
function Item({ name, quantity, category, onSelect }) { 
    return ( 
      
    <li  onClick={() => onSelect(name)} className="p-5 border rounded-lg bg-black flex flex-col w-[450px]">
      <span className="font-semibold text-white">{name}</span>
      <span className="text-white">Quantity: {quantity}</span>
      <span className="text-white font-medium">Category: {category}</span>
    </li>
  );
}

export default Item;

