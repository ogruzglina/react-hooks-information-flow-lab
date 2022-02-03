import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  

  function onCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const showItem = itemsToDisplay.map((item) => (
    <Item key={item.id} {...item} />
  ));

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={onCategoryChange} />
      <ul className="Items">
        {showItem}
      </ul>
    </div>
  );
}

export default ShoppingList;