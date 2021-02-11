import React from "react";

// List of items that user can choose from to filter food options
const menuItems = [
  {
    listText: "All",
  },
  {
    listText: "Fruit",
  },
  {
    listText: "Vegetable",
  },
  {
    listText: "Meat",
  },
  {
    listText: "Dairy",
  },
];

const CategoriesCard = ({ onClick }) => {
  return (
    <div className="panel">
      <p className="panel-heading">Categories</p>
      {menuItems.map((item, key) => (
        <button
          className="panel-block"
          key={key}
          value={item.listText}
          name={item.listText}
          onClick={onClick}
        >
          {/* <span className="panel-icon">insert icon here</span> */}
          {item.listText}
        </button>
      ))}
    </div>
  );
};

export default CategoriesCard;
