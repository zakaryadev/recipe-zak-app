import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoryItem(props) {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <Card className="shadow">
      <Card.Img
        variant="bottom img-fluid rounded-1"
        alt={strMeal}
        src={strMealThumb}
      />
      <Card.Body className="crd-bdy">
        <Card.Title>{strMeal.slice(0, 15)}...</Card.Title>
        <Link
          className="btn btn-warning w-100 fw-bold"
          to={`/recipe/${idMeal}`}
        >
          To {idMeal}
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CategoryItem;
