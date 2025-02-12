"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(() => 1);

  const increment = () => setQuantity((prev) => Math.min(prev + 1, 20));
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  return (
    <div className="p-6 bg-indigo-500 rounded-xl shadow-lg text-center text-white">
  <p className="text-2xl font-semibold mb-4">Quantity: {quantity}</p>
  <div className="flex justify-center gap-6">
    <button
      onClick={decrement}
      disabled={quantity === 1}
      className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg disabled:opacity-50"
    >
      -
    </button>
    <button
      onClick={increment}
      disabled={quantity === 20}
      className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg disabled:opacity-50"
    >
      +
    </button>
  </div>
</div>

  );
}
