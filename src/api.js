import { API_URL } from "./config";
const requestOptions = {
  method: "GET",
  redirect: "follow",
};

const getMealById = async (mealId) => {
  const response = await fetch(
    API_URL + "lookup.php?i=" + mealId,
    requestOptions
  );
  return await response.json();
};

const getAllCategories = async () => {
  const response = await fetch(API_URL + "categories.php", requestOptions);
  return await response.json();
};

const filterByCategory = async (categoryName) => {
  const response = await fetch(
    API_URL + "filter.php?c=" + categoryName,
    requestOptions
  );
  return await response.json();
};

const getByAlphabet = async (letter) => {
  const response = await fetch(
    API_URL + "search.php?f=" + letter,
    requestOptions
  );
  return await response.json();
};

export { getMealById, getAllCategories, filterByCategory, getByAlphabet };
