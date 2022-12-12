import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardItem(props) {
  const {
    strCategory = "New Title",
    strCategoryThumb = "",
    strCategoryDescription = "Lorem ipsum dolor!",
  } = props;

  return (
    <Card className="shadow">
      <Card.Img
        variant="bottom img-fluid rounded-1"
        alt={strCategory}
        src={strCategoryThumb}
      />
      <Card.Body className="card-bdy">
        <Card.Title>{strCategory}</Card.Title>
        <Card.Text>{strCategoryDescription.substring(0, 40)}...</Card.Text>
        <Link
          to={`/category/${strCategory}`}
          className="btn btn-warning w-100 fw-bold"
        >
          Watch {strCategory}
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
