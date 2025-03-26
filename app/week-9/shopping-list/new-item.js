"use client";
import { useState } from "react";

export default function NewItem({onAddItem}) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const increment = () => setQuantity((prev) => Math.min(prev + 1, 20));
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const item = { name, quantity, category };

    console.log(item);
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };
  return (
    <div className="p-2 bg-indigo-500 rounded-xl shadow-lg text-center text-white">
        <p className="text-2xl font-semibold mb-4">Add New Item: </p>
        
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold mb-2">
        
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg"
          />
        </div>
        <p className="text-xl font-semibold mb-4">Quantity: {quantity}</p>
        <div className="flex justify-center gap-6">
            <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg disabled:opacity-50"
            >
            -
            </button>
            <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg disabled:opacity-50"
            >
            +
            </button>
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-xl font-semibold mb-2">
            Category:
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozenFoods">Frozen Foods</option>
            <option value="cannedGoods">Canned Goods</option>
            <option value="dryGoods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>

  );
}
