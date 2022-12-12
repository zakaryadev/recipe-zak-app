import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import CardList from "../components/CardList";
import { getAllCategories } from "../api";

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  useEffect(() => {
    getAllCategories("Beef").then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  return (
    <div className="container-sm text-black">
      {catalog.length ? <CardList catalog={catalog} /> : <Loader />}
    </div>
  );
}
