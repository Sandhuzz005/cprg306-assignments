"use client";
import ItemList from './item-list';

export default function page(){
    return (
        <main> 
            <h1 className="text-4xl font-semibold " color='white'  >Shopping List</h1>
         <ItemList />
        </main>
    )
}
