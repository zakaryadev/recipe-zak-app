import React from "react";
import CardItem from "./Card";

function CardList({ catalog = [] }) {
  return (
    <div className="list">
      {catalog.map((elem) => (
        <CardItem key={elem.idCategory} {...elem} />
      ))}
    </div>
  );
}

export default CardList;
