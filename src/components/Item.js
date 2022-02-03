import React, { useState } from "react";

function Item({ id, name, category, itemsIsInCart, onAddOrRemoveBtn }) {
  const [ isInCart, setIsInCart ] = useState(false);
  
  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }

  const liClassName = isInCart ? "in-cart" : "";
  const btnClassName = isInCart ? "remove" : "add";
  const btnTextContent = isInCart ? "Remove From" : "Add to";

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        id = {id}
        className={btnClassName}
        onClick={handleAddToCartClick}
      >
        {btnTextContent} Cart
      </button>
    </li>
  );
}

export default Item;
