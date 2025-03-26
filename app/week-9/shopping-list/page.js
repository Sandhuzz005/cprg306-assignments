"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function page(){
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
   
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };
  const handleItemSelect = (itemName) => {
    const name_clean = itemName
      .split(",")[0] .replace(/[^a-zA-Z ]/g, "").trim();
    setSelectedItemName(name_clean);
  };

    return (
        <main> 
            <h1 className="text-4xl pb-5 pt-5 font-semibold " color='white'  >Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect}/>
            <MealIdeas ingredient={selectedItemName} />
        </main>
    )
}
