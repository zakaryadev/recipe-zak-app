import { useState, useEffect } from "react";
import CategoryList from "../components/CategoryList";
import { filterByCategory } from "../api";
import { useParams } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";

export default function Category() {
  const { id } = useParams();
  const [categoryItems, setCategoryItems] = useState([]);
  useEffect(() => {
    filterByCategory(id).then((data) => {
      setCategoryItems(data.meals);
    });
  }, []);

  return (
    <>
      <BreadCrum />
      <div className="text-black h1">
        {categoryItems.length > 0 && <CategoryList catalog={categoryItems} />}
      </div>
    </>
  );
}
