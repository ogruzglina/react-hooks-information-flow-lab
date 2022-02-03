import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const appClass = "App " + (isDarkMode ? "dark" : "light");
  
  function handleDarkModeClick() {
    setIsDarkMode(isDarkMode => !isDarkMode);
  }

  return (
    <div className={appClass}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
