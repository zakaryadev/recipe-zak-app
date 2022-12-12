import { useState, useEffect } from "react";
import { getMealById } from "../api";
import { useParams } from "react-router-dom";
import { Card, Table } from "react-bootstrap";
import Loader from "../components/Loader";
import BreadCrum from "../components/BreadCrum";

export default function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const handleRecipeShow = () => {
    setShowRecipe(!showRecipe);
  };
  useEffect(() => {
    getMealById(id).then((data) => {
      setRecipe(data.meals[0]);
    });
  }, [id]);
  return (
    <>
      <BreadCrum />
      {recipe.idMeal > 0 ? (
        <Card style={{ margin: "0 auto", width: "40rem" }}>
          <Card.Img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <Card.Body>
            <Card.Title className="h1">{recipe.strMeal}</Card.Title>
            <h6>
              <b>Category:</b> {recipe.strCategory}
            </h6>
            {recipe.strArea ? (
              <h6>
                <b>Area:</b> {recipe.strArea}
              </h6>
            ) : null}
            <p>{recipe.strInstructions}</p>
            <button onClick={handleRecipeShow} className="btn btn-warning mb-3">
              Show Recipe
            </button>
            {showRecipe ? (
              <Table className="centred" variant="warning dark" bordered hover>
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Measure</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(recipe).map((key) => {
                    if (key.includes("Ingredient") && recipe[key]) {
                      return (
                        <tr key={key}>
                          <td>{recipe[key]}</td>
                          <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </Table>
            ) : null}
          </Card.Body>
        </Card>
      ) : (
        <Loader />
      )}
    </>
  );
}
