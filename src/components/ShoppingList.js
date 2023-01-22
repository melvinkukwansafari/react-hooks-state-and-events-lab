import React from "react";
import Item from "./Item";
import { useState } from "react";
function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleFilterChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  let filteredItems = items;
  if (selectedCategory !== "All") {
    filteredItems = items.filter((item) => item.category === selectedCategory);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
