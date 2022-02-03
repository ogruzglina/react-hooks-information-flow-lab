import React from "react";

function Filter({ onCategoryChange }) {
  const options = [
    { 
      value: 'All', 
      textContent: "Filter by category", 
    },
    {
      value: "Produce",
      textContent: 'Produce'
    },
    { 
      value: "Dairy",
      textContent: 'Dairy',
    },
    {
      value: "Dessert", 
      textContent: 'Dessert',
    }
  ];

  const optionsContent = options.map( ({ value, textContent }) =>
    <option key = { value } value = { value }>{ textContent }</option>
  );

  return (
    <div className="Filter">
      <select name="filter" onChange={onCategoryChange}>
        {optionsContent}
      </select>
    </div>
  );
}

export default Filter;