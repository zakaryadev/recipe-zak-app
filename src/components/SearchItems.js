import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function SearchItems({ item }) {
  return (
    <Card>
      <Card.Img
        className="img-fluid"
        src={item.strMealThumb}
        alt={item.strMeal}
      />
      <Card.Body>
        <Card.Title className="h1">{item.strMeal}</Card.Title>
        <h6>
          <b>Category:</b> {item.strCategory.substring(0, 10)}
        </h6>
        {item.strArea ? (
          <h6>
            <b>Area:</b> {item.strArea.substring(0, 10)}
          </h6>
        ) : null}
        <p>{item.strInstructions.substring(0, 15)}</p>
        <Link to={`../recipe/${item.idMeal}`} className="btn btn-warning mb-3">
          Show {item.idMeal}
        </Link>
      </Card.Body>
    </Card>
  );
}

export default SearchItems;
