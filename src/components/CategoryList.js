import React from "react";
import CategoryItem from "./CategoryItem";

function CategoryList({ catalog = [] }) {
  return (
    <div className="list">
      {catalog.map((elem, index) => (
        <CategoryItem key={index} {...elem} />
      ))}
    </div>
  );
}

export default CategoryList;
